import { createEnergyView } from "./energy-view.js";

export function createGame(energy) {
  const view = createEnergyView(energy);

  const game = new window.p5((p) => {
    p.setup = () => {
      p.createCanvas(400, 160);
      p.describe(
        "Energy collection prototype. Use the buttons above the canvas.",
      );
    };
    p.draw = () => {
      p.background(220);
      view.update();
    };
  });
  const remove = game.remove.bind(game);
  game.remove = () => {
    view.destroy();
    remove();
  };
  return game;
}
