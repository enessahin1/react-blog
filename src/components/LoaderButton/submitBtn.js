import React from 'react'
import { Button } from 'react-bootstrap'

const submitBtn = ({className, onClick, text}) => (
  <Button className={className} onClick={onClick} type="submit">
    {text}
  </Button>
)
export default submitBtn