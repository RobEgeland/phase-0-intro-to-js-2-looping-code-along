
let thankYouMessages = [];

function writeCards(thankYouMessages, event) {
    for (let i = 0; i < thankYouMessages.length; i++) {
        thankYouMessages.splice(i, 1, `Thank you, ${thankYouMessages[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    
    return thankYouMessages 
}

writeCards(["Lisa", "Kaitlin", "Jan"], "Birthday");

function countDown(x) {
    while (x >= 0) {
        console.log(x);
        x--
    }

} 




 