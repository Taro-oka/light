import { Drag } from "./libs/dom/drag.js";
import { getElements } from "./libs/dom/elements.js";
import { Initiator } from "./libs/dom/init.js";
import { Light } from "./libs/dom/light.js";

const main = () => {
  try {
    const elements = getElements();
    const initiator = new Initiator({
      elements: { lightCord: elements.lightCord },
      drag: new Drag(),
      light: new Light({ lightBulb: elements.lightBulb }),
    });

    initiator.init();
  } catch (e) {
    alert(`何かがおかしいようです。\n${e.message || "unknown error"}`);
  }
};

main();
