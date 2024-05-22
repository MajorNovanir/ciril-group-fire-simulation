import { CellType } from "../../components/Cell/types";

export const createInitialForest = (
  height: number,
  width: number,
  fires: number[][],
): CellType[][] => {
  const forest = Array(height)
    .fill(null)
    .map(() => Array(width).fill("empty"));
  fires.forEach(([x, y]) => {
    forest[x][y] = "fire";
  });
  return forest;
};

export const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export const isValidCell = (
  x: number,
  y: number,
  height: number,
  width: number,
) => x >= 0 && x < height && y >= 0 && y < width;

export const shouldSpreadFire = (cell: CellType, probability: number) => cell === "empty" && Math.random() < probability;
