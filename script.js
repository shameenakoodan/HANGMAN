/****************************************************************
                     Query Selectors
*****************************************************************/
//Buttons for A-Z
const abcButtons = document.querySelectorAll('.abc-buttons');

//Label for the words
const wordLabel = document.querySelector('.character-words');

//div to display labels
const labelDiv = document.querySelector(".flexcontainer-playarea-word");
/****************************************************************
                     Variable Declarations
*****************************************************************/
//Word display
const originalWord = "fantastic";
const clue =['a'];

/****************************************************************
                     Function Definitions
*****************************************************************/

//Function to display a word with only hints and underscores on the label
const displayClueWord = ()=>{
       //Generate random number 
       const randomIndex = Math.floor(Math.random() * originalWord.length);

       //Dynamically create labels for each characters in the clue word
       for (let i = 0; i < originalWord.length; i++) {
              const label = document.createElement("label");
              //Add class to the newly created labels
              label.classList.add('character-words');
              if(i==randomIndex){
                     const t = document.createTextNode(originalWord[i]);
                     label.appendChild(t);
              labelDiv.appendChild(label);
              }else{
                     const t = document.createTextNode(" _ ");
                     label.appendChild(t);
              labelDiv.appendChild(label);
              }
              
       }
    //   wordLabel.innerHTML = `${clue}`;
}

//Function to display letters on label when the button is clicked
const displayLetters=(event)=>{
    const alphabetClicked = event.target.innerHTML;

    //Find all the indexes of the character which is clicked
    const indexes = getAllIndexes(originalWord,alphabetClicked);
       console.log(indexes);       
    //Add characters to the correct position in the clueWord if the clicked character is present
       indexes.forEach(element => {
              console.log(`Clue before insertion ${clue}`);
              clue[element] = alphabetClicked;
              console.log(`Clue after insertion ${clue}`); 
       });
       wordLabel.innerHTML = `${clue}`;
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
