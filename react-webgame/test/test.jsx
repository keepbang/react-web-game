import React, {useState,useRef,memo} from 'react';

const Test = () => {
    const [name,setName] = useState('bang');
    const [result,setResult] = useState([]);
    

    const setArray = (e) =>{
        e.preventDefault();        
        setResult((preResult)=>{
            return [...preResult,name];
        });
    }
    
    const changeName = (e) => {
        setName(e.target.value);
    }

    return (
        
        <>
            {console.log(result)}
            <form onSubmit={setArray}>
              <input value={name} onChange={changeName}></input>
              <button>배열 입력</button>
            </form>
            <div>결과 : {result.map((v) => {
                return v + " | ";
            })}
            </div>
        </>
    )
};

export default Test;