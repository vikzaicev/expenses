function isOpposite(s1, s2) {
    if (s1.length == 0 && s1.length != s2.length) return false;
    s1.toLow
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] == s2[i]) return false;
        else return true;
    }
}
//isOpposite("ab", "AB")

function computerToPhone(numbers) {
    let res = []
    for (let num of numbers) {
        if (num == '7') res.push(1)
        if (num == '8') res.push(2)
        if (num == '9') res.push(3)
        if (num == '1') res.push(7)
        if (num == '2') res.push(8)
        if (num == '3') res.push(9)
        if (num == '4') res.push(4)
        if (num == '5') res.push(5)
        if (num == '6') res.push(6)
    }
    console.log(res.join(''));
}
//computerToPhone("94561")


let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split();

function validateBase(num, base) {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    for (let char of num) {

        if (arr.indexOf(char) >= base) {
            return false
        }
    }
    //return true
}
// validateBase('6124', 5)

function shiftLeft(s, t) {
    let counter = 0
    if (s.length > t.length) {
        counter = s.length - t.length
        s = s.slice(counter)
    }
    if (s.length < t.length) {
        counter = t.length - s.length
        t = t.slice(counter)
    }
    while (s != t) {
        s = s.slice(1)
        t = t.slice(1)
        counter += 2
    }
    console.log(counter);
}
// shiftLeft("b", "ab")

function encode(str) {
    let alph = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let res = []
    for (let char of str) {
        if (alph.indexOf(char.toLowerCase()) > 0) {
            res.push(alph.indexOf(char.toLowerCase()))
        }
        else res.push(char)
    }
    console.log(res.join(""));
}
// encode("AbCD5")