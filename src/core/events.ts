import { animatePreviewBack } from "./animations";
import { insertDragPreview } from "./dom";
import { removeDragPreview, state } from "./state";

const stopListenMouseMove = () => {
  document.body.removeEventListener("mousemove", handleMouseMove);
};

const stopListenMouseUp = () => {
  document.body.removeEventListener("mouseup", handleMouseUp);
};

const handleMouseMove = (e: MouseEvent) => {
  const { dragTarget } = state;

  const dragPreview =
    state.dragPreview ||
    insertDragPreview(dragTarget.clientTop, dragTarget.clientLeft);

  dragPreview.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
};

const handleMouseUp = () => {
  stopListenMouseMove();
  stopListenMouseUp();

  const animation = animatePreviewBack();

  animation.addEventListener("finish", () => {
    removeDragPreview();
  });
};

export const handleMouseDown = (e: MouseEvent) => {
  state.dragTarget = e.target as HTMLElement;

  document.body.addEventListener("mousemove", handleMouseMove);
  document.body.addEventListener("mouseup", handleMouseUp);
};
