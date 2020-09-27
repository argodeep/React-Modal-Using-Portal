import React, { useState} from "react";
import Modal from './modal';
import "./styles.css";

export default function App() {
  const [isModalOpen, setModal] = useState(false);

  return (
    <div className="App">
      <h1>React Modal</h1>
      <button onClick={() => setModal(!isModalOpen)}>
        {isModalOpen ? "Close" : "View"}
      </button>
      {isModalOpen && (
        <Modal>
          <div className="modal-container">
            <div className="modal-view">
              <div className="modal-header">Header</div>
              <div className="modal-body">
                <h2>Body</h2>
              </div>
              <div className="modal-footer">
                 <button onClick={()=> setModal(!isModalOpen)}>Close</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
