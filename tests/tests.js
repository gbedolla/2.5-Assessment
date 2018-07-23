module.exports = {
    beforeEach: function (browser) {
        let pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
    },
    after: function (browser) {
        browser.end()
    },
//     //Test to display even numbers in the even field, odd numbers in odd field
    'Even and Odds': function (browser) {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@evenOddInput', '1,2,3,4')
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.contain('2,4')
         pageObjects
            .expect.element('@oddResults').text.to.contain('1,3')
    },

//     //Test to display all elements with the word "title"
    'Filter Objects': function (browser) {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@filterObjectInput', 'title')
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.contain('{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" }')

    },

//   //Test to display all elements with a "J"
    'Filter Strings': function (browser) {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@filterStringInput', 'J')
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('[ "James", "Jessica", "Jennifer" ]')
         },

//          //Test to see if "racecar" is a palindrome
    'Palindrome': function (browser) {
        let pageObjects = browser.page.pageObjects()
        pageObjects
            .setValue('@palindromeInput', 'racecar')
            .click('@palindromeButton')
            .expect.element('@palindromeResult').text.to.contain('true')
    },

//     //Test to see if sum of  64+46=110
    'Sum': function (browser) {
        let pageObjects = browser.page.pageObjects()
        pageObjects
        .setValue('@sumButton1', '46')
        .setValue('@sumButton2', '64')
        .click('@addButton')
        .expect.element('@sumResults').text.to.contain('110')

    },
}