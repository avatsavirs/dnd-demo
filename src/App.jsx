import { DnDProvider } from "./components";
import { AppWrapper } from "./App.styles";
import { useState } from "react";

function App() {
  function handleDrop(updatedCard, targetColumnId) {
    // todo: drop logic
  }
  return (
    <DnDProvider>
      <AppWrapper>Columns</AppWrapper>
    </DnDProvider>
  );
}

export default App;
