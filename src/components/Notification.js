import { Alert } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice';

export default function Notification({type, message}) {
    const notification = useSelector(state => state.ui.notification);
    const dispatch = useDispatch();
    const handleClose = () => {
      dispatch(uiActions.showNotification({
        open :false
      }))
    }
  return (
    <div>
        {notification.open === true && <Alert severity={type} onClose={handleClose}>{message}</Alert>}
    </div>
  )
}
