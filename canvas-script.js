window.onload = function () {
  //definitions
  const canvas = document.querySelector("canvas");
  canvas.width = 1200;
  canvas.height = 600;
  const context = canvas.getContext("2d");

  //drawImage(img, dx, dy);
  //drawImage(img, dx, dy, dw, dh);
  //drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);

  const pokemonTile = new Image();
  pokemonTile.src = "pokemons.png";

  pokemonTile.onload = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 6; j++) {
        context.rect(j * 200, i * 200, 150, 150);
        context.stroke();
        context.drawImage(
          pokemonTile,
          j * 200,
          (i - i * 0.15) * 200,
          200,
          200,
          j * 200,
          i * 200,
          150,
          150
        );
      }
    }
  };
};
