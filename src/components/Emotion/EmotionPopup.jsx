import React, { useState } from "react";
import Modal from "react-modal";
import "./popup.css";
import { Button } from 'antd';

Modal.setAppElement("#root");

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Welcome Popup"
      className="popup"
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: 'none',
        },
        content: {
          width: "500px",
          height: "440px",
          margin: "auto",
        },
      }}
    >
      <h2 className="popup-heading">Bạn cảm thấy thế nào hôm nay</h2>
      <div className="emotion-buttons">
        <button className="happy-button" onClick={closeModal}>
          <span className="emotion-icon">😊</span>
          <span className="button-text">Vui</span>
        </button>
        <button className="sad-button" onClick={closeModal}>
          <span className="emotion-icon">😢</span>
          <span className="button-text">Buồn</span>
        </button>
        <button className="normal-button" onClick={closeModal}>
          <span className="emotion-icon">😐</span>
          <span className="button-text">Bình thường</span>
        </button>
        <button className="lost-button" onClick={closeModal}>
          <span className="emotion-icon">😵</span>
          <span className="button-text">Mất phương hướng</span>
        </button>
      </div>
      <Button type="primary" onClick={closeModal}  shape="round" block className="close-button">
        Close
      </Button>
    </Modal>
  );
}

export default WelcomePopup;
