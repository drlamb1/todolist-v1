
module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate(){

const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
};

let today = new Date();
let currentDay = today.toLocaleDateString('en-US', options);
return currentDay;

}

function getDay(){

const options = {
  weekday: 'long',
};

let today = new Date();
let currentDay = today.toLocaleDateString('en-US', options);
return currentDay;

}
