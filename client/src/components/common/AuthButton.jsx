import React from 'react';

import Button from 'react-bootstrap/Button';

const AuthButton = ({ children, onClick, variant }) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Button>
  )
}

export default AuthButton;