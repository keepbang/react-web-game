import React, {useState} from 'react';

const SearchComp = (props) =>{

    const [searchParam,setSearchParam] = useState('');
    

    const getFromResponse = (e) => {
        e.preventDefault();
        props.onSubmit(searchParam);
    }
    

    const onChangeInput = (e) => {
        setSearchParam(e.target.value);
    }

    return (
        
        <>
            <form onSubmit={getFromResponse}>
                <input className="searchBox" value={searchParam} onChange={onChangeInput}></input>
                <button className="searchBtn">검색</button>
            </form>
        </>
    )

}

export default SearchComp;