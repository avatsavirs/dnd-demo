import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CardWrapper, Text } from "./component.styles";

export default function Card({ card, isActive }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CardWrapper
      $isDragging={isDragging}
      $isActive={isActive}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Text size="16" weight="500">{card.title}</Text>
      <Text color="#717171">{card.text}</Text>
    </CardWrapper>
  );
}

Card.propTypes = {
  isActive: PropTypes.bool,
  card: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
};
