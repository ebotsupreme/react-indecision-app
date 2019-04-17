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
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};


const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} >+1</button>
    </div>
);

const templateThree = (
    <div>
        <button onClick={minusOne}>-1</button>
    </div>
);
const templateFour = (
    <div>
        <button onClick={reset}>Reset</button>
    </div>
);



const appRoot = document.getElementById('app');
const appRoot2 = document.getElementById('app2');

ReactDOM.render(templateThree, appRoot);
ReactDOM.render(templateFour, appRoot2);