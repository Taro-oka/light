import { toDegreeFromRadian } from "../math/deg.js";
import {
  activateUserInteraction,
  disableUserInteraction,
} from "./userInteraction.js";

export class Initiator {
  constructor({ elements, drag, light }) {
    this.elements = elements;
    this.drag = drag;
    this.light = light;
    this.initialCordLength = elements.lightCord.clientHeight;
  }

  init() {
    this.addMousedownEvent();
    this.addMouseLeaveEvent({
      baseX:
        this.elements.lightCord.getBoundingClientRect().x +
        this.elements.lightCord.clientWidth / 2,
      baseY: this.elements.lightCord.getBoundingClientRect().y,
    });
    this.addMouseupEvent();
  }

  addMousedownEvent() {
    this.elements.lightCord.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.drag.startDragging();
      disableUserInteraction();
      this.initialCordLength = this.elements.lightCord.clientHeight;
    });
  }

  addMouseLeaveEvent({ baseX, baseY }) {
    document.addEventListener("mousemove", (e) => {
      if (!this.drag.isDragging) return;

      const xPosition = e.clientX;
      const yPosition = e.clientY;

      // ベース座標からの差分を計算
      const dx = xPosition - baseX;
      const dy = yPosition - baseY;

      // 三平方の定理で直線距離を計算
      const distance = Math.hypot(dx, dy);

      if (distance > 200) {
        return;
      }

      let degrees = toDegreeFromRadian(Math.atan2(dy, dx)) - 90; //紐が垂れ下がっている状態(-90°)がデフォルトなのでマイナス90
      if (degrees < 0) {
        degrees += 360; // マイナスの角度（上方向など）を正の数に補正
      }

      // 最低限の移動のみを許可
      if (degrees > 50 && degrees < 310) {
        return;
      }

      this.elements.lightCord.style.transform = `translate(-50%, 100%) rotate(${degrees}deg)`;
      this.elements.lightCord.style.height = `${distance}px`;
    });
  }

  addMouseupEvent() {
    document.addEventListener("mouseup", (e) => {
      if (!this.drag.isDragging) return;
      this.drag.endDragging();
      activateUserInteraction();

      if (this.initialCordLength < this.elements.lightCord.clientHeight) {
        this.light.toggleLight();
      }

      this.elements.lightCord.style.transform = `translate(-50%, 100%)`;
      this.elements.lightCord.style.height = "";
    });
  }
}
