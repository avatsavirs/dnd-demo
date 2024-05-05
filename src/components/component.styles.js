import styled, { css } from "styled-components";

const cardStyles = css`
  border-radius: 8px;
  padding: 16px;
  background-color: #f4f4f4;
`;

export const CardWrapper = styled.div`
  ${cardStyles}
  opacity: ${(props) => (props.$isDragging ? 0.5 : 1)};
  opacity: ${(props) => (props.$isActive ? 0.3 : 1)};
  cursor: move;
`;

export const ColumnWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  border: 1px solid transparent;
`;

export const ColumnTitleWrapper = styled.div`
  ${cardStyles}
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  ${(props) => `
    font-family: "Roboto", sans-serif;
    font-weight: ${props.weight ?? 400};
    font-size: ${props.size ?? 14}px;
    color: ${props.color ?? "#333"}
  `}
`;

export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
