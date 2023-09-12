const array = [16, 25, 36];
let value = array[0];

const container = document.querySelector(".container");
const reduce = document.querySelector(".reduce");
const increase = document.querySelector(".increase");

function makeGrid(n) {
  for (let i = 1; i < n; i++) {
    const grid = document.createElement("div");
    grid.classList.add(`box`);
    container.appendChild(grid);
  }

  const grids = document.querySelectorAll("div");
  grids.forEach((grid) => {
    for (let i = 1; i < n; i++) {
      const div = document.createElement("div");
      div.classList.add("inner");
      grid.appendChild(div);
    }
  });

  const divs = document.querySelectorAll(".inner");

  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("black");
    });
  });
}

function clearGrid() {
  container.innerHTML = "";
}

reduce.addEventListener("click", (e) => {
  e.stopPropagation();
  clearGrid();
  value = array[array.indexOf(value) - 1];
  console.log(value);
  makeGrid(value);
});

increase.addEventListener("click", (e) => {
  e.stopPropagation();
  clearGrid();
  value = array[array.indexOf(value) + 1];
  console.log(value);
  makeGrid(value);
});
