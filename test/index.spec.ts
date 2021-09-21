

import { reverse, isPalindrome, intReverse, fizzBuzz } from '../src/index';
import { expect } from 'chai';
import 'mocha';

describe('Reverse function testing', () => {
    it('Should reverse a string', () => {
        expect(reverse('Hello World!')).to.eql('!dlroW olleH')
    })
});

describe('Palindrome function testing', () => {
    it('Should return true', () => {
        expect(isPalindrome('Cigar? Toss it in a can. It is so tragic')).to.be.true;
    });
    it('Should return false', () => {
        expect(isPalindrome('sit ad est love')).to.be.false;
    });
});

describe('Integer reversal function testing', () => {
    it('Should reverse integer', () => {
        expect(intReverse(1234)).to.eql(4321);
        expect(intReverse(-1200)).to.eql(-21);
    });
});

describe('Fizz Buzz function testing', () => {
    let output: any[] = [];

    beforeEach(() => (output = fizzBuzz(30)));
    
    it('Should output number', () => {
        expect(output[0]).to.eql(1);
    });
    it('Should output Fizz', () => {
        expect(output[1]).to.eql('Fizz');
    });
    it('Should output Buzz', () => {
        expect(output[2]).to.eql('Buzz');
    });
    it('Should output Fizz Buzz', () => {
        expect(output[5]).to.eql('Fizz Buzz');
    });
});