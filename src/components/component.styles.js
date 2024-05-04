import styled from "styled-components";

export const CardWrapper = styled.div`
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  padding: 10px;
  marginbottom: 10px;
  backgroundcolor: lightgrey;
  cursor: move;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ColumnWrapper = styled.div`
  width: 30%;
  minheight: 400px;
  backgroundcolor: #f0f0f0;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
`;
