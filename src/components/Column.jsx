import PropTypes from "prop-types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Card from "./Card";
import { ColumnTitleWrapper, ColumnWrapper, Text } from "./component.styles";
import { useDroppable } from "@dnd-kit/core";

export default function Column({ id, cards, title, activeCardId }) {
  const { setNodeRef } = useDroppable({
    id,
    data: {
      type: "column-drop",
    },
  });
  return (
    <ColumnWrapper ref={setNodeRef}>
      <ColumnTitleWrapper>
        <Text as="h2" size="16" weight="600">{title}</Text>
      </ColumnTitleWrapper>
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
  title: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  activeCardId: PropTypes.string,
};
