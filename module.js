let date = new Date();
const os = require ('os');
const user = os.hostname();
let hour = date.getHours();

exports.userGreeting = function() {
if (5 <= hour && hour < 11) {
    return (`Good morning ${user}!`);
} else if (11 <= hour && hour < 17) {
    return (`Good afternoon ${user}!`);
} else if (17 <= hour && hour < 23) {
    return (`Good evening ${user}!`);
} else {
    return (`Good night ${user}!`);
}
};

exports.getDate = () => date;


// const customModule = require(`../module_nodejs/module.js`);
// response.write(`<h3>${customModule.userGreeting()}</h3>`);
