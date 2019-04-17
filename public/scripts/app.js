'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Some extra info',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // stop page refresh

    var option = e.target.elements.option.value; // target is synthetic event, elemtns are what is avail to us in the dom, option is the name of input

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    // re-render
    renderFunction();
};

var renderFunction = function renderFunction() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            'Subtitle: ',
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

// initialize app render
renderFunction();
