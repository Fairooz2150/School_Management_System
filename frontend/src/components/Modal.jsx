import { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ message, onConfirm, onCancel }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded shadow-md">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-white bg-gray-500 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-500 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

Modal.confirm = ({ message, onConfirm }) => {
  const modalRoot = document.createElement("div");
  document.body.appendChild(modalRoot);

  const handleClose = () => {
    document.body.removeChild(modalRoot);
  };

  const modal = (
    <Modal
      message={message}
      onConfirm={() => {
        onConfirm();
        handleClose();
      }}
      onCancel={handleClose}
    />
  );

  createPortal(modal, modalRoot);
};

export default Modal;
