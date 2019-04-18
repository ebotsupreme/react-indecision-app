// Visibility Toggle App
const myMsg = "Hey. Theres are some details you can now";
let initialDetail = "Show Details";
let showDetails = "Show Details";
let hideDetails = "Hide Details";
let toggleMsg;
let temp;
let counter = 0;

// function
const toggle = () => {
    toggleMsg = myMsg;
    let toggleDetails = document.getElementById('detailBtn').innerHTML;
    if (toggleDetails == showDetails) {
        counter = 1;
        toggleDetails = document.getElementById('detailBtn').innerHTML = hideDetails;        
    } else if (toggleDetails == hideDetails) {
        counter = 0;
        toggleDetails = document.getElementById('detailBtn').innerHTML = showDetails;
        toggleMsg = '';
    }
    render();
}

// element to show
const appRoot = document.getElementById('app');

const render = () => {
    // template
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="detailBtn" onClick={toggle}>{(counter == 0) ? showDetails : hideDetails}</button>
            <p>{toggleMsg}</p>
            
        </div>
    );
    // reactdom
    ReactDOM.render(template, appRoot);
}
// render func call
render();
