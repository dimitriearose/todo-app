import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  title: string
  setOpen: any
}

const Modal = ({ children, isOpen, title, setOpen }: ModalProps) => {
  const onClose = () => {
    setOpen(false)
  }

  return createPortal(<div className='modal'>{children}</div>, document.getElementById('modal') as Element)
}

export default Modal
