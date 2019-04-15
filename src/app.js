console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Some extra info',
    options: ['One', 'Two']
}


// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var userName = 'Mikey Jones';
var userAge = 27;
var userLocation = 'Los Angeles';

var user = {
    // name: 'Eddie',
    // age: 26,
    // location: 'Philly'
}

function getLocation(location) 
{

    if (location) {
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

var appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot2);