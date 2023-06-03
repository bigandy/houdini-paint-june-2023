const PAINTLET_NAMESPACE = "day-3";

class dayThree {
  static get inputProperties() {
    return [
      `--${PAINTLET_NAMESPACE}-size`,
      `--${PAINTLET_NAMESPACE}-width-multiplier`,
      `--${PAINTLET_NAMESPACE}-height-multiplier`,
    ];
  }

  paint(
    ctx: CanvasRenderingContext2D,
    size: Record<string, number>,
    properties: Map<string, any>
  ) {
    const { height, width } = size;
    const SIZE = parseInt(properties.get(`--${PAINTLET_NAMESPACE}-size`)) || 20;
    const WIDTH_MULTIPLIER =
      parseInt(properties.get(`--${PAINTLET_NAMESPACE}-width-multiplier`)) || 2;

    const HEIGHT_MULTIPLIER =
      parseInt(properties.get(`--${PAINTLET_NAMESPACE}-height-multiplier`)) ||
      1;

    const blobWidth = SIZE * WIDTH_MULTIPLIER;
    const blobHeight = SIZE * HEIGHT_MULTIPLIER;

    // Top Left
    ctx.fillRect(0, 0, blobWidth, blobHeight);

    // Top Right
    ctx.fillRect(width - blobHeight, 0, blobHeight, blobWidth); // this blob is rotated 90deg so height :. width

    // // bottom right
    ctx.fillRect(width - blobWidth, height - blobHeight, blobWidth, blobHeight);

    // bottom left
    ctx.fillRect(0, height - blobWidth, blobHeight, blobWidth); // this blob is rotated 90deg so height :. width
  }
}

registerPaint(PAINTLET_NAMESPACE, dayThree);

export {};
