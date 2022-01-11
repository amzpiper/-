(window.webpackJsonp=window.webpackJsonp||[]).push([[517],{1090:function(t,a,s){"use strict";s.r(a);var e=s(11),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"青铜---后端crud之mybatis栈演进2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#青铜---后端crud之mybatis栈演进2"}},[t._v("¶")]),t._v(" 青铜 - 后端CRUD之MyBatis栈演进2")]),t._v(" "),s("blockquote",[s("p",[t._v("本文是 "),s("strong",[t._v("青铜 - 后端CRUD之MyBatis栈演进")]),t._v("的第二篇，上一篇是 "),s("RouterLink",{attrs:{to:"/md/project/project-a-2-2.html"}},[t._v("青铜 - 后端CRUD之MyBatis栈演进1")]),t._v("。@pdai")],1)]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e9%9d%92%e9%93%9c---%e5%90%8e%e7%ab%afcrud%e4%b9%8bmybatis%e6%a0%88%e6%bc%94%e8%bf%9b2"}},[t._v("青铜 - 后端CRUD之MyBatis栈演进2")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e4%be%8b%e5%ad%903springbootmysqlmybatis%e4%bb%a3%e7%a0%81%e7%94%9f%e6%88%90thymeleaf"}},[t._v("例子3：SpringBoot+MySQL+MyBatis代码生成+Thymeleaf")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e4%be%8b%e5%ad%904springbootmysqlmybatis%e6%b3%a8%e8%a7%a3thymeleaf"}},[t._v("例子4：SpringBoot+MySQL+MyBatis注解+Thymeleaf")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e4%be%8b%e5%ad%905springbootmysqlmybatis-plusthymeleaf"}},[t._v("例子5：SpringBoot+MySQL+MyBatis-plus+Thymeleaf")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#mybatis%e6%8a%80%e6%9c%af%e6%a0%88%e9%87%8d%e8%a6%81%e7%9a%84%e6%80%bb%e7%bb%93"}},[t._v("MyBatis技术栈重要的总结")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%e7%ac%ac%e4%b8%80%e4%b8%aa%e9%97%ae%e9%a2%98%e4%b8%8a%e9%9d%a2%e7%9a%84%e5%87%a0%e4%b8%aa%e4%be%8b%e5%ad%90%e6%98%af%e6%9c%80%e4%bc%98%e9%9b%85%e7%9a%84%e5%ae%9e%e7%8e%b0%e5%90%97"}},[t._v("第一个问题：上面的几个例子是最优雅的实现吗？")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e7%ac%ac%e4%ba%8c%e4%b8%aa%e9%97%ae%e9%a2%98%e6%97%a2%e7%84%b6%e4%b8%8d%e6%98%af%e6%9c%80%e4%bc%98%e9%9b%85%e7%9a%84%e5%ae%9e%e7%8e%b0%e4%b8%ba%e4%bb%80%e4%b9%88%e4%bd%a0%e8%bf%98%e6%98%af%e7%bb%99%e4%ba%86%e4%b8%8a%e9%9d%a2%e7%9a%84%e4%be%8b%e5%ad%90"}},[t._v("第二个问题：既然不是最优雅的实现，为什么你还是给了上面的例子？")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e7%ac%ac%e4%b8%89%e4%b8%aa%e9%97%ae%e9%a2%98-%e4%bb%80%e4%b9%88%e6%a0%b7%e7%9a%84%e5%ae%9e%e7%8e%b0%e6%98%af%e4%bc%98%e9%9b%85%e7%9a%84"}},[t._v("第三个问题： 什么样的实现是优雅的？")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%e7%ac%ac%e5%9b%9b%e4%b8%aa%e9%97%ae%e9%a2%98%e5%a6%82%e4%bd%95%e7%90%86%e8%a7%a3%e4%bd%a0%e8%af%b4%e7%9a%84%e5%87%a1%e6%98%af%e9%9c%80%e8%a6%81%e7%94%9f%e6%88%90%e4%bb%a3%e7%a0%81%e6%84%8f%e5%91%b3%e7%9d%80%e9%87%8d%e5%a4%8d%e7%9a%84%e4%bb%a3%e7%a0%81%e5%bd%a2%e5%bc%8f%e5%92%8c%e5%b7%a5%e4%bd%9c"}},[t._v("第四个问题：如何理解你说的：凡是需要生成代码意味着重复的代码形式和工作？")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"例子3：springbootmysqlmybatis代码生成thymeleaf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子3：springbootmysqlmybatis代码生成thymeleaf"}},[t._v("¶")]),t._v(" 例子3：SpringBoot+MySQL+MyBatis代码生成+Thymeleaf")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("伴随着很多相似的CRUD功能的出现，意味着开发内容是重复的，于是乎便出现了"),s("strong",[t._v("代码生成")]),t._v("和"),s("strong",[t._v("向上抽象封装")]),t._v("来减少重复。这里我们主要谈谈代码生成方式。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用模板（vm, freemarker等）生成")])]),t._v(" "),s("li",[s("p",[t._v("使用IDE插件")]),t._v(" "),s("ul",[s("li",[t._v("比如EasyCode")])])])]),t._v(" "),s("h2",{attrs:{id:"例子4：springbootmysqlmybatis注解thymeleaf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子4：springbootmysqlmybatis注解thymeleaf"}},[t._v("¶")]),t._v(" 例子4：SpringBoot+MySQL+MyBatis注解+Thymeleaf")]),t._v(" "),s("h2",{attrs:{id:"例子5：springbootmysqlmybatis-plusthymeleaf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子5：springbootmysqlmybatis-plusthymeleaf"}},[t._v("¶")]),t._v(" 例子5：SpringBoot+MySQL+MyBatis-plus+Thymeleaf")]),t._v(" "),s("h2",{attrs:{id:"mybatis技术栈重要的总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis技术栈重要的总结"}},[t._v("¶")]),t._v(" MyBatis技术栈重要的总结")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("通过几个问题，我们来更加深入了解上面的例子和MyBatis技术栈。")])]),t._v(" "),s("h3",{attrs:{id:"第一个问题：上面的几个例子是最优雅的实现吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个问题：上面的几个例子是最优雅的实现吗"}},[t._v("¶")]),t._v(" 第一个问题：上面的几个例子是最优雅的实现吗？")]),t._v(" "),s("blockquote",[s("p",[t._v("不是，如果放在前几年（五年前）可能是相对主流，现在绝不是。")])]),t._v(" "),s("p",[t._v("简单说几点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一，从代码风格来看，源作者应该是吸收了早先SSM传统CRM后台框架的经验演进过来的，这个后面我会有两篇文章来帮你构建十年前项目是如何开发的认知；因为不是从头写的（考虑到代价, 沿用了原有的一些配置和Util等），所以必然不会是最新最优雅的方式，后续几点具体说明。")])]),t._v(" "),s("li",[s("p",[t._v("第二，过多的自定义的Util，而现有的项目项目中，Util一定不要自己造轮子，原则是优先使用"),s("RouterLink",{attrs:{to:"/md/develop/package/dev-package-x-google-guava.html"}},[t._v("Guava")]),t._v("，"),s("RouterLink",{attrs:{to:"/md/develop/package/dev-package-x-apache-common.html"}},[t._v("commons")]),t._v("等开源工具类；还有一些新的"),s("RouterLink",{attrs:{to:"/md/develop/package/dev-package-x-hu-tool.html"}},[t._v("hutool")]),t._v("等工具库是可以满足绝大部分需求的，如果没有再添加。于此同时，如果项目规模稍微大一点和要求，还可以使用外观模式进行小量的封装，比如你同时使用了Guava，Common库中StringUtils，那么可以增加一个MyStringUtils，将常用方法融入这个类，对项目中所有类来说只使用MyStringUtils。此外这里的例子还有一些标注为@Component等模块作为util，造成了代码的耦合度增加。")],1)]),t._v(" "),s("li",[s("p",[t._v("第三，没有完全注解化，还有一部分是xml；使用"),s("strong",[t._v("约定大于配置")]),t._v("一定是最优雅的必要条件，因为大部分starters是支持的，比如这里的mybatis-springboot-starter中已经提供了mybatis的配置，无需再使用xml方式的配置了。")])]),t._v(" "),s("li",[s("p",[t._v("第四，Mapper和Service层抽象的缺失：")])])]),t._v(" "),s("p",[t._v("比如Mapper里")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("deleteUserById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("parameterType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\tdelete from sys_user where user_id = #{userId}\n \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\n \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("deleteUserByIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("parameterType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\tupdate sys_user set del_flag = '2' where user_id in\n \t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("collection")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("separator")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(")"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\t\t#{userId}\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("foreach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("deleteRoleById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("parameterType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\tdelete from sys_role where role_id = #{roleId}\n \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\n \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("deleteRoleByIds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("parameterType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t    update sys_role set del_flag = '2' where role_id in\n \t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("collection")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("roleId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("("),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("separator")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(")"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n \t\t\t#{roleId}\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("foreach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n \t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("这种类似的代码不就是重复么？不是可以抽象么？所以这里可以看下MyBatis-Plus中BaseMapper和JPA中CRUDRespositry的实现。")]),t._v(" "),s("p",[t._v("所以从这个角度来看，比较好的实现应该是(这里写个大概的思路）：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapper")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXMapper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("，ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" xxxBaseMappper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseEntity")]),t._v("， ID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" XXID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里应该是空实现，基本的CRUD全部风封装至上层")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("同样的Service层也可以封装。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXService")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("M")]),t._v("，"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v("，ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" xxxBaseServie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("M")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXMapper")]),t._v("，"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("E")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseEntity")]),t._v("， ID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" XXID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里应该是空实现，基本的CRUD Service全部风封装至上层；可以Override，和添加新的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ul",[s("li",[t._v("第五，更为优雅的Lamada语法使用，比如MyBatis-Plus WrapperQuery的lambda查询方式。")])]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n  * 名字为王姓并且(年龄小于40或者邮箱不为空)\n  * sql：name like '王%' and (age < 40 or email is not null)\n  */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectLambda2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LambdaQueryWrapper")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" lambdaQuery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Wrappers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lambdaQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    lambdaQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("likeLeft")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"王"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNotNull")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEmail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" userList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectObjs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lambdaQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    userList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Test")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectLambda3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" userList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LambdaQueryChainWrapper")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("like")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"雨"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    userList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("p",[t._v("可以看下MyBatis-Plus"),s("a",{attrs:{href:"https://gitee.com/baomidou/mybatis-plus/blob/3fde155990917731b50e2aaa848cef20b403f263/mybatis-plus-core/src/test/java/com/baomidou/mybatisplus/core/test/WrapperTest.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方测试用例 WrapperTest.java"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("第六，删除Fastjson等漏洞较多的使用库，改用Jackson；")])]),t._v(" "),s("p",[t._v("关于JSON库可以参考 "),s("RouterLink",{attrs:{to:"/md/develop/package/dev-package-x-json.html"}},[t._v("常用类库 - JSON类库详解")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("第七，注意下前端库的使用:\n"),s("ul",[s("li",[t._v("BootStrap推荐升级至V4；")]),t._v(" "),s("li",[t._v("jQuery低版本漏洞较多，推荐升级至3.4.1；")]),t._v(" "),s("li",[t._v("Select2插件不推荐使用，因为有xss漏洞，至今还没有修复；")]),t._v(" "),s("li",[t._v("...")])])])]),t._v(" "),s("p",[t._v("PS:商业系统上线前都会做"),s("RouterLink",{attrs:{to:"/md/develop/security/dev-security-y-pentest-workflow.html"}},[t._v("渗透测试")]),t._v("，有这些漏洞是无法上线的。")],1),t._v(" "),s("h3",{attrs:{id:"第二个问题：既然不是最优雅的实现为什么你还是给了上面的例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二个问题：既然不是最优雅的实现为什么你还是给了上面的例子"}},[t._v("¶")]),t._v(" 第二个问题：既然不是最优雅的实现，为什么你还是给了上面的例子？")]),t._v(" "),s("p",[t._v("很好的问题，我从三个方面说明下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一：在学习例子时候，和真正在项目中使用是有一定的差异的: 项目中需要的是权衡编码的时间和代价，所以必定不会是最新最优雅的技术，且有可能你还是会需要维护一些老的代码，甚至于一些十几年前的代码。（PS：技术决策就是权衡，老板的利益永远是对的）")])]),t._v(" "),s("li",[s("p",[t._v("第二，并不是一上来给你最佳的实践，你就会更好的理解，因为最优雅意味着你写更少的代码，最少的代码意味着更多的封装（通常不是你实现的），在这种情况下，你觉得你会更好的理解？所以我拿了最流行（Star最多的）的Ruoyi项目抽象出例子，然后跳出代码本身，用上帝视角来思考并指出最优雅的形式(这里看第三个问题)。")])]),t._v(" "),s("li",[s("p",[t._v("第三：为了保持与后面代码的承接，我是从互联网上最为流行的Ruoyi项目抽象出来的 ，后面的文章会基于这个项目进行多方面的拓展，所以我希望上下文是能够循序渐进的向你阐述技术演进的，而不是一步步就写个最佳实践。")])])]),t._v(" "),s("h3",{attrs:{id:"第三个问题：-什么样的实现是优雅的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三个问题：-什么样的实现是优雅的"}},[t._v("¶")]),t._v(" 第三个问题： 什么样的实现是优雅的？")]),t._v(" "),s("blockquote",[s("p",[t._v("至少可以在如下几个方面使其更为优雅：")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("基于约定大于配置")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("MyBatis-plus")]),t._v("注解方式（不再使用xml）")]),t._v(" "),s("li",[t._v("Lamada方式实现，比如"),s("code",[t._v("WrapQuery")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("实现一定的逻辑抽象")])]),t._v(" "),s("ul",[s("li",[t._v("比如Dao（Mapper），Service层的抽象")]),t._v(" "),s("li",[t._v("对于基础的CURD接口和功能应该被封装，而实现类基础应该是空实现；")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("减少自己写Util的量")])]),t._v(" "),s("ul",[s("li",[t._v("推荐"),s("code",[t._v("Guava")]),t._v("，"),s("code",[t._v("Apache commons")]),t._v("，或者"),s("code",[t._v("hutool")]),t._v("等")]),t._v(" "),s("li",[t._v("稍复杂项目可以考虑外观模式，比如你同时使用了Guava，Common库中StringUtils，那么可以增加一个MyStringUtils，将常用方法融入这个类，对项目中所有类来说只使用MyStringUtils。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("如果使用模板，有几个要注意")])]),t._v(" "),s("ul",[s("li",[t._v("尽量不使用IDEA提供的代码生成工具，表面上减少了工作量。其实有两个问题：\n"),s("ul",[s("li",[t._v("第一，自定义能力差，代码逻辑稍微复杂一点，基本你需要改动，此时代码生成工具就是鸡肋，比如加入一些自定义的"),s("code",[t._v("日志注解")]),t._v("，"),s("code",[t._v("swagger注解")]),t._v("，"),s("code",[t._v("导出注解")]),t._v("，"),s("code",[t._v("权限注解")]),t._v("等；")]),t._v(" "),s("li",[t._v("第二：你需要理解一点，凡是需要生成代码意味着重复的代码形式和工作，而封装和抽象是用来解决这个工作的最好方式，而不是生成代码；")])])]),t._v(" "),s("li",[t._v("所以如果使用模板生成代码，那么使用自己写的模板生成是最好的；这里也有三点需要注意的：\n"),s("ul",[s("li",[t._v("第一：上文提及的约定大于配置，这是趋势；")]),t._v(" "),s("li",[t._v("第二：绝大部分重复通过抽象完成，其余部分（比如"),s("code",[t._v("类的申明")]),t._v("等，例如"),s("code",[t._v("Entity")]),t._v("，基于"),s("code",[t._v("Service")]),t._v("抽象继承后的"),s("code",[t._v("Service")]),t._v("类等等）通过模板实现；")]),t._v(" "),s("li",[t._v("第三，将其它工具和配置一并加入模板中（比如自定义的"),s("code",[t._v("日志注解")]),t._v("，"),s("code",[t._v("swagger注解")]),t._v("，"),s("code",[t._v("导出注解")]),t._v("，"),s("code",[t._v("权限注解")]),t._v("以及"),s("code",[t._v("前端页面")]),t._v("等）。")])])])])])]),t._v(" "),s("h3",{attrs:{id:"第四个问题：如何理解你说的：凡是需要生成代码意味着重复的代码形式和工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四个问题：如何理解你说的：凡是需要生成代码意味着重复的代码形式和工作"}},[t._v("¶")]),t._v(" 第四个问题：如何理解你说的：凡是需要生成代码意味着重复的代码形式和工作？")]),t._v(" "),s("blockquote",[s("p",[t._v("我认为理解这一点是非常重要的，凡是需要生成代码意味着重复的代码形式和工作，肯定是可以使用抽象或者封装框架去实现的。试想下，如果我们可以做到通用的代码生成，它必然是可以通过更好的封装形式提供给你服务的。这么来说是比较抽象的，举个例子：")])]),t._v(" "),s("p",[t._v("我们现有的认知都是通过"),s("code",[t._v("Entity->Mapper/Dao->Service->(Business)->Controller")]),t._v("这种代码结构的，所以如果需要我们想要实现CRUD的"),s("strong",[t._v("通用")]),t._v("功能，基于上述理解我们不通过代码生成（因为重复），是可以完全抛弃掉这套代码结构的（那就是不用生成了），也就是完全封装至上层框架中；我们只需要配置数据源，封装的框架可以直接提供"),s("code",[t._v("CRUD Restful")]),t._v("功能。")]),t._v(" "),s("p",[t._v("有这样的框架？请百度搜索 - "),s("code",[t._v("DataWay")]),t._v("。也可以看下这两篇文章：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://my.oschina.net/ta8210/blog/3234639",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Spring Boot 中使用 Dataway 配置数据查询接口"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://my.oschina.net/ta8210/blog/3236659",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dataway 配置数据接口时和前端进行参数对接"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("但是"),s("code",[t._v("DataWay")]),t._v("能做到通用么? "),s("strong",[t._v("并不能")]),t._v("，因为你会有自己的业务逻辑, 这表示它只会使用在很小的领域。所以多数情况下不要指望通过通用的代码生成工具去实现代码的生成来减少代码量，如果可以那么可定有类似"),s("code",[t._v("DataWay")]),t._v("的封装方式。这就是我在上个问题中我说的如果使用模板生成代码一定是结合一定的框架根据项目实际情况自定义编写的原因。")])])}),[],!1,null,null,null);a.default=n.exports}}]);