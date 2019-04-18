"use strict";

// Visibility Toggle

// array
var myMsg = "Hey. Theres are some details you can now";
var showDetails = "Show Details";
var hideDetails = "Hide Details";
var toggleMsg = void 0;
var temp = void 0;

// function
var toggle = function toggle() {
    console.log('toggle on');
    toggleMsg = myMsg;
    console.log(toggleMsg);
    var toggleDetails = document.getElementById('detailBtn').innerHTML;
    console.log('ssss');
    console.log(toggleDetails);
    console.log(showDetails);
    console.log(hideDetails);
    if (toggleDetails == showDetails) {
        showDetails = hideDetails;
        console.log('aaa', showDetails);
    } else if (toggleDetails == hideDetails) {
        temp = showDetails;
        showDetails = temp;
        console.log('bbb', showDetails);
    }
    render();
};

// element to show
var appRoot = document.getElementById('app');

var render = function render() {
    // template
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { id: "detailBtn", onClick: toggle },
            showDetails
        ),
        React.createElement(
            "p",
            null,
            toggleMsg
        )
    );
    // reactdom
    ReactDOM.render(template, appRoot);
};
// render func call
render();
