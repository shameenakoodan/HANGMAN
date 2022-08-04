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
const clue = ['p'];

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

    //Find all the indexes of the character which is clicked
    const indexes = getAllIndexes(originalWord,alphabetClicked);
       console.log(indexes);       
    //Add characters to the correct position in the clueWord if the clicked character is present
    for(let i =0;i<indexes.length;i++){
       clue[indexes[i]] = alphabetClicked;
       displayClueWord();
       console.log(clue);
    }
    
}

//Function to find all the index of a character in the word
//Returns an array of all the indexes where the character is present
const getAllIndexes = (word, clicked) =>{
       let indexes = [], i = -1;
       while ((i = word.indexOf(clicked, i+1)) != -1){
           indexes.push(i);
       }
       return indexes;
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
