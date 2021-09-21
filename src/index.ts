const reverse = (userString: string): string => {
    const arrayOfCharacters: string[] = userString.split('').reverse();
    const result: string = arrayOfCharacters.join('');

    return result;
}

const isPalindrome = (text: string): boolean => {
    const formattedtext = text.replace(/[^\w]/g, '').toLowerCase();

    return formattedtext === reverse(formattedtext) ? true : false; 
}

const intReverse = (numberToReverse: number): number => {
    const stringifiedNumber: string = numberToReverse.toString();
    const reversedNumber: number = parseInt(reverse(stringifiedNumber)) * Math.sign(numberToReverse);

    return reversedNumber;
    
}

const fizzBuzz = (length: number): any[] => {
    let resultArray: any[] = [];
    
    for (let i: number = 1; i < length; i++) {
        if (i % 6 === 0) {
            resultArray.push('Fizz Buzz');
        }

        else if (i % 2 === 0) {
            resultArray.push('Fizz');
        }

        else if (i % 3 === 0) {
            resultArray.push('Buzz');
        }

        else {
            resultArray.push(i);
        }
    }
    
    return resultArray;
}

export { reverse, isPalindrome, intReverse, fizzBuzz };