const bookmarkInput = document.getElementById("bookmarkInput");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
const bookmarkList = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderBookmarks() {
  bookmarkList.innerHTML = "";
  bookmarks.forEach((url, index) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = url;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => {
      bookmarks.splice(index, 1);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      renderBookmarks();
    });

    li.appendChild(link);
    li.appendChild(deleteBtn);
    bookmarkList.appendChild(li);
  });
}

addBookmarkBtn.addEventListener("click", () => {
  const url = bookmarkInput.value.trim();
  if (url) {
    bookmarks.push(url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    bookmarkInput.value = "";
    renderBookmarks();
  }
});

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");
if (savedUsername) usernameInput.value = savedUsername;
if (savedPassword) passwordInput.value = savedPassword;

saveBtn.addEventListener("click", () => {
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  alert("Дані збережено ✅");
});

//8 9 10 пункти я мушу пропустити бо у мене дуже мало часу на дз .
