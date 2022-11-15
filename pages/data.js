import * as React from "react";
import { Range } from "react-range";
import { useState } from "react";
const RangeSlider = () => {
  const [rangeval, setRangeval] = useState(null);

  return (
    <div>
      <input
        class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-[300px]"
        type="range"
        min="0"
        max="10"
        value={rangeval}
        step="2"
        onChange={(event) => setRangeval(event.target.value)}
      />

      {console.log(rangeval)}
    </div>
  );
};

export default RangeSlider;
