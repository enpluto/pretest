import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { TodoProvider } from "./context/TodoProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </TodoProvider>
  </StrictMode>
);
