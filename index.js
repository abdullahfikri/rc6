// rotate right input x, by n bits
const ROR = function (x, n, bits = 32) {
    const mask = 2 ** n - 1;
    const mask_bits = x & mask;
    return (x >> n) | (mask_bits << (bits - n));
};

// rotate left input x, by n bits
const ROL = function (x, n, bits = 32) {
    return ROR(x, bits - n, bits);
};

/**
 * #convert input sentence into blocks of binary
 * #creates 4 blocks of binary each of 32 bits.
 */
const blockConverter = function (sentence) {
    const encoded = [];
    let res = '';
    for (let i = 0; i < sentence.length; i++) {
        if (i % 4 == 0 && i != 0) {
            encoded.push(res);
            res = '';
        }
        const unicodeCharAt = sentence.charCodeAt(i);
        let temp = unicodeCharAt.toString(2);
        if (temp.length < 8) {
            temp = temp.padStart(8, '0');
        }
        res = res + temp;
    }
    encoded.push(res);
    return encoded;
};
console.log(blockConverter('aasdas'));

/**
 * #converts 4 blocks array of long int into string
 */

const deBlocker = function (blocks) {
    let s = '';
    for (const element of blocks) {
        let temp = element.toString(2);
        if (temp.length < 32) {
            temp = temp.padStart(32, '0');
        }
        for (let i = 0; i < 4; i++) {
            // s =
        }
    }
};
