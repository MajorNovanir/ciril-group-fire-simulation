import { useState, useEffect, useCallback } from "react";
import config from "../../config.json";
import {
  createInitialForest,
  directions,
  isValidCell,
  shouldSpreadFire,
} from "./utils";
import { Button } from "../../components/Button";
import * as SC from "./style";
import { Grid } from "../../components/Grid";
import { Cell } from "../../components/Cell";
import { CellType } from "../../components/Cell/types";

export const Simulation: React.FC = () => {
  const {
    gridHeight, gridWidth, initialFires, propagationProbability,
  } = config;

  const [isRunning, setIsRunning] = useState(false);
  const [forest, setForest] = useState<CellType[][]>([]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    const initialForest = createInitialForest(
      gridHeight,
      gridWidth,
      initialFires,
    );
    setForest(initialForest);
  };

  const step = useCallback(() => {
    const newForest = forest.map((row) => [...row]);
    forest.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === "fire") {
          newForest[i][j] = "ash";
          directions.forEach(([dx, dy]) => {
            const nx = i + dx;
            const ny = j + dy;
            if (
              isValidCell(nx, ny, gridHeight, gridWidth)
              && shouldSpreadFire(forest[nx][ny], propagationProbability)
            ) {
              newForest[nx][ny] = "fire";
            }
          });
        }
      });
    });

    setForest(newForest);
  }, [forest, gridHeight, gridWidth, propagationProbability]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(step, 1000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [isRunning, step]);

  useEffect(() => {
    const isSimulationFinished = forest.every((row) => row.every((cell) => cell !== "fire"));
    if (isSimulationFinished) {
      setIsRunning(false);
    }
  }, [forest]);

  useEffect(() => {
    const initialForest = createInitialForest(
      gridHeight,
      gridWidth,
      initialFires,
    );
    setForest(initialForest);
  }, []);

  return (
    <SC.SimulationWrapper>
      <h1>Forest Fire Simulation</h1>
      <Button onClick={handleStartStop} disabled={isRunning}>
        {isRunning ? "Simulation Running..." : "Start Simulation"}
      </Button>
      <Grid gridHeight={gridHeight} gridWidth={gridWidth}>
        {forest.flat().map((cell, index) => (
          <Cell key={index} type={cell} />
        ))}
      </Grid>
    </SC.SimulationWrapper>
  );
};
