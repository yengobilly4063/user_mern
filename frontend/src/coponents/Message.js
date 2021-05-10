import React from 'react'
import {Alert} from "react-bootstrap"

const Message = ({variant="danger", children}) => {
  return (
    <Alert className="mb-0" variant={variant}>
      {children}
    </Alert>
  )
}

export default Message
