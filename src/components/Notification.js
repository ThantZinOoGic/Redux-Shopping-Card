import { Alert } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Notification({type, message}) {
    const notification = useSelector(state => state.ui.notification)
  return (
    <div>
        { <Alert severity={type}>{message}</Alert>}
    </div>
  )
}
