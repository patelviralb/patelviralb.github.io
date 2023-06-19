export const removeButtonFocusAfterClick = (e) => {
  if (e) {
    e.preventDefault();
  }
};

export const checkPressedKey = (e) => {
  if (e && (e.key === "Enter" || e.key === "Space")) {
    removeButtonFocusAfterClick(e);
  }
};
