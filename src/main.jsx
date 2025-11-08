import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TeamProvider } from "./context/TeamContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeamProvider>
      <App />
    </TeamProvider>
  </StrictMode>
);
