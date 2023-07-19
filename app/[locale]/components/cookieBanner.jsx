import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslations } from "next-intl";

const ConsentBanner = () => {
  const t = useTranslations('Home');
  return (
    <CookieConsent
      location="bottom" // You can change the banner location if needed
      buttonText="I agree" // Customize the button text
      cookieName="myCookieConsent" // Change the cookie name to a unique identifier
      style={{ background: '#333' }} // Customize the banner style
      buttonStyle={{ color: '#fff', background: '#007bff' }} // Customize the button style
    >{t('cookieText')}
    </CookieConsent>
  );
};

export default ConsentBanner;