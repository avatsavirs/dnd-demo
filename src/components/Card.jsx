import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CardWrapper } from "./component.styles";

export default function Card({ card, isActive }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CardWrapper $isActive={isActive} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {card.text}
    </CardWrapper>
  );
}

Card.propTypes = {
  isActive: PropTypes.bool,
  card: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }),
};
