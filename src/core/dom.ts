import { state } from "./state";

export const insertDragPreview = (x: number, y: number) => {
  const dragPreview = document.createElement("div");

  dragPreview.className = "dragPreview";
  dragPreview.innerText = "Drag Item";

  dragPreview.style.position = "absolute";
  dragPreview.style.left = `${x}px`;
  dragPreview.style.top = `${y}px`;

  state.dragPreview = dragPreview;
  document.body.appendChild(state.dragPreview);

  state.dragPreviewInserted = true;
  return state.dragPreview;
};
