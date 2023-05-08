import React from "react";
import { Modal } from "antd";
import Edit from "../edit/edit";

const ModalWrapper = ({show, close, title}) => {
  return (
    <Modal
      title={title}
      onCancel={close}
      open={show}
    >
        <Edit/>
    </Modal>
  );
};

export default ModalWrapper;
