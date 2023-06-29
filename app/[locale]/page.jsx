import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <div>
      <Link href="/" locale="en">English</Link>
      <Link href="/" locale="sv">Svenska</Link>
      </div>
      <div>
      <p>{t('title')}</p>
      <p>{t('subtitle')}</p>
      <AlertMessage message={t("alertMessage")}/>
      </div>
    </div>
  )
}
