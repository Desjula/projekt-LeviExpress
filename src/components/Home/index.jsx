import React, { useState } from "react";
import { JourneyPicker } from "../JourneyPicker";
import { JourneyDetail } from "../journeyDetail";

export const Home = () => {
  const [journeyResult, setJourneyResult] = useState(null);

  const handleJourneyChange = ({ results }) => {
    setJourneyResult(results);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journeyResult && <JourneyDetail journey={journeyResult.stops} />}
    </main>
  );
};
