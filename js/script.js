// Define text style
const text = new Blotter.Text("Bonjour", {
  family: "Monument Extended",
  size: 150,
  paddingLeft: 150,
  paddingRight: 150,
  fill: "#fff",
});

let material = new Blotter.LiquidDistortMaterial();

// Set material opts
material.uniforms.uSpeed.value = 0.2;
material.uniforms.uVolatility.value = 0.1;

let blotter = new Blotter(material, {
  texts: text,
});

// Apply to element
let elem = document.getElementById("text");
let scope = blotter.forText(text);
scope.appendTo(elem);
