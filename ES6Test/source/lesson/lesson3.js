// 构造
{
    // ES5中new一个正则对象的方式 2种
    // 1 第一个参数是字符串 第二个是忽略大小写
    let reges = new RegExp('xyz','i');// i 是忽略大小写的意思
    // 2 直接正则表达式 只有一个参数
    let reges2 = new RegExp(/xyz/i);
    console.log(reges.test('xyz123'),reges2.test('xyz123'));
    // 3 ES6中 2个参数，第一个是正则表达式，第二个是修饰符
    // 第二个修饰符会替换表达式中的修饰符
    // 若前面没有修饰符，后面的就是其修饰符
    let reges3 = new RegExp(/xyz/,'i');
    console.log(reges3.test('xyz123'));
}

// y修饰符
{
    // y和g修饰符的区别
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    // 两次结果对比
    console.log(a1.exec(s),a2.exec(s));
    console.log(a1.exec(s),a2.exec(s));

    console.log(a1.sticky,a2.sticky);

}
// u修饰符
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2a')); // 匹配成功
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A')); // 匹配不成功看成是一个字符
    // unicode 编码  a的unicode码是61 用\u{} 包裹  要加u修饰符 才能被js解析器识别成unicode码
    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));
    // es5中 . 是匹配所有字符的  
    // 如果字符串中有大于两个字节的字符，则要加shangu才能够识别 unicode码是4位 
    console.log('\u{20BB8}');
    let s = /^.$/;
    let s2 =  /^.$/u;
    console.log(s.test('𠮸'));
    console.log(s2.test('𠮸'));

    // 匹配两个
    console.log(/𠮸{2}/.test('𠮸𠮸'));
    console.log(/𠮸{2}/u.test('𠮸𠮸'));

    // 1、正则表达式中有unicode编码大于2个字节长度的字符时加u
    // 2、. 不是匹配所有的字符，不能匹配大于2个字节长度的字符 换行符、回车符、段分隔符等 可以用s修饰符
}