# 函数

## 函数简介

当遇到复杂逻辑处理的程序时或者某些需要重复执行的操作时，我们就可以将这些操作放在函数中，当需要的时候直接调用函数即可。

发起函数调用的函数是调用者，而被调用的函数是被调用者或者被调用函数。

每一个C++可执行程序文件都有一个`main`函数。

~~~C++
int main()
{

}
~~~

### 使用函数的好处

- 可以少写代码，轻量化程序
- 便于维护，减少维护成本
- 可读性好，简单易懂
- 函数内部变量为局部变量

### 自定义函数

函数由三部分构成

- 返回值类型
- 函数名
- 函数体

```C++
返回值类型 函数名()
{
  // 函数体
}
```

下面的程序告诉我们如何定义和调用函数

```C++

void fnA()
{
  std::cout << "run fnA\n";
}
int main()
{
  std::cout << "start run main\n";
  fnA();
  std::cout << "end";
  return 0;
}
```

执行上述代码就会看到以下结果

```shell
# start run main
# run fnA
# end
```

::: danger 警告
函数调用是不要忘记带括号
:::

### 函数不支持嵌套定义

```C++
int main()
{
  void fnA(){
    std::cout << "fnA()\n";
  }
  fnA();
  return 0;
  // 以上写法在C++中是不被允许的
}
```

::: info 注
“foo”是一个无意义的词，当名称不重要时，“foo”用作函数或变量的占位符名称。这样的词被称为元语法变量（在通用语言中，通常被称为“占位符名称”，因为没有人能记住术语“元语法变量”）。C++中其他常见的元语法变量包括“bar”、“baz”和以“oo”结尾的3个字母的单词，如“goo”、“moo”和“boo”）。
:::

## 函数返回值

还记得函数简介说的吗，函数的构成`返回值类型`。

目前常见的有`void`和`int`.

前面定义函数用的是void，没有返回值类型

细节的小伙伴就发现了`main`函数是int，并且总会有一个返回值`return 0`.

观察下面两组程序

```C++
void getNumByUser()
{
  std::cout<<"输入一个数值\n";
  int input{};
  std::cin>> input;
}
int main()
{
  getNumByUser();//让用户输入
  int num{};
  // 如何讲输入的值放到num中？
}
```

```C++
int getNumByUser()
{
  std::cout<<"输入一个数值\n";
  int input{};
  std::cin>> input;
  return input;
}
int main()
{
  
  int num{};
  //让用户输入
  // 将用户输入值返回赋值给num
  num = getNumByUser();


  // 也可以更简便写法
  // int num{getNumByUser()}
}
```

这就是返回值的作用。

如此我们也理解了main函数的工作方式。

程序执行时，操作系统对main进行函数调用。然后执行到main的顶部。main中的语句按顺序执行。最后，main返回一个整数值（通常为0），程序终止。main的返回值也称为状态代码（也称为退出代码，或称为返回代码），它用于指示程序是否成功运行。

::: info
C++标准仅定义3个状态代码的含义：0、EXIT_SUCCESS和EXIT_FAILURE。0和EXIT_SUCCESS都表示程序成功执行。EXIT_FAILURE表示程序未成功执行。
:::

~~~C++
int main()
{
    return EXIT_SUCCESS;
}
~~~

## 无返回值函数

`void函数`又叫无返回值函数。

当函数声明用`void`进行声明时，此函数没有返回值。

如：

```c++

void printHi(){
  std::cout<<"Hi"<<'\n';
  // 无返回值，所以不需要return语句
}
int main()
{
  printHi();
  return 0;
}
```

### void函数不能在需要值的表达式中使用

如：

```c++
#include <iostream>

int main()
{
    std::cout << 5;
    std::cout << ;  // 编译失败, 这里需要一个能打印的值
    return 0;
}
```

如

```c++
#include <iostream>

void printHi()
{
    std::cout << "Hi" << '\n';
}

int main()
{
    printHi();
    std::cout << printHi(); // 编译失败
    // 这里与上面同理
    // std::cout << ;
    return 0;
}
```

::: danger
当使用void函数时，可以进行直接调用。如果要使用void函数的值，将会报错。因为void函数没有返回值。

也就是说，要使用函数的值，这个函数就必须有返回值。
:::

## 函数参数



