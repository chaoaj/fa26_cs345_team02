import { GAME_CONFIG } from "./config.js";

export function createGame() {
  return new window.p5((p) => {
    /**
     * @type {any}
     */
    let bgImage;

    p.preload = () => {
      bgImage = p.loadImage(GAME_CONFIG.backgroundImage);
    };

    p.setup = () => {
      p.createCanvas(GAME_CONFIG.width, GAME_CONFIG.height);
    };

    p.draw = () => {
      p.background(GAME_CONFIG.backgroundColor); // fallback / clears the frame
      p.image(bgImage, 0, 0, p.width, p.height);
    };
  });
}
