
const React = require('react');
const {useState, useRef} = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        let resultTmp = first * second;
        if(parseInt(value) === resultTmp){
  
            setResult("정답 : " + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');

            setCount((c) => c + 1);

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
        <>
                <div>{first} 곱하기 {second}는?</div>
                <form onSubmit={onSubmit}>
                    <input ref={inputRef} type="number" value={value} 
                        onChange = {onChangeInput}/>
                    <button>입력!</button>
                </form>
                <div id = "result">{result}</div>
                <div>정답 횟수 : {count}</div>
        </>   
    );

}

module.exports = GuGuDan