const data = [
    {
      title: 'React',
      src: './img/react.png',
    },
    // {
    //     title: 'Angular',
    //     src: './img/angular.png',
    // },
    // {
    //     title: 'Ember',
    //     src: './img/ember.png',
    // }
];

class SomeComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0,
            inputValue: 'hello!!',
            data,
        };
    }

    componentDidMount() {
        console.log('componentDidMount')
    }


    handleClick() {
        this.setState({
            countValue: this.state.countValue + 1,
        });
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        return (
            <div style={{ background: this.state.inputValue }}>
                {this.state.inputValue === '000' && 'Hello'}
                <h1> count value {this.state.countValue}</h1>
                <h1>{this.props.title}</h1>
                <img
                    src={this.props.src}
                    onClick={this.handleClick.bind(this)}
                />
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        )
    }
}


ReactDOM.render(
    <div>
        {data.map(elem => {
            return (
                <SomeComponent
                    key={elem.title}
                    title={elem.title}
                    src={elem.src}
                />
            )
        })}
    </div>,
    document.getElementById('root')
);