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

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} >+1</button>
    </div>
);
console.log(templateTwo);

const appRoot2 = document.getElementById('app2');

ReactDOM.render(templateTwo, appRoot2);