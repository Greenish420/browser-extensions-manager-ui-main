import { useEffect } from "react";


function Filter({text,filter,setFilter}){

    function filterHandle(){
       setFilter(text);
    }

    // useEffect(() => {},[filter])
return(

    
    
     <button onClick={filterHandle} style={{height:"2em" , borderRadius: "15px" , padding:"5px 10px" , boxSizing:"border-box",backgroundColor:`${(filter===text) ?  "red" : "#2f364b"}`,textAlign:"center",alignItems:"center",display:"flex",justifyContent:"center"}}>
        {text}
     </button>
    


);


}

export default Filter;