import React,{useState,useEffect} from 'react';
import { useLoaderData } from 'react-router-dom';


const Github = () => {
    
    const data = useLoaderData()
    
    // const [data, setData] = useState([]);
    
    // useEffect(() => {

    //     fetch(`https://api.github.com/users/PratikS06`)
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, []);

    
    return (
        <div className='bg-gray-600 flex flex-col text-white p-4 text-3xl text-center '>
            <h1>Github Profile</h1>
            <div className='flex flex-wrap justify-around'>
            <img className='rounded-full m-3' src={data.avatar_url} alt="profile pic" />
            </div>
            <h1>GitHub User : {data.name}</h1>
            <h1>Your Repositories : {data.public_repos}</h1>
            <h3>Login Id : {data.login}</h3>
        </div>
    );
}

export default Github;

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/PratikS06')
    return response.json()
}