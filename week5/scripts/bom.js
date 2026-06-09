
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
// const message = document.querySelector("#message");

const chaptersArray = getChapterList() || [];

// Allowed Book of Mormon books
const acceptableChapters = [
    "1 Nephi",
    "2 Nephi",
    "Jacob",
    "Enos",
    "Jarom",
    "Omni",
    "Words of Mormon",
    "Mosiah",
    "Alma",
    "Helaman",
    "3 Nephi",
    "4 Nephi",
    "Mormon",
    "Ether",
    "Moroni"
];

// Store added entries

chaptersArray.forEach(chapter => {
    displayList(chapter);
    // addedChapters.push(chapter);
});

// function displayList(chapter) {
//     const li = document.createElement("li");
//     const deleteButton = document.createElement("button");



button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});


function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}


function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}


function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length – 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}


// const addedChapters = [];

// button.addEventListener("click", addChapter);

// // Allow Enter key
// input.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         addChapter();
//     }
// });




// function addChapter() {

//     let chapter = formatInput(input.value);

//      message.textContent = "";

//     if (chapter) {
       

//         // Limit to 10 entries
//         if (addedChapters.length >= 10) {
//             showMessage("you have reached the limit of 10 favorite chapters.", "error");
//             return;
//         }

//         // Validate Book of Mormon book name
//         const bookName = getBookName(chapter);

//         if (!acceptableChapters.includes(bookName)) {
//             showMessage("Please enter a valid Book of Mormon book.", "error");
//             input.focus();
//             return;
//         }

//         // Prevent duplicates
//         if (addedChapters.includes(chapter)) {
//             showMessage("That chapter has already been added.", "error");
//             input.focus();
//             return;
//         }

//         // Save chapter
//         addedChapters.push(chapter);

//         const li = document.createElement("li");
//         const deleteButton = document.createElement("button");

//         deleteButton.classList.add("delete-btn");
//         deleteButton.setAttribute("aria-label", "close");
//         deleteButton.textContent = "❌";

//         li.textContent = input.value;

//         deleteButton.addEventListener("click", function() {
//             list.removeChild(li);
//             input.focus();
//         });

//         li.append(deleteButton);
//         list.appendChild(li);

//         input.value = '';
//         input.focus();

//     } else {
//         message.textContent = "Please enter a chapter.";
//         message.style.color = "red";
//         input.focus();
//     }
// }

// function getBookName(chapter) {

//     // Ensure chapter is a string
//     if (typeof chapter !== "string") {
//         return "";
//     }

//     return chapter.replace(/\s\d+$/, "").trim();
// }


// // Show messages
// function showMessage(text, type) {

//     message.textContent = text;

//     if (type === "error") {
//         message.style.color = "red";
//     } else {
//         message.style.color = "green";
//     }
// }

// // Format input consistently
// function formatInput(text) {

//     return text
//         .toLowerCase()
//         .split(" ")
//         .map(word => {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//         })
//         .join(" ");
// }