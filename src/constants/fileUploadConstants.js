export const JPEG = 'image/jpeg'
export const PNG = 'image/png'
export const TIFF = 'image/tiff'
export const PDF = 'application/pdf'

export const MAX_SIZE = 2000000

export const DEFAULT_ACCEPT = [
  JPEG,
  PNG,
  TIFF,
  PDF,
].join(', ')

export const DEFAULT_CONFIG = {
  multiple: false,
  maxSize: MAX_SIZE,
  accept: DEFAULT_ACCEPT,
}

export const DEFAULT_INSTRUCTIONS = [
  {
    name: 'main',
    message: 'Drag and drop, or click to select and upload a file',
  },
  {
    name: 'sub',
    message: 'Accept: jpeg, png, tiff, pdf; Max Size: 2 MB',
  },
]