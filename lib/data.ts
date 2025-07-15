import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "Home Building",
        location: "xiemu.top",
        description:
            "Developed using modern front-end technology stacks such as Next.js, TypeScript, and Tailwind CSS, it includes multiple sections such as personal profile, project showcase, skills, and experience timeline. The interface is concise and elegant with smooth interactions, adopting component-based development and responsive design.",
        icon: React.createElement(FaHome),
        date: "2025 July 15",
    },
    {
        title: "Blog Building",
        location: "blog.xiemu.top",
        description:
            "The blog was built using Hexo. Taking advantage of Hexo's strengths in generating simple and efficient static sites, a favorite theme was chosen, personalized parameters were configured, and features like article rendering, categorization, and archiving were deployed. This created an exclusive online space for creative sharing, technical exchanges, and life documentation, enabling ideas and stories to be shared through this platform. ",
        icon: React.createElement(FaBook),
        date: "2024 August 20",
    },
    {
        title: "Domain Registration",
        location: "xiemu.top",
        description:
            "Completed the registration process for the domain name “xiemu.top”. Through a professional domain name registration platform, followed the specifications to fill in information, completed real - name authentication and payment of fees. Successfully incorporated this domain name into personal network assets, laying a foundational network identifier for possible subsequent development of personal website construction, project display and other online businesses.",
        icon: React.createElement(FaGlobe),
        date: "2023 September 28",
    },

]

export const experiencesDataZn = [
    {
        "title": "主页搭建",
        "location": "xiemu.top",
        "description": "基于 Next.js、TypeScript 和 Tailwind CSS 等现代前端技术栈开发，包含个人简介、项目展示、技能特长、经历时间线等多个板块，界面简洁美观，交互流畅，采用组件化开发和响应式设计。",
        icon: React.createElement(FaHome),
        "date": "2025年7月15日"
    },
    {
        "title": "博客搭建",
        "location": "blog.xiemu.top",
        "description": "基于 Hexo 完成博客搭建，利用 Hexo 简洁高效的静态站点生成优势，选定心仪主题，配置个性化参数，部署文章渲染、分类归档等功能，搭建起承载创作分享、技术交流与生活记录的专属线上空间，让想法与故事借由这个平台向外传递 。",
        "icon": React.createElement(FaBook),
        "date": "2024年8月20日"
    },
    {
        "title": "注册域名",
        "location": "xiemu.top",
        "description": "完成域名 “xiemu.top” 的注册流程，通过专业域名注册平台，遵循规范填写信息、完成实名认证与费用支付 ，成功将该域名纳入个人网络资产，为后续可能开展的个人网站搭建、项目展示等线上业务，奠定基础网络标识。",
        "icon": React.createElement(FaGlobe),
        "date": "2023年9月28日"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "HomePage",
        "title_zh": "个人主页",
        "description":
            "A personal homepage developed using modern front-end technology stacks such as Next.js, TypeScript and Tailwind CSS.",
        "desc_zh": "一个基于 Next.js、TypeScript 和 Tailwind CSS 等现代前端技术栈开发的个人主页",
        "tags": ["Next.js", "TypeScript", "TailwindCSS"],
        "imageUrl": "https://p.xiemu.top/img/projects/homepage.webp",
        "projectUrl": "https://github.com/Codefreyy/Ethical-Digital-Nation",
        "demoUrl": "https://xiemu.top/"
    },
    {
        title: "Blog",
        title_zh: '个人博客',
        description:
            "A personal blog built on the Hexo framework with the Solitude theme, dedicated to sharing programming knowledge, technical articles, and life insights.",
        desc_zh: "一个基于Hexo框架和solitude主题的个人博客，致力于分享编程知识、技术文章和生活感悟。",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: "https://p.xiemu.top/img/projects/blog1.webp",
        projectUrl: 'https://github.com/xiemu-c/blog',
        demoUrl: 'https://blog.xiemu.top/',
    },
    {
        title: "Jailbreak Repo",
        title_zh: "越狱软件源",
        description:
            `This is a Jailbreak Repository, Please use the package manager to access it.
            `,
        desc_zh: "这是一个越狱软件源，请使用包管理器进行访问。",
        tags: ["HTML", "DEB", "JSON"],
        imageUrl: "https://p.xiemu.top/img/projects/jbrepo.webp",
        projectUrl: 'https://github.com/xiemu-c/jbrepo',
        demoUrl: 'https://jbrepo.xiemu.top/',
    },
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "Prisma",
    "MongoDB",
    "Framer Motion",
    "d3",
    "UI/UX"
] 
