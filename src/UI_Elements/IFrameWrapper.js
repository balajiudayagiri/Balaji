import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

const IFrameWrapper = ({ children, className }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (
      !iframeRef.current ||
      !iframeRef.current.contentDocument ||
      !iframeRef.current.contentWindow
    ) {
      return;
    }

    const document = iframeRef.current.contentDocument;
    const window = iframeRef.current.contentWindow;

    // Assign React and ReactDOM to window
    window.React = React;
    window.ReactDOM = ReactDOM;

    // Render the component inside the iframe
    document.body.innerHTML = "";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.margin = "0px";

    const root = document.createElement("div");
    root.style.margin = "0px auto";
    document.body.appendChild(root);

    const rootInstance = window.ReactDOM.createRoot(root);
    rootInstance.render(<React.StrictMode>{children}</React.StrictMode>);
  }, [children]);

  return (
    <iframe
      title="elementRenderer"
      ref={iframeRef}
      width="100%"
      height="300px"
      className={`border border-gray-600 rounded ${className}`}
    />
  );
};

IFrameWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default IFrameWrapper;
