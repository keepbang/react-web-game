import React,{useState,  useCallback, useContext,memo} from 'react';
import {TableContext, START_GAME} from './Mine'


const Form = memo(() => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);
    const { dispatch } = useContext(TableContext);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    },[]);

    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    },[]);

    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    },[]);

    const onClickBtn = useCallback(
        () => {
            dispatch({type: START_GAME, row, cell, mine});
;        },
        [row, cell, mine],
    )

    return (
        <div>
            세로    : <input className="box" type="number" placeholder="세로" value={row} onChange={onChangeRow}/><br/>
            가로    : <input className="box" type="number" placeholder="가로" value={cell} onChange={onChangeCell}/><br/>
            지뢰 수  : <input className="box" type="number" placeholder="지뢰" value={mine} onChange={onChangeMine}/><br/>
            <button onClick={onClickBtn}>시작</button><br/>
        </div>

    );
});

export default Form;