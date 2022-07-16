import React,{useState} from "react";

import SelectTerm from "components/SelectTerm";


const Dashboard = ()=> {
const [term,setTerm]=useState('')
    return <SelectTerm term={term} setTerm={setTerm}/>
}

export default Dashboard;