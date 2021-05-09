import React, { createContext, useState } from 'react'

export const defaultLocale = 'nz'
export const locales = ['mx', 'nz']
export const LanguageContext = createContext([])

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale)

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  )
}
