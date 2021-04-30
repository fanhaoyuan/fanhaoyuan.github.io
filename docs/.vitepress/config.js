module.exports = {
    title: '博客',
    description: '记录文章与学习经验',
    lang: 'zh-CN',
    themeConfig: {
        repo: 'https://github.com/fanhaoyuan/fanhaoyuan.github.io/',
        branch: 'master',
        editLinks: true,
        editLinkText: '在GitHub上编辑此页面',
        lastUpdated: '最近更新时间',
        nav: [{ text: '文章', link: '/article/javascript/data-type', activeMatch: '^/article/' }],
        sidebar: {
            '/article/javascript/': [
                {
                    text: 'JavaScript',
                    children: [{ text: '数据类型', link: '/article/javascript/data-type' }],
                },
            ],
        },
    },
};
