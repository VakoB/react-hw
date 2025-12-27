import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Root from "./Root";

const routes = createRoutesFromElements(
  <Route path="/" Component={Root}>
    <Route index Component={Home} /> 
    <Route path="users" Component={Users} />
  </Route>
);

const router = createBrowserRouter(routes);
export default router;
