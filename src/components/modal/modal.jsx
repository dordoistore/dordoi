import React from "react";
import { Modal } from "antd";
import AddProduct from "../add-product/add-product";

const ModalWrapper = ({show, close}) => {
  return (
    <Modal
      title="Добавить товар"
      onCancel={close}
      open={show}
    >
        <AddProduct/>
    </Modal>
  );
};

export default ModalWrapper;
