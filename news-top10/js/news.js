// 新闻数据
const newsData = [
    {
        title: "中国航天员首次太空行走成功",
        time: "2023-11-01",
        link: "https://example.com/news/1"
    },
    {
        title: "全球气候变化会议达成新协议",
        time: "2023-10-28",
        link: "https://example.com/news/2"
    },
    {
        title: "新型人工智能技术突破性进展",
        time: "2023-10-25",
        link: "https://example.com/news/3"
    },
    {
        title: "世界经济论坛发布年度报告",
        time: "2023-10-20",
        link: "https://example.com/news/4"
    },
    {
        title: "重大医学突破：新型疫苗研发成功",
        time: "2023-10-15",
        link: "https://example.com/news/5"
    },
    {
        title: "国际体育赛事开幕式盛大举行",
        time: "2023-10-10",
        link: "https://example.com/news/6"
    },
    {
        title: "全球科技巨头发布革命性新产品",
        time: "2023-10-05",
        link: "https://example.com/news/7"
    },
    {
        title: "国际和平会议达成重要共识",
        time: "2023-09-30",
        link: "https://example.com/news/8"
    },
    {
        title: "世界文化遗产新增多个项目",
        time: "2023-09-25",
        link: "https://example.com/news/9"
    },
    {
        title: "全球教育峰会提出创新教育模式",
        time: "2023-09-20",
        link: "https://example.com/news/10"
    }
];

// 加载新闻列表
function loadNewsList() {
    const newsList = document.getElementById('news-list');
    
    newsData.forEach(news => {
        const listItem = document.createElement('li');
        listItem.className = 'news-item bg-gray-50 hover:bg-gray-100 p-4 rounded-md border border-gray-200';
        
        const newsContent = `
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 class="news-title text-xl font-semibold mb-2 md:mb-0">${news.title}</h2>
                <div class="flex items-center space-x-4">
                    <span class="news-time text-sm">${news.time}</span>
                    <a href="${news.link}" target="_blank" class="news-link text-sm font-medium">阅读原文</a>
                </div>
            </div>
        `;
        
        listItem.innerHTML = newsContent;
        newsList.appendChild(listItem);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadNewsList();
}); 