console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Some extra info',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    console.log('form submitted!');

}

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}> 
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
