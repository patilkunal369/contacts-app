import React from "react";
import Modal from "react-modal";
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Main } from "../../common/styles/Container";
import GlobalStyles from "../../common/styles/Globalstyles";
import Provider from "../../context/Provider";
import { isAuthenticated } from "../../helpers/isAuthenticated";
import routes from "../../routes";
import MainContainer from "../MainContainer";
import SideNav from "../SideNav";

const ProtectedRoute = ({ component: Component, needsAuth, ...rest }) => {
  if (needsAuth && !isAuthenticated()) {
    return <Redirect to="/auth/login" />;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Main>
            <Container>
              <SideNav />
              <MainContainer>
                <Component {...props} />
              </MainContainer>
            </Container>
          </Main>
        );
      }}
    />
  );
};

Modal.setAppElement("#root");

const App = () => {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Provider>
        <GlobalStyles />
        <Router>
          <Switch>
            {routes.map((route, index) => {
              return (
                <ProtectedRoute
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                  needsAuth={route.needsAuth}
                />
              );
            })}
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
