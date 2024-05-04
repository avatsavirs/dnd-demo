import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { CardWrapper } from "./component.styles";
import { DND_CARD_TYPE } from "../App.constants";

export default function Card({ id, text }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DND_CARD_TYPE,
    item: { id, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <CardWrapper ref={drag} isDragging={isDragging}>
      {text}
    </CardWrapper>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
};
