import Home from "../page/home/Home.svelte";
import Login from "../page/login/Login.svelte";
import NotFound from "../page/error/NotFound.svelte";

export const routes = {
  "/": Home,
  "/login": Login,
  "*": NotFound,
};
