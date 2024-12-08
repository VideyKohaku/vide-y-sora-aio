import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";

const colors = ["Primary", "Secondary", "Error", "Warning", "Info", "Success"];

const randomColor = (): (() => string | null) => {
  let lastColor: string | null = null;
  return () => {
    let newColor = lastColor;
    console.log("last:", lastColor);
    while (newColor === lastColor) {
      newColor =
        colors[Math.floor(Math.random() * colors.length)].toLowerCase();
    }
    console.log("new: ", newColor);
    lastColor = newColor;
    return newColor;
  };
};

const mockList = [
  {
    name: "Eating",
    description: "Eating",
    places: [
      {
        name: "McDonald's",
        description: "McDonald's",
        location: "McDonald's",
        rating: 5,
      },
      {
        name: "KFC",
        description: "KFC",
        location: "KFC",
        rating: 4,
      },
    ],
  },
  {
    name: "Workshop",
    description: "Workshop",
    places: [
      {
        name: "Home",
        description: "Home",
        location: "Home",
        rating: 5,
      },
      {
        name: "School",
        description: "School",
        location: "School",
        rating: 4,
      },
    ],
  },
  {
    name: "Coffee",
    description: "Coffee",
    places: [
      {
        name: "Starbucks",
        description: "Starbucks",
        location: "Starbucks",
        rating: 5,
      },
      {
        name: "Coffee Bean",
        description: "Coffee Bean",
        location: "Coffee Bean",
        rating: 4,
      },
    ],
  },
];

const PlaceList: React.FC = () => {
  console.log(`${randomColor()}.light`);
  const [bColors, setBColors] = React.useState<string[]>([]);

  useEffect(() => {
    const initColors = mockList.map(() => {
      console.log(`${randomColor()()}.light`);
      return `${randomColor()()}.light`;
    });
    setBColors(initColors);
  }, []);

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        width: "100%",
        height: "100%",
        color: "black",
        fontSize: "1.5rem",
        fontWeight: "bold",
        padding: "0.5rem",
        boxSizing: "border-box",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      {mockList.map((list, idx) => {
        return (
          <Box
            key={list.name}
            className={`${bColors[idx]}`}
            sx={{
              width: "100%",
              backgroundColor: `${bColors[idx]}`,
              borderRadius: "0.5rem",
              padding: "0.5rem",
              boxSizing: "border-box",
            }}
          >
            {list.name}
          </Box>
        );
      })}
    </Stack>
  );
};

export default PlaceList;
