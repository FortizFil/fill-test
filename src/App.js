import { useEffect } from 'react';

import {axiosConfig} from 'utils/axiosConfig'
import {GET_TERMS} from 'constans/API'

function App() {

  useEffect(()=>{
    axiosConfig({
      method:'get',
      url:GET_TERMS
    }).then((resp)=>console.log(resp))
  },[])

  return (
    <div className="App">
      <h1>Hell fggo</h1>
    </div>
  );
}

export default App;
