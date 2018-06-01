// 0xffff 超过此值的不会正常显示
// unicode表示 \u{20BB7}
{
    console.log('a','\u{20BB7}');
    let s = '𠮷';
}

{
    // 每两个字符就是一个长度
    let s = '𠮷';
    console.log('length',s.length);
    // 按索引取值 按索引取码值
    // console.log('0',s.chartAt(0));会报错
    // console.log('0',s.chartAt(1));会报错
    console.log('a0',s.charCodeAt(0));// charCodeAt只去2个字节
    console.log('a0',s.charCodeAt(1));

    // ES6中如何处理 
    let ss = '𠮷a';
    console.log('length',ss.length);
    console.log('code0',ss.codePointAt(0));
    console.log('code0',ss.codePointAt(0).toString(16));
    console.log('code0',ss.codePointAt(1));
    console.log('code0',ss.codePointAt(2));
}
{
    // console.log(String.fromCharCode('ax20bb7'));// ES5中 大于2个字节的unicode的 输出不出
    console.log(String.fromCodePoint('0x20bb7'));// ES6中
}