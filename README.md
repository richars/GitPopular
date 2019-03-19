实战课[最新版react native+redux打造高质量上线app](https://coding.imooc.com/class/304.html)

## 概述
- 课程文档查看[doc](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/doc);
- 课程中所用到的demo查看[demo](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/demo);
- 更多demo可查看[demo](https://github.com/crazycodeboy/RNStudyNotes/tree/master/Demo);
- 课程源码，可通过git查看课程各章节的源码；


## 如何运行？

1. 在项目根目录执行`npm install`或`yarn install`;
2. 切换到ios目录下执行`pod install`;
3. 然后运行 react-native run-ios 或 react-native run-android；
4. Ok,有问题可以提issues出来;

## 课程辅导答疑

[http://coding.imooc.com/learn/qa/304.html](http://coding.imooc.com/learn/qa/304.html)

## 更新日志

### 2019-03-19：[1849994783](https://git.imooc.com/coding-304/GitHub_Advanced/commit/1849994783b160c899c6da4f4db0e43a1811c989)

- 新增[列表实例代码](https://git.imooc.com/coding-304/GitHub_Advanced/src/master/demo/FasterListDemo)；

### 2019-03-14：[c8163255de](https://git.imooc.com/coding-304/GitHub_Advanced/commit/c8163255decb9629e3c53a4819ae711a5e241f9d)
	
- `"react-navigation": "^3.3.2"` -> `"react-navigation": "^3.3.2"`
- `"react-navigation-tabs": "^1.0.2"` -> `react-navigation-tabs": "^2.0.0-alpha.0"`
- 添加`"react-native-reanimated": "^1.0.0-alpha.12"`

>因为有些同学将[react-navigation-tabs](https://github.com/react-navigation/react-navigation-tabs)升级到了刚刚发布的alpha版本为此采坑了，主要原因归结于这个版本的[react-navigation-tab](https://github.com/react-navigation/react-navigation-tabs)引入了[react-native-reanimated](https://github.com/kmagiera/react-native-reanimated)这个第三方库，但同学们在使用时却没将其添加进来导致的，为了不让大家踩坑，老师特意为大家准备了`react-navigation-tabs`升级到了最新版的教程，如需使用最新版大家课程参考这次的提交修改即可。

**另外需要注意的是因为`react-native-reanimated`包含native部分的代码，所以我们除了运行yarn add命令之外，还需要通过`react-native link react-native-reanimated`将它的native部分的代码关联到项目中去。**

### 2019-02-19：[24212eb835](https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f) - Keep react navigation new and react-navigation-redux-helpe : 此次更新适配了react-navigation-redux-helpers3.0;

> react-navigation-redux-helpers3.0的两个变更:

**1.reduxifyNavigator被改名为createReduxContainer，所以：**

```
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';
//改为
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';
...
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
//改为
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');
```

**2.createReactNavigationReduxMiddleware的参数顺序发生了变化：**

```
export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
//改为
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);
```

可参考：[https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f](https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f)



