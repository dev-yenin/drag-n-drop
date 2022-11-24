import { DragDropSate } from "./types";

export const state = {
  dragPreview: null,
  dragTarget: null,
  dragPreviewInserted: false,
  // to ommit check for null values each time we want to use values
} as unknown as DragDropSate;

export const removeDragPreview = () => {
  state.dragPreview.remove();
  //@ts-ignore
  state.dragPreview = null;
};
