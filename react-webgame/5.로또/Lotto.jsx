import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import Ball from './Ball';

function getWinNumbers(){
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0,6).sort((p,c) => p - c);
    return [...winNumbers, bonusNumber];
}

const Lotto = () => {
    //useMemo는 함수의 값(return)을 기억해서 반복실행안되게함
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    // 1.useEffect의 inputs(2번째 인자)이 빈배열이면 componentDidMount와 똑같은 기능을 한다
    // 2.inputs 배열의 요소가 있으면 componentDidMount와 componentDidUpdate 둘 다 수행
    useEffect(() => {
        console.log("useEffect");
        for(let i = 0; i < winNumbers.length -1; i++){
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        //componentWillUnmount자리
        return () => {
            console.log("componentWillUnmount");
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]);

    //useCallback : 함수 자체를 기억한다. 함수 생성자체가 오래걸릴때 사용한다. 자식컴포넌트에 props로 함수를 넘겨줄때 useCallback사용해야함
    const onClickRedo = useCallback(() => {
        console.log("onClickRedo");
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    },[winNumbers]);

    return ( 
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v}/>)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus}/>}
            {redo && <button onClick={onClickRedo}>한번 더!</button>}
        </>
    );
};



export default Lotto;