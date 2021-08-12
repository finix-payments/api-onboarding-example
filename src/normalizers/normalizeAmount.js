const normalizeAmount = (val, prevVal) => {
    return val.replace(/,/g , '');
  }
  
export default normalizeAmount