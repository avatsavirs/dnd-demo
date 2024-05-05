import PropTypes from "prop-types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Card from "./Card";
import { ColumnWrapper } from "./component.styles";
import { useDroppable } from "@dnd-kit/core";

export default function Column({ id, cards, activeCardId }) {
  const { setNodeRef } = useDroppable({
    id,
    data: {
      type: "column-drop",
    },
  });
  return (
    <ColumnWrapper ref={setNodeRef}>
      <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        {cards.map((card) => (
          <Card key={card.id} card={card} isActive={card.id === activeCardId} />
        ))}
      </SortableContext>
    </ColumnWrapper>
  );
}

Column.propTypes = {
  id: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  activeCardId: PropTypes.string,
};
