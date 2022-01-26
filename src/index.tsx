import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store";
import App from "pages/App";

import "styles/main.sass";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
