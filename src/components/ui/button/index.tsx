import React, { FC, ReactNode } from 'react'
import styles from './button.module.scss'
import classNames from 'classnames'

interface ButtonProps {
  variant: 'outlined' | 'light' | 'dark'
  children: ReactNode
  cls?: string
}
export const Button: FC<ButtonProps> = (props) => {
  const { children, variant, cls = '' } = props

  return (
    <button className={classNames(styles.button, styles[variant], cls)}>
      {children}
    </button>
  )
}
