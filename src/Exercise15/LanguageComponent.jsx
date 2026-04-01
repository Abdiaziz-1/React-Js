import React, {useContext} from 'react'
import SwitchLanguage from './Language'

export const LanguageComponent = () => {

  const LangChange = useContext(SwitchLanguage)

  const message = {
    en : "Hello!",
    es : "!Hallo!"
  }

  return (
    <h1>{message[LangChange]}</h1>
  )
}
