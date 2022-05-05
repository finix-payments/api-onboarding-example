import React, { Component } from "react";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class FileUploadedStatus extends Component {
    render() {
        return(
            <Container className='text-center'>
                <div style={{ paddingTop: "15px" }}>
                    <FontAwesomeIcon color="#2ecc71" icon="check-circle" size="6x" />
                </div>
                <div>
                    <h3>Your file has been uploaded successfully.</h3>
                </div>                
            </Container>
        );
    }
}