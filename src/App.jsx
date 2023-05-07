import React, {useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [modal, setModal] = useState([false, undefined])

  return (
    <>
      <button onClick={() => setModal([true, "error"])}>Show Error Modal</button>
      <button onClick={() => setModal([true, "success"])}>Show Success Modal</button>
      {
        modal[0] && ReactDOM.createPortal(
          <Modal type={modal[1]} setModal={() => setModal} />,
          document.getElementById('modal')
        )
      }
    </>
  )
}

export default App


function Modal({ type, setModal }) {
  let errorMessage = `This is an error modal. 
  Error modals are typically used to inform the user that something has gone wrong.`

  let successMessage = `This is an success modal. 
  Success modals are used to inform the user that a particular operation has successfully completed.`

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal-title'>{type === "error" ? "⚠️" : "✅"}{type.toUpperCase()}</div>
        <div className='modal-content'>
          {type==="error" && errorMessage}
          {type==="success" && successMessage}
        </div>
        <button onClick={setModal(false)}>Close</button>
      </div>
    </div>

  )
}