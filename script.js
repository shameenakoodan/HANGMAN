/****************************************************************
                     Query Selectors
*****************************************************************/
//Buttons for A-Z
const abcButtons = document.querySelectorAll('.abc-buttons');

//Label for the words
const wordLabel = document.querySelector('#character-words');

/****************************************************************
                     Variable Declarations
*****************************************************************/
//Word display
const originalWord = "apple";
const clue = "p";

/****************************************************************
                     Function Definitions
*****************************************************************/

//Function to display a word with only hints and underscores on the label
const displayClueWord = ()=>{
       wordLabel.innerHTML = `${clue}`;
}

//Function to display letters on label when the button is clicked
const displayLetters=(event)=>{
    const alphabetClicked = event.target.innerHTML;
    console.log(alphabetClicked);
    //Check whether the originalWord contains the clicked alphabet
    if(originalWord.search(alphabetClicked)){
       wordLabel.innerHTML += alphabet;
    }
}


/****************************************************************
                     Event Listeners
*****************************************************************/
//Add event listener for Alphabet Buttons
abcButtons.forEach(element=>{
       element.addEventListener("click",displayLetters);
})

//Add event listener when a page is loaded
window.onload = displayClueWord;
