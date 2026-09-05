export class Drag {
  isDragging = false;

  startDragging() {
    this.isDragging = true;
  }

  endDragging() {
    this.isDragging = false;
  }
}
