'use strict';

// visibilityToggle App

var visibility = false;

// function
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { id: 'detailBtn', onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can now see!'
            )
        )
    );
    // reactdom
    ReactDOM.render(jsx, document.getElementById('app'));
};
// render func call
render();
