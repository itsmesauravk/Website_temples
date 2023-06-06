
const textchange  = document.querySelector(".feature");
const textvalue = [
    "Hello there 👋",
    "Welcome 🙌",
    "Explore New Places 🌎",
    "Explore Religion Places 🕍",
    "And many more 🤩",
    "Enjoy your time ❤️",
    "Click below 👇",
    "and Get Started Now 😉"
]
let counter = 0;
setInterval(()=>{
textchange.textContent = textvalue[counter];
counter=(counter+1)% textvalue.length;
},2000);