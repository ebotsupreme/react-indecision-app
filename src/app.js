console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Some extra info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    const option = e.target.elements.option.value; // target is synthetic event, elemtns are what is avail to us in the dom, option is the name of input

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    // re-render
    renderFunction();
};


// Remove all button
// onclick wipe array and rerender
const removeAll = () => {
    
    app.options = [];
    // console.log(app.options);
    renderFunction();
}


const appRoot = document.getElementById('app');

const renderFunction = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>

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

    ReactDOM.render(template, appRoot);

}


// initialize app render
renderFunction();