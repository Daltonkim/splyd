import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const actionTypes = {
    SetLanguage: "i18n/SET_LANGUAGE"
};

const initialState = {
    lang: "en"
};

export const reducer = persistReducer(
    { storage, key: "i18n" },
    (state: any = initialState, action: any) => {
        switch (action.type) {
            case actionTypes.SetLanguage:
                // save language in localStorage
                localStorage.setItem('lang', action.payload.lang )
                return { ...state, lang: action.payload.lang };

            default:
                return state;
        }
    }
);

export const actions = {
    setLanguage: lang => ({ type: actionTypes.SetLanguage, payload: { lang } })
};


export const I18nProvider = {
    actions,
    reducer
}