console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Some extra info',
    options: ['One', 'Two']
}


// JSX - JavaScript XML
const template = (
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

// let userName = 'Mikey Jones';
// let userAge = 27;
// let userLocation = 'Los Angeles';

const user = {
    name: 'Eddie',
    age: 26,
    location: 'Philly'
}

function getLocation(location) 
{

    if (location) {
        return <p>Location: {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

const appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot2);