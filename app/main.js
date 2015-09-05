var component = require('./component.js');
var app = document.createElement('div');

app.appendChild(component());

document.body.appendChild(app);
