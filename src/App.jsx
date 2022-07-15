import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Article } from "./components/Article";

import {article} from './data'

function App() {
  const [data,setData] = useState(null)
  useEffect(()=>{
    setData(article)
  },[])
  return (
    <div className="container">
      {
        data ? 
        <Article data={data} />
        :
        "loading..."
      }
      <Toaster
      position="top-right"
      reverseOrder={false}
    />
    </div>
  );
}

export default App;
