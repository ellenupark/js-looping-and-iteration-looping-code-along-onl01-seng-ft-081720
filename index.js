// Code your solutions in this file
function writeCards(string, event) {
    const result = []
    for (let i = 0; i < string.length; i++ ) {
        result.push(`Thank you, ${string[i]}, for the wonderful ${event} gift!`);
    }
    return result
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}