/****************************************************************
                     Query Selectors
*****************************************************************/
//Buttons for A-Z
let abcButtons;

//Label for the words
let wordLabel;

//Div for the flex container
let flexcontainerdiv ;


//play Button to load the new page
const playButton = document.querySelector("#play");

//Buttons to select the themes
let themeButtons;

//Div for displaying theme
let divTheme ;

//Main tag
const mainTag = document.querySelector('main');

//Random character to display rndom character
let randomCharacter = '';

/****************************************************************
                     Variable Declarations
*****************************************************************/
//Store the words
const fruits = [ "Acai","Apple","Apricot","Lychee","Mango","Mangosteen","Cantaloupe","Honeydew"];
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
const languages = ["English","Spanish","Chinese","Tagalog","Vietnamese","Arabic","French","Korean","German","Hindi","Portugese","Italian","Polish","Yeddish","Japanase","Persian","Gujarati","Telugu","Bengali","Urdu","Greek","Punjabi","Tamil","Armenian","Hebrew","Indonesian","Navajo"];
const vegetables = ["Zucchini","Watercress","Turnip","Tomato","Tomatillo","Spinach","Squash","Shallots","Salsify","Radishes","Rutabaga","Radicchio","Pumpkin","Potato","Pepper","Pepper","Parsnip","Onions","Okra","Mushrooms","Lettuce","Leeks","Kale","Horseradish","Fiddleheads","Fennel","Eggplant","Endives","Edamame","Daikon","Cucumber","Crookneck","Corn","Collards","Chayote","Celery","Celeriac","Cauliflower","Cassava","Carrot","Cabbage","Broccoli","Broadbeans","Beets","Asparagus","Arugula","Artichoke","Arrowroot"];

//Select random words from the array
let originalWord;

let clue = [];
//Selected theme
let selectedTheme = '';
//Set a counter for the maximum number of attempts
let maximumAttempt = 7;


/****************************************************************
                     Function Definitions
*****************************************************************/

//Function to display a word with only hints and underscores on the label
const displayClueWord = () => {
       //div to display labels
       const labelDiv = document.querySelector(".flexcontainer-playarea-word");
       //Display the words from selected theme
       switch (selectedTheme.toLowerCase()) {
              case 'fruits':
                     originalWord = fruits[Math.floor(Math.random() * fruits.length)].toLowerCase();
                     break;
              case 'countries':
                     originalWord = countries[Math.floor(Math.random() * fruits.length)].toLowerCase();
                     break;
              case 'vegetables':
                     originalWord = vegetables[Math.floor(Math.random() * fruits.length)].toLowerCase();
                     break;
              case 'languages':
                     originalWord = languages[Math.floor(Math.random() * fruits.length)].toLowerCase();
                     break;
       }
       console.log(`Original Word : ${originalWord}`);

       maximumAttempt = 7;
       //Generate a random character to display for the clueWord
       randomCharacter = originalWord.charAt(Math.floor(Math.random() * originalWord.length));

       //Dynamically create labels for each characters in the clue word
       for (let i = 0; i < originalWord.length; i++) {
              const label = document.createElement("label");
              //Add class to the newly created labels
              label.classList.add('character-words');

              let textForTag = "";
              if (originalWord[i] == randomCharacter) {
                     textLabelTag = document.createTextNode(originalWord[i]);
                     clue[i] = originalWord[i];

              } else {
                     textLabelTag = document.createTextNode("_");
              }
              label.appendChild(textLabelTag);
              if (document.body.contains(labelDiv))
                     labelDiv.appendChild(label);

       }
       //Select the labels here because only after creation of label this will return array.
       wordLabel = document.querySelectorAll('.character-words');
}

//Function to delete the previous labels
const deletePreviousLabels = () => {
       wordLabel.forEach(element => {
              element.remove();
       });
}

//Function to display letters on label when the button is clicked
const displayLetters = (event) => {
       const alphabetClicked = event.target.innerHTML;
       //Disable the buttons once it is clicked 
       event.target.disabled = true;

       //Find all the indexes of the character which is clicked
       const indexes = getAllIndexes(originalWord, alphabetClicked);
       //Decrement the maxAttempt for every wrong click
       if (indexes.length == 0)
              maximumAttempt--;
       //Check if the maximum attempt is 0 if so prompt Failed
       if (maximumAttempt == 0) {
              alert("Failed");
              //Reset maximum attempts so that the game starts again
              refreshContents();
       } else {
              //Iterate through all the labels and set the clicked value 
              indexes.forEach(index => {
                     clue[index] = alphabetClicked;
                     wordLabel[index].innerHTML = alphabetClicked;
              });
              //If the correct word is displayed disable all the buttons 
              //Display a congrations alert box
              //Display the next clue
              console.log(`Original Word :${originalWord} and clue  : ${clue}`);
              if (clue.join('').trim() === originalWord.trim()) {
                     //Reset maximum attempts so that the game starts again
                     setTimeout(function(){ alert("Congratulations"); }, 1000);
                     setTimeout(function(){  refreshContents(); }, 1000);

              }
       }
}

//Function to be called when a theme is selected
const themeSelection = (event) => {
       selectedTheme = event.target.innerHTML;
       //Display the next play page
       playArea();
}

//Function to find all the index of a character in the word
//Returns an array of all the indexes where the character is present
const getAllIndexes = (word, clicked) => {
       let indexes = [], i = -1;
       while ((i = word.indexOf(clicked, i + 1)) != -1) {
              indexes.push(i);
       }
       return indexes;
}

//Function to refresh the contents
const refreshContents = () => {
       originalWord = fruits[Math.floor(Math.random() * fruits.length)];
       clue = [];
       console.log(`${maximumAttempt}`);
       maximumAttempt = 7;
       abcButtons.forEach(element => {
              element.disabled = true;
       });
       deletePreviousLabels();
       displayClueWord();
       abcButtons.forEach(element => {
              element.disabled = false;
       });
}
const displayGame = () => {

       selectATheme();
       //location.href = "pickatheme.html";
}

const selectATheme = () => {
       //Remove unwanted things from the first page
       const frontpageflexcontainer  = document.querySelector(".front-page-flex-container");
       frontpageflexcontainer.remove();
       playButton.remove();
       
       //Generate an array of themes
       const themes = ["Countries", "Fruits", "Vegetables", "Languages"];
       divTheme = document.createElement("div");
       divTheme.classList.add('main-theme-container');
       
       //Generate a h2 for select a theme
       const selecth2 = document.createElement("h2");
       selecth2.innerHTML = "Select a Theme";
       divTheme.appendChild(selecth2);

       //Div for the themebuttonsContainer
       const themebuttonsContainer = document.createElement("div");
       themebuttonsContainer.classList.add('themeButtonsContainer');
       divTheme.appendChild(themebuttonsContainer);

       themes.forEach(element => {
              buttons = document.createElement("button");
              //Add class to the newly created labels
              buttons.classList.add('theme-buttons');
              const textButtonTag = document.createTextNode(element);
              buttons.appendChild(textButtonTag);
              themebuttonsContainer.appendChild(buttons);
       });
       mainTag.appendChild(divTheme);
       themeButtons = document.querySelectorAll(".theme-buttons");
       //Add event listener for selecting the theme
       themeButtons.forEach(element => {
              element.addEventListener("click", themeSelection);
       });
}
//Create the divs for the last page
/*
<div class="flexcontainer">
                <div class="flexcontainer-hangman"> 
                    <!--<img src="images/pngwing.com.png">-->
                    A hang man image here
                </div>
                <div class="flexcontainer-playarea">
                    <div class="flexcontainer-playarea-word">
                        
                    </div>
                    <div class="flexcontainer-playarea-buttons">
                    </div>
                    
                </div>
                
            </div>
*/
const createDivs = () =>{
       flexcontainerdiv = document.createElement('div');
       flexcontainerdiv.classList.add("flexcontainer");
       mainTag.appendChild(flexcontainerdiv);

       const flexcontainerhangman = document.createElement("div");
       flexcontainerhangman.classList.add("flexcontainer-hangman");
       flexcontainerdiv.appendChild(flexcontainerhangman);

       const flexcontainerplayarea = document.createElement("div");
       flexcontainerplayarea.classList.add("flexcontainer-playarea");
       flexcontainerdiv.appendChild(flexcontainerplayarea);

       const flexcontainerplayareaword = document.createElement("div");
       flexcontainerplayareaword.classList.add("flexcontainer-playarea-word");
       flexcontainerplayarea.appendChild(flexcontainerplayareaword);

       flexcontainerplayareabuttons = document.createElement("div");
       flexcontainerplayareabuttons.classList.add("flexcontainer-playarea-buttons");
       flexcontainerplayarea.appendChild(flexcontainerplayareabuttons);
}
//Display the play Area
const playArea = () => {
       //Generate the div for the clue word
       createDivs();
       //Display the Clue word
       displayClueWord();
       //Generate the div for the buttons and parent divs

       //Generate the alphabet buttons
       generateAlphabetButtons();
       //Remove the div for the theme from the current page
       divTheme.remove();
}
//Function to generate Alphabet buttons
const generateAlphabetButtons = () => {
       const alpha = Array.from(Array(26)).map((e, i) => i + 97);
       const alphabet = alpha.map((x) => String.fromCharCode(x));
       
//Div for alphabet buttons
let buttonContainer = document.querySelector(".flexcontainer-playarea-buttons");
       //For each alphabet generate a button
       alphabet.forEach(element => {
              buttons = document.createElement("button");
              buttons.classList.add("abc-buttons");
              buttons.innerHTML = element;
              buttonContainer.appendChild(buttons);
       });
       abcButtons = document.querySelectorAll('.abc-buttons');
       //Disable the randomCharacter button which will be default clue 
       abcButtons.forEach(element => {
              // console.log(element.innerHTML);
              if (element.innerHTML === randomCharacter) {
                     element.disabled = true;
                     console.log(element);
              }
       });

       //Add event listener for Alphabet Buttons
       abcButtons.forEach(element => {
              element.addEventListener("click", displayLetters);
       });
}

/****************************************************************
                     Event Listeners
*****************************************************************/



//Add event listener when a page is loaded
//window.onload = displayClueWord;

//Add event listener for play button
//if(document.body.contains(playButton))
playButton.addEventListener("click", displayGame);




/*//Sound Effects
const audio = new Audio("./audio/mixkit-positive-interface-beep-221.wav");

abcButtons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});*/
