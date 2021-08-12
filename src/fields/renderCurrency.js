import {Form, InputGroup} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from "react-tooltip";

const renderCurrency = (field) => {
    const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`;
    return(
      <Form.Group controlId={field.label}>
        <div className={className}>
        <Form.Label>{field.label} <span data-tip={field.tool_tip_text} data-for={field.label}><FontAwesomeIcon color="#1A233B" icon="info-circle"  /></span><ReactTooltip id={field.label} place="right" type="dark" /> </Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
           <Form.Control {...field.input} placeholder={field.placeholder_text} normalize={field.normalize} format={field.format} />
  
          
            </InputGroup>
  
            <div className="error" style={{color:'red'}}>
                {field.meta.touched ? field.meta.error:''}
            </div>
        </div>
        </Form.Group>
    )
    }

export default renderCurrency