import React, {useEffect ,useState} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Card from 'react-bootstrap/Card';


function GitHub(){

    const[data,setData]= useState([]);
    const[searchTerm,setSearchTerm]= useState("");
    const[isLoading,setIsLoading]=useState(false); 
    const [error,setError] = useState(null);
     
    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`).then(res => {
            setData(res.data.items);
            setIsLoading(false);

        });
        
    }
    const handleSubmit = event =>{
        event.preventDefault();
        setIsLoading(true);
        getData();
    }

    const listUsers = data.map((user)=>
        <Card key={user.id}>
            
            <a href={user.html_url}>
                <img
                    width = {64}
                    height = {64}
                    className='mr-3'
                    src= {user.avatar_url}
                    alt = 'Generic palceholder'
                />
            </a>
            <Card.Body>
                <h5>Login : {user.login}</h5>
                <p>Id : {user.id} </p>
            </Card.Body>
        </Card>
    
    )

    return ( 

        <div>
            <from onSubmit={handleSubmit}>
                <input
                    type = 'text'
                    onChange={event=>setSearchTerm(event.target.value)}
                />
                <button type = 'submit'>Search</button>        
            </from>
            <h3>GitHub Users Results</h3>
            {isLoading && <ReactLoading type='spinningBubbles' color='#444'/>
            
            }
            {listUsers}
            {error && <div className='text-red-font-bold'>{error.message}</div>}
        </div>
    );
}
export default GitHub; 