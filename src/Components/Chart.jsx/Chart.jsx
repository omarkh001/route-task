import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto';
 import {Bar}from "react-chartjs-2" 
 import Api from "../Api/db.json";


export default function Chart() {

let custom= Api.customers
let details=Api.transactions
 let count=0
 let data=[]
for (let index = 0; index < custom.length; index++) {
    
for (let i = 0; i < details.length; i++) {
if(details[i].customer_id==custom[index].id){
count+=details[i].amount
}
    
}
data.push(count)
count=0  
    
    
}
console.log(data);
  return (
    <div className='my-5'>

        <Bar
        height={100}
        data={{
            labels:Api.customers.map((data)=>data.name),
            datasets:[
            {
                label:"Total amount of Transactions",
                data:data,
                backgroundColor:[
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                    'rgba(33, 37, 41, 0.8)',
                    'rgba(0, 0, 0, 0.8)',
                    
                ]

            }
                

            ]

        }}
        
        
        />

    </div>
  )
}
