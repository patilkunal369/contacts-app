import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../../common/styles/Container";
import GlobalStyles from "../../common/styles/Globalstyles";
import Provider from "../../context/Provider";
import routes from "../../routes";
import MainContainer from "../MainContainer";
import SideNav from "../SideNav";

const App = () => {
  return (
    <div className="App">
      <Provider>
        <GlobalStyles />
        <Container>
          <SideNav />
          <MainContainer>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </MainContainer>
        </Container>
      </Provider>
    </div>
  );
};

export default App;
