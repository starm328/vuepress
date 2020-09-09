const  nav =require('./configs/nav.js');
const  sidebar =require('./configs/sidebar.js');
module.exports = {
  title: 'RiseApe企猿技术博客',
  description: 'Hello, 猿人们! 企猿博客，学习前端、后端知识，分享面试经验，分享工作中的问题和写一些技术分享，是一个互联网从业者值得收藏的网站。',
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
      nav,
      sidebarDepth: 2,
      sidebar,
       
  }
}