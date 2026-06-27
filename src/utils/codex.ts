// utils/codex.ts

/**
 * 1. Convert a string of text into an array of ASCII numbers.
 * Example: "H" -> [72]
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
 * Example: 72 to Base 5 -> "242"
 */
export function asciiToCodex(asciiArray: number[], targetBase: number): string[] {
    return asciiArray.map(asciiNum => {
        // .toString(base) is a built-in JS feature that handles base conversion!
        return asciiNum.toString(targetBase);
    });
}

/**
 * 3. Serialize the codex array into a flat binary stream for the space void.
 * (This converts the string representations directly into binary)
 */
export function codexToBinaryStream(codexArray: string[]): string {
    // Converts each character of the codex strings into binary and joins them
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
        // parseInt(string, base) converts it back to standard Base 10 (ASCII)
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