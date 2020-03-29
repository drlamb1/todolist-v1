
exports.getDate = function(){

const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
};

let today = new Date();
return today.toLocaleDateString('en-US', options);

}

exports.getDay = function(){

const options = {
  weekday: 'long',
};

let today = new Date();
return today.toLocaleDateString('en-US', options);

}
