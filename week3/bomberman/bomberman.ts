/*
 * Complete the 'bomberMan' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING_ARRAY grid
 */

function bomberMan(n: number, grid: string[]): string[] {
  // Write your code here
  let res: string[] = [];
  let gridNew: string[][] = grid.map((row) => row.split(""));
  if (n === 1) return grid;
  let maxRows = grid.length,
    maxCols = grid[0].length;
  let oldBombs: Set<string> = new Set(),
    newBombs: Set<string> = new Set();
  console.log("original", grid);
  // for (let sec = 2; sec <= n; sec++) {
  // if (sec % 3 === 1) continue;
  // add bombs to empty cells
  // if (sec % 3 === 2) {

  // return full of bombs
  if (n % 2 === 0) {
    console.log("placing news bombs and mapping old bombs");
    for (let row = 0; row < maxRows; row++) {
      for (let col = 0; col < maxCols; col++) {
        if (gridNew[row][col] === ".") {
          gridNew[row][col] = "O";
          // newBombs.add(`${row}-${col}`);
        } else {
          oldBombs.add(`${row}-${col}`);
        }
      }
    }
  }
  // Modify the grid: previously deposited bombs explode, along with neighboring cells. Rewriting the string lines
  // if (sec % 3 === 0) {

  // first detonation
  if (n % 4 === 3) {
    console.log("ready for explosions");
    let explodingBombs: Set<string> = new Set();
    oldBombs.forEach((position) => {
      let [row, col] = position.split("-").map(Number);
      for (let x = col - 1; x <= col + 1; x++) {
        if (x >= 0 && x < grid[row].length) {
          gridNew[row][x] = ".";
          // explodingBombs.add(`${row}-${x}`);
          // check if there was a bomb previously to remove
          // if (newBombs.has(`${row}-${x}`)) newBombs.delete(`${row}-${x}`);
        }
      }
      for (let y = row - 1; y <= row + 1; y++) {
        if (y >= 0 && y < grid.length && y !== row) {
          gridNew[y][col] = ".";
          // explodingBombs.add(`${y}-${col}`);
          // if (newBombs.has(`${y}-${col}`)) newBombs.delete(`${y}-${col}`);
        }
      }
      // oldBombs.delete(position);
    });
    // oldBombs = explodingBombs;
    oldBombs.clear();
  }
  // oldBombs = newBombs;
  res = gridNew.map((row) => row.join(""));
  // console.log(`Result after ${sec} : ${res}`);
  // }
  // print grid

  return res;
}

function bomberManSequenced(n: number, grid: string[]): string[] {
  //  4 states
  // 1. original n= 1
  // 2. full of bombs - old and new n=2,4,6,
  // 3. first detonation: old bombs explode, leaving untouched new bombs n=3,7
  // 4. full of bombs - same as 2
  // 5. second detonation: "new bombs" explode, n=5,9<
  // 6. full of bombs
  // 7. Detonation - same as first detonation?

  let gridNew: string[][] = grid.map((row) => row.split(""));
  let newGrid: string[][] = [];
  if (n === 1) return grid;
  let maxRows = grid.length,
    maxCols = grid[0].length;

  if (n % 2 === 0) {
    // return full of bombs
    // const line =
    // const fullGrid = Array.from({length: maxCols}, () =>Array(maxCols).fill('O').join(""))
    newGrid = fillGrid(maxCols);
  }
  // first explosion
  if (n % 4 === 3) {
    console.log("first");
    newGrid = detonate(gridNew);
  }

  // 2nd explosion
  if (n % 4 === 1) {
    console.log("second");
    newGrid = detonate(detonate(gridNew));
  }

  return newGrid.map((row) => row.join(""));

  function fillGrid(length: number): string[][] {
    return Array.from({ length: maxRows }, () => Array(maxCols).fill("O"));
  }

  function detonate(oldGrid: string[][]): string[][] {
    let maxRows = oldGrid.length,
      maxCols = oldGrid[0].length;
    console.log("ready for explosions");
    console.log("pre");
    console.log(oldGrid);
    const newGrid = fillGrid(maxCols);
    console.log("🚀 ~ detonate ~ newGrid:", newGrid);
    // Change O to . for position and surroundings
    for (let y = 0; y < maxRows; y++) {
      for (let x = 0; x < maxCols; x++) {
        // replace the bombs with explosion
        if (oldGrid[y][x] === "O") {
          console.log("replacing bomb spot");
          console.log("🚀 ~ detonate ~ x:", x);
          console.log("🚀 ~ detonate ~ y:", y);
          newGrid[y][x] = ".";
          console.log("🚀 ~ detonate ~ newGrid:", newGrid);
          // replace neighboring positions
          for (let xx = x - 1; xx <= x + 1; xx += 2) {
            if (xx >= 0 && xx < oldGrid[y].length) {
              newGrid[y][xx] = ".";
            }
          }
          for (let yy = y - 1; yy <= y + 1; yy += 2) {
            if (yy >= 0 && yy < oldGrid.length) {
              newGrid[yy][x] = ".";
            }
          }
        }
      }
    }
    console.log("post");
    console.log(newGrid);
    return newGrid;
  }
}

let grid = ["...", ".O.", "..."];

// console.log(bomberMan(5, grid));

console.log(bomberManSequenced(3, grid));
