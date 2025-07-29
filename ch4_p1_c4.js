// In this exercise, your goal is to implement the logic for a simple text encryption using the Caesar Cipher in JavaScript. You will need to fill in the placeholders to provide the correct calculations required to shift the characters within a string.


// Simple text encryption using Caesar Cipher technique
// The Caesar Cipher for `shift = 3` cyclically shifts every letter of the word by 3 positions:
// a -> d, b -> e, c -> f, ..., x -> a, y -> b, z -> c

// Implement the encryption logic by shifting each alphabet character
function encryptText(text) {
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (/[a-zA-Z]/.test(c)) {  // check if the character is a letter
            let shift = 3;
            // TODO: Use correct calculations to shift the character within the alphabet
            if(c === c.toUpperCase()) {
             encrypted += String.fromCharCode(((c.charCodeAt(0)-65 +3)%26) + 65);
            }
            else if(c === c.toLowerCase()) {
             encrypted += String.fromCharCode(((c.charCodeAt(0)-97 +3)%26) + 97);
            }
            
            
            // Hint: 'A' = 65, 'a' = 97
            // Hint 2: You can use the modulo (%) operator to wrap around the alphabet
        } else {
            encrypted += c;  // keep non-letter characters unchanged
        }
    }
    return encrypted;
}

// Example text to encrypt
let originalText = "Hello, JavaScript!";
// The encryptText function call and console.log statement should remain the same as the solution
let encryptedText = encryptText(originalText);
console.log(encryptedText);  // Correct output after TODO should be 'Khoor, MdydVfulsw!'