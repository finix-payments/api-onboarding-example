import axios from "axios";

export default (async function submitFile(values){

    //authentication
    const username = "USwV2ayDfbTwjUmrftEBKhgk"; // sb "USwL414ymCBfjf1MiT5FVrsH" qa
    const password = "9bf27419-0ef6-40f5-bce7-3b0eafb1ac88"; // sb "b7ab277f-b016-4b08-af5a-0716c03fcdfc" qa
    const api_url = "https://finix.sandbox-payments-api.com";

    //merchant QA MUuETy9CsC6fKiZKAPqe3Eqj
    //merchant SB MUbbHSsD4wVqeRUAChKUSWUp

    // Convert credentials to base64
    var auth =
    "Basic " + new Buffer(username + ":" + password).toString("base64");

    // Request headers for creating the file resource
    const request_headers = {
        Authorization: auth,
        "Content-Type": "application/vnd.api+json",
      };


    //File information
    const file_information = JSON.stringify({
        display_name: values.file_name,
        linked_to: values.linked_to,
        type: values.file_type,
    });

    const file_config = {
        method: "post",
        url: api_url + "/files",
        headers: request_headers,
        data: file_information,
    };
    
    //console.log('uploaded file data:' + values.file)
    console.log(values)

    //external link information
    const upload = "UPLOAD"
    
    /////////////////////////////////// Step 1 - Create a File
    //Create a File resource with the type of document and the merchant the file should be linked to.

    const file_response = await axios
        .request(file_config)
        .then((response) => response);
    console.log(JSON.stringify(file_response.data));
    const file_id = file_response.data.id;
    console.log(file_id);
    console.log(file_response.data);

    //////////////////////////////////Step 2 - requesting external links related to the file

    const file_external_link_url = api_url + '/files/' + file_id + '/external_links';

    const external_link_response = await axios
        .post(file_external_link_url, {type: upload},
            {
                headers: {
                  'Content-Type': 'application/vnd.api+json',
                  Authorization: auth,
                }
              })
        .then((response) => response);
    console.log(JSON.stringify(external_link_response.data));
    const url = external_link_response.data.url;
    console.log(url);

    /////////////////////////////////Step 3 - uploading the file to external link
    const { file } = values
    console.log(values);
          
    const upload_file_response = await axios
        .put(url, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => response);
    console.log(JSON.stringify(upload_file_response));

    // Redirecting to a success page
    window.alert(
        "File uploading. File ID: " + file_id
    );
    window.location.assign(`${window.location.origin}/file-uploaded`)
});