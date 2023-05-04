import { Box, Button, Stack, styled, Divider, Paper } from "@mui/material";

export function Square({ value, onSquareClick }) {
  return (
    <Button sx={{ background: "#AADDE8" }} size="larg" onClick={onSquareClick}>
      {value}
    </Button>
  );
}
