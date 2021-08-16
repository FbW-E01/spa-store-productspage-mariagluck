import React, { useState } from 'react';
import { useLocaleContext } from '../contexts/LocaleContext';


const LocaleButton = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [locale, setLocale] = useLocaleContext();

    const toogleLocale = () => {
        setIsClicked(!isClicked);
       
        
    }

    return (
        <div>
            <div>
                <button style={{ padding: 5 }} onClick={toogleLocale}>
                    Language:  {locale}
                </button>
            </div>
            {isClicked ?
                <div style={{ position: 'absolute' }}>
                    <button onClick={() => setLocale('de-de')}>DE - Deutsch</button>
                    <button onClick={() => setLocale('en-gb')}>EN - English</button>
                    <button onClick={() => setLocale('en-us')}>US - English</button>
                </div> : ''
            }
        </div>
    );
}

export default LocaleButton;