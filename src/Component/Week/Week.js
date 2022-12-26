// import {useState} from 'react';
import moment from 'moment/moment';


function Week() {
    // const [count,setCount] = useState(0);
    const days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
    const dateVal = new Date().getDay();
    let day = days[dateVal];

  return (
    <div>
        <button >Prev Week</button>
        <button >Next Week</button>
        <div>
          <div>
            <div>
              {days.map((ele,idx) => {
                return (
                  <ul>
                    <li>{(moment().get('date')+idx)%32 !== 0 ? (moment().get('date')+idx)%32 : 1}</li>
                    <li>{ele === day ? <div className='red'>{day}</div> : ele}</li>
                  </ul>
                )
              })}</div>
            </div>
        </div>
    </div>
  )
}

export default Week