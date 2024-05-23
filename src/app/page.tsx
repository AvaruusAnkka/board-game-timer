"use client";

import { FaHourglassStart } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import './globals.css'

export default function Home() {
  const [start, setStart] = useState(false)
  const [time, setTime] = useState(10)

  if (start == true && time > 0) {
    setInterval(() => { setTime(time - 1) }, 1000)
  }

  return (
    !start ?
      <div className="main">
        <label>
          Input time (s):<input type="number" defaultValue={time} onChange={e => setTime(e.target.value)} />
        </label>
        <button onClick={() => setStart(true)}>Enter</button>
      </div>
      : <div className="main">
        <div>
          <button className="back" onClick={() => setStart(false)}>
            <IoArrowBack />
          </button>
          <p>{time}</p>
          <FaHourglassStart />
        </div>
      </div>
  );
}
