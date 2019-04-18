// Visibility Toggle

// array
const myMsg = "Hey. Theres are some details you can now";
let toggleMsg;

// function
const toggle = () => {
    console.log('toggle on');
    toggleMsg = myMsg;
    console.log(toggleMsg);
    render();
}

// element to show
const appRoot = document.getElementById('app');

const render = () => {
    // template
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>Show details</button>
            
                <p>{toggleMsg}</p>
            
        </div>
    );
    // reactdom
    ReactDOM.render(template, appRoot);
}
// render func call
render();
