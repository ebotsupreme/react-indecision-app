'use strict';

// Visibility Toggle

// array
var myMsg = "Hey. Theres are some details you can now";
var toggleMsg = void 0;

// function
var toggle = function toggle() {
    console.log('toggle on');
    toggleMsg = myMsg;
    console.log(toggleMsg);
    render();
};

// element to show
var appRoot = document.getElementById('app');

var render = function render() {
    // template
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            'Show details'
        ),
        React.createElement(
            'p',
            null,
            toggleMsg
        )
    );
    // reactdom
    ReactDOM.render(template, appRoot);
};
// render func call
render();
