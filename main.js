import{getRandomColor} from "./more/script.js";

 const myBody= document.querySelector('body');
let count = 0;
 
for(let i = 0; i<=1000; i++){
    count += 1;
    const container = document.createElement('div');
    container.className = 'circle';
    container.innerHTML = count;
    myBody.appendChild(container);
    container.style.backgroundColor = getRandomColor();
}