// const num = 585;

function numToString(num) {

    const numMap = {
        0:"zero",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine"
    }

    return numMap[num % 10]
}

console.log(numToString(1501));