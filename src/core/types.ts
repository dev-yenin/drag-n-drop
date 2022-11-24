export type DragItem = {
  id: number;
  data: any;
  associatedDomNode: HTMLElement;
};

export type DragItemDto = Omit<DragItem, "id">;

type DragItemsById = Record<number, DragItem>;

export type DragDropSate = {
  dragPreview: HTMLElement;
  dragTarget: HTMLElement;
  dragPreviewInserted: boolean;
  dragInProccessItems: any[];
  dragItems: {
    all: DragItem[];
    byIds: DragItemsById;
  };
};
