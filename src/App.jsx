import { useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  rectIntersection,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Card, Column } from "./components";
import { AppWrapper } from "./App.styles";

export default function App() {
  const [activeCardId, setActiveCardId] = useState();
  const [columns] = useState([
    {
      id: "col-1",
      label: "Column A",
    },
    {
      id: "col-2",
      label: "Column B",
    },
    {
      id: "col-3",
      label: "Column C",
    },
  ]);
  const [cards, setCards] = useState([
    {
      id: "card-1",
      title: "Card 1 Title",
      text: "Card 1",
      col: "col-1",
    },
    {
      id: "card-2",
      title: "Card 2 Title",
      text: "Card 2",
      col: "col-1",
    },
    {
      id: "card-3",
      title: "Card 3 Title",
      text: "Card 3",
      col: "col-2",
    },
    {
      id: "card-4",
      title: "Card 4 Title",
      text: "Card 4",
      col: "col-2",
    },
    {
      id: "card-5",
      title: "Card 5 Title",
      text: "Card 5",
      col: "col-3",
    },
    {
      id: "card-6",
      title: "Card 6 Title",
      text: "Card 6",
      col: "col-3",
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragOver(event) {
    const { active, over } = event;
    if (!over) return;
    const { id: activeId } = active;
    const {
      id: overId,
      data: {
        current: { type: overType },
      },
    } = over;
    if (activeId === overId) return;
    if (overType === "column-drop") {
      setCards((currentCards) => {
        const currentCardsCopy = [...currentCards];
        const activeIndex = currentCardsCopy.findIndex(
          (card) => card.id === activeId,
        );
        currentCardsCopy[activeIndex].col = overId;
        return arrayMove(currentCardsCopy, activeIndex, cards.length - 1);
      });
      return;
    }
    setCards((currentCards) => {
      const currentCardsCopy = [...currentCards];
      const activeIndex = currentCardsCopy.findIndex(
        (card) => card.id === activeId,
      );
      const overIndex = currentCardsCopy.findIndex(
        (card) => card.id === overId,
      );
      const activeColId = currentCardsCopy[activeIndex].col;
      const overColId = currentCardsCopy[overIndex].col;
      if (activeColId === overColId) {
        return arrayMove(currentCardsCopy, activeIndex, overIndex);
      }
      currentCardsCopy[activeIndex].col = overColId;
      return arrayMove(currentCardsCopy, activeIndex, overIndex - 1);
    });
  }

  function handleDragStart(event) {
    const { active } = event;
    setActiveCardId(active.id);
  }

  function handleDragEnd() {
    setActiveCardId(null);
  }

  return (
    <AppWrapper>
      <DndContext
        sensors={sensors}
        collisionDetection={rectIntersection}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {columns.map((col) => (
          <Column
            key={col.id}
            id={col.id}
            title={col.label}
            cards={cards.filter((card) => card.col === col.id)}
            activeCardId={activeCardId}
          />
        ))}
        <DragOverlay>
          {activeCardId ? (
            <Card card={cards.find((card) => card.id === activeCardId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </AppWrapper>
  );
}
