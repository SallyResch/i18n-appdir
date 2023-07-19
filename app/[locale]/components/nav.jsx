import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function Navbar() {

  const t = useTranslations('Home');

  return (
    <nav>
      <div>
          <Link href="/" locale="en">English</Link>
          <Link href="/" locale="sv">Svenska</Link>
      </div>
    </nav>
  )
}
