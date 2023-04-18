import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#111",
        padding: "50px",
        textAlign: "center",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          color: "#eee",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Incrementing a Counter using React Hooks
      </Typography>
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        sx={{
          color: "#999",
          fontSize: "18px",
          lineHeight: "1.5",
          marginBottom: "50px",
        }}
      >
        This page aims to answer one simple question: Can we increment a counter
        using every React Hook? The answer is yes, but should we? Probably not.
        After we get past useState and useEffect the examples become
        increasingly contrived. These are meant to be illustrative, not
        practical. Don't take these as a guide to how you should use React
        Hooks, but rather through seeing the same operation being done in
        multiple ways you can get a better understanding of how they work.
      </Typography>
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        sx={{
          color: "#555",
          fontSize: "16px",
          lineHeight: "1.5",
        }}
      >
        Don't hesitate to open an issue or submit a pull request if you find a
        bug or have a suggestion. Thanks and hope you find this useful!
      </Typography>
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        sx={{
          color: "#555",
          fontSize: "16px",
          lineHeight: "1.5",
        }}
      >
        The source code for this site is available on
        <Link
          href="https://github.com/papercircuit/increment-counter-using-react-hooks"
          sx={{
            color: "#007bff",
            fontWeight: "bold",
            marginLeft: "10px",
            textDecoration: "none",
          }}
        >
          Github
        </Link>
      </Typography>
    </Box>
  );
};

export default Hero;
