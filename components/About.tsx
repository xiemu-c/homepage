"use client"
import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()
  
  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale === "zh" ? (
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">你好 👋, 我是谢幕</div>
          <div>
            一个在代码世界里跌跌撞撞却始终乐此不疲的编程爱好者。
          </div>
          <div>
            我和编程的缘分始于一次偶然的编程课。当时对着黑屏敲出第一行 “Hello World” 时，看着那串字符在屏幕上跳动，心里像揣了颗小烟花，噗地一下就亮了。
          </div>
          <div>
            我算不上什么技术大佬，遇到棘手的 Bug 时也会抓着头发叹气，面对复杂的算法题时也得对着文档啃上大半天。但我总觉得，编程的魅力从来不止于完美的代码，更在于一步步拆解问题的过程 —— 就像拼一幅巨型拼图，哪怕一开始对着满地碎片毫无头绪，只要耐着性子找到第一块契合的接口，剩下的轮廓总会慢慢清晰起来。
          </div>
          <div>
            平时除了捣鼓自己的小项目，我最喜欢逛技术社区。看大佬们分享的经验帖会默默记在备忘录里，遇到和我一样的新手提问，也会把自己踩过的坑掏出来分享。对我来说，编程从来不是孤军奋战，那些在评论区里的 “这个方法我试过，其实可以这样优化”，那些在交流群里的 “我帮你看看这段代码”，都让我觉得这个世界既硬核又温暖。
          </div>
          <div>
            现在的我，依然在从 “会写” 到 “写好” 的路上慢慢走。或许我的代码还不够精炼，思路还不够开阔，但对编程的热情从来没减过。毕竟，能在 0 和 1 的世界里，用逻辑搭建出自己的小天地，本身就是件足够酷的事，不是吗？
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">Hi 👋, I&apos;m XieMu</div>
          <div>
            A programming enthusiast who has been stumbling through the world of code but remains passionate about it.
          </div>
          <div>
            My journey with programming began in an unexpected coding class. The moment I typed my first line of &ldquo;Hello World&rdquo; on a black screen and saw those characters dancing, it felt like a little firework ignited in my heart.
          </div>
          <div>
            I may not be a tech guru, and I still pull my hair out over tricky bugs or wrestle with complex algorithms for hours. But I believe the real magic of coding lies not just in writing perfect code, but in the journey of breaking down problems step by step — like piecing together a giant puzzle. Even when faced with a sea of scattered pieces, finding that first matching edge can slowly reveal the bigger picture.
          </div>
          <div>
            In my free time, I love exploring tech communities. I jot down tips from experienced developers in my notes, and when fellow newbies ask questions, I share the pitfalls I&apos;ve encountered. For me, coding has never been a solo journey; those comments like &ldquo;I&apos;ve tried this method, it can actually be optimized this way,&rdquo; and those offers in group chats like &ldquo;Let me take a look at your code,&rdquo; make the tech world feel both hardcore and warm.
          </div>
          <div>
            Now, I&apos;m still on the path from &ldquo;knowing how to write&rdquo; to &ldquo;writing well.&rdquo; My code might not be the most elegant, and my thinking might not be the broadest, but my passion for programming has never waned. After all, building my own little world with logic in the realm of 0s and 1s is already pretty cool, isn&apos;t it?
          </div>
        </div>
      )}
    </motion.section>
  )
}