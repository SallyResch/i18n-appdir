import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import Navbar from "./components/nav";


export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <Navbar/>
     {/*  <div>
          <Link href="/" locale="en">English</Link>
          <Link href="/" locale="sv">Svenska</Link>
      </div> */}
      <div>
      <p>{t('title')}</p>
      <p>{t('subtitle')}</p>
      <AlertMessage message={t("alertMessage")}/>
      <button>{t('buttonYes')}</button>
      <button>{t('buttonNo')}</button>
      </div>
    </div>
  )
}
