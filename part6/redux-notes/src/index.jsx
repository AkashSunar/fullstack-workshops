import { createRoot } from "react-dom/client";
import App from "./counterApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CounterContextProvider } from "./CounterContext";

const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
);
