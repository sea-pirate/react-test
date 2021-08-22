// console output because school chromebooks dumb
const console2 = {};
console2.log = (...input) => {
    const realLog = window.console.log;
    visibleConsole.log(...input);
    realLog(...input);
};
const visibleConsoleEl = document.createElement("pre");
visibleConsoleEl.id = "console-log";
document.body.appendChild(visibleConsoleEl);
const visibleConsole = {
    log: (...input) => {
        for (const i of input) {
            visibleConsoleEl.textContent += i;
        }
    },
};
// console2.log("TEST");