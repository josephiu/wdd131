
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const message = document.querySelector("#message");

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
const addedChapters = [];

button.addEventListener("click", addChapter);

// Allow Enter key
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addChapter();
    }
});




function addChapter() {

    let chapter = formatInput(input.value);

     message.textContent = "";

    if (chapter) {
       

        // Limit to 10 entries
        if (addedChapters.length >= 10) {
            showMessage("you have reached the limit of 10 favorite chapters.", "error");
            return;
        }

        // Validate Book of Mormon book name
        const bookName = getBookName(chapter);

        if (!acceptableChapters.includes(bookName)) {
            showMessage("Please enter a valid Book of Mormon book.", "error");
            input.focus();
            return;
        }

        // Prevent duplicates
        if (addedChapters.includes(chapter)) {
            showMessage("That chapter has already been added.", "error");
            input.focus();
            return;
        }

        // Save chapter
        addedChapters.push(chapter);

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        deleteButton.classList.add("delete-btn");
        deleteButton.setAttribute("aria-label", "close");
        deleteButton.textContent = "❌";

        li.textContent = input.value;

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.appendChild(li);

        input.value = '';
        input.focus();

    } else {
        message.textContent = "Please enter a chapter.";
        message.style.color = "red";
        input.focus();
    }
}

function getBookName(chapter) {

    // Ensure chapter is a string
    if (typeof chapter !== "string") {
        return "";
    }

    return chapter.replace(/\s\d+$/, "").trim();
}


// Show messages
function showMessage(text, type) {

    message.textContent = text;

    if (type === "error") {
        message.style.color = "red";
    } else {
        message.style.color = "green";
    }
}

// Format input consistently
function formatInput(text) {

    return text
        .toLowerCase()
        .split(" ")
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}