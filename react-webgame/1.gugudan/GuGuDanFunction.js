const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const [count, setCount] = React.useState(0);
    const inputRef = React.useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        let resultTmp = first * second;
        if(parseInt(value) === resultTmp){
  
            setResult("정답 : " + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');

            setCount(count+1);

            inputRef.current.focus();
           
        }else{
            setResult("땡!!");
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) =>{
        setValue(e.target.value);
    };
    

    return (
        <React.Fragment>
                <div>{first} 곱하기 {second}는?</div>
                <form onSubmit={onSubmit}>
                    <input ref={inputRef} type="number" value={value} 
                        onChange = {onChangeInput}/>
                    <button>입력!</button>
                </form>
                <div id = "result">{result}</div>
                <div>정답 횟수 : {count}</div>
        </React.Fragment>   
    );

}

ReactDOM.render(<GuGuDan/>,document.querySelector('#root'));