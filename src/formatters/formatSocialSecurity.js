const  formatSocialSecurity = (val) => {
    if (val) {
      val = val.replace(/\D/g, '');
      val = val.replace(/^(\d{3})/, '$1-');
      val = val.replace(/-(\d{2})/, '-$1-');
      val = val.replace(/(\d)-(\d{4}).*/, '$1-$2');
      return val;
    }
    const initialize_string = ''
    return initialize_string
  }  	


export default formatSocialSecurity