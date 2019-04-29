
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // step 1. set up default state object
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            console.log('mount');
            console.log(json);
            const count = JSON.parse(json);
            console.log('count');
            console.log(count);

            if (count) {
                this.setState(() => ({ count }));
            }

        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count.toString().length !== this.state.count.toString().length) {
            console.log('xxxx');
            console.log(prevState.count.length);
            console.log('yyyy');
            console.log(this.state.count.length);
            console.log('zzzzz');
            console.log('saving data!');
            console.log('prevState');
            console.log(prevState);
            const json = JSON.stringify(this.state.count);
            console.log(isNaN(json));
            localStorage.setItem('count', json);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
           return {
               count: prevState.count + 1
           }; 
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        }); 
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1> 
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
