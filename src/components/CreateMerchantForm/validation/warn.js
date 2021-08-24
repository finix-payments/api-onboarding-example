const warn = (values) => {
  const warnings = {
    principal_2: {},
    principal_3: {},
    principal_4: {},
  };

  if (values.principal_2 !== undefined) {
    if (!values.principal_2.first_name) {
      warnings.principal_2.first_name = "Required";
    } else if (values.principal_2.first_name.length > 20) {
      warnings.principal_2.first_name = "Must be 20 characters or less";
    }

    if (!values.principal_2.last_name) {
      warnings.principal_2.last_name = "Required";
    } else if (values.principal_2.last_name.length > 20) {
      warnings.principal_2.last_name = "Must be 20 characters or less";
    }

    if (!values.principal_2.title) {
      warnings.principal_2.title = "Required";
    } else if (values.principal_2.title.length > 15) {
      warnings.principal_2.title = "Must be 15 characters or less";
    }

    if (!values.principal_2.principal_percentage_ownership) {
      warnings.principal_2.principal_percentage_ownership = "Required";
    } else if (values.principal_2.principal_percentage_ownership > 100) {
      warnings.principal_2.principal_percentage_ownership =
        "Must less than 100";
    }

    if (!values.principal_2.principal_dob_month) {
      warnings.principal_2.principal_dob_month = "Required";
    }

    if (!values.principal_2.principal_dob_day) {
      warnings.principal_2.principal_dob_day = "Required";
    }

    if (!values.principal_2.principal_dob_year) {
      warnings.principal_2.principal_dob_year = "Required";
    }

    if (!values.principal_2.principal_address_line1) {
      warnings.principal_2.principal_address_line1 = "Required";
    } else if (values.principal_2.principal_address_line1.length > 35) {
      warnings.principal_2.principal_address_line1 =
        "Must be 35 characters or less";
    }

    if (!values.principal_2.principal_address_line2) {
    } else if (values.principal_2.principal_address_line2.length > 35) {
      warnings.principal_2.principal_address_line2 =
        "Must be 35 characters or less";
    }

    if (!values.principal_2.principal_address_city) {
      warnings.principal_2.principal_address_city = "Required";
    } else if (values.principal_2.principal_address_city.length > 20) {
      warnings.principal_2.principal_address_city =
        "Must be 20 characters or less";
    }

    if (!values.principal_2.principal_address_region) {
      warnings.principal_2.principal_address_region = "Required";
    }

    if (!values.principal_2.principal_tax_id) {
      warnings.principal_2.principal_tax_id = "Required";
    } else if (values.principal_2.principal_tax_id.length > 15) {
      warnings.principal_2.principal_tax_id = "Must be 15 characters or less";
    }

    if (!values.principal_2.principal_address_zip) {
      warnings.principal_2.principal_address_zip = "Required";
    } else if (values.principal_2.principal_address_zip.length > 7) {
      warnings.principal_2.principal_address_zip =
        "Must be 7 characters or less";
    }

    if (!values.principal_2.email) {
      warnings.principal_2.email = "Required";
    } else if (values.principal_2.email.length > 100) {
      warnings.principal_2.email = "Must be 100 characters or less";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.principal_2.email
      )
    ) {
      warnings.principal_2.email = "Invalid principal_2.email address";
    }
  }

  if (values.principal_3 !== undefined) {
    if (!values.principal_3.first_name) {
      warnings.principal_3.first_name = "Required";
    } else if (values.principal_3.first_name.length > 20) {
      warnings.principal_3.first_name = "Must be 20 characters or less";
    }
    if (!values.principal_3.last_name) {
      warnings.principal_3.last_name = "Required";
    } else if (values.principal_3.last_name.length > 20) {
      warnings.principal_3.last_name = "Must be 20 characters or less";
    }

    if (!values.principal_3.title) {
      warnings.principal_3.title = "Required";
    } else if (values.principal_3.title.length > 15) {
      warnings.principal_3.title = "Must be 15 characters or less";
    }

    if (!values.principal_3.principal_percentage_ownership) {
      warnings.principal_3.principal_percentage_ownership = "Required";
    } else if (values.principal_3.principal_percentage_ownership > 100) {
      warnings.principal_3.principal_percentage_ownership =
        "Must less than 100";
    }

    if (!values.principal_3.principal_dob_month) {
      warnings.principal_3.principal_dob_month = "Required";
    }

    if (!values.principal_3.principal_dob_day) {
      warnings.principal_3.principal_dob_day = "Required";
    }

    if (!values.principal_3.principal_dob_year) {
      warnings.principal_3.principal_dob_year = "Required";
    }

    if (!values.principal_3.principal_address_line1) {
      warnings.principal_3.principal_address_line1 = "Required";
    } else if (values.principal_3.principal_address_line1.length > 35) {
      warnings.principal_3.principal_address_line1 =
        "Must be 35 characters or less";
    }

    if (!values.principal_3.principal_address_line2) {
    } else if (values.principal_3.principal_address_line2.length > 35) {
      warnings.principal_3.principal_address_line2 =
        "Must be 35 characters or less";
    }

    if (!values.principal_3.principal_address_city) {
      warnings.principal_3.principal_address_city = "Required";
    } else if (values.principal_3.principal_address_city.length > 20) {
      warnings.principal_3.principal_address_city =
        "Must be 20 characters or less";
    }

    if (!values.principal_3.principal_address_region) {
      warnings.principal_3.principal_address_region = "Required";
    }

    if (!values.principal_3.principal_tax_id) {
      warnings.principal_3.principal_tax_id = "Required";
    } else if (values.principal_3.principal_tax_id.length > 15) {
      warnings.principal_3.principal_tax_id = "Must be 15 characters or less";
    }

    if (!values.principal_3.principal_address_zip) {
      warnings.principal_3.principal_address_zip = "Required";
    } else if (values.principal_3.principal_address_zip.length > 7) {
      warnings.principal_3.principal_address_zip =
        "Must be 7 characters or less";
    }

    if (!values.principal_3.email) {
      warnings.principal_3.email = "Required";
    } else if (values.principal_3.email.length > 100) {
      warnings.principal_3.email = "Must be 100 characters or less";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.principal_3.email
      )
    ) {
      warnings.principal_3.email = "Invalid principal_3.email address";
    }
  }

  if (values.principal_4 !== undefined) {
    if (!values.principal_4.first_name) {
      warnings.principal_4.first_name = "Required";
    } else if (values.principal_4.first_name.length > 20) {
      warnings.principal_4.first_name = "Must be 20 characters or less";
    }
    if (!values.principal_4.last_name) {
      warnings.principal_4.last_name = "Required";
    } else if (values.principal_4.last_name.length > 20) {
      warnings.principal_4.last_name = "Must be 20 characters or less";
    }

    if (!values.principal_4.title) {
      warnings.principal_4.title = "Required";
    } else if (values.principal_4.title.length > 15) {
      warnings.principal_4.title = "Must be 15 characters or less";
    }

    if (!values.principal_4.principal_percentage_ownership) {
      warnings.principal_4.principal_percentage_ownership = "Required";
    } else if (values.principal_4.principal_percentage_ownership > 100) {
      warnings.principal_4.principal_percentage_ownership =
        "Must less than 100";
    }

    if (!values.principal_4.principal_dob_month) {
      warnings.principal_4.principal_dob_month = "Required";
    }

    if (!values.principal_4.principal_dob_day) {
      warnings.principal_4.principal_dob_day = "Required";
    }

    if (!values.principal_4.principal_dob_year) {
      warnings.principal_4.principal_dob_year = "Required";
    }

    if (!values.principal_4.principal_address_line1) {
      warnings.principal_4.principal_address_line1 = "Required";
    } else if (values.principal_4.principal_address_line1.length > 35) {
      warnings.principal_4.principal_address_line1 =
        "Must be 35 characters or less";
    }

    if (!values.principal_4.principal_address_line2) {
    } else if (values.principal_4.principal_address_line2.length > 35) {
      warnings.principal_4.principal_address_line2 =
        "Must be 35 characters or less";
    }

    if (!values.principal_4.principal_address_city) {
      warnings.principal_4.principal_address_city = "Required";
    } else if (values.principal_4.principal_address_city.length > 20) {
      warnings.principal_4.principal_address_city =
        "Must be 20 characters or less";
    }

    if (!values.principal_4.principal_address_region) {
      warnings.principal_4.principal_address_region = "Required";
    }

    if (!values.principal_4.principal_tax_id) {
      warnings.principal_4.principal_tax_id = "Required";
    } else if (values.principal_4.principal_tax_id.length > 15) {
      warnings.principal_4.principal_tax_id = "Must be 15 characters or less";
    }

    if (!values.principal_4.principal_address_zip) {
      warnings.principal_4.principal_address_zip = "Required";
    } else if (values.principal_4.principal_address_zip.length > 7) {
      warnings.principal_4.principal_address_zip =
        "Must be 7 characters or less";
    }

    if (!values.principal_4.email) {
      warnings.principal_4.email = "Required";
    } else if (values.principal_4.email.length > 100) {
      warnings.principal_4.email = "Must be 100 characters or less";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.principal_4.email
      )
    ) {
      warnings.principal_4.email = "Invalid principal_4.email address";
    }
  }

  return warnings;
};

export default warn;
