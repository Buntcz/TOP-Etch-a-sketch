const container = document.getElementById("container");
const button = document.getElementById("resetGrid");
container.style.width = "960px";
container.style.height = "960px";

function createGrid(x) {
  for( a = 0; a < x; a++) {
    const row = document.createElement("div");
    container.appendChild(row);
    row.className = "row";
    for ( let b = 0; b < x; b++) {
      const column = document.createElement("div");
      column.className = "column";
      row.appendChild(column);

      column.addEventListener("mouseover", () =>  {
        column.style.backgroundColor = "black";
      })
    }
  }
}

button.addEventListener("click", () => {
  let z = prompt("Please enter a number for your new grid (the number must be between 2 or 99)")
  console.log(z);

  while (z === "") {
    z = prompt("Please enter a number for your new grid (the number must be between 2 or 99)")
  };
   if ( z > 99) {
  return size = prompt("The number must be between 2 and 99");
  };
  if ( z < 2) {
   return size = prompt("The number must be between 2 and 99");
  };

  container.replaceChildren();
  createGrid(z);
})


createGrid(16);
