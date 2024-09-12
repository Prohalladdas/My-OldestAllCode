function generateButton() {
    var btnText = document.getElementById("btnText").value;
    var btnBgColor = document.getElementById("btnBgColor").value;

    var btnFontColor = document.getElementById("btnFontColor").value;  // my
    var btnBorderRadius = document.getElementById("btnBorderRadius").value + "px";
    var btnSize = document.getElementById("btnSize").value;

    var buttonPreview = document.getElementById("buttonPreview");
    // buttonPreview.innerHTML = '<button class="generated-button ' + btnSize + '" style="color: ' + btnFontColor + '; background-color:' + btnBgColor + '; border-radius: ' + btnBorderRadius + ';">' + btnText + '</button>';
buttonPreview.innerHTML = " <h1>ASHISH IS COOL</h1>"

    var buttonCSS = document.getElementById("buttonCSS");
    buttonCSS.textContent = '.generated-button {\n' +
        '    background-color: ' + btnBgColor + ';\n' +
        '    color: ' + btnFontColor + ';\n' +
        '    border-radius: ' + btnBorderRadius + ';\n' +
        '}\n\n' +
        '.small {\n' +
        '    padding: 5px 10px;\n' +
        '}\n\n' +
        '.medium {\n' +
        '    padding: 8px 20px;\n' +
        '}\n\n' +
        '.large {\n' +
        '    padding: 10px 30px;\n' +
        '}';
}

function copyCSS() {
    var buttonCSS = document.getElementById("buttonCSS");
    var range = document.createRange();
    range.selectNode(buttonCSS);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("CSS code copied!");
}