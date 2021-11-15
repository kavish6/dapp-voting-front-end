import React, { useState } from "react";
import "./App.css";
import { ChainId, DAppProvider } from "@usedapp/core";
import { Container } from "@material-ui/core";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
function App() {
  return (
    <>
    <DAppProvider
        config={{ supportedChains: [ChainId.Kovan, ChainId.Rinkeby, 1337] }}
    >
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
      </DAppProvider>
      </>
  );
}

export default App;
