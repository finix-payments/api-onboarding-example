import './fileUploadS.css'
import React from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import numeral from 'numeral'
import classnames from 'classnames'
import merge from 'lodash/merge'
import head from 'lodash/head'
import map from 'lodash/map'

import {
  DEFAULT_CONFIG,
  DEFAULT_INSTRUCTIONS,
} from '../../constants/fileUploadConstants'

/*
To-Do: refactor this component, so it can support other use cases
1) accept custom props, for extra file types and size
2) file upload action (api) need to be provided from form
3) the 'instruction' component need to be updated to reflect the config
*/
const FileUploader = ({
  input,
  label,
  meta: {
    error,
    warning,
  },
  config = {},
  instructions = {},
  fileIcon = 'fal fa-file',
}) => {
  const { onChange, value } = input
  const onDrop = (acceptedFiles) => onChange(head(acceptedFiles))
  const onDropRejected = (rejectedFiles) => onChange(head(rejectedFiles))

  const uploaderConfig = merge({}, DEFAULT_CONFIG, config, { onDrop, onDropRejected })

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone(uploaderConfig)

  const files = map(acceptedFiles, ({ path, size }) => (
    <li key={path} className='item'>
      {path} - {numeral(size).format('0.00 b')}
    </li>
  ))

  const uploadInstructions = merge({}, DEFAULT_INSTRUCTIONS, instructions)
  const instructionsComp = map(uploadInstructions, ({ name, message }) => (
    <li key={name} className={classnames('item', { main: name === 'main' })}>
      {message}
    </li>
  ))

  return (
    <section className='FileUploader'>
      {label && <label>{label}</label>}

      <div {...getRootProps()} className='dropzone'>
        <input {...getInputProps()} />

        <ul className='instructions'>
          <li className='item'>

            <span className='icons fa-stack fa-2x'>
              {fileIcon && <i className={`${fileIcon} fa-stack-2x fileIcon`} />}
            </span>
          </li>
          {instructionsComp}
        </ul>

        { value && acceptedFiles && <ul className='files'>{files}</ul> }
      </div>

      {error && (
      <div className='error'>{error}</div>
      )}
    </section>
  )
}

FileUploader.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  config: PropTypes.object,
  instructions: PropTypes.array,
  fileIcon: PropTypes.string,
}

export default FileUploader