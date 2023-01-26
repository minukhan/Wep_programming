import React, {useEffect ,useState} from 'react';
import axios from 'axios';

function GitHub(){

    const[data,setData]= useState([]);
     
    useEffect(() => {
        axios.get('https://api.github.com/search/users?q=greg').then(res => {

            console.log(res.data.items);
        });
    },[])

    return (

        <div>

        </div>
    );
}
export default GitHub;