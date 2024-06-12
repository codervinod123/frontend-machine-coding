import React, { useEffect,useState } from 'react'
import Pill from './Pill';

const SuggestionBox = () => {

    const [suggestions,setSuggestions]=useState([]);
    const [selectedUser,setSelectedUser]=useState([]);
    const [search,setSearch]=useState('');
    
    useEffect(()=>{
        getUserData();
    },[search])

    const getUserData=async()=>{
        const data=await fetch(`https://dummyjson.com/users/search?q=${search}`);
        const json=await data.json();
        setSuggestions(json.users);
        console.log(json);
    }

    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }

    const addUser=(data)=>{
        setSelectedUser([...selectedUser,data]);
        if(selectedUser.length>=0){
            setSuggestions((prev)=>{
                const data=prev.filter((val,i)=>{
                    return val.id==selectedUser[i].id;
                })
                return data;
            })
        }
    }

  return (
    <div className='h-[70%] w-[60%] border mx-auto bg-gradient-to-tl from-violet-500 to-indigo-500 rounded-md'>
         <div className='flex pt-6 justify-center'>
            <div className='bg-white w-[50%] flex gap-x-2 gap-y-1 flex-wrap p-2 rounded-md'>
               {
                 selectedUser.map((data)=>{
                    return(
                         <Pill key={data.id} data={data}/>
                    )
                 })
               } 
              <input value={search} onChange={(e)=>handleSearch(e)} className='px-4 py-1 rounded-lg outline-none w-[50%]' type="text" />
            </div>
         </div>
         {
          search && suggestions.length>0 ?
         <div className='flex justify-center'>
          <ul className='flex flex-col w-[50%] overflow-auto max-h-[300px] bg-white rounded-md mt-2 px-4 py-2'>
              {
                 suggestions.map((data)=>{
                    return(
                        <li onClick={()=>addUser(data)} key={data.id} className={`bg-white hover:bg-gray-300 px-2 cursor-pointer shadow-2xl flex gap-x-4 py-2`}>
                            <img className='h-[20px] w-[20px] ' src={data.image} alt="" />
                            <span>{data.firstName}</span>
                        </li>
                    )
                 }) 
              }
          </ul>
         </div>:""
        }
    </div>
  )
}

export default SuggestionBox
