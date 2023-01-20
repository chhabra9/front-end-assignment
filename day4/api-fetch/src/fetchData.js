/*jshint esversion: 8 */
import {useState,useEffect} from 'react';
const FetchData=()=>{
    const url='https:/jsonplaceholder.typicode.com/posts';
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url,{method:'GET'})
        .then(response=>response.json())
        .then(data=>setData(data));   
    },[]);
return(
    <div>
        <table>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Body</th>
  </tr>
  {data.map((val)=>{
return ( <tr>
 <td>{val.id}</td>
 <td>{val.title}s</td>
 <td>{val.body}</td>
</tr>)
  })}
 
</table>
    </div>
)
};
export default FetchData; 