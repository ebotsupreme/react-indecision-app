class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>

                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option} />
                    })
                }
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption (e) {
         e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            this.props.handleAddOption(option);
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));