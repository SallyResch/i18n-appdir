import { useTranslations } from "next-intl";
import Link from "next-intl/link";

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
      </div>
    </div>
  )
}
