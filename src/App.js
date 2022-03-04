import "./App.css";
import { Home } from "./components/Home/Home";
import { NavBar } from "./components/Navbar/NavBar";
import { Provider } from "react-redux";
import store from "./store";
import CreateMerchantForm from "./components/CreateMerchantForm/CreateMerchantForm";
import React, { Component } from "react";
import submitMerchantApplication from "./components/CreateMerchantForm/submitMerchantApplication";
import { MerchantApplicationStatus } from "./components/MerchantApplicationStatus/MerchantApplicationStatus";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInfoCircle,
  faCreditCard,
  faMoneyCheckAlt,
  faUser,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter, Routes, Route } from "react-router-dom";

library.add(faInfoCircle, faCreditCard, faMoneyCheckAlt, faUser, faCheckCircle);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/create"
                element={
                  <CreateMerchantForm onSubmit={submitMerchantApplication} />
                }
              />
              <Route
                path="/application-submitted"
                element={<MerchantApplicationStatus />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
