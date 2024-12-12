const CurrentDateComponent = ({ stepNo, countNo }) => {
  const handleCurrentDate = (stepParam, countParam) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + stepParam * countParam);
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
    <div>
      {countNo != 0 ? (
        <p>
          {stepNo * countNo} days {handleFromAndAgo(stepNo, countNo)}{" "}
          {handleCurrentDate(stepNo, countNo)}
        </p>
      ) : (
        <p>Today is {new Date().toDateString()}</p>
      )}
    </div>
  );
};

export default CurrentDateComponent;
