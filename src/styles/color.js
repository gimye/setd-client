const colors = {
   blue : {
      50 : "#E5F2FF",
      100 : "#CCE6FF",
      200 : "#99CCFF",
      300 : "#66B3FF",
      400 :  "#3399FF",
      500 : "#0080FF",
      600 : "#0066CC",
      700 : "#004D99",
      800 : "#003366",
      900 : "#001A33",
      950 : "#000D1A"
   },
   red : {
      50 : "#FFE5EE",
      100 : "#FFCCDD",
      200 : "#FF99BB",
      300 : "#FF669A",
      400 : "#FF337B",
      500 : "#FF0055",
      600 : "#CC0044",
      700 : "#990033",
      800 : "#660022",
      900 : "#330011",
      950 : "#1A0009"
   },
   neutral : {
      50 : "#FFFFFF",
      100 : "#E6E6E6",
      200 : "#CCCCCC",
      300 : "#B3B3B3",
      400 : "#999999",
      500 : "#808080",
      600 : "#666666",
      700 : "#4D4D4D",
      800 : "#333333",
      900 : "#1A1A1A",
      950 : "#000000"
   }
}

function createCSSVariables() {
   const root = document.documentElement;
   Object.entries(colors).forEach(([colorName, shades]) => {
     Object.entries(shades).forEach(([shade, value]) => {
       root.style.setProperty(`--color-${colorName}-${shade}`, value);
     });
   });
 }
 
 export { colors, createCSSVariables };