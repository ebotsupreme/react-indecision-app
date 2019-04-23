// visibilityToggle App

class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }    

    handleToggleVisibility () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });

    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {
                    this.state.visibility ? 'Hide details' : 'Show details'
                }
            </button>
            {this.state.visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
            </div>
        );
    }
    
}
ReactDOM.render(<Visibility />, document.getElementById('app'));






// let visibility = false;

// // function
// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id="detailBtn" onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>    
//             )}            
//         </div>
//     );
//     // reactdom
//     ReactDOM.render(jsx, document.getElementById('app'));
// }
// // render func call
// render();
