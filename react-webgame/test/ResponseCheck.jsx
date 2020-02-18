import React, {useState} from 'react';

const ResponseCheck = () => {

    const [state,setState] = useState('waiting');
    const [message,setMessage] = useState('클릭해서 시작하세요');
    const [result,setResult] = useState([]);

    const onClickScreen = () =>{

    }

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}>
                {message}
            </div>
            <div>평균 시간 : {result.reduce((a,c) => a + c) / result.length}ms</div>
        </>
    )
};

export default ResponseCheck;