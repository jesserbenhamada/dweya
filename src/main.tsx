import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";
import { BrowserRouter } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
 <MantineProvider
      theme={{
        fontFamily: "Tajawal, sans-serif", // Set Tajawal as the font
      }}
    ><BrowserRouter>
      
            <App />
          
        </BrowserRouter>
      </MantineProvider>
  </React.StrictMode>
);
