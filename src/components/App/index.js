import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  RouteProps,
  Redirect,
} from "react-router-dom";
import { Container } from "../../common/styles/Container";
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
          <Container>
            <SideNav />
            <MainContainer>
              <Component {...props} />
            </MainContainer>
          </Container>
        );
      }}
    />
  );
};

const App = () => {
  const history = useHistory();

  return (
    <div className="App">
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
