import i18n from 'i18next'
import { initReactI18next} from 'react-i18next'

import en from './locales/en/translation.json'
import th from './locales/th/translation.json'

const resources = {
    en :{
        translation : en
    },
    th : {
        translation : th
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:'en',
    keySeparator : false, //we do not use keys in form message.welcome
    interpolation:{
        escapeValue : false //react already safe from xss
    }
})

export default i18n