export const handleDragStart = (e, boxId) => {
  e.dataTransfer.setData('boxId', boxId);
};