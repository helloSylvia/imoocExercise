// 1数组解构赋值
{
    let a,b,reset;
    [a,b] = [1,3];
    console.log(a,b);
}
// 2利用...截取了 后面的以数组的方式赋值给了后面的变量
{
    let a,b,reset,c;
    [a,b,...reset] = [1,2,3,4,5,6,7,8];
    console.log(a,b,reset);
}
// 3对象解构赋值
{
    let a,b;
    ({a,b} = {a:1,b:8});
    console.log(a,b);
}
// 默认值
{
    let a,b,reset,c;
    // 这种情况下可以重复赋值了
    [a,b,c] = [1,3];
    [a,b,c=7] = [1,3];
    console.log(a,b,c);
}
// 变量交换
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);
}
// 接收函数的返回值
{
    function f(){
        return [1,2];
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);
}
// 选择接收值(中间的，空出不想赋值的索引位置·)
{
    function f(){
        return [1,2,3,4,5,6,7]
    }
    let a,b,c,d;
    [a,b,,d,,,c] = f();
    console.log(a,b,c,d);
}
// 不确定返回值的多少，只想要第一个，其余再赋值给一个变量
{
    function f(){
        return [1,2,3,4,5,6,7];
    }
    let a,b,c;
    [a,...b] = f();
    console.log(a,b);
}


// 对象解构 
{
    let a = {p:22,q:true};
    let {p,q} = a;
    console.log(p,q);
}
// 默认值处理
{
    let {a = 10,b = 11} = {a:8};
    console.log(a,b);
}
// json 嵌套的数组 属性的获取   左右key相同，然后value是一个新的变量
{
    let setData = {
        title: 'outmy',
        arr: [{
            title: 'inMy',
            desc: 'inDesc'
        }]
    }
    let {title: outTitle,arr: [{title: innerTitle}]} = setData;
    console.log(outTitle,innerTitle);
}