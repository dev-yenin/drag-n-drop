import { state } from "./state";

const PREVIEW_BACK_ANIMATION_DURATION = 300;

export const animatePreviewBack = () => {
  const {
    dragTarget: { clientLeft, clientTop },
  } = state;

  const keyframes = [
    {
      transform: `translate(${clientLeft}px, ${clientTop}px)`,
    },
  ];

  return state.dragPreview.animate(keyframes, PREVIEW_BACK_ANIMATION_DURATION);
};
