import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    // const data = useLoaderData()
    // console.log(data);
    const [data,setData]= useState({})
useEffect(()=>{
  fetch("https://api.github.com/users/MianAteeq-star")
  .then((res)=> res.json())
  .then((data) => setData(data))
  console.log(data);
},[])

  return (
    <>
    <div className=' flex flex-col  items-center justify-center text-center p-4 bg-gray-600 text-white'>Github Public-Repository : {data.public_repos}
    
<div className="mt-4"><img src={data.avatar_url} alt="github profile" width={300} /></div>
    </div>

    
    </>
  )
}


// export const  GithubInfo= async()=>{
//  const res = await fetch("https://api.github.com/users/MianAteeq-star")
// return res.json()
// }
