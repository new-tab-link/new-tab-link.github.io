import { Button, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

export interface ConfirmProps {
  confirmText: string;
  cancelText: string;
  onClose?: () => void;
  onCancel?: () => void;
  close?: () => void;
  setShow?: (show: boolean) => void;
  onConfirm?: () => void;
  confirm?: () => void;
  title: string | ReactNode[] | ReactNode;
  content: string | ReactNode[] | ReactNode;
  open: boolean;
}

export function Confirm(props: ConfirmProps) {
  function onClose() {
    close();
  }
  function onCancel() {
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
  function onConfirm() {
    close();
    props.confirm?.();
  }
  return (
    <Dialog open={props.open} onClose={props.onClose || onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.content}</DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel || onCancel}>{props.cancelText}</Button>
        <Button onClick={props.onConfirm || onConfirm}>{props.confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
}
