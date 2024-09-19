import React, { ReactNode } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import _ from 'lodash';

export interface AlertProps {
  show: boolean;
  title: ReactNode | string;
  okButton: ReactNode | string;
  content: ReactNode | string;
  setShow?: (show: boolean) => void;
  onOk?: () => void;
  ok?: () => void;
  onClose?: () => void;
  close?: () => void;
}
export function MuiAlert(props: AlertProps) {
  function onClose() {
    close();
  }
  function close() {
    if (props.setShow) {
      props.setShow(false);
    }
    if (props.close) {
      props.close();
    }
  }
  function onOk() {
    close();
    props.ok?.();
  }
  const title = _.isString(props.title) ? <div>{props.title}</div> : props.title;
  const okButton = _.isString(props.okButton) ? <Button>{props.okButton}</Button> : props.okButton;
  return (
    <Dialog open={props.show} onClose={props.onClose || onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{props.content}</DialogContent>
      <DialogActions>
        <div onClick={props.onOk || onOk}>{okButton}</div>
      </DialogActions>
    </Dialog>
  );
}
