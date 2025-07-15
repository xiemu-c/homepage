"use client"

import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import clsx from "clsx"
import { headerLanguageMap } from "@/lib/data"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useLocale } from "next-intl"

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const activeLocale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      {/* 移动端汉堡按钮 */}
      <button
        className="sm:hidden fixed top-4 left-4 z-[1000] p-2 rounded-md bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 border border-gray-200 dark:border-gray-700"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Open navigation menu"
      >
        <FaBars className="w-6 h-6 text-gray-700 dark:text-gray-200" />
      </button>
      {/* 移动端抽屉菜单，桌面端恢复原有圆框布局和交互 */}
      {/* 移动端菜单 */}
      <nav
        className={clsx(
          "sm:hidden fixed top-0 left-0 w-2/3 max-w-xs h-full bg-white dark:bg-gray-900 shadow-lg z-[999] flex flex-col gap-6 pt-20 p-8 transition-transform duration-300",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <ul className="flex flex-col gap-6 text-[1rem] font-medium text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <li key={link.hash} className="relative">
              <Link
                href={link.hash}
                className={clsx(
                  "block px-3 py-2 rounded hover:text-gray-950 dark:hover:text-gray-300 transition",
                  {
                    "text-gray-950": activeSection === link.name,
                    "dark:hover:text-gray-600": activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMenuOpen(false);
                }}
              >
                {activeLocale === "zh" ? headerLanguageMap[link.name] : link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* 桌面端菜单，圆框内可点击 */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5  ">
          {links.map((link, index) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative break-keep"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 no-wrap hover:text-gray-950 dark:hover:text-gray-300 transition",
                  {
                    "text-gray-950": activeSection === link.name,
                    "dark:hover:text-gray-600": activeSection == link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {activeLocale === "zh"
                  ? headerLanguageMap[link.name]
                  : link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      {/* 点击遮罩关闭菜单 */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black bg-opacity-30 sm:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header
