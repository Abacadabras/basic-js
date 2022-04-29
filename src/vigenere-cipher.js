const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type || arguments.length === 0 ? 'direct' : 'reverse';
    this.alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const bigMessage = message.toUpperCase();
    const bigKey = key.toUpperCase();
    const result = [];
    let currIndex = 0;
    for (let i = 0; i < bigMessage.length; ++i) {
      if (this.alfa.indexOf(bigMessage[i]) === -1) {
        result.push(bigMessage[i]);
      } else {
        result.push(this.alfa[(this.alfa.indexOf(bigMessage[i]) + this.alfa.indexOf(bigKey[currIndex])) % 26]);
        currIndex++;
        currIndex === bigKey.length ? (currIndex = 0) : currIndex;
      }
    }
    return this.type === 'direct' ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const bigMessage = encryptedMessage.toUpperCase();
    const bigKey = key.toUpperCase();
    const result = [];
    let currIndex = 0;
    for (let i = 0; i < bigMessage.length; ++i) {
      if (this.alfa.indexOf(bigMessage[i]) === -1) {
        result.push(bigMessage[i]);
      } else {
        let currLetter = (this.alfa.indexOf(bigMessage[i]) - this.alfa.indexOf(bigKey[currIndex])) % 26;
        currLetter += currLetter < 0 ? 26 : 0;
        result.push(this.alfa[currLetter]);
        currIndex++;
        currIndex === bigKey.length ? (currIndex = 0) : currIndex;
      }
    }
    return this.type === 'direct' ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
