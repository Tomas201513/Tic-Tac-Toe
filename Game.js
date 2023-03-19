import { useState } from "react";
import { Board } from "./Board";
import { Box, Button, Stack, styled, Divider, Paper } from "@mui/material";
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "#" + move;
    } else {
      description = "start";
    }
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }));
    return (
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Item
          sx={{ marginTop: 0, marginBottom: 0, p: 0, background: "Paper" }}
          key={move}
        >
          <Button onClick={() => jumpTo(move)}>{description}</Button>
        </Item>
      </Stack>
    );
  });

  return (
    <Stack
      direction="column"
      spacing={2}
      // divider={<Divider orientation="vertical" flexItem />}
    >
      <Box>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </Box>

      <Box>
        <ol>{moves}</ol>
      </Box>
    </Stack>
  );
}
