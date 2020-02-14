const myEmptyDiv= document.querySelector("#myEmptyDiv");
const heading = document.createElement("h1");
heading.innerHTML = " Greetings! Happy Thursday.";
heading.addEventListener('click', handleHeadingClick );
myEmptyDiv.appendChild(heading);
function handleHeadingClick(){
    console.log("Heading has been clicked.");
    document.body.style.backgroundColor = 'blue';
}