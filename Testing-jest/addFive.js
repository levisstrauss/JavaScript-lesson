/*
----  node --version
----- npm --version

----- npm init -y => Adding the node module
----- npm install --save-dev jest  => To install jest
----- Don't forget to change "test": "jest" in the package.json file
----- npm run test  => To run the test
----- Create a testing file
 */

function addFive(val) {
    return val + 5;
}

module.exports = addFive;