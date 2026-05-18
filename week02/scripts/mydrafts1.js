const input = document.querySelector("#favchap");
const button = document.querySelector("#add-btn");
const list = document.querySelector("#list");
const message = document.querySelector("#message");

// Allowed Book of Mormon books
const validBooks = [
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

    // Remove extra spaces
    let chapter = input.value.trim();

    // Example format:
    // "alma 5" -> "Alma 5"
    chapter = formatInput(chapter);

    // Clear previous message
    message.textContent = "";

    // Check empty input
    if (chapter === "") {
        showMessage("Please enter a chapter.", "error");
        input.focus();
        return;
    }

    // Limit to 10 entries
    if (addedChapters.length >= 10) {
        showMessage("You can only add 10 favorite chapters.", "error");
        return;
    }

    // Validate Book of Mormon book name
    const bookName = getBookName(chapter);

    if (!validBooks.includes(bookName)) {
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

    // Create list item
    const li = document.createElement("li");

    // Accessibility
    li.setAttribute("tabindex", "0");

    li.textContent = chapter;

    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-btn");
    deleteButton.setAttribute(
        "aria-label",
        `Remove ${chapter}`
    );

    // Delete functionality
    deleteButton.addEventListener("click", function () {

        li.remove();

        // Remove from array
        const index = addedChapters.indexOf(chapter);

        if (index > -1) {
            addedChapters.splice(index, 1);
        }

        showMessage(`${chapter} removed.`, "success");

        input.focus();
    });

    // Add button to list item
    li.append(deleteButton);

    // Add item to list
    list.appendChild(li);

    // Save chapter in array
    addedChapters.push(chapter);

    // Success message
    showMessage(`${chapter} added successfully!`, "success");

    // Clear input
    input.value = "";

    // Focus input again
    input.focus();
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

// Get book name from chapter input
function getBookName(chapter) {

    // Remove chapter number
    return chapter.replace(/\d+/g, "").trim();
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