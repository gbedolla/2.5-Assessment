//Selectors needed for testing
module.exports = {
    url:'http://localhost:3000/',
    elements: {
       //Even Odd 
        "evenOddInput" : 'input[name="evenOddInput"]',
        "evenOddButton" : 'button[name="evenOddButton"]',
        "evenResults" : 'span[name="evenResults"]',
        "oddResults" : 'span[name="oddResults"]',
       //Filter Object
        "filterObjectInput" : 'input[name="objectFilterInput"]',
        "filterObjectButton" : 'button[name="objectFilterButton"]',
        "filterObjectResults" : 'span[name="objectFilterResults"]',
        //Filter String
        "filterStringInput" : 'input[id="nameFilterInput"]',
        "filterStringButton" : 'button[id="nameFilterButton"]',
        "filterStringResults" : 'span[name="nameFilterResults"]',
        //Palindrome        
        "palindromeInput" : 'input[name="palindromeInput"]',
        "palindromeButton" : 'button[name="palindromeButton"]',
        "palindromeResult" : 'span[name="palindromeResults"]',
       //Sum
        "sumButton1" : 'input[name="sumInput1"]',
        "sumButton2" : 'input[name="sumInput2"]',
        "addButton" : 'button[name="sumButton"]',
        "sumResults" : 'span[name="sumResults"]'

    }
}
