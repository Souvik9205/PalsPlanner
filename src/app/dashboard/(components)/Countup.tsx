"use client";
import React from "react";
import CountUp from "react-countup";

function Countup() {
  const TaskCreated = 50;
  const DoneTask = 30;
  return (
    <div className="flex w-full justify-center items-center my-5">
      <div className="w-1/2">
        <div className="flex flex-col w-full justify-center items-center">
          <p className="text-lg font-semibold font-mono text-[#f4ff60] px-3 text-center">
            Total Task Created:
          </p>
          <div className="font-semibold font-mono text-3xl text-center w-1/2">
            <CountUp start={0} end={TaskCreated} delay={0} duration={5.75}>
              {({ countUpRef }) => (
                <div>
                  <span className="text-white" ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col w-full justify-center items-center">
          <p className="text-lg font-semibold font-mono text-[#f4ff60] text-center">
            Total Task Completed:
          </p>
          <div className="font-semibold font-mono text-3xl text-center w-1/2">
            <CountUp start={0} end={DoneTask} delay={0} duration={5.75}>
              {({ countUpRef }) => (
                <div>
                  <span className="text-white" ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countup;
