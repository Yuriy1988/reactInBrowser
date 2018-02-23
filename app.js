class CoolComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                <h1>{this.state.count}</h1>
                <h1>{this.props.title}</h1>
                <img src={this.props.src} />
                <p>{this.props.description}</p>
            </div>
        );
    }
}

const tecknologies = [
    {
        id: 1,
        title: 'React',
        src: './img/react.png',
        description: 'Library',
    },
    {
        id: 2,
        title: 'Angular',
        src: './img/angular.png',
        description: 'Framework',
    },
    {
        id: 3,
        title: 'ember',
        src: './img/ember.png',
        description: 'Library',
    },
];

function List(props) {
    return (
        <div>
            {props.data.map(tecknologie => (
                <CoolComponent
                    key={tecknologie.id}
                    title={tecknologie.title}
                    src={tecknologie.src}
                    description={tecknologie.description}
                />
            ))}
        </div>
    )
}

ReactDOM.render(
    <List data={tecknologies} />,
    document.getElementById('root')
);
