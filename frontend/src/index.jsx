import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Adamina", "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
