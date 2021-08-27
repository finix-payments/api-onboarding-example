import axios from "axios";
export default (async function submitMerchantApplication(values) {
  
  // Output by the form
  console.log("These are the values generated by the form: ");
  console.log(values);
  
  // The username and password below is from Finix's developer documentation found on https://flex.finixpayments.com/
  // To see this on your own sandbox, plug in your own unique credentials below. If you would like your own sandbox environment, contact Finix at https://learn.finixpayments.com/get-started

  const username = "USdCBTiL4BwY9jJ6Mq12ymrW";
  const password = "d294d534-b1f7-473b-bc56-7f76ccb011e7";

  // Convert credentials to base64

  var auth =
    "Basic " + new Buffer(username + ":" + password).toString("base64");

  // Request headers

  const request_headers = {
    Authorization: auth,
    "Content-Type": "application/json",
  };

  // Calculate Date Format
  const event = new Date();
  const time_stamp = event.toISOString();

 

  // Get Ip Address. Here we are using a third party. Ideally, your internal web server can provide you this information.
  let ip_address_response_ = await axios.get(
    "https://geolocation-db.com/json/"
  );
  let ip_address = await ip_address_response_.data.IPv4;


  // Identity Information
  const identity_information = JSON.stringify({
    tags: {
      "Studio Rating": "4.7",
    },
    entity: {
      last_name: values.primary_principal.last_name,
      max_transaction_amount: Number(values.max_transaction_amount) * 100, // We need to convert the numbers to cents
      has_accepted_credit_cards_previously: values.processed_payments_before,
      default_statement_descriptor: values.default_statement_descriptor,
      personal_address: {
        city: values.primary_principal.principal_address_city,
        country: "USA",
        region: values.primary_principal.principal_address_region,
        line2: values.primary_principal.principal_address_line2,
        line1: values.primary_principal.principal_address_line1,
        postal_code: values.primary_principal.principal_address_region,
      },
      incorporation_date: {
        year: values.business_incorporation_year,
        day: values.business_incorporation_day,
        month: values.business_incorporation_month,
      },
      business_address: {
        city: values.business_address_city,
        country: "USA",
        region: values.business_address_region,
        line2: values.business_address_line2,
        line1: values.business_address_line1,
        postal_code: values.business_address_postal_code,
      },
      ownership_type: values.ownership_type,
      first_name: values.primary_principal.first_name,
      title: values.primary_principal.title,
      business_tax_id: values.business_tax_id.replace(/-/g, ""),
      doing_business_as: values.doing_business_as,
      principal_percentage_ownership:
        values.primary_principal.principal_percentage_ownership,
      email: values.primary_principal.email,
      mcc: "0742",
      phone: values.primary_principal.principal_phone.replace(/-/g, ""),
      business_name: values.business_name,
      tax_id: values.primary_principal.principal_tax_id.replace(/-/g, ""),
      business_type: values.business_type,
      business_phone: values.business_phone.replace(/-/g, ""),
      dob: {
        year: values.primary_principal.principal_dob_year,
        day: values.primary_principal.principal_dob_day,
        month: values.primary_principal.principal_dob_month,
      },
      url: values.website,
      annual_card_volume: values.annual_card_volume,
    },
    additional_underwriting_data: {
      average_card_transfer_amount:
        Number(values.average_card_transfer_amount) * 100,
      average_ach_transfer_amount:
        Number(values.average_ach_transfer_amount) * 100,
      annual_ach_volume: Number(values.annual_ach_volume) * 100,
      business_description: values.business_description,
      credit_check_ip_address: ip_address,
      credit_check_timestamp: time_stamp,
      credit_check_allowed: values.credit_check_allowed,
      credit_check_user_agent: navigator.userAgent,
      merchant_agreement_accepted: values.merchant_agreement_acceptance,
      merchant_agreement_ip_address: ip_address,
      merchant_agreement_timestamp: time_stamp,
      merchant_agreement_user_agent: navigator.userAgent,
      refund_policy: values.refund_policy,
      card_volume_distribution: {
        card_present_percentage: Number(values.card_present_percentage),
        ecommerce_percentage: Number(values.ecommerce_percentage),
        mail_order_telephone_order_percentage: Number(
          values.mail_order_telephone_order_percentage
        ),
      },
      volume_distribution_by_business_type: {
        business_to_business_volume_percentage: Number(
          values.business_to_business_volume_percentage
        ),
        business_to_consumer_volume_percentage: Number(
          values.business_to_consumer_volume_percentage
        ),
        person_to_person_volume_percentage: Number(
          values.person_to_person_volume_percentage
        ),
        consumer_to_consumer_volume_percentage: Number(
          values.consumer_to_consumer_volume_percentage
        ),
        other_volume_percentage: Number(
          values.other_volume_percentage
        )
      },
    },
  });
  const identity_config = {
    method: "post",
    url: "https://finix.sandbox-payments-api.com/identities",
    headers: request_headers,
    data: identity_information,
  };

  // Step 1 - Create an Identity

  const identity_response = await axios
    .request(identity_config)
    .then((response) => response);
  console.log(JSON.stringify(identity_response.data));
  const identity_id = identity_response.data.id;

  // Step 1A - Principal #2

  if (values.principal_2 !== undefined) {
    if (values.principal_2.first_name !== "") {
      const principal_2_information = JSON.stringify({
        tags: {
          "Studio Rating": "4.7",
        },
        entity: {
          last_name: values.principal_2.first_name,
          personal_address: {
            city: values.principal_2.principal_address_city,
            country: "USA",
            region: values.principal_2.principal_address_region,
            line2: values.principal_2.principal_address_line2,
            line1: values.principal_2.principal_address_line1,
            postal_code: values.principal_2.principal_address_region,
          },
          first_name: values.principal_2.first_name,
          title: values.principal_2.title,
          principal_percentage_ownership:
            values.principal_2.principal_percentage_ownership,
          email: values.principal_2.email,
          phone: values.principal_2.principal_phone.replace(/-/g, ""),
          tax_id: values.principal_2.principal_tax_id.replace(/-/g, ""),
          dob: {
            year: values.principal_2.principal_dob_year,
            day: values.principal_2.principal_dob_day,
            month: values.principal_2.principal_dob_month,
          },
        },
      });

      const principal_2_config = {
        method: "post",
        url:
          "https://finix.sandbox-payments-api.com/identities/" +
          identity_id +
          "/associated_identities",
        headers: request_headers,
        data: principal_2_information,
      };

      const associated_response_principal_2 = await axios
        .request(principal_2_config)
        .then((response) => response);
      console.log(JSON.stringify(associated_response_principal_2.data));
    }
  }

  // Step 1B - Principal #3

  if (values.principal_3 !== undefined) {
    if (values.principal_3.first_name !== "") {
      const principal_3_information = JSON.stringify({
        tags: {
          "Studio Rating": "4.7",
        },
        entity: {
          last_name: values.principal_3.first_name,
          personal_address: {
            city: values.principal_2.principal_address_city,
            country: "USA",
            region: values.principal_2.principal_address_region,
            line2: values.principal_2.principal_address_line2,
            line1: values.principal_2.principal_address_line1,
            postal_code: values.principal_2.principal_address_region,
          },
          first_name: values.principal_2.first_name,
          title: values.principal_2.title,
          principal_percentage_ownership:
            values.principal_2.principal_percentage_ownership,
          email: values.principal_2.email,
          phone: values.principal_2.principal_phone.replace(/-/g, ""),
          tax_id: values.principal_2.principal_tax_id.replace(/-/g, ""),
          dob: {
            year: values.principal_2.principal_dob_year,
            day: values.principal_2.principal_dob_day,
            month: values.principal_2.principal_dob_month,
          },
        },
      });

      const principal_3_config = {
        method: "post",
        url:
          "https://finix.sandbox-payments-api.com/identities/" +
          identity_id +
          "/associated_identities",
        headers: request_headers,
        data: principal_3_information,
      };

      const associated_response_principal_3 = await axios
        .request(principal_3_config)
        .then((response) => response);
      console.log(JSON.stringify(associated_response_principal_3.data));
    }
  }

  // Step 1C - Principal #4

  if (values.principal_4 !== undefined) {
    if (values.principal_4.first_name !== "") {
      const principal_4_information = JSON.stringify({
        tags: {
          "Studio Rating": "4.7",
        },
        entity: {
          last_name: values.principal_4.first_name,
          personal_address: {
            city: values.principal_4.principal_address_city,
            country: "USA",
            region: values.principal_4.principal_address_region,
            line2: values.principal_4.principal_address_line2,
            line1: values.principal_4.principal_address_line1,
            postal_code: values.principal_4.principal_address_region,
          },
          first_name: values.principal_4.first_name,
          title: values.principal_4.title,
          principal_percentage_ownership:
            values.principal_4.principal_percentage_ownership,
          email: values.principal_4.email,
          phone: values.principal_4.principal_phone.replace(/-/g, ""),
          tax_id: values.principal_4.principal_tax_id.replace(/-/g, ""),
          dob: {
            year: values.principal_4.principal_dob_year,
            day: values.principal_4.principal_dob_day,
            month: values.principal_4.principal_dob_month,
          },
        },
      });

      const principal_4_config = {
        method: "post",
        url:
          "https://finix.sandbox-payments-api.com/identities/" +
          identity_id +
          "/associated_identities",
        headers: request_headers,
        data: principal_4_information,
      };

      const associated_response_principal_4 = await axios
        .request(principal_4_config)
        .then((response) => response);
      console.log(JSON.stringify(associated_response_principal_4.data));
    }
  }

  const payment_instrument_information = JSON.stringify({
    account_type: "CHECKING",
    name: values.bank_account_name,
    country: "USA",
    bank_code: values.bank_routing_number,
    account_number: values.bank_account_number,
    type: "BANK_ACCOUNT",
    identity: identity_id,
  });

  const payment_instrument_config = {
    method: "post",
    url: "https://finix.sandbox-payments-api.com/payment_instruments",
    headers: request_headers,
    data: payment_instrument_information,
  };

  // Step 2 - Call to Payment Instrument using axios
  const payment_instrument_response = await axios
    .request(payment_instrument_config)
    .then((response) => response);
  console.log(JSON.stringify(payment_instrument_response.data));

  //Step 3 - Call to provision a merchant

  const create_merchant_information = JSON.stringify({
    tags: {
      key_1: "value_1",
    },
  });
  const create_merchant_config = {
    method: "post",
    url:
      "https://finix.sandbox-payments-api.com/identities/" +
      identity_id +
      "/merchants",
    headers: request_headers,
    data: create_merchant_information,
  };

  const merchant_response = await axios
    .request(create_merchant_config)
    .then((response) => response);
  console.log(JSON.stringify(merchant_response.data));

  // Redirect to a success page

  window.alert(
    "Merchant Application In Progress! Merchant Application ID: " +
      merchant_response.data.id
  );
  window.location.assign(`${window.location.origin}/application-submitted`);
});
