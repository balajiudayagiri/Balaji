import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const CustomToaster = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide the toaster after 3 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div
      className={`custom-toaster ${type} p-3 rounded-md shadow-md fixed top-10 left-1/2 transform -translate-x-1/2 z-50`}>
      <p className="text-white">{message}</p>
    </div>
  ) : null;
};

CustomToaster.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const ToastContainer = ({ toasts }) => (
  <div className="fixed top-0 left-0 right-0 flex flex-col items-center p-4 pointer-events-none">
    {toasts.map((toast) => (
      <CustomToaster key={toast.id} message={toast.message} type={toast.type} />
    ))}
  </div>
);

ToastContainer.propTypes = {
  toasts: PropTypes.array.isRequired,
};

const useToaster = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type) => {
    const newToast = { id: Date.now(), message, type };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Automatically remove the toast after a certain duration (3 seconds in this example)
    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== newToast.id)
      );
    }, 3000);
  };

  const toast = {
    success: (message) => showToast(message, "success"),
    error: (message) => showToast(message, "error"),
    info: (message) => showToast(message, "info"),
    warning: (message) => showToast(message, "warning"),
  };

  useEffect(() => {
    const rootToastContainer = document.createElement("div");
    rootToastContainer.id = "root-toast-container";
    document.body.appendChild(rootToastContainer);

    return () => {
      document.body.removeChild(rootToastContainer);
    };
  }, []);

  return {
    ...toast,
    ToastContainer: () =>
      ReactDOM.createPortal(
        <ToastContainer toasts={toasts} />,
        document.getElementById("root-toast-container")
      ),
  };
};

export default useToaster;
