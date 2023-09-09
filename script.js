// const grid = document.createElement("div");
// grid.classList.add("div-group");
const container = document.querySelector(".container");

for (let i = 1; i < 17; i++) {
  const grid = document.createElement("div");
  grid.classList.add(`box`);
  container.appendChild(grid);
}

const grids = document.querySelectorAll("div");
grids.forEach((grid) => {
  for (let i = 1; i < 17; i++) {
    const div = document.createElement("div");
    div.classList.add("inner");
    grid.appendChild(div);
  }
});
