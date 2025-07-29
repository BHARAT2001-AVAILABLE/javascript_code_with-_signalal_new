osmo
6:53 AM
Read message aloud
// There is a piece of code intended to convert a given string to uppercase. However, there's a subtle bug in it. Your task is to spot the issue and fix it. Keep in mind that only letter characters in the string should be converted to uppercase.
// Sure! Here are a couple of things to consider:

// Your regular expression /^[a-zA-Z ,!]$/ is testing the entire text string, not the current character c.
// You want to check each character, so use .test(c) instead of .test(text).
// Also, if you want to keep special characters (like spaces, commas, exclamation marks) unchanged, you’ll need an else block to add them as they are.
// What do you think should go in the else part of your loop?


function processText(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        if (/^[a-zA-Z]$/.test(c)) {
            newText += c.toUpperCase();
        }
    }
    console.log("Processed Text:", newText);
}

processText("Happy Coding, Friends!");