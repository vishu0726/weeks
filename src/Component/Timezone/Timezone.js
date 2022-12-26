import {useState} from 'react'

function Timezone() {
    const [timeZone, setTimeZone] = useState(0);
    const [value,setValue] = useState(0);

    function getTimezone(){
        let offset = new Date().getTimezoneOffset();
        let o = Math.abs(offset - value);
        let TZ = (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
        setTimeZone(TZ);
      }
  return (
    <div>
        <p>Put any number inside the input box then it calculate and give exact time-zone according to that number</p>
        <div>
            <div>
                <input type="number" placeholder="enter time zone.." onChange={(e) => setValue(e.target.value)}/>
                <button onClick={getTimezone}>Add</button>
            <div>
                <b>{timeZone}</b></div>
            </div>
        </div>
    </div>
  )
}

export default Timezone