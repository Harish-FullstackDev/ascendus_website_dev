// pdf-parse's Node bundle pulls in pdfjs-dist's browser-oriented canvas
// module, which references DOMMatrix/ImageData/Path2D at module load time.
// pdfjs-dist tries to polyfill these itself on Node via `process.getBuiltinModule`,
// but that API isn't available on this project's Node version (v21.x is
// explicitly unsupported per pdf-parse's compatibility matrix — 20.x/22.x+
// are fine), so its self-polyfill silently fails and the bare globals stay
// undefined. `@napi-rs/canvas` is already a transitive dependency of
// pdf-parse and ships compatible implementations, so provide them directly.
// This must be imported before "pdf-parse" anywhere it's used.
import { DOMMatrix, ImageData, Path2D } from "@napi-rs/canvas";

if (typeof globalThis.DOMMatrix === "undefined") {
  globalThis.DOMMatrix = DOMMatrix;
}
if (typeof globalThis.ImageData === "undefined") {
  globalThis.ImageData = ImageData;
}
if (typeof globalThis.Path2D === "undefined") {
  globalThis.Path2D = Path2D;
}
