const validate = (values) => {
  const errors = {
    primary_principal: {},
    prinicpal_2: {},
    prinicpal_3: {},
    principal_4: {},
  };
  // Business Name
  if (!values.business_name) {
    errors.business_name = "Required";
  } else if (values.business_name.length > 120) {
    errors.business_name = "Must be 120 characters or less";
  }

  if (!values.doing_business_as) {
    errors.doing_business_as = "Required";
  } else if (values.doing_business_as.length > 60) {
    errors.doing_business_as = "Must be 60 characters or less";
  }

  if (!values.website) {
    errors.website = "Required";
  } else if (values.website.length > 100) {
    errors.website = "Must be 100 characters or less";
  }

  if (!values.business_phone) {
    errors.business_phone = "Required";
  }

  if (!values.business_address_line1) {
    errors.business_address_line1 = "Required";
  } else if (values.business_address_line1.length > 35) {
    errors.business_address_line1 = "Must 35 characters or less";
  }

  if (!values.business_address_line2) {
  } else if (values.business_address_line2.length > 35) {
    errors.business_address_line2 = "Must be 35 characters or less";
  }

  if (!values.business_address_city) {
    errors.business_address_city = "Required";
  } else if (values.business_address_city.length > 20) {
    errors.business_address_city = "Must be 20 characters or less";
  }

  if (!values.business_address_region) {
    errors.business_address_region = "Required";
  }

  if (!values.business_address_postal_code) {
    errors.business_address_postal_code = "Required";
  } else if (values.business_address_postal_code.length > 7) {
    errors.business_address_postal_code = "Must be 7 characters or less";
  }

  if (!values.business_type) {
    errors.business_type = "Required";
  }

  if (!values.ownership_type) {
    errors.ownership_type = "Required";
  }

  if (!values.business_incorporation_month) {
    errors.business_incorporation_month = "Required";
  }

  if (!values.business_incorporation_day) {
    errors.business_incorporation_day = "Required";
  }

  if (!values.business_incorporation_year) {
    errors.business_incorporation_year = "Required";
  }

  if (!values.business_tax_id) {
    errors.business_tax_id = "Required";
  } else if (values.business_tax_id.length > 9) {
    errors.business_tax_id = "Must be 9 characters or less";
  }

  if (values.primary_principal !== undefined) {
    if (!values.primary_principal.first_name) {
      errors.primary_principal.first_name = "Required";
    } else if (values.primary_principal.first_name.length > 20) {
      errors.primary_principal.first_name = "Must be 20 characters or less";
    }
    if (!values.primary_principal.last_name) {
      errors.primary_principal.last_name = "Required";
    } else if (values.primary_principal.last_name.length > 20) {
      errors.primary_principal.last_name = "Must be 20 characters or less";
    }

    if (!values.primary_principal.title) {
      errors.primary_principal.title = "Required";
    } else if (values.primary_principal.title.length > 15) {
      errors.primary_principal.title = "Must be 15 characters or less";
    }

    if (!values.primary_principal.principal_percentage_ownership) {
      errors.primary_principal.principal_percentage_ownership = "Required";
    } else if (values.primary_principal.principal_percentage_ownership > 100) {
      errors.primary_principal.principal_percentage_ownership =
        "Must less than 100";
    } else if (values.primary_principal.principal_percentage_ownership < 1) {
      errors.primary_principal.principal_percentage_ownership =
        "Must be more than 0";
    }

    if (!values.primary_principal.principal_dob_month) {
      errors.primary_principal.principal_dob_month = "Required";
    }

    if (!values.primary_principal.principal_dob_day) {
      errors.primary_principal.principal_dob_day = "Required";
    }

    if (!values.primary_principal.principal_dob_year) {
      errors.primary_principal.principal_dob_year = "Required";
    }

    if (!values.primary_principal.principal_address_line1) {
      errors.primary_principal.principal_address_line1 = "Required";
    } else if (values.primary_principal.principal_address_line1.length > 35) {
      errors.primary_principal.principal_address_line1 =
        "Must be 35 characters or less";
    }

    if (!values.primary_principal.principal_address_line2) {
    } else if (values.primary_principal.principal_address_line2.length > 35) {
      errors.primary_principal.principal_address_line2 =
        "Must be 35 characters or less";
    }

    if (!values.primary_principal.principal_address_city) {
      errors.primary_principal.principal_address_city = "Required";
    } else if (values.primary_principal.principal_address_city.length > 20) {
      errors.primary_principal.principal_address_city =
        "Must be 20 characters or less";
    }

    if (!values.primary_principal.principal_address_region) {
      errors.primary_principal.principal_address_region = "Required";
    }

    if (!values.primary_principal.principal_tax_id) {
      errors.primary_principal.principal_tax_id = "Required";
    } else if (values.primary_principal.principal_tax_id.length > 15) {
      errors.primary_principal.principal_tax_id =
        "Must be 15 characters or less";
    }

    if (!values.primary_principal.principal_address_zip) {
      errors.primary_principal.principal_address_zip = "Required";
    } else if (values.primary_principal.principal_address_zip.length > 7) {
      errors.primary_principal.principal_address_zip =
        "Must be 7 characters or less";
    }

    if (!values.primary_principal.email) {
      errors.primary_principal.email = "Required";
    } else if (values.primary_principal.email.length > 100) {
      errors.primary_principal.email = "Must be 100 characters or less";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.primary_principal.email
      )
    ) {
      errors.primary_principal.email =
        "Invalid primary_principal.email address";
    }
  }

  if (!values.annual_card_volume) {
    errors.annual_card_volume = "Required";
  }

  if (!values.annual_card_volume) {
    errors.annual_card_volume = "Required";
  }

  if (!values.default_statement_descriptor) {
    errors.default_statement_descriptor = "Required";
  } else if (values.default_statement_descriptor.length > 20) {
    errors.default_statement_descriptor = "Must be 20 characters or less";
  }
  if (!values.annual_ach_volume) {
    errors.annual_ach_volume = "Required";
  } else if (values.annual_ach_volume.length > 20) {
    errors.annual_ach_volume = "Must be 20 characters or less";
  }

  if (!values.business_description) {
    errors.business_description = "Required";
  } else if (values.business_description.length > 200) {
    errors.business_description = "Must be 200 characters or less";
  }

  if (!values.max_transaction_amount) {
    errors.max_transaction_amount = "Required";
  }

  if (!values.average_card_transfer_amount) {
    errors.average_card_transfer_amount = "Required";
  }

  if (!values.average_ach_transfer_amount) {
    errors.average_ach_transfer_amount = "Required";
  }

  if (!values.annual_ach_volume) {
    errors.annual_ach_volume = "Required";
  }

  if (!values.card_present_percentage) {
    errors.card_present_percentage = "Required";
  } else if (
    parseFloat(values.card_present_percentage) > 100 ||
    parseFloat(values.card_present_percentage) < 0
  ) {
    errors.card_present_percentage = "Must be less than 100 and greater than 0";
  }

  if (!values.ecommerce_percentage) {
    errors.ecommerce_percentage = "Required";
  } else if (
    parseFloat(values.ecommerce_percentage) > 100 ||
    parseFloat(values.ecommerce_percentage) < 0
  ) {
    errors.ecommerce_percentage = "Must be less than 100 and greater than 0";
  }

  if (!values.mail_order_telephone_order_percentage) {
    errors.mail_order_telephone_order_percentage = "Required";
  } else if (
    parseFloat(values.mail_order_telephone_order_percentage) > 100 ||
    parseFloat(values.mail_order_telephone_order_percentage) < 0
  ) {
    errors.mail_order_telephone_order_percentage =
      "Must be less than 100 and greater than 0";
  }

  if (!values.refund_policy) {
    errors.refund_policy = "Required";
  }
  if (!values.business_to_business_volume_percentage) {
    errors.business_to_business_volume_percentage = "Required";
  } else if (
    parseFloat(values.business_to_business_volume_percentage) > 100 ||
    parseFloat(values.business_to_business_volume_percentage) < 0
  ) {
    errors.business_to_business_volume_percentage =
      "Must be less than 100 and greater than 0";
  }

  if (!values.business_to_consumer_volume_percentage) {
    errors.business_to_consumer_volume_percentage = "Required";
  } else if (
    parseFloat(values.business_to_consumer_volume_percentage) > 100 ||
    parseFloat(values.business_to_consumer_volume_percentage) < 0
  ) {
    errors.business_to_consumer_volume_percentage =
      "Must be less than 100 and greater than 0";
  }
  if (!values.person_to_person_volume_percentage) {
    errors.person_to_person_volume_percentage = "Required";
  } else if (
    parseFloat(values.person_to_person_volume_percentage) > 100 ||
    parseFloat(values.person_to_person_volume_percentage) < 0
  ) {
    errors.person_to_person_volume_percentage =
      "Must be less than 100 and greater than 0";
  }

  if (!values.consumer_to_consumer_volume_percentage) {
    errors.consumer_to_consumer_volume_percentage = "Required";
  } else if (
    parseFloat(values.consumer_to_consumer_volume_percentage) > 100 ||
    parseFloat(values.consumer_to_consumer_volume_percentage) < 0
  ) {
    errors.consumer_to_consumer_volume_percentage =
      "Must be less than 100 and greater than 0";
  }

  if (!values.other_volume_percentage) {
    errors.other_volume_percentage = "Required";
  } else if (
    parseFloat(values.other_volume_percentage) > 100 ||
    parseFloat(values.other_volume_percentage) < 0
  ) {
    errors.other_volume_percentage = "Must be less than 100 and greater than 0";
  }

  if (!values.bank_account_name) {
    errors.bank_account_name = "Required";
  } else if (values.bank_account_name.length > 40) {
    errors.bank_account_name = "Must be 40 characters or less";
  }

  if (!values.bank_routing_number) {
    errors.bank_routing_number = "Required";
  } else if (values.bank_routing_number.length !== 9) {
    errors.bank_routing_number = "Must be 9 characters";
  }

  if (!values.bank_account_number) {
    errors.bank_account_number = "Required";
  }

  if (!values.merchant_agreement_acceptance) {
    errors.merchant_agreement_acceptance = "Required";
  } else if (values.merchant_agreement_acceptance !== true) {
    errors.merchant_agreement_acceptance = "Must be selected to continue";
  }

  return errors;
};

export default validate;
