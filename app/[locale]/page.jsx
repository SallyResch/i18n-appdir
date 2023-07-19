import { useTranslations } from "next-intl";
import AlertMessage from "./AlertMessage";
import Navbar from "./components/nav";
import CookieBanner from "./components/cookieBanner";

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <Navbar/>
      <div>
      <p>{t('title')}</p>
      <p>{t('subtitle')}</p>
      <AlertMessage message={t("alertMessage")}/>
      <button>{t('buttonYes')}</button>
      <button>{t('buttonNo')}</button>
      </div>
      <CookieBanner/>
    </div>
  )
}
