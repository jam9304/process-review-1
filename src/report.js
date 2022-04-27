const report = (string) => {
  
  const resultsArr = string.replace(" ", "").split(',');
  return `Green: ${resultsArr.length}`;

};

module.exports = report;


