import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // 支持的所有语言
    locales: ['en', 'zh'],
    // 默认语言
    defaultLocale: 'en',
    // 永远不显示语言前缀
    localePrefix: 'never',
});

export const config = {
    // 匹配所有路径
    matcher: ['/'],
};