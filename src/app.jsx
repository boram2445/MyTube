import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Sorry, not Found😂</p>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/search/:searchId",
        element: <SearchPage />,
      },
      {
        path: "/watch/:videoId",
        element: <DetailPage />,
      },
      {
        path: "/channel/:channelId",
        element: <p>Channel</p>,
      },
    ],
  },
]);

function App({ youtube }) {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
