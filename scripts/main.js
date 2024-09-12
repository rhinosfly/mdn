const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/butterfly.jpg") {
        myImage.setAttribute("src", "images/picture.jpg");
    } else {
        myImage.setAttribute("src", "images/butterfly.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is a website, ${myName}`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `This is a website, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};