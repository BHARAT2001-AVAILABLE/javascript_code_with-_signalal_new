// Your task is to encrypt a message to secure communication. Write a JavaScript function that shifts each letter in the provided text one position forward in the alphabet while keeping non-alphabetical characters unchanged.


function encryptString(text) {
    let encrypted = '';
    
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        // TODO: Check if `c` is a letter and it is not the letter 'z' or 'Z'.
        if (/^[a-yA-Y]$/.test(c)){
        // If it is a letter other than 'z' or 'Z', shift its value by 1 in the ASCII table.
             encrypted += String.fromCharCode(c.charCodeAt(0) + 1);
            }
        // If the letter is 'z', change it to 'a'. If it is 'Z', change it to 'A'.
           else if (/^[zZ]$/.test(c)) {
            encrypted += String.fromCharCode(c.charCodeAt(0) + 32)
            ;
           }
        // If `c` is not a letter, append it unchanged to the encrypted string.
        else {
               encrypted += c
             }
             
    }     
    return encrypted;
}

console.log("The encrypted text is: " + encryptString("Hello, Java!")); // Should print out "Ifmmp, Kbwb!"