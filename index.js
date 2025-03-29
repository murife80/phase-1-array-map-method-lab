const titleCased = () => {
  return tutorials.map((title) => {
    return title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
};

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
];
// Removed duplicate and incomplete titleCased function

function titleCased() {

  return tutorials.map((title) => {
    return title
      
      
        // Handle special cases that should remain unchanged
        if (
          word === "NaN" ||
          word === "StopPropagation" ||
          word === "PreventDefault"
        ) {
          return word;
        }
        // Capitalize the first letter and leave the rest as is
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

