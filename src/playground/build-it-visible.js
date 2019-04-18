// Visibility Toggle

// array
const myMsg = "Hey. Theres are some details you can now";
let initialDetail = "Show Details";
let showDetails = "Show Details";
let hideDetails = "Hide Details";
let toggleMsg;
let temp;
let counter = 0;

// function
const toggle = () => {
    console.log('toggle on');
    toggleMsg = myMsg;
    console.log('ctoggleMsg');
    console.log(toggleMsg);

    let toggleDetails = document.getElementById('detailBtn').innerHTML;

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
