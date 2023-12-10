import React from 'react';
import { Modal } from 'antd';

function ModalWindow(props) {
  return(
    <Modal
      title="Family Details"
      open={props.isModalVisible}
      onCancel={props.handleModalClose}
      footer={null}
    >
      {props.selectedNameDetails && (
        <>
          <div>
            <p>Name: {props.selectedNameDetails.family.name}</p>
            <p>Gender: {props.selectedNameDetails.family.gender}</p>
            <p>Age: {props.selectedNameDetails.family.age}</p>
            <p>Address: {props.selectedNameDetails.family.address}</p>
          </div>
          <div className='App__pageButtonsContainer'>
          <div className='App__pageButtonsContainer_button' id="button" onClick={(event)=>props.deleteList(event, props.selectedNameDetails.id)}>
            <div id="App__pageButtonsContainer_buttonCircle"></div>
            <a>Delete user</a>
          </div>
          </div>
        </>
      )}
    </Modal>
  )
}

export default ModalWindow;