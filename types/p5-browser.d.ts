// p5 is loaded by the HTML script tag; npm supplies its types only.
interface Window {
  p5: typeof import("p5");
}
