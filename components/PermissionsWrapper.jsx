'use client'
import { UserContext } from '@/context/userContext'
import hasPermission from '@/utilities/hasPermission'
import React, { useContext } from 'react'

const PermissionsWrapper = ({children, requiredPermission}) => {
    const {permissions} = useContext(UserContext)
    console.log(permissions)
    console.log()
  return (
    hasPermission(requiredPermission, permissions) &&  <>{children}</>
  );
}

export default PermissionsWrapper