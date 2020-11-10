
import React from 'react'
import { Button } from 'react-bootstrap'
import './index.css'
export default ({
  isLoading,
  text,
  loadingText,
  className = '',
  disabled = false,
  ...props
}) => (
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    Login
  </Button>
)