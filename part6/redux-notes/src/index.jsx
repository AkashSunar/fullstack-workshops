import { createRoot } from "react-dom/client";
// import { createStore, combineReducers } from "redux";
import App from "./reactQueryApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";
// import store from "./store";



const queryClient = new QueryClient();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
