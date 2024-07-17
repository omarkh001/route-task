import axios from "axios";


const apiUrl="http://localhost:3004";

 export const getCustomers= ()=>axios.get(`${apiUrl}/customers`);
 export const getTransactions= ()=>axios.get(`${apiUrl}/transactions`);

