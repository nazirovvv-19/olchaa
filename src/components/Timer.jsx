import React, { useState, useEffect } from "react";

function Timer() {
  const [soat, setSoat] = useState(15);
  const [minut, setMinut] = useState(25);
  const [sekund, setSekund] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      if (sekund > 0) {
        setSekund(sekund - 1);
      } else {
        if (minut > 0) {
          setMinut(minut - 1);
          setSekund(59);
        } else {
          if (soat > 0) {
            setSoat(soat - 1);
            setMinut(59);
            setSekund(59);
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [soat, minut, sekund]);

  return (
    <h1 className="text-md">
      {soat} : {minut} : {sekund}
    </h1>
  );
}

export default Timer;
