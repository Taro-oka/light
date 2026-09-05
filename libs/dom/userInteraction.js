export const disableUserInteraction = () => {
  document.body.style.cursor = "ew-resize";
  document.body.style.userSelect = "none";
  document.body.style.pointerEvents = "none";
};

export const activateUserInteraction = () => {
  document.body.style.cursor = "default";
  document.body.style.userSelect = "auto";
  document.body.style.pointerEvents = "auto";
};
