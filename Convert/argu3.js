//&, <, >, " (double quote), and ' (apostrophe)

var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot', "'": '&apos'};

function convertHTML(str) {
    var str = str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
    return str;
}

console.log(convertHTML("Dolce & Gabbana"));