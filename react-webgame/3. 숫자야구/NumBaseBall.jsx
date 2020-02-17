import React,{useRef,useState,memo} from 'react';
import Try from './Try';

function getNumbers(){//숫자 4개를 랜덤으로 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0;i<4;i+=1){
        const chosen = candidate.splice(Math.floor(Math.random()* (9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}

const NumBaseBall = memo(() =>{

    const [result,setResult] = useState('');
    const [value,setValue] = useState('');
    const [answer,setAnswer] = useState(getNumbers()); //ex : [1,3,5,7]
    const [tries,setTries] = useState([]);
    const inputRef = useRef(null);
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === answer.join('')){
            setResult("홈런!");
            setTries((prevTries) => {
                return [...prevTries,{try:value,result:'홈런'}];
            });
            setResult(`답은 ${answer.join(',')} 이였습니다!`);
            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        }else{
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 이였습니다!`);
                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            }else{
                for(let i = 0;i<4;i += 1){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    }else if(answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries,{try:value,result:`${strike} 스트라이크, ${ball} 볼입니다`}]
                });
                setValue('');
            }
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput}/>
                <button>입력!</button>
            </form>
            <div>시도횟수 : {tries.length}</div>
            <ul>
                {
                    tries.map((v,i)=>{
                        return(
                            <Try key={`${i + 1}차 시도 :`} tryInfo={v}/>
                        );
                    })
                }
            </ul>
        </>
    )
});

//export const hello = 'hello' import {hello}
//export const hello2 = 'hello2' import {hello,hello2}
//많이 사용할 수 있다.

export default NumBaseBall; //import NumBaseBall