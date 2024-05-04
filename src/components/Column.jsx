import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import Card from "./Card";
import { DND_CARD_TYPE } from "../App.constants";
import { ColumnWrapper } from "./component.styles";

export default function Column({ id, cards, onDrop, title }) {
  const [, dropRef] = useDrop(() => ({
    accept: DND_CARD_TYPE,
    drop: (item) => onDrop(item, id),
  }));

  return (
    <ColumnWrapper ref={dropRef}>
      <h2>{title}</h2>
      {cards.map((card) => (
        <div>{card.text}</div>
      ))}
    </ColumnWrapper>
  );
}

Column.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  onDrop: PropTypes.func,
};
