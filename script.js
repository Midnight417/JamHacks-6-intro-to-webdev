console.log("Hello World!");

const nameInput = document.getElementById("name");
const title = document.getElementById("title");

nameInput.addEventListener("input", ()=>{
    const nameVal = nameInput.value;
    title.innerHTML = "Welcome <span id='greetings'>" + nameVal + "</span>!";
})

function submitForm() {
    const greetings = document.querySelector("#greetings");
    if (greetings != null) {
        greetings.style.color = "#8888ff";
    }
}