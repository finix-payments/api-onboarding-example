const normalizePercentage = value => {
    if (!value) {
      return value
    }

    if (parseInt(value) > 100) {
        return 100
    }
    const onlyPercentage = value.replace(/[^\d]/g, '')
    
    if (onlyPercentage.length <= 3) {
      return onlyPercentage
    }
    if (onlyPercentage.length >3) {
      return `${onlyPercentage.slice(0, 3)}`
    }

    
  }

  export default normalizePercentage