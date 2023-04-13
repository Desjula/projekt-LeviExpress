import React from "react";
import "./style.css";
import { BusStop } from "../busStop";

export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h3>Podrobnosti cesty</h3>
      <div className="stops">
        {journey.map((zastavka) => (
          <BusStop
            key={zastavka.code}
            name={zastavka.name}
            station={zastavka.station}
            time={zastavka.time}
          />
        ))}
      </div>
    </div>
  );
};
