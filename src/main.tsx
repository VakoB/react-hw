import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router.tsx";
import GlobalStyles from "./GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
