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
