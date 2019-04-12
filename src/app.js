console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var userName = 'Mikey Jones';
var userAge = 27;
var userLocation = 'Los Angeles';
var templateTwo = (
    <div>
        <h1>{userName.toUpperCase()}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);

var appRoot = document.getElementById('app');

var appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot2);