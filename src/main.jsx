import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//fuente roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

//reinicia los estilos y los pone en 0
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </StrictMode>
);
