
// function generateBtn() {
//     let btnName = document.getElementById('btnName').value;
//     let btnColor = document.getElementById('btnColor').value;

//     let showBtn = document.getElementById('showBtn');
//     showBtn.innerHTML = '<button class="generate-Button ' + btnName + '" style="color: ' + btnColor + '">'+btnName+'</button>';

//     // Set the CSS code after generating the button
//     let showCssCode = document.getElementById('cssCode');
//     showCssCode.textContent = '.generate-Button {\n' +
//         '    color: ' + btnColor + ';\n' +
//         '}';
// }

// function copyCode() {
//     let cssCode = document.getElementById('cssCode');
//     let range = document.createRange();
//     range.selectNode(cssCode);
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(range);
//     document.execCommand("copy");
//     window.getSelection().removeAllRanges();
//     alert("Your CSS Code has been copied");
// }


// Start here new code
function generateButton() {
    let btnName = document.getElementById('btnName').value;
    let btnColor = document.getElementById('btnColor').value;

    let generateButton = document.getElementById('showButton');
    generateButton.innerHTML = '<button class="ShowB" style="color:' + btnColor + '">' + btnName + '</button>';

};

// Code Copy here code
let createCode = document.getElementById('CSScode')
createCode.textContent = '.ShowB {\n' +
    '    color: ' + btnColor + ';\n' +
    '}';

function CopyCode() {
    let CSScode = document.getElementById('CSScode');
    let naru = document.createRange();
    naru.selectNode(CSScode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(naru);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Your CSS Code is Copied");

};