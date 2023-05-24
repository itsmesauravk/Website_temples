const barsBtn = document.querySelector(".bars")
const barsIcon = document.querySelector(".bars i")
const dropDown = document.querySelector(".dropdown")

function menu() {
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')

    barsIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}

const textchange  = document.querySelector("#changing");
const textvalue = ["A temple does not necessarily have to be a building",
                    "a perfect view is also a temple,",
                    "you go there,",
                    "you sit and you live the spirituality to the full!"
                ];
let counter = 0;
setInterval(()=>{
textchange.textContent = textvalue[counter];
counter=(counter+1)% textvalue.length;
},3000);

// log-in
let hintEL = document.querySelector(".hint")
function hint() {
    hintEL.textContent = "Think hard !, you can remember..☠️"
}
// sign-in
let messageEl = document.querySelector(".message")
    
    function disp() {
        messageEl.textContent = "Sucessfully created a new account ✅"
    }

// about us
const changes  = document.querySelector(".uss");
const newValue = ["US",
                    "OUR WEBSITE",
                    "OUR FUTURE PLANS",
                    "BUILDING BONDS",
                    "GROWING TOGETHER"
                ];
let count = 0;
setInterval(()=>{
changes.textContent = newValue[count];
count=(count+1)% newValue.length;
},2000);


// darkmode
function changeMode(){
    const element = document.body;
    element.classList.toggle("Dark-mode");

    const button = document.querySelector("button");
    if(element.classList.contains("Dark-mode")){
        button.textContent="Light-mode";
    }else{
        button.textContent="Dark-mode";
    }
}