import { Column, DnDProvider } from "./components";
import { AppWrapper } from "./App.styles";
import { useState } from "react";

function App() {
  const [columns, setColumns] = useState([
    {
      id: "col_1",
      label: "Column 1",
      cards: [
        { id: 1, text: "Card 1" },
        { id: 2, text: "Card 2" },
      ],
    },
    {
      id: "col_2",
      label: "Column 2",
      cards: [{ id: 3, text: "Card 3" }],
    },
    {
      id: "col_3",
      label: "Column 3",
      cards: [{ id: 4, text: "Card 4" }],
    },
  ]);

  function handleDrop(updatedCard, targetColumnId) {
    setColumns((currentColumns) =>
      currentColumns.reduce((newColumns, col) => {
        return [
          ...newColumns,
          {
            ...col,
            cards: [
              ...col.cards.filter((card) => card.id !== updatedCard.id),
              col.id === targetColumnId && updatedCard,
            ].filter(Boolean),
          },
        ];
      }, []),
    );
  }
  return (
    <DnDProvider>
      <AppWrapper>
        {columns.map((col) => (
          <Column
            key={col.id}
            id={col.id}
            title={col.label}
            cards={col.cards}
            onDrop={handleDrop}
          />
        ))}
      </AppWrapper>
    </DnDProvider>
  );
}

export default App;
