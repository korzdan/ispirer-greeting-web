import './App.css';
import i18n from "i18next"
import {initReactI18next, useTranslation} from "react-i18next";
import {useState} from "react";

const translationEn = {
    greeting: "Hello!",
    button: "Say hello",
    russianLang: "Russian",
    englishLang: "English",
    changeLang: "Change language:"

};
const translationRu = {
    greeting: "Привет!",
    button: "Поздороваться",
    russianLang: "Русский",
    englishLang: "Английский",
    changeLang: "Изменить язык:"
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: translationEn},
            ru: {translation: translationRu}
        },
        lang: "en",
        fallbackLng: "en",
        interpolation: {escapeValue: false}
    });

function App() {
    const {t} = useTranslation();
    const [clicked, setClicked] = useState(false);

    const langChange = (event) => {
        i18n.changeLanguage(event.target.value);
        setClicked(false);
    }

    const btnClick = () => {
        setClicked(true);
    }

    return (
        <div className="App">
            <div className="lang-change">
                <label>{t('changeLang')}</label>
                <select name="language" onChange={langChange}>
                    <option value="en">{t('englishLang')}</option>
                    <option value="ru">{t('russianLang')}</option>
                </select>
            </div>
            {clicked == true && <h1>{t('greeting')}</h1>}
          <button onClick={btnClick}>{t('button')}</button>
        </div>
    );
}

export default App;
