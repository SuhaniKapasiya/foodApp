import { useEffect, useState } from "react";


const User =(props)=>{
 

  useEffect(()=>{
   
    const timer = setInterval(() => {
      console.log("Namaste react OP fnCop");
    }, 1000);


    console.log("useEffect");

    return () => {
      clearInterval(timer);

      console.log("UseEffect Return");
    };


  },[])


  const [count,setCount] = useState(0);
  const [count2] = useState(1);

    return (
      <div className="border  border-black mt-5 p-3">
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <button  
        className="px-3 py-2 bg-green-500 rounded-md"
         onClick={()=>{
           setCount(count+1)
         }}
        >increaseCount</button>
        <h2>Name : {props.name}</h2>
        <h3> Location : Delhi</h3>
        <h3>Contact : @suhanikapasiya2018@gmail.com</h3>
      </div>
    );


}

export default User;