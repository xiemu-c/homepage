"use client"

import { IoLanguageOutline } from "react-icons/io5"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export default function LanguageSwitch() {
  const localActive = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextLocale = localActive === "en" ? "zh" : "en"
    // 设置 NEXT_LOCALE Cookie
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    // 刷新页面以应用语言
    window.location.reload();
  }

  return (
    <>
      <button
        onClick={onChangeLanguage}
        className="w-[2.5rem] h-[2.5rem] bg-opacity-80 flex items-center justify-center gap-1 transition-all "
      >
        <span className="sr-only">Change Language</span>
        {/* <IoLanguageOutline /> */}

        <span className="text-sm hover:scale-[1.15] active:scale-105 transition-all">
          {" "}
          {localActive == "en" ? "EN" : "ZH"}
        </span>
      </button>
    </>
  )
}
