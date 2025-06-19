const fileupload = document.querySelector("#upload");
const keyElements = document.querySelector("#keyItems");
const cmnKeyElement = document.querySelector("#cmnKey");

function intToHex(buffer) {
    hexArr = [];
    keyElements.style.visibility = "visible";

    if (buffer.byteLength === 16 && buffer[0] === 215) {
        for (let i = 0; i <= 15; i++) {
            let intVal = buffer[i];
            let hexVal = intVal.toString(16).padStart(2, "0");
            hexArr.push(hexVal.toUpperCase());
        }
        cmnKeyElement.textContent = hexArr.join("");
        cmnKeyElement.style.color = "var(--md-code-hl-string-color)";
        return;
    };
    cmnKeyElement.textContent = "Invalid otp";
    cmnKeyElement.style.color = "var(--md-code-hl-number-color)";
};

fileupload.addEventListener("change", function (event) {
    let file = event.target.files[0];
    let slice = file.slice(0xE0, 0xE0 + 16);
    let read = new FileReader();
    read.readAsArrayBuffer(slice);

    read.onload = function() {
        let intArr = new Uint8Array(read.result);
        intToHex(intArr);
    };
});