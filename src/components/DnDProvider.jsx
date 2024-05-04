import { DndProvider as ReactDnDProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DnDProvider({ children }) {
  return <ReactDnDProvider backend={HTML5Backend}>{children}</ReactDnDProvider>;
}
