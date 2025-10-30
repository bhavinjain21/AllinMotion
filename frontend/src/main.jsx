import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

const Root = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 100 });
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
