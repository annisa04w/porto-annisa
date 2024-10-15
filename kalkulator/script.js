// Function to clear the display
function clearDisplay() {
    document.calc.display.value = "";
}

// Function to delete the last character from the display
function deleteLast() {
    let currentDisplay = document.calc.display.value;
    document.calc.display.value = currentDisplay.slice(0, -1);
}

// Function to append value to the display
function appendToDisplay(value) {
    let currentDisplay = document.calc.display.value;
    
    // Avoid multiple operators or dots
    if (["+", "-", "*", "/", "."].includes(value) && currentDisplay === "") return;
    if (["+", "-", "*", "/", "."].includes(value) && ["+", "-", "*", "/", "."].includes(currentDisplay.slice(-1))) return;

    document.calc.display.value += value;
}

// Function to calculate the result
function calculateResult() {
    try {
        let currentDisplay = document.calc.display.value;
        if (currentDisplay) {
            document.calc.display.value = eval(currentDisplay);
        }
    } catch (error) {
        document.calc.display.value = "Error";
    }
}
