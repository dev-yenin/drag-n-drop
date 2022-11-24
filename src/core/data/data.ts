import { state } from "../state";
import { DragItemDto } from "../types";
import { getId } from "./helpers";

const createDragItem = (data: DragItemDto) => ({
  id: getId(),
  ...data,
});

export const registerDragItem = (associatedDomNode: HTMLElement, data: any) => {
  const dragItem = createDragItem({
    associatedDomNode,
    data,
  });

  state.dragItems.all.push(dragItem);
  state.dragItems.byIds[dragItem.id] = dragItem;
};
