import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Provider} from './createContext'

const AppProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Provider
      value={{
        open: isOpen,
        showModal: () => setIsOpen(true),
        hideModal: () => setIsOpen(false),
      }}
    >
      {children}
    </Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
