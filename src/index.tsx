import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    // quando tiver na rota, a partir do nome API
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "transactions1",
          amount: 400,
          type: "deposit",
          category: "Food",
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
