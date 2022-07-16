import React, {useState,useEffect} from "react";

import { axiosConfig } from "utils/axiosConfig";
import {GET_TERMS} from 'constans/API'

const SelectTerm = ({term,setTerm})=> {
    const [options,setOptions] = useState(null)

    useEffect(()=>{
        axiosConfig({
            method:'get',
            url:GET_TERMS
        }).then(resp=>{
            setOptions(resp.data)
        }).catch((error)=>console.log(error))
    },[])

    return <h2>Select Term</h2>
}

export default SelectTerm