import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model, Request } from "miragejs";
import { App } from "./App";
import Schema from "miragejs/orm/schema";

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    // quando tiver na rota, a partir do nome API
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transctions");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
