(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{774:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发安全---注入攻击详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发安全---注入攻击详解"}},[t._v("¶")]),t._v(" 开发安全 - 注入攻击详解")]),t._v(" "),s("blockquote",[s("p",[t._v("注入攻击最为常见的攻击方式，作为开发而言必须完全避免; 本文会介绍常见的几种注入方式，比如："),s("code",[t._v("SQL 注入")]),t._v(", "),s("code",[t._v("xPath 注入")]),t._v(", "),s("code",[t._v("命令注入")]),t._v(", "),s("code",[t._v("LDAP注入")]),t._v(", "),s("code",[t._v("CLRF注入")]),t._v(", "),s("code",[t._v("Host头注入")]),t._v(", "),s("code",[t._v("Email头注入")]),t._v("等等，总结来看其本质其实是一样的，且防御措施也大同小异，具体看下面的内容。@pdai")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e5%bc%80%e5%8f%91%e5%ae%89%e5%85%a8---%e6%b3%a8%e5%85%a5%e6%94%bb%e5%87%bb%e8%af%a6%e8%a7%a3"}},[t._v("开发安全 - 注入攻击详解")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#sql-%e6%b3%a8%e5%85%a5"}},[t._v("SQL 注入")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e4%bb%80%e4%b9%88%e6%a0%b7%e7%9a%84sql%e4%bc%9a%e9%80%a0%e6%88%90%e6%94%bb%e5%87%bb"}},[t._v("什么样的SQL会造成攻击?")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%a6%82%e4%bd%95%e9%98%b2%e5%be%a1"}},[t._v("如何防御?")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#xpath-%e6%b3%a8%e5%85%a5"}},[t._v("xPath 注入")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#xpath%e6%98%af%e6%80%8e%e4%b9%88%e5%b7%a5%e4%bd%9c%e7%9a%84"}},[t._v("xPath是怎么工作的?")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%a6%82%e4%bd%95%e6%94%bb%e5%87%bb%e7%9a%84"}},[t._v("如何攻击的?")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%a6%82%e4%bd%95%e9%98%b2%e5%be%a1-1"}},[t._v("如何防御?")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%91%bd%e4%bb%a4%e6%b3%a8%e5%85%a5"}},[t._v("命令注入")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e4%bb%80%e4%b9%88%e6%98%af%e5%91%bd%e4%bb%a4%e6%b3%a8%e5%85%a5"}},[t._v("什么是命令注入")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%91%bd%e4%bb%a4%e6%b3%a8%e5%85%a5%e7%9a%84%e5%9c%ba%e6%99%af"}},[t._v("命令注入的场景")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%b8%b8%e8%a7%81%e6%b3%a8%e5%85%a5%e6%96%b9%e5%bc%8f"}},[t._v("常见注入方式")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e4%b8%80%e8%88%ac%e5%a6%82%e4%bd%95%e9%98%b2%e5%be%a1%e5%91%a2"}},[t._v("一般如何防御呢")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#ldap%e6%b3%a8%e5%85%a5"}},[t._v("LDAP注入")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#ldap%e7%ae%80%e4%bb%8b"}},[t._v("LDAP简介")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#ldap%e6%b3%a8%e5%85%a5%e5%9c%ba%e6%99%af"}},[t._v("LDAP注入场景")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%ad%a6%e4%b9%a0%e6%9b%b4%e5%a4%9aldap%e6%94%bb%e9%98%b2"}},[t._v("学习更多LDAP攻防")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#clrf%e6%b3%a8%e5%85%a5"}},[t._v("CLRF注入")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#host%e5%a4%b4%e6%b3%a8%e5%85%a5"}},[t._v("Host头注入")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#email%e5%a4%b4%e6%b3%a8%e5%85%a5"}},[t._v("Email头注入")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#xxe"}},[t._v("XXE")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e5%8f%82%e8%80%83%e6%96%87%e7%ab%a0"}},[t._v("参考文章")])])])])]),t._v(" "),s("h2",{attrs:{id:"sql-注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入"}},[t._v("¶")]),t._v(" SQL 注入")]),t._v(" "),s("blockquote",[s("p",[t._v("所谓 SQL 注入，就是通过将 SQL 命令插入应用程序的 http 请求中，并在服务器端被接收后用于参与数据库操作，最终达到欺骗服务器执行恶意的 SQL 命令的效果。理论上来讲，应用程序中只要是与数据库有数据交互的地方，无论是增删改查，如果数据完全受用户控制，而应用程序又处理不当，那么这些地方都是可能存在 SQL 注入的。")])]),t._v(" "),s("h3",{attrs:{id:"什么样的sql会造成攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么样的sql会造成攻击"}},[t._v("¶")]),t._v(" 什么样的SQL会造成攻击?")]),t._v(" "),s("p",[t._v("直接看下面登录的SQL：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v(" conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DBUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Statement")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重点看这条SQL，密码输入: ' OR '1'='1时，等同于不需要密码")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sql "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM t_user WHERE username=\'"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("userName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"' AND pwd='\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\'"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResultSet")]),t._v(" rs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DBUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("h3",{attrs:{id:"如何防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御"}},[t._v("¶")]),t._v(" 如何防御?")]),t._v(" "),s("p",[t._v("常见的修复方法：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("使用预编译处理输入参数")]),t._v("：要防御 SQL 注入，用户的输入就不能直接嵌套在 SQL 语句当中。使用参数化的语句，用户的输入就被限制于一个参数当中。")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写个大概，帮助你理解")]),t._v("\nsqlStatement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dbConnection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepareStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select * from users where username= ? and password = ?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsqlStatement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsqlStatement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加密")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只是看个思路，都2020年了，谁还自己写JDBC登录...")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ul",[s("li",[s("p",[s("strong",[t._v("输入验证")]),t._v("：检查用户输入的合法性，以确保输入的内容为正常的数据。数据检查应当在客户端和服务器端都执行，之所以要执行服务器端验证，是因为客户端的校验往往只是减轻服务器的压力和提高对用户的友好度，攻击者完全有可能通过抓包修改参数或者是获得网页的源代码后，修改验证合法性的脚本（或者直接删除脚本），然后将非法内容通过修改后的表单提交给服务器等等手段绕过客户端的校验。因此，要保证验证操作确实已经执行，唯一的办法就是在服务器端也执行验证。但是这些方法很容易出现由于过滤不严导致恶意攻击者可能绕过这些过滤的现象，需要慎重使用。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("错误消息处理")]),t._v("：防范 SQL 注入，还要避免出现一些详细的错误消息，恶意攻击者往往会利用这些报错信息来判断后台 SQL 的拼接形式，甚至是直接利用这些报错注入将数据库中的数据通过报错信息显示出来。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("加密处理")]),t._v("：将用户登录名称、密码等数据加密保存。加密用户输入的数据，然后再将它与数据库中保存的数据比较，这相当于对用户输入的数据进行了“消毒”处理，用户输入的数据不再对数据库有任何特殊的意义，从而也就防止了攻击者注入 SQL 命令。")])])]),t._v(" "),s("h2",{attrs:{id:"xpath-注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xpath-注入"}},[t._v("¶")]),t._v(" xPath 注入")]),t._v(" "),s("blockquote",[s("p",[t._v("XPath 是一种用来在内存中导航整个XML树的语言，它使用路径表达式来选取XML文档中的节点或者节点集。XPath 的设计初衷是作为一种面向 XSLT 和 XPointer 的语言,后来独立成了一种W3C标准。而 XPath 注入是指利用 XPath 解析器的松散输入和容错特性，能够在 URL、表单或其它信息上附带恶意的 XPath 查询代码，以获得权限信息的访问权并更改这些信息。XPath 注入与 SQL 注入类似，均是通过构造恶意的查询语句，对应用程序进行攻击。")])]),t._v(" "),s("h3",{attrs:{id:"xpath是怎么工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xpath是怎么工作的"}},[t._v("¶")]),t._v(" xPath是怎么工作的?")]),t._v(" "),s("p",[t._v("实在不喜欢网上乱七八糟的，其实一张图就可以解释：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/security/dev-security-injection-xpath-1.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"如何攻击的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何攻击的"}},[t._v("¶")]),t._v(" 如何攻击的?")]),t._v(" "),s("p",[t._v("如果用户传入类似 ’ or 1=1 or ”=’ 的值，那么该查询语句也会得到 true 返回值，将返回所有用户的列表。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/security/dev-security-injection-xpath-2.png",loading:"lazy"}})]),t._v(" "),s("h3",{attrs:{id:"如何防御-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御-2"}},[t._v("¶")]),t._v(" 如何防御?")]),t._v(" "),s("p",[t._v("要避免XPath注入，需要注意以下几点：")]),t._v(" "),s("ul",[s("li",[t._v("对用户的输入进行合理验证，对特殊字符（如<、>、’、”等）等进行转义。过滤可以在客户端和服务端两边实现，如果可能的话，建议两者同时进行过滤。")]),t._v(" "),s("li",[t._v("创建一份安全字符白名单，确保 XPath 查询中由用户控制的数值完全来自于预定的字符集合，不包含任何 XPath 元字符。")]),t._v(" "),s("li",[t._v("对于系统出现的错误信息，以IE错误编码信息替换，屏蔽系统本身的出错信息。")]),t._v(" "),s("li",[t._v("参数化XPath查询，将需要构建的XPath查询表达式，以变量的形式表示，变量不是可以执行的脚本。")]),t._v(" "),s("li",[t._v("通过MD5、SSL等加密算法，对于数据敏感信息和在数据传输过程中加密，即使某些非法用户通过非法手法获取数据包，看到的也是加密后的信息。")]),t._v(" "),s("li",[t._v("使用源代码静态分析工具，进行自动化的检测，可以有效的发现源代码中的 XPath 注入问题。")])]),t._v(" "),s("h2",{attrs:{id:"命令注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令注入"}},[t._v("¶")]),t._v(" 命令注入")]),t._v(" "),s("h3",{attrs:{id:"什么是命令注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是命令注入"}},[t._v("¶")]),t._v(" 什么是命令注入")]),t._v(" "),s("p",[t._v("命令是指通过提交恶意构造的参数破坏命令语句结构，从而达到执行恶意命令的目的。")]),t._v(" "),s("h3",{attrs:{id:"命令注入的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令注入的场景"}},[t._v("¶")]),t._v(" 命令注入的场景")]),t._v(" "),s("p",[t._v("Java中"),s("code",[t._v("System.Runtime.getRuntime().exec(cmd);")]),t._v("可以在目标机器上执行命令，而构建参数的过程中可能会引发注入攻击。")]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 比如你构建了如下的command语句，传参数request.getParameter("test")，将可能包含·命令分隔符·从而引入注入风险·   ')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" cmd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx xxx "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意: 试图将如下方法抽象为一个静态方法时，它潜藏着注入风险；如果你用过SonarCube扫描工具，如下代码会有注入攻击的提示。@pdai")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runCmd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Process")]),t._v(" process "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在当前服务器上执行command脚本")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("While")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...忽略close操作，只是给你个例子")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h3",{attrs:{id:"常见注入方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见注入方式"}},[t._v("¶")]),t._v(" 常见注入方式")]),t._v(" "),s("blockquote",[s("p",[t._v("上述command中会有哪些常见的注入方式呢？")])]),t._v(" "),s("ul",[s("li",[t._v("“；”分割")]),t._v(" "),s("li",[t._v("“&”，“&&”，“||” 分割")]),t._v(" "),s("li",[t._v("“|” 管道符")]),t._v(" "),s("li",[s("code",[t._v("\\r\\n %d0%a0")]),t._v(" 换行")]),t._v(" "),s("li",[t._v("反引号解析")]),t._v(" "),s("li",[s("code",[t._v("$()")]),t._v(" 替换")])]),t._v(" "),s("h3",{attrs:{id:"一般如何防御呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般如何防御呢"}},[t._v("¶")]),t._v(" 一般如何防御呢")]),t._v(" "),s("blockquote",[s("p",[t._v("和其它注入防御本质大同小异")])]),t._v(" "),s("ul",[s("li",[t._v("不使用时禁用相应函数")]),t._v(" "),s("li",[t._v("尽量不要执行外部的应用程序或命令")]),t._v(" "),s("li",[t._v("做输入的格式检查")]),t._v(" "),s("li",[t._v("转义命令中的所有shell元字符: shell元字符包括 #&;`,|*?~<>^()[]{}$\\")])]),t._v(" "),s("h2",{attrs:{id:"ldap注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap注入"}},[t._v("¶")]),t._v(" LDAP注入")]),t._v(" "),s("h3",{attrs:{id:"ldap简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap简介"}},[t._v("¶")]),t._v(" LDAP简介")]),t._v(" "),s("p",[t._v("LDAP(Lightweight Directory Access Protocol):轻量级目录访问协议，是一种在线目录访问协议。LDAP主要用于目录中资源的搜索和查询，是X.500的一种简便的实现。LDAP不定义客户端和服务端的工作方式，但会定义客户端和服务端的通信方式，另外，LDAP还会定义LDAP数据库的访问权限及服务端数据的格式和属性。LDAP有三种基本的通信机制：没有处理的匿名访问；基本的用户名、密码形式的认证；使用SASL、SSL的安全认证方式。LDAP和其他一些协议走的是同一个套路，基于tcp/ip协议通信，注重服务的可用性、信息的保密性等等，除此之外还要回到那个最原始的问题：信任，当然信息安全的本质问题就是信任的问题。部署了LDAP的应用不会直接访问，目录中的内容，一般通过函数调用或者API，应用可以通过定义的C、Java的API进行访问，Java应用的访问方式为JNDI(Java Naming and Directory Interface)。")]),t._v(" "),s("p",[t._v("LDAP以目录信息树形式存储信息，包含入口、对象、属性，关系图如下：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/security/dev-injection-ldap-1.jpg",loading:"lazy"}})]),t._v(" "),s("p",[t._v("入口点和属性之间的关系为：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/security/dev-injection-ldap-2.jpg",loading:"lazy"}})]),t._v(" "),s("p",[t._v("既然LDAP用于搜索查询服务，那它是怎么搜索的呢？")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("search语法")]),t._v("：attribute operator value")]),t._v(" "),s("li",[s("strong",[t._v("search filter options")]),t._v(': ( "&" or "|" (filter1) (filter2) (filter3) ...) ("!" (filter))')])]),t._v(" "),s("p",[t._v("主要根据属性和值进行搜索，就如浏览网页时我们通常并不会浏览某个目录，而是其下存在的某个文件。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("LDAP的URL形式")]),t._v("为："),s("code",[t._v("ldap://<host>:<port>/<path>")]),t._v("，"),s("code",[t._v("<path>:<dn>[?<artribute>[?<scope>?<filter>]]")])]),t._v(" "),s("li",[t._v("例如：ldap://austin.ibm.com/ou=Austin,o=IBM    ldap:///ou=Austin,o=IBM??sub?(cn=Joe Q. Public)")])]),t._v(" "),s("p",[t._v("看得出来在URL中这里使用逗号分隔查询，而数据库查询则使用'&'号，这是LDAP特有的，另外这里o表示组织(organization)，u表示单元(unit)，cn表示country name。")]),t._v(" "),s("h3",{attrs:{id:"ldap注入场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldap注入场景"}},[t._v("¶")]),t._v(" LDAP注入场景")]),t._v(" "),s("p",[t._v("LDAP注入攻击和SQL注入攻击相似，因此接下来的想法是利用用户引入的参数生成LDAP查询。一个安全的Web应用在构造和将查询发送给服务器前应该净化用户传入的参数。在有漏洞的环境中，这些参数没有得到合适的过滤，因而攻击者可以注入任意恶意代码。")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("(attribute=value)")]),t._v(":如果过滤器用于构造查询单缺少逻辑操作符，如"),s("code",[t._v("value)(injected_filter")]),t._v("的注入会导致两个过滤器"),s("code",[t._v("(attribute=value)(injected_filter)")]),t._v("。在OpenLDAP实施中，第二个过滤器会被忽略，只有第一个会被执行。而在ADAM中，有两个过滤器的查询是不被允许的，因而这个注入毫无用处。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("(|(attribute=value)(second_filter)) or (&(attribute=value)(second_filter))")]),t._v(":如果第一个用于构造查询的过滤器有逻辑操作符，形如"),s("code",[t._v("value)(injected_filter)")]),t._v("的注入会变成如下过滤器："),s("code",[t._v("(&(attribute=value)(injected_filter)) (second_filter)")]),t._v("。虽然过滤器语法上并不正确，OpenLDAP还是会从左到右进行处理，忽略第一个过滤器闭合后的任何字符。一些LDAP客户端Web组成会忽略第二个过滤器，将ADAM和OpenLDAP发送给第一个完成的过滤器，因而存在注入。")])])]),t._v(" "),s("p",[t._v("一些应用框架在将请求发送给服务器之前会检查过滤器是否正确，在这种情况下，过滤器语义上必须是正确的，其注入如："),s("code",[t._v("value)(injected_filter))(&(1=0")]),t._v("。这会导致出现两个不同的过滤器，第二个会被忽略："),s("code",[t._v("(&(attribute=value)(injected_filter))(&(1=0)(second_filter))")]),t._v("。")]),t._v(" "),s("p",[t._v("既然第二个过滤器会被LDAP服务器忽略，有些部分便不允许有两个过滤器的查询。这种情况下，只能构建一个特殊的注入以获得单个过滤器的LDAP查询。"),s("code",[t._v("value)(injected_filter")]),t._v("这样的注入产生的结果是："),s("code",[t._v("(&(attribute=value)(injected_filter)(second_filter))")]),t._v("。")]),t._v(" "),s("p",[t._v("测试一个应用是否存在代码注入漏洞典型的方法是向服务器发送会生成一个无效输入的请求。因此，如果服务器返回一个错误消息，攻击者就能知道服务器执行了他的查询，他可以利用代码注入技术。回想一下之前讨论的，我们可以将注入环境分为两种：AND注入环境和OR注入环境。")]),t._v(" "),s("h3",{attrs:{id:"学习更多ldap攻防"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习更多ldap攻防"}},[t._v("¶")]),t._v(" 学习更多LDAP攻防")]),t._v(" "),s("p",[t._v("这里只是简单介绍，如需更详细了解，推荐你看下这篇文章："),s("a",{attrs:{href:"https://www.cnblogs.com/r00tgrok/p/LDAP_INJECTION_AND_PREVENTION.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LDAP注入与防御解析"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"clrf注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clrf注入"}},[t._v("¶")]),t._v(" CLRF注入")]),t._v(" "),s("ul",[s("li",[t._v("https://blog.csdn.net/han_code/article/details/90235983")])]),t._v(" "),s("h2",{attrs:{id:"host头注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host头注入"}},[t._v("¶")]),t._v(" Host头注入")]),t._v(" "),s("ul",[s("li",[t._v("https://www.freebuf.com/articles/web/164817.html")]),t._v(" "),s("li",[t._v("https://www.cnblogs.com/z45-1/p/10746316.html")])]),t._v(" "),s("h2",{attrs:{id:"email头注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#email头注入"}},[t._v("¶")]),t._v(" Email头注入")]),t._v(" "),s("ul",[s("li",[t._v("https://www.cnblogs.com/endust/p/11819476.html")])]),t._v(" "),s("h2",{attrs:{id:"xxe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xxe"}},[t._v("¶")]),t._v(" XXE")]),t._v(" "),s("p",[t._v("https://blog.spoock.com/2018/10/23/java-xxe/")]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("¶")]),t._v(" 参考文章")]),t._v(" "),s("ul",[s("li",[t._v("https://websec.readthedocs.io")])])])}),[],!1,null,null,null);a.default=e.exports}}]);