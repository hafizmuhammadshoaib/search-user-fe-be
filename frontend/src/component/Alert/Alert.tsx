import React, { useEffect, useState } from 'react';
import { Alert as BootstrapAlert, AlertProps as BootstrapAlertProps } from 'react-bootstrap';

export interface AlertProps extends BootstrapAlertProps {
  heading: string;
}

export const Alert = ({ show = false, onClose, heading = '', ...args }: AlertProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const onCloseAlert = () => {
    if (onClose) {
      onClose('a', 'b');
    }
    setShowAlert(false);
  };
  useEffect(() => {
    setShowAlert(show);
  }, [show]);
  return (
    <BootstrapAlert data-test-id={'error-banner'} show={showAlert} variant="danger" onClose={onCloseAlert} dismissible {...args}>
      <p>{heading}</p>
    </BootstrapAlert>
  );
};
