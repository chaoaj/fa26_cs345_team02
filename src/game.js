import { GAME_CONFIG } from "./config.js";

export function createGame() {
  return new window.p5((p) => {
    p.setup = () => {
      p.createCanvas(GAME_CONFIG.width, GAME_CONFIG.height);
    };

    p.draw = () => {
      p.background(GAME_CONFIG.backgroundColor);
    };
  });
}
