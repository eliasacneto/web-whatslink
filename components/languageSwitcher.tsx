"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

const locales = ["en", "pt", "es"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const newPathname = pathname.replace(`/${currentLocale}`, "");
    router.push(`/${newLocale}${newPathname}`);
  };

  return (
    <select
      onChange={(e) => handleChange(e.target.value)}
      value={currentLocale}
      className="bg-white border border-gray-300 rounded px-2 py-1 text-gray-800"
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale === "en" ? "🇺🇸 EN" : locale === "pt" ? "🇧🇷 PT" : "🇪🇸 ES"}
        </option>
      ))}
    </select>
  );
}
