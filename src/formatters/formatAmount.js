const formatAmount = (val) => {
    if (val) {
      val = val.replace(/[^\d]/g, '');
      val = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      return val
    }
    const initialize_string = ''
    return initialize_string
  }

export default formatAmount