import { Button, Modal } from "antd";
import React, { useState } from "react";

type modalProps = {
  children?: React.ReactElement;
  title: string;
};

const ModalWindow: React.FC<modalProps> = ({ title, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {title}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={true}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalWindow;
