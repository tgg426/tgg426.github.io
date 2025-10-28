// 侧边栏导航高亮功能
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前页面路径
  const currentPath = window.location.pathname;
  
  // 获取所有侧边栏导航链接
  const sidebarLinks = document.querySelectorAll('.sidebar-menu-link');
  
  // 移除所有active类
  sidebarLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // 根据当前路径高亮对应的导航项
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // 处理首页
    if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
    // 处理其他页面
    else if (href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
    }
  });
});
