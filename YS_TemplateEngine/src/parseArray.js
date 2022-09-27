
import lookup from "./lookup"
import renderTemplate from "./renderTemplate";

/**
 * 处理数组，结合renderTemplate实现递归
 * 注意：这个函数手的参数是token！而不是tokens！
 * token是什么，就是一个简单的['#','student',[]]
 * 
 * 这个函数要递归调用renderTemplate函数，调用多少次？？？
 * 调用的次数由data决定
 * 比如data的形式是这样的:
 *      {
            students: [
                { 'name': '小明', 'hobbies': ['游戏', '健身']},
                { 'name': '小红', 'hobbies': ['足球', '篮球', '羽毛球']},
                { 'name': '小强', 'hobbies': ['吃饭', '睡觉'] },
            ]
        };
 *  那么parseArray() 函数就要递归调用 renderTemplate函数3次，因为数组长度是3
 * 
 */

export default function parseArray(token, data) {

    // 得到整体数据data中这个数组要使用的部分
    var v = lookup(data, token[1])
    // 结果字符串
    var resultStr = '';
    // 遍历v数组，v一定是数组
    // 注意，下面这个循环可能是整个包中最难思考的一个循环
    // 它是遍历数据，而不是遍历tokens。数组中的数据有几条，就要遍历几条
    for(let i = 0; i < v.length; i++){
        resultStr += renderTemplate(token[2], {
            // 展开v[i]
            ...v[i],
            // 补点
            '.': v[i]
        })
    }
    return resultStr
}