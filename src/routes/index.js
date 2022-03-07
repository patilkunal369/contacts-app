import Register from "../containers/Register";
import Login from "../containers/Login";
import Contacts from "../containers/Contacts";
import CreateContact from "../containers/CreateContact";

const routes = [
  {
    path: "/",
    component: <Contacts />,
    title: "Contacts",
  },
  {
    path: "/auth/register",
    component: <Register />,
    title: "Register",
  },
  {
    path: "/auth/login",
    component: <Login />,
    title: "Login",
  },
  {
    path: "/contacts/create",
    component: <CreateContact />,
    title: "Create Contact",
  },
];

export default routes;
