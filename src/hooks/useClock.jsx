import { useEffect, useState } from "react";

export default function useClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const updateClock = () => {

      const jakartaTime = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Jakarta",
        })
      );

      setTime(jakartaTime);

    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);

  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {

    day: days[time.getDay()],

    date: time.getDate(),

    month: months[time.getMonth()],

    year: time.getFullYear(),

    hour: String(time.getHours()).padStart(2, "0"),

    minute: String(time.getMinutes()).padStart(2, "0"),

    second: String(time.getSeconds()).padStart(2, "0"),

  };

}