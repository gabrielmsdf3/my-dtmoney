import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  // ! toda função que depende de uma ação do usuário é uma boa pratica iniciar com handle.
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  // * sempre que precisar compartilhar a informação com mais de 1 componente
  // * essa informação sera inserida no componente que englobe os dois

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

// * export function app é bom utilizar pois obriga na hora de importar utilizar o mesmo nome evitando confusão
// ! ja no export default app a pessoa pode importar em outro componente com o nome que quiser!
