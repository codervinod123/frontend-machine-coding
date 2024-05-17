import React,{useState,useEffect} from "react";
const SearchBox=()=>{

    const [searchText,setSearchText]=useState('');
    const [suggestions,setSuggestions]=useState([]);
    const handleChange=(e)=>{
        setSearchText(e.target.value);
    }

    useEffect(() => {
            
            const timer=setTimeout(()=>{
                getSearchData();
            },400);
            
            return ()=> clearTimeout(timer);


     }, [searchText]);
    
     const getSearchData=async()=>{
           const data=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchText}`);
           const json=await  data.json();
           setSuggestions(json[1]);
     }


    return(
        <div className="flex flex-col w-[full] pt-8">
          
           <input
              className="h-[30px] w-[400px] px-2 py-1 outline-none border border-gray-400 rounded-full" 
              value={searchText}
              type="text"
              onChange={(e)=>handleChange(e)}
           />
             
    
            <ul className={`border bg-gray-500 rounded-md px-4 py-4 shadow-2xl text-white ${suggestions.length>0?"":"hidden"}`}>
               {
                suggestions.map((data,index)=>{
                    return (
                        <li key={index} className="bg-gray-500 hover:bg-gray-600 px-4 rounded-md py-1">{data}</li>
                    )
                })
               }
            </ul>

             
        </div>
    )
}

export default SearchBox;