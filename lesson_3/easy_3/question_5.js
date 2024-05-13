function isColorValid(color) {
  return (color === "blue" || color === "green");  
}

const isColorValid = color => ["blue", "green"].includes(color);