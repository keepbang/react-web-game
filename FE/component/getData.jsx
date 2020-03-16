import axios from 'axios';

export async function getDatas(name){

    let url = 'http://localhost:8888/junggo/getItems';
    let options = {
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            params: {
                name: name
            }
        };

    let response = await axios(options);
    return response.data;
    
}