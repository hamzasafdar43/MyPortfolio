import { Table, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetallMessage() {
    const [getMessage , setGetMessage] = useState([])
    const getallMessage = async()=>{
        try {
            const res = await axios.get("http://localhost:5000/getallMessage")
            setGetMessage(res.data)
            if(res.data.success){
              message.success(res.data.message)
            }
           } catch (error) {
            message.error("something went wrong")
           }
    }

    useEffect(()=>{
        getallMessage()
    },[])
    const columns =[
        {
            title:"Name",
            dataIndex:"name"
        },
        {
            title:"Email",
            dataIndex:"email"
        },
        {
            title:"Message",
            dataIndex:"mesg"
        },
    ]
  return (
    <div className='container'>
        <Table columns={columns} dataSource={getMessage}/>
    </div>
  )
}

export default GetallMessage