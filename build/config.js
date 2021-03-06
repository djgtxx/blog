
module.exports = {
    wait:[
        '屏幕适配 PC phone',
        '骨架屏 https://segmentfault.com/a/1190000016689372',
        '贝塞尔曲线 https://segmentfault.com/a/1190000018502700',
        '如何管理好10万行代码的前端单页面应用 https://juejin.im/post/59cb0d0b5188257e876a2d27',
        '洗牌算法 http://obkoro1.com/web_accumulate/accumulate/JS/%E6%95%B0%E7%BB%84%E5%AE%8C%E5%85%A8%E4%B9%B1%E5%BA%8F.html https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/ https://github.com/HOUCe/shuffle-array',
        '使用js创建并下载文件 https://gaohaoyang.github.io/2016/11/22/js-create-file-and-download/',
        '自己实现一个前端路由 https://zhuanlan.zhihu.com/p/37730038?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io',
        '请指出document.onload和document.ready两个事件的区别',
        'currentColor https://c.51tiangou.com/pages/viewpage.action?pageId=27102148',
        '前端登录：https://juejin.im/post/5cc3bcb0f265da03681463a0?utm_source=gold_browser_extension',
        'AOP https://juejin.im/post/5cc2e15651882525041c64b5?utm_source=gold_browser_extension https://www.cnblogs.com/Wolfmanlq/p/6036019.html',
        '变量提升，函数声明变函数表达式',
        '现金券最优选中 动态规划 背包问题',
        '函数组合，函数柯里化',
        '深度好文，https://juejin.im/post/5cb0315f518825215e61ec14?utm_source=gold_browser_extension',
        'await 在forEach 中 https://juejin.im/post/5cb1d5a3f265da03587bed99?utm_source=gold_browser_extension',
        'typeof instanceOf isPrototypeOf() 之间的区别  https://juejin.im/post/5c9216716fb9a070ef60a011?utm_source=gold_browser_extension',
        'react 源码 https://juejin.im/post/5cca5ad2e51d456e6154b4c7?utm_source=gold_browser_extension',
        '手写代码： https://juejin.im/post/5c9c3989e51d454e3a3902b6?utm_source=gold_browser_extension#heading-19',
        'this https://blog.techbridge.cc/2019/02/23/javascript-this/',
        '重排与重绘 https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588825&idx=1&sn=9ce03764375441ef0a8eb4fbce702e7a&chksm=8891d6bdbfe65fab0e76b1f86ec807ab0d13dec92951604c59fd1fe23ab0619257bf1dfa32bf&scene=0&xtrack=1#rd',
        'css 剪切',
        'webpack 抽象语法树，https://github.com/airuikun/blog/issues/4',
        'async 实现原理 阮一峰 、https://github.com/airuikun/Weekly-FE-Interview/issues/14',
        'https 对称加密，非对称加密 https://github.com/airuikun/Weekly-FE-Interview/issues/3',
        '前后端分离项目，如何seo https://github.com/airuikun/Weekly-FE-Interview/issues/13',
        '1000-div问题 https://github.com/airuikun/Weekly-FE-Interview/issues/15',
        '开放题：2万小球问题 https://github.com/airuikun/Weekly-FE-Interview/issues/16',
        'http 缓存',
        'http 与 https 对称加密，非对称加密',
        'promise 原生实现 https://github.com/YvetteLau/Blog/issues/2   https://github.com/xieranmaya/blog/issues/3',
        '真机调试：https://juejin.im/post/5c947f5251882568396a6773?utm_source=gold_browser_extension',
        {
            virtualDOM:[
                'https://blog.techbridge.cc/2019/02/04/vdom-from-scratch/',
                'https://juejin.im/post/5b10dd36e51d4506e04cf802'
            ],
            react:[
                'React Hooks https://github.com/brickspert/blog/issues/26',
                '源码解析：https://juejin.im/post/5abb22925188255c4c1050e0',
                'https://juejin.im/post/5cc53af6f265da038e54b2e6?utm_source=gold_browser_extension'
            ],
            css:[
                '0.5px https://juejin.im/post/5ab65f40f265da2384408a95',
                'https://www.zcfy.cc/article/stunning-hover-effects-with-css-variables'
            ]
        }
    ],
    logTitle:'个人博客',
    baseUrl:'https://github.com/chenqf/blog/blob/master/articles',
    publish:[
        {
            name:'javascript 基础',//分类的标题
            path:'javascript基础',//分类的路径
            children:[
                {
                    name:'ES6中的let和const',
                    issues:''
                },
                {
                    name:'ES6中的Promise',
                    issues:''
                },
                {
                    name:'详解typeof操作符',
                    issues:''
                },
                {
                    name:'如何中断forEach循环',
                    issues:''
                }
            ]
        },
        {
            name:'javascript 进阶',//分类的标题
            path:'javascript进阶',//分类的路径
            children:[
                {
                    name:'防抖函数',
                    issues:''
                },
                {
                    name:'节流函数',
                    issues:''
                },
                {
                    name:'JS中的栈内存和堆内存',
                    issues:'',
                    refer:[]
                },
                {
                    name:'JS中的内存管理',
                    issues:'',
                    refer:[
                        '栈内存和堆内存',
                        'http://obkoro1.com/web_accumulate/accumulate/tool/js%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6.html',
                        'http://www.ruanyifeng.com/blog/2017/04/memory-leak.html',
                        'https://mp.weixin.qq.com/s/op26GEKXEN-yI3IpA9tZQg',
                        'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management',
                        'https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec'
                    ]
                },
                {
                    name:'模拟实现call和apply',
                    issues:''
                },
                {
                    name:'模拟实现bind',
                    issues:''
                },
                {
                    name:'数组扁平化',
                    issues:''
                }
            ]
        },
        {
            name:'浏览器',//分类的标题
            path:'浏览器',//分类的路径
            children:[
                {
                    name:'一次搞懂EventLoop',
                    nickName:'一次搞懂Event Loop',
                    issues:''
                },
                {
                    name:'如何处理图片加载失败',
                    issues:''
                }
            ]
        },
        {
            name:'前端性能',//分类的标题
            path:'前端性能',//分类的路径
            children:[
                {
                    name:'如何渲染几万条数据并不卡住界面',
                    issues:''
                }
            ]
        },
        // {
        //     name:'网络',//分类的标题
        //     path:'网络',//分类的路径
        //     children:[
        //         {
        //             name:'彻底弄懂HTTP缓存机制及原理',
        //             issues:''
        //         }
        //     ]
        // },
        // {
        //     name:'算法相关',//分类的标题
        //     path:'算法相关',//分类的路径
        //     children:[
        //         {
        //             name:'',
        //             issues:''
        //         }
        //     ]
        // },
        {
            name:'技术随笔',//分类的标题
            path:'技术随笔',//分类的路径
            children:[
                {
                    name:'Async、Await陷阱',
                    issues:''
                }
            ]
        },
    ],
    pay:{
        ddd:[
            '本文首发与github，欢迎Watch & Star ★，转载请注明出处。',
            '为什么要捐助？一篇好文章可以帮助你节省大量的时间，而你的时间是相当宝贵的。 向文章的作者提供小额捐助，可以鼓励作者写出更好的文章。这是一种良性循环，现在就行动吧！ 鼓励留言，让我认识你。'
        ],
        title:'如果您觉得此文有帮助，可以打赏一个红包，以资鼓励~'
    },
};