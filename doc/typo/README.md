# 文本

## 类型

使用 `type` 可在开发页面时提高开发效率，避免增加重复的文本样式

````code
{
    title: '',
    desc: '',
    html: '<div id="typo-simple-demo" ></div>',
    source: './simple.vue',
    run: './simple.demo.js',
    side: true,
    open: true
}
````


## 标题

`title="main"` 用于主标题，`title="desc"` 用于对标题的补充。

````code
{
    title: '',
    desc: '',
    html: '<div id="typo-title-demo" ></div>',
    source: './title.vue',
    run: './title.demo.js',
    side: true,
    height: 14
}
````


## 内嵌描述

`desc` 可以在 `title` 中

````code
{
    desc: '',
    html: '<div id="typo-inline-desc-demo" ></div>',
    source: './inline-desc.vue',
    run: './inline-desc.demo.js',
    side: true,
    height: 10
}
````


## 返回

子页面增加返回功能，能更好的引导用户。

````code
{
    title: '',
    desc: '',
    html: '<div id="typo-back-demo" ></div>',
    source: './back.vue',
    run: './back.demo.js',
    side: true,
    height: 14,
}
````
