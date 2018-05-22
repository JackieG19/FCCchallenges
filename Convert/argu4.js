//&, <, >, " (double quote), and ' (apostrophe)

var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot', "'": '&apos'};

function convertHTML(str) {
    return str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
}

console.log(convertHTML("Dolce & Gabbana"));