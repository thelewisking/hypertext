const checkboxStorageState = JSON.parse(localStorage.getItem("checkboxStorageState"));
const check = document.getElementById("checkbox");
let currentState = false;

if (checkboxStorageState) {
    currentState = checkboxStorageState;
    check.checked = currentState;
}

check.addEventListener("click", function() {
    if (this.checked) {
        currentState = true;
    } else {
        currentState = false;
    }
    console.log(currentState)
    browser.runtime.sendMessage({
        reload: true
    });
    localStorage.setItem("checkboxStorageState", JSON.stringify(currentState));
});