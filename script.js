//Buttons for A-Z
const abcButtons = document.querySelectorAll('.abc-buttons');

//Label for the words
const wordLabel = document.querySelector('#character-words');

//Function to display letters on label when the button is clicked
const displayLetters=(event)=>{
    const alphabet = event.target.innerHTML;
    console.log(alphabet);
   wordLabel.innerHTML = alphabet;
}
//Add event listener for Alphabet Buttons
abcButtons.forEach(element=>{
       element.addEventListener("click",displayLetters);
})
//Function to generate the Alphabet buttons
