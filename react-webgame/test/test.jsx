const Test = () => {
    const [name,setName] = React.useState('bang');
    const [number,setNumber] = React.useState(10);
    const inputRef = React.useRef(null);

    return (
        <React.Fragment>
            <div>name : {name}</div>
            <div>number : {number}</div>
        </React.Fragment>
    )
};


ReactDOM.render(<Test/>,document.querySelector('#root'));