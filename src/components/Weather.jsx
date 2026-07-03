import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather(){

    const [temp,setTemp] = useState("--");

    useEffect(()=>{

        axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Surabaya&units=metric&appid=API_KEY_KAMU`
        ).then(res=>{
            setTemp(Math.round(res.data.main.temp));
        });

    },[]);

    return(
        <div className="weather-box">
            ☀️ {temp}°C
        </div>
    );
}