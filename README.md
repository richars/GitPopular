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

- [24212eb835](https://git.imooc.com/coding-304/GitHub_Advanced/commit/24212eb835b6db639b82017b8090c15a14dea48f) - Keep react navigation new and react-navigation-redux-helpe : 此次更新适配了react-navigation-redux-helpers3.0;

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



