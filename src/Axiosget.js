import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Name from './name';

function Axiosget() {
    const[names,setNames]=useState("");
    const noNames=!names||(names&& names.length===0);
    const [formData,setFormData]=useState({});

    const getNames=async()=>{
        const response =await axios.get('https://jsonplaceholder.typicode.com/users').catch((err)=> console.log(err));
        console.log("Response",response);
        if(response && response.data)
        setNames(response.data)
    
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

   
    const addName= async()=>{
        const response =await axios.post('https://jsonplaceholder.typicode.com/users',formData).catch((err)=> console.log(err));
        if (response)
        getNames();
    };


    useEffect(()=>{
       getNames();
    },[])



   

 return (
        <div>
            <h1>Students</h1>
            { noNames&&   <h2>No Names Found!</h2>}
            {!noNames&&  names.map((username,id)=>(
                <Name key={id} {...username}/>
            ))}
            <h2>Add Members</h2>
            <form onSubmit={addName}> 
                  <span>
                <label htmlFor="id">Id:</label>
              
                <input type="text" name="id" placeholder="id" onChange={handleChange}/>
                </span>
                <br />
                <br />

                <span>
                <label htmlFor="username">UserName:</label>
              
                <input type="text" name="username" placeholder="Name" onChange={handleChange}/>
                </span>
                <br />
                <br />

                <button type="submit" >Add</button>
               
            </form>
            
            
        </div>
    )
}

export default Axiosget
