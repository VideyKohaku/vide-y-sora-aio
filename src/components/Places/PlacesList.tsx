import { Box, Stack } from "@mui/material";
import React from "react";

const colors = ["Primary", "Secondary", "Error", "Warning", "Info", "Success"];

const randomColor = (): string => {
  return colors[Math.floor(Math.random() * colors.length)].toLowerCase();
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
  console.log(`${randomColor()}.main.light`);
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
      {mockList.map((list) => {
        return (
          <Box
            key={list.name}
            className={`${randomColor()}.light`}
            sx={{
              width: "100%",
              backgroundColor: `${randomColor()}.light`,
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
