"use strict";

// Visibility Toggle App
var myMsg = "Hey. Theres are some details you can now";
var initialDetail = "Show Details";
var showDetails = "Show Details";
var hideDetails = "Hide Details";
var toggleMsg = void 0;
var temp = void 0;
var counter = 0;

// function
var toggle = function toggle() {
    toggleMsg = myMsg;
    var toggleDetails = document.getElementById('detailBtn').innerHTML;
    if (toggleDetails == showDetails) {
        counter = 1;
        toggleDetails = document.getElementById('detailBtn').innerHTML = hideDetails;
    } else if (toggleDetails == hideDetails) {
        counter = 0;
        toggleDetails = document.getElementById('detailBtn').innerHTML = showDetails;
        toggleMsg = '';
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
            counter == 0 ? showDetails : hideDetails
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
