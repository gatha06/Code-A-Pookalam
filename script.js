function makePetals(layerSelector, count, distance) {
  var layer = document.querySelector(layerSelector);
  for (var i = 0; i < count; i++) {
    var petal = document.createElement('div');
    petal.classList.add('petal');

    // angle for each petal
    var angle = (360 / count) * i;

    // set transform manually
    petal.style.transform = "rotate(" + angle + "deg) translateY(-" + distance + "px)";

    layer.appendChild(petal);
  }
}

// generate petals for 3 layers
makePetals('.layer1', 20, 200); // outer ring
makePetals('.layer2', 16, 150); // middle ring
makePetals('.layer3', 12, 100); // inner ring