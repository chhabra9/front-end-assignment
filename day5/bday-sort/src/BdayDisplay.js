//jshint esversion:8
import {useState,useEffect} from 'react';
const BdayDisplay=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('./data.json',{method:'GET'})
        .then(response=>response.json())
        .then(data=>setData(data));
    },[]);
    const sortByName=()=>{
        const temp=[...data].sort((a,b)=>{
            return a.name.localeCompare(b.name);
           });
           setData(temp);
        console.log('hii');
    };
    const SortByBirthDate=()=>{
       const temp=[...data].sort((a,b)=>{
            const date1=new Date(a.birthDate);
            const date2=new Date(b.birthDate);
            return date1-date2;
        });
        setData(temp);

    }
    return(
        <div>
    <table>
    <label >sort By</label>
    <input type="radio" name='sortType' onChange={sortByName}/>
    <label for="name">Name</label>
    <input type="radio"  name='sortType' onChange={SortByBirthDate}/>
    <label for="birthDate">birth Date</label>
    <tr>
      <th>Name</th>
      <th>Birth Date</th>
    </tr>
    {data.map((val)=>{
        return(
            <tr>
            <td>{val.name}</td>
            <td>{val.birthDate}</td>
            </tr>
        )
    })}
</table>
        </div>
    )
}
export default BdayDisplay