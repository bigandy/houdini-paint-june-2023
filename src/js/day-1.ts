const PAINTLET_NAMESPACE = "day-1";

class dayOne {
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

    const colors = ["red", "blue", "orange", "green"];

    for (let y = 0; y < height / SIZE; y++) {
      for (let x = 0; x < width / SIZE; x++) {
        const arrayNumber = (x + y) % colors.length;
        const color = colors[arrayNumber];

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        if (arrayNumber % 2 === 0) {
          ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
        } else {
          ctx.arc(
            x * SIZE + SIZE / 2,
            y * SIZE + SIZE / 2,
            SIZE / 3,
            0,
            2 * Math.PI
          );
          // ctx.fillStyle = "orange";
          // ctx.stroke();
          // ctx.fill();
        }

        ctx.stroke();
        ctx.fill();
      }
    }
  }
}

registerPaint(PAINTLET_NAMESPACE, dayOne);

export {};
