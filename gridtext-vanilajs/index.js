document.addEventListener('DOMContentLoaded',()=>{
    
    const container=document.getElementById('grid');
    const inner=document.createElement('div');
    inner.classList.add('mainbox');
    
    const text=[];
    const data=[1,2,3,4];
    
    data.forEach((index)=>{
        
        const boxes=document.createElement('div');
        boxes.classList.add('box');
        inner.appendChild(boxes);
        
        boxes.onclick=function(){
            
           
            text.splice(0, text.length);
            text.push(index);
            console.log(text);
           
            data.forEach((index)=>{
                if(text.includes(index)){
                    boxes.innerHTML='Clicked'
                }
            })


        }



    })
    
    
    container.appendChild(inner);




})