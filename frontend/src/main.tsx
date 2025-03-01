import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import our custom CSS for background color fixes

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
);
