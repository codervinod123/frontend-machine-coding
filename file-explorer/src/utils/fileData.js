const fileData=[
    {
       id:1,
       name:"src",
       isFolder:true,
       child:[]
    },
    {
        id:2,
        name:"service",
        isFolder:true,
        child:[
            {
                id:2.1,
                name:"Car.js",
                isFolder:false,
                child:[]  
            },
            {
                id:2.2,
                name:"City.js",
                isFolder:false, 
                child:[] 
            },
            {
                id:2.3,
                name:"Driver",
                isFolder:true, 
                child:[
                    {
                        id: 2.31,
                        name: "DriverQueue.js",
                        isFolder: false,
                        child: [] 
                    },
                    {
                        id: 2.32,
                        name: "DriverStack.js",
                        isFolder: false,
                        child: [] 
                    }
                ] 
            }
        ]
     },
     {
        id:3,
        name:"repository",
        isFolder:true,
        child:[]
     },
     {
        id:4,
        name:"controllers",
        isFolder:true,
        child:[]
     },
     {
        id:5,
        name:"models",
        isFolder:true,
        child:[]
     },
     {
        id:6,
        name:"migrations",
        isFolder:true,
        child:[]
     },
     {
        id:7,
        name:"Utils",
        isFolder:true,
        child:[]
     },
     {
        id:8,
        name:"Config",
        isFolder:true,
        child:[]
     },
     {
        id:9,
        name:"Constants",
        isFolder:true,
        child:[]
     },
]


export default fileData; 