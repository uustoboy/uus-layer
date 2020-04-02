### uus-layer 为rem开发vue移动端简易弹层 ![](https://img.shields.io/npm/dt/uus-layer.svg)
---
#### 技术栈

   `vue@2.6.11` `typescript` `scss`
> 前提 vue >= 2.6.11

![image](https://github.com/uustoboy/uus-layer/raw/master/examples/img/1.png)

#### 安装
> npm install uus-layer --save

### 使用
```
 import Vue from 'vue'
 import UUSLayer from 'uus-layer'
 //自行引入hotcs.js转rem,和uus-layer无关;
 import '../node_modules/base_mixins/hotcss.min';
 //引入uus-layer.css
 import "../node_modules/uus-layer/dist/uus-layer.css";
 
 Vue.use(Cube)
```

### 组件内使用
```
    src/components/组件
    <template>
        <div>
            <UUSLayer
                @handleCancel="close"
                :popupSwitch="popupSwitch"
                @handleEnsure="ensure"
                :center="popCenter"
                :title="popTitle"
            /> 
        </div>
    </template>

    export default {
        data() {
            return {
                popupSwitch: false,  //显示弹层
                popCenter: {         //弹层内容
                    text: "弹层内容？"  
                },
                popTitle: {         //标题
                    show: true,
                    text: "标题"
                }
            };
        },
        methods: {
            showPop() {
                this.popupSwitch = true;
            },
            close() {
                this.popupSwitch = false;
            },
            ensure() {
                this.popupSwitch = false;
            }
        }
    };
```

