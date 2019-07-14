import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {Dialog} from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import {Close} from './modal.css'

import '@reach/dialog/styles.css'

const Modal = ({children, open, showModal, hideModal}) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const onKeyDown = ({key}) => {
    if (key === 'Escape') {
      open && hideModal()
    }
  }

  const disableScrolling = open => {
    // Disables scrolling when the modal is open, as suggested by
    // https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = null
      document.documentElement.style.overflow = null
    }
  }

  if (typeof document !== 'undefined') {
    disableScrolling(open)
  }

  return (
    <>
      <button onClick={showModal}>Show Modal</button>

      <Dialog isOpen={open}>
        <Close onClick={hideModal}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </Close>
        {children}
      </Dialog>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
}

export default Modal
