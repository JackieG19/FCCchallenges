//&, <, >, " (double quote), and ' (apostrophe)

var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot', "'": '&apos'};

function convertHTML(str) {
    var strArray = str.split('');
    strArray = strArray.map(function(char) {return hashMap[char] ? hashMap[char] : char;});
    str = strArray.join('');
    return str;
}

console.log(convertHTML("Dolce & Gabbana"));