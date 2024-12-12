import { useEffect, useState } from "react";

const CurrentDateComponent = ({ stepNo, countNo }) => {
  const [noOfDays, setNoOfDays] = useState();
  useEffect(() => {
    const days = stepNo * countNo;
    const transFormNumberIntoPositive = Math.abs(days);
    if (countNo != 0) {
      setNoOfDays(transFormNumberIntoPositive);
    }
  }, [countNo]);

  const handleCurrentDate = (stepParam, countParam) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + noOfDays);
    return currentDate.toDateString();
  };

  const handleFromAndAgo = (stepParam, countParam) => {
    const multipliedValue = stepParam * countParam;
    if (multipliedValue < 0) {
      return "ago was";
    }
    return "from Today is";
  };

  return (
    <>
      {countNo != 0 ? (
        <p>
          {noOfDays} days {handleFromAndAgo(stepNo, countNo)}{" "}
          {handleCurrentDate(stepNo, countNo)}
        </p>
      ) : (
        <p>Today is {new Date().toDateString()}</p>
      )}
    </>
  );
};

export default CurrentDateComponent;
