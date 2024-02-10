import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const IFrameWrapper = ({ children }) => {
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

    window.ReactDOM.render(
      <React.StrictMode>{children}</React.StrictMode>,
      root
    );
  }, [children]);

  return (
    <iframe
      title="elementRenderer"
      ref={iframeRef}
      width="100%"
      height="300px"
      className="border border-gray-600 rounded"
    />
  );
};

IFrameWrapper.propTypes = {
  children: PropTypes.node,
};

export default IFrameWrapper;
