export default function stringMirror(str) {
    if(!str) return false;
    let invertedStr = '';
    for (let i = 0; i <= str.length; i++) {
        invertedStr += str.slice(-1 - i, str.length - i);
    }
    return [str, invertedStr];
}

//module.exports = stringMirror;