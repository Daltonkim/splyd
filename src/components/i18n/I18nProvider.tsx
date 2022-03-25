import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/locale-data/en'

import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en'

import enTranslations from "./translations/en.json";


const allTranslations = {
    en : enTranslations,
};

export default function I18nProvider({ children }) {

    const locale = useSelector((state: RootStateOrAny) => state.i18n.lang) || 'en'; //add default locale if not present in redux store yet.

    const translations = allTranslations[locale];
    console.log(translations)

    return (
        <IntlProvider locale={locale} messages={translations}>
            {children}
        </IntlProvider>
    );
}
