// visibilityToggle App

let visibility = false;

// function
const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button id="detailBtn" onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>    
            )}            
        </div>
    );
    // reactdom
    ReactDOM.render(jsx, document.getElementById('app'));
}
// render func call
render();
