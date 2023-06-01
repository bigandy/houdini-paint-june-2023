const PAINTLET_NAMESPACE = "day-2";

import { drawShape } from "./utils/drawShape";
import { getRandomInteger } from "./utils/getRandomInteger";

class dayTwo {
  static get inputProperties() {
    return [`--${PAINTLET_NAMESPACE}-size`];
  }

  paint(
    ctx: CanvasRenderingContext2D,
    size: Record<string, number>,
    properties: Map<string, any>
  ) {
    const { height, width } = size;

    const SIZE = parseInt(properties.get(`--${PAINTLET_NAMESPACE}-size`)) || 20;

    for (let y = 0; y < height / SIZE; y++) {
      for (let x = 0; x < width / SIZE; x++) {
        const color = `hsl(${x * y * SIZE * Math.random()} 100% 50%)`;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        drawShape(
          ctx,
          x * SIZE,
          y * SIZE,
          SIZE / getRandomInteger(1, 6),
          getRandomInteger(3, 12)
        );
        ctx.stroke();
        ctx.fill();
      }
    }
  }
}

registerPaint(PAINTLET_NAMESPACE, dayTwo);

export {};
