import Contacts from "../containers/Contacts";
import Login from "../containers/Login";
import Register from "../containers/Register";

const routes = [
  {
    path: "/auth/register",
    component: Register,
    title: "Register",
    needsAuth: false,
  },

  {
    path: "/auth/login",
    component: Login,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/",
    component: Contacts,
    title: "Contacts",
    needsAuth: true,
  },
];

export default routes;
