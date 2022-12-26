import { useState } from "react";

function Workingdays() {
    const [count,setCount] = useState(0)
    const days1 = ["Monday","Tuesday","Wednsday","Thursday","Friday"];
    function isChecked(e){
      if(e.target.checked === true){
        setCount(prev => prev+1)
      } else{
        setCount(prev => prev-1)
      }
    }
  return (
    <div>
      <p>By clicking on checked it will rerender the count of working days and by unchecked it reduce working days</p>
      <div>
          <div>
            {days1.map((ele) => {
              return (
                <ul>
                  <li>
                    {ele} <input type="checkbox" onChange={isChecked}/>
                  </li>
                </ul>
              );
            })}
          </div>
          <b>{count}</b>
      </div>
    </div>
  );
}

export default Workingdays;
