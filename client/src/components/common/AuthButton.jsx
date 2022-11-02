import React from 'react';

import Button from 'react-bootstrap/Button';

const AuthButton = ({ children, sitePath, onClick, variant }) => {
  return (
    <Button
      type="button"
      href={sitePath}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Button>
  )
}

export default AuthButton;