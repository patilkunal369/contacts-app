import Register from "../containers/Register";
import Login from "../containers/Login";
import Contacts from "../containers/Contacts";
import CreateContact from "../containers/CreateContact";

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
    path: "/contacts/create",
    component: CreateContact,
    title: "Create Contact",
    needsAuth: true,
  },
  {
    path: "/",
    component: Contacts,
    title: "Contacts",
    needsAuth: true,
  },
];

export default routes;
