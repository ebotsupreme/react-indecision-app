// Visibility Toggle

// array
const myMsg = "Hey. Theres are some details you can now";
let showDetails = "Show Details";
let hideDetails = "Hide Details";
let toggleMsg;
let temp;

// function
const toggle = () => {
    console.log('toggle on');
    toggleMsg = myMsg;
    console.log(toggleMsg);
    const toggleDetails = document.getElementById('detailBtn').innerHTML;
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
}

// element to show
const appRoot = document.getElementById('app');

const render = () => {
    // template
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="detailBtn" onClick={toggle}>{showDetails}</button>
            <p>{toggleMsg}</p>
            
        </div>
    );
    // reactdom
    ReactDOM.render(template, appRoot);
}
// render func call
render();
