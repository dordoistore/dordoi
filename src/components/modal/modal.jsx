import React from "react";
import { Modal } from "antd";
import Edit from "../edit/edit";

const ModalWrapper = ({show, close, title, selectedProduct, updateProduct}) => {
  return (
    <Modal
      title={title}
      onCancel={close}
      open={show}
      footer={[]}
    >
        <Edit selectedProduct={selectedProduct} closeModal={close} updateProduct={updateProduct}/>
    </Modal>
  );
};

export default ModalWrapper;
