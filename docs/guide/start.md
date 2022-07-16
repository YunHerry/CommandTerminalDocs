---
sidebar: auto
---
# 前言

__TerminalCommand__ 使用JVM平台语言编写,本文档在描述的时候会主要以Java语言进行描述和示例演示  
<br>
文档的内容并不能保证面面俱到，如果你认为某篇章节有缺少的内容或者有可以改进的地方，欢迎通过Issue指正~

## 简介
===
__TerminalCommand__ 框架主要是对于当前,希望开发web后台,但是受制于各种原因所需要的迅捷开发的开发框架
<br>

## 免责声明

本框架仅用于交流学习,并于github平台遵照 Apache-2.0 License [](https://github.com/YunHerry/CommandTerminal/blob/master/LICENSE) 协议开源，
<br>
开源地址：https://github.com/YunHerry/CommandTerminal/
<br>
请使用本框架开发、从事违法犯罪等相关内容，任何使用者如若因使用此框架或其相关框架而发生任何纠纷或损失，开发团队不承担任何责任.
<br>
框架本体开源免费，不收取任何费用，如有遇到有偿提供框架源码者请及时举报.

## 注意事项
Java version
<br>
目前，在使用框架之前，你首先需要检查一下你的java版本。在命令行输入： java -version 即可查看你的java版本，例如：
``` java
java version "1.8.0_241"
Java(TM) SE Runtime Environment (build 1.8.0_241-b07)
Java HotSpot(TM) 64-Bit Server VM (build 25.241-b07, mixed mode)
```
本项目,当前基于Java8开发,请尽量使用Java8 - Java11的版本
<br>
因Java12新增新语法糖,暂不支持.

## 视频教学
暂无,之后有空就出

# 快速开始
本章节会提供一些简单的代码示例来介绍如何快速编写一个通用的启动器以及命令类

## 构建项目
首先,请先构建一个项目(这里以Maven项目为例),不多赘述创建项目的方法,请自行查找.
请在Maven项目中的pom.xml添加依赖

``` 

<dependency>
  <groupId>io.github.yunherry</groupId>
  <artifactId>command-terminal</artifactId>
  <version>1.0.0</version>
  <type>pom</type>
</dependency>

```

## 启动类的创建
编写一个程序入口类,并通过indi.yunherry.TerminalApplication.java的静态方法启动TerminalCommand
``` Java
@TerminalCommand
public class Test {
    public void main(String args[]) {
        final TerminalContext terminalContext = TerminalApplication.run(Test.class); 
    }
}
```

## 命令类的创建
如果想要创建命令类,你可以实现@Command,或者继承Command类,下面使用一个测试类实例进行展示。
``` Java
@Commmand
public class TestCommand {
    public void test() {
        ...
    }
}
```
```
输入命令: "/test"
输出: ...
```

### 方法注解
命令类的方法不返回数据,并且一个命令的执行周期是:输入命令->解析命令->执行命令->重新执行整个流程.<br>
假设你有两个方法,并且他们的名称、方法参数数量相同,则我们将会认为他是同一个方法,并且抛出异常,如果你想将方法名称进行改变<br>
我们应当使用@MethodName注解,他将会代替方法原本的名称,注入方法容器之中,你也可以对传入参数进行注解,使其拥有默认值<br>
这里统一使用一个栗子进行展示.

``` Java
@Commmand
public class TestCommand {
    @MethodName(MethodName="test1")
    public void test(@DefaultValue("yun") String va) {
        System.out.println(va);
    }
}
```
当你这样写的时候,你可以执行:<br>
```
/test1 -va
返回: yun
```
但是,如果你为va属性赋值,则:
```
/test1 -va=hello world!
返回: hello world!
```
