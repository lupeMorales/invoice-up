import React from "react";
import GlobalStyle from "./GlobalStyle";
import ReactDOM from "react-dom/client";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Theme from "./Theme";
import { Home } from "./pages/Home";

/* const theme = {
  color: {
    primary: "#6c63ff",
    secondary: "#4f49cc",
    accent: "#F78B38",
    light_text: "#fff",
    dack_text: "#000",
  },
  fontSize: {
    xlarge: "32px",
    large: "28px",
    normal: "22px",
    small: "18px",
  },
  fonts: {
    titleFont: "Comfortaa, sans-serif",
    textFont: "Lato, sans-serif",
  },
}; */

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router} />
      <GlobalStyle />
    </Theme>
  </React.StrictMode>
);
