import "./index.css";
import "./locales/index.ts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
        <Toaster />
      </React.StrictMode>
    </QueryClientProvider>
  </>,
);
