import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videos from './pages/Videos';
import Search from './pages/Search';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Sorry, not Found😂</p>,
    children: [
      { index: true, element: <Videos /> },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:keyword",
        element: <Videos />,
      },
      {
        path: "/videos/watch/:videoId",
        element: <VideoDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
