"use strict";

// Visibility Toggle

// array
var myMsg = "Hey. Theres are some details you can now";
var initialDetail = "Show Details";
var showDetails = "Show Details";
var hideDetails = "Hide Details";
var toggleMsg = void 0;
var temp = void 0;
var counter = 0;

// function
var toggle = function toggle() {
    console.log('toggle on');
    toggleMsg = myMsg;
    console.log('ctoggleMsg');
    console.log(toggleMsg);

    var toggleDetails = document.getElementById('detailBtn').innerHTML;

    console.log('ctoggleDetails');
    console.log(toggleDetails);
    console.log('cshowDetails');
    console.log(showDetails);
    console.log('chideDetails');
    console.log(hideDetails);
    if (toggleDetails == showDetails) {
        console.log('if ( ' + toggleDetails + '==' + showDetails + ')');
        counter = 1;
        console.log('counter: ' + counter);
        toggleDetails = document.getElementById('detailBtn').innerHTML = hideDetails;
        console.log('FtoggleDetails');
        console.log(toggleDetails);
    } else if (toggleDetails == hideDetails) {
        console.log('if ( ' + toggleDetails + '==' + hideDetails + ')');
        counter = 0;
        console.log('counter: ' + counter);
        toggleDetails = document.getElementById('detailBtn').innerHTML = showDetails;
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
