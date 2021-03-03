const useColorPalette = "primary";
var colorPack = data.palette[useColorPalette];
let root = document.documentElement;

for(const prop in colorPack){
    console.log(prop, colorPack[prop]);
    root.style.setProperty(prop, colorPack[prop]);
}