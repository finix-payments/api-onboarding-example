import React, { Component } from "react";

import { Container } from "react-bootstrap";

//import CSS
import "./FileUploaderForm.css";

//import fields
import UploadFile from "./UploadFile";

class FileUploaderForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
        };
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }
    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }
    describeFile() {
        this.setState({ page: 1 });
    }
    uploadFile() {
        this.setState({ page: 2 });
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return(
            <Container>
                {page === 1 && <UploadFile onSubmit={onSubmit} />}
            </Container>

        )
    }
}

FileUploaderForm.propTypes = {
};

export default FileUploaderForm;