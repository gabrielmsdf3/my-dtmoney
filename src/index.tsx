import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model, Request } from "miragejs";
import { App } from "./App";
import Schema from "miragejs/orm/schema";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1260,
          createdAt: new Date("2021-02-14 12:00:00"),
        },
      ],
    });
  },

  routes() {
    // quando tiver na rota, a partir do nome API
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (Schema, Request) => {
      const data = JSON.parse(Request.requestBody);
      return Schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
