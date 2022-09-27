import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate.js'

import lookup from './lookup.js'
// 全局提供 YS_TemplateEngine对象
window.YS_TemplateEngine = {
    // 渲染方法
    render(templateStr, data) {
        // 调用parseTemplateToTokens函数，让模板字符串能够变为tokens数组
        var tokens = parseTemplateToTokens(templateStr);

        // 调用renderTemplate函数，让tokens数组变为dom字符串

        var domStr = renderTemplate(tokens, data)

        return domStr
    }
}