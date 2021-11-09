import React, { useRef } from "react";
import IdleTimer from "react-idle-timer";

function IdleTimerContainer() {
  const IdleTimerRef = useRef(null);
  const onIdle = () => {
    console.log("You are idle for 5 seconds");
  };

  return (
    <div>
      <IdleTimer
        ref={IdleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
}

export default IdleTimerContainer;
