onload = function() {
    resizeIframe('100%');
}
document.onkeypress = function(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode >= 48 && charCode <= 58) {
        resizeIframe(String.fromCharCode(charCode) + '00px');
    } /* keys 1-9 resize the iframe */
    if (charCode == 48) {
        resizeIframe('100%');
    } /* 0 key resizes the iframe */
    if (charCode == 13) {
        loadURL();
    } /* enter key loads url */
}
var iframe = document.getElementById('site');

function resizeIframe(value) {
    iframe.style.width = value;
    updateOutput();
}

function loadURL() {
    iframe.setAttribute('src', document.getElementById('urlInput').value);
    document.getElementById('urlInput').blur();
    updateOutput();
}

function updateOutput() {
    document.getElementById('output').innerHTML = iframe.offsetWidth + ' x ' + iframe.offsetHeight;
} // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}