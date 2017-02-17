require('./login');
require('../css/bootstrap.css');
require('../css/app.css');

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');
document.getElementById('img_container').appendChild(img);

console.log('Welcome to Big Hair Concerts!!');

console.log('App loaded');