# 布局


页面结构布局，主要由 `a-header` `a-sider` `a-content` `a-footer` 组成，它们被 `a-layout` 包裹。

## 24 栅格

`span` 控制格子占比，所有格子占比总和需达到 `24`。

`space` 控制一组元素之间的间距，`space` 为 `CSS` 单位。

````code
{
    title: '',
    desc: '',
    html: '<div id="layout-simple-demo" ></div>',
    source: './simple.vue',
    run: './simple.demo.js',
}
````

<style>
/* 文档样式，项目中无需使用 */
.a-col {
  background-color:#eee;
}
.layout-demo {
  overflow:hidden;
}
.demo {
    background-color: skyblue;
    color:white;
    text-align: center;
}
.a-col:nth-child(even) .demo {
  background-color: lightgreen;
}
</style>
