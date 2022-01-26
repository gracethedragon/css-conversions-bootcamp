if(process.argv[2][0] ==="#"){
  const hex = process.argv[2]
  const rgbReturned = hexToRgb(hex)
  console.log(rgbReturned)
} else {
 const rgb = process.argv[2].split(/\(([^)]+)\)/)[1].split(",")
  const r = Number(rgb[0])
  const g = Number(rgb[1])
  const b = Number(rgb[2])
  const hexReturned = rgbToHex(r, g, b)
  console.log(hexReturned) 
}


// if(process.argv[2]=== "rgbhex"){
//   const rgb = process.argv[3].split(/\(([^)]+)\)/)[1].split(",")
//   const r = Number(rgb[0])
//   const g = Number(rgb[1])
//   const b = Number(rgb[2])
//   const hexReturned = rgbToHex(r, g, b)
//   console.log(hexReturned)
  
// } else{
// const hex = process.argv[2]
// const rgbReturned = hexToRgb(hex)

// console.log(rgbReturned)
// }

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

