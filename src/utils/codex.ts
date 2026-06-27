// utils/codex.ts

/**
 * 1. Convert a string of text into an array of ASCII numbers.
 * Example: "Hello" -> [72, 101, 108, 108, 111]
 */
export function textToAscii(payload: string): number[] {
    const asciiArray = [];
    for (let i = 0; i < payload.length; i++) {
        asciiArray.push(payload.charCodeAt(i));
    }
    return asciiArray;
}

/**
 * 2. Convert an array of ASCII numbers into a target base (codex) as strings.
 * Example: 72 to Base 14 -> "52"
 * Enforces uppercase characters for bases > 10 (e.g., "7A").
 */
export function asciiToCodex(asciiArray: number[], targetBase: number): string[] {
    return asciiArray.map(asciiNum => {
        return asciiNum.toString(targetBase).toUpperCase();
    });
}

/**
 * 3. Serialize the codex array into a flat binary stream for the space void.
 * Converts each character of the codex string into an 8-bit binary representation.
 */
export function codexToBinaryStream(codexArray: string[]): string {
    return codexArray.map(str => {
        let binaryStr = "";
        for (let i = 0; i < str.length; i++) {
            binaryStr += str.charCodeAt(i).toString(2).padStart(8, '0');
        }
        return binaryStr;
    }).join("");
}

/**
 * 4. Convert a target base string back into a standard ASCII number.
 * Example: "242" (from Base 5) -> 72
 */
export function codexToAscii(codexArray: string[], sourceBase: number): number[] {
    return codexArray.map(codexStr => {
        return parseInt(codexStr, sourceBase);
    });
}

/**
 * 5. Convert an array of ASCII numbers back into readable text.
 * Example: [72, 101, 108, 108, 111] -> "Hello"
 */
export function asciiToText(asciiArray: number[]): string {
    return String.fromCharCode(...asciiArray);
}


// ==========================================
// MASTER WRAPPER FUNCTIONS (For Module 1)
// ==========================================

/**
 * MASTER SEND FUNCTION
 * Converts raw text all the way to a binary stream for a specific destination planet.
 */
export function encodePayloadForVoid(payload: string, targetBase: number): string {
    const ascii = textToAscii(payload);
    const codex = asciiToCodex(ascii, targetBase);
    const binary = codexToBinaryStream(codex);
    
    return binary; 
}

/**
 * MASTER RECEIVE FUNCTION
 * Converts an array of codex strings back into readable text upon arrival.
 */
export function decodePayloadFromVoid(codexArray: string[], sourceBase: number): string {
    const ascii = codexToAscii(codexArray, sourceBase);
    const text = asciiToText(ascii);
    
    return text;
}