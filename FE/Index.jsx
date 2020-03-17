import React, {useState,useRef,memo} from 'react';
import SearchComp from './component/SearchComp';
import * as service from './component/getData';
import Chart from "chart.js";
import {Bar} from 'react-chartjs-2';

const data = {
    labels : ["data"],
    datasets : [{
        barPercentage : 0.1,
        // minBarLength: 0,
        borderSkipped: "top",
        borderWidth: 0,
        offset: true,
        data: [0],
        backgroundColor: "rgba(220,220,220,0.5)",
    }]

};

const Index = () => {
    
    const [param,setParam] = useState('');
    const [result,setResult] = useState([]);
    const chart = useRef(null);

    const getToResponse = async(param) => {
        setParam(param);
        // let responseJson = await service.getDatas(param);
        let responseJson = [{
            "name" : "250000",
            "num" : 10
        },
        {
            "name" : "310000",
            "num" : 7
        },
        {
            "name" : "270000",
            "num" : 4
        },
        {
            "name" : "320000",
            "num" : 1
        },
        {
            "name" : "220000",
            "num" : 4
        },
        ];
        setResult(responseJson);

        let label = [];
        let datas = [];

        for(let a of responseJson){
            label.push(a.name);
            datas.push(a.num);
        }

        data.labels = label;
        data.datasets[0].data = datas;

    }

    return (
        
        <>
            <SearchComp onSubmit={getToResponse}></SearchComp>
            <div>
                {
                    result.map((v,i) => {
                        return(
                            <li key={v.name+v.num}>{v.name} - {v.num}</li>
                        );
                    })

                }
            </div>
            <Bar ref={chart} data={data} style={{width:"500px", height:"500px"}}></Bar>
        </>
    )
};

export default Index;