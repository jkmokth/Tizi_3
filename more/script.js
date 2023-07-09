const getRandomRGB = ()=>{
    return Math.floor(Math.random()*256);
 }
 
 const getRandomColor = ()=>{
    let color = 'rgb(';
    color += getRandomRGB() + ',';
    color += getRandomRGB() + ',';
    color += getRandomRGB() + ')';
    return color;
 }


export{getRandomColor};