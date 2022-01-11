(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{627:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"es详解---索引：索引管理详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es详解---索引：索引管理详解"}},[s._v("¶")]),s._v(" ES详解 - 索引：索引管理详解")]),s._v(" "),t("blockquote",[t("p",[s._v("了解基本使用后，我们从索引操作的角度看看如何对索引进行管理。@pdai")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#es%E8%AF%A6%E8%A7%A3---%E7%B4%A2%E5%BC%95%E7%B4%A2%E5%BC%95%E7%AE%A1%E7%90%86%E8%AF%A6%E8%A7%A3"}},[s._v("ES详解 - 索引：索引管理详解")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E7%B4%A2%E5%BC%95%E7%AE%A1%E7%90%86%E7%9A%84%E5%BC%95%E5%85%A5"}},[s._v("索引管理的引入")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E7%B4%A2%E5%BC%95%E7%9A%84%E6%A0%BC%E5%BC%8F"}},[s._v("索引的格式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E7%B4%A2%E5%BC%95%E7%AE%A1%E7%90%86%E6%93%8D%E4%BD%9C"}},[s._v("索引管理操作")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E7%B4%A2%E5%BC%95"}},[s._v("创建索引")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BF%AE%E6%94%B9%E7%B4%A2%E5%BC%95"}},[s._v("修改索引")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%89%93%E5%BC%80%E5%85%B3%E9%97%AD%E7%B4%A2%E5%BC%95"}},[s._v("打开/关闭索引")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E7%B4%A2%E5%BC%95"}},[s._v("删除索引")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E6%9F%A5%E7%9C%8B%E7%B4%A2%E5%BC%95"}},[s._v("查看索引")])])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#kibana%E7%AE%A1%E7%90%86%E7%B4%A2%E5%BC%95"}},[s._v("Kibana管理索引")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0"}},[s._v("参考文章")])])])])]),s._v(" "),t("h2",{attrs:{id:"索引管理的引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引管理的引入"}},[s._v("¶")]),s._v(" 索引管理的引入")]),s._v(" "),t("p",[s._v("我们在前文中增加文档时，如下的语句会动态创建一个customer的index：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PUT /customer/_doc/1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John Doe"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("而这个index实际上已经自动创建了它里面的字段（name）的类型。我们不妨看下它自动创建的mapping：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mappings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"_doc"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"properties"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fields"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keyword"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignore_above"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("那么如果我们需要对这个建立索引的过程做更多的控制：比如想要确保这个索引有数量适中的主分片，并且在我们索引任何数据之前，分析器和映射已经被建立好。那么就会引入两点：第一个"),t("strong",[s._v("禁止自动创建索引")]),s._v("，第二个是"),t("strong",[s._v("手动创建索引")]),s._v("。")]),s._v(" "),t("ul",[t("li",[s._v("禁止自动创建索引")])]),s._v(" "),t("p",[s._v("可以通过在 config/elasticsearch.yml 的每个节点下添加下面的配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("action.auto_create_index: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("手动创建索引就是接下来文章的内容。")]),s._v(" "),t("h2",{attrs:{id:"索引的格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引的格式"}},[s._v("¶")]),s._v(" 索引的格式")]),s._v(" "),t("p",[s._v("在请求体里面传入设置或类型映射，如下所示：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PUT /my_index\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". any settings "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". any properties "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("settings")]),s._v(": 用来设置分片,副本等配置信息")]),s._v(" "),t("li",[t("strong",[s._v("mappings")]),s._v(": 字段映射，类型等\n"),t("ul",[t("li",[t("strong",[s._v("properties")]),s._v(": 由于type在后续版本中会被Deprecated, 所以无需被type嵌套")])])])]),s._v(" "),t("h2",{attrs:{id:"索引管理操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引管理操作"}},[s._v("¶")]),s._v(" 索引管理操作")]),s._v(" "),t("blockquote",[t("p",[s._v("我们通过kibana的devtool来学习索引的管理操作。")])]),s._v(" "),t("h3",{attrs:{id:"创建索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建索引"}},[s._v("¶")]),s._v(" 创建索引")]),s._v(" "),t("p",[s._v("我们创建一个user 索引"),t("code",[s._v("test-index-users")]),s._v("，其中包含三个属性：name，age, remarks; 存储在一个分片一个副本上。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PUT /test-index-users\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fields"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keyword"')]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignore_above"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"long"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remarks"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[s._v("执行结果")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-1.png",loading:"lazy"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("插入测试数据")])])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-2.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("查看数据")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-3.png",loading:"lazy"}})]),s._v(" "),t("ul",[t("li",[s._v("我们再"),t("strong",[s._v("测试下不匹配的数据类型")]),s._v("(age)：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("POST /test-index-users/_doc\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test user"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error_age"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remarks"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello eeee"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("你可以看到无法类型不匹配的错误：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-4.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"修改索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改索引"}},[s._v("¶")]),s._v(" 修改索引")]),s._v(" "),t("p",[s._v("查看刚才的索引,"),t("code",[s._v("curl 'localhost:9200/_cat/indices?v' | grep users")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yellow "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" test-index-users                          LSaIB57XSC6uVtGQHoPYxQ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".4kb   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".4kb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("我们注意到刚创建的索引的状态是yellow的，因为我测试的环境是单点环境，无法创建副本，但是在上述"),t("code",[s._v("number_of_replicas")]),s._v("配置中设置了副本数是1； 所以在这个时候我们需要修改索引的配置。")]),s._v(" "),t("p",[s._v("修改副本数量为0")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PUT /test-index-users/_settings\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-5.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("再次查看状态：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("green "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" test-index-users                          LSaIB57XSC6uVtGQHoPYxQ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".4kb   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".4kb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"打开关闭索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打开关闭索引"}},[s._v("¶")]),s._v(" 打开/关闭索引")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("关闭索引")])])]),s._v(" "),t("p",[s._v("一旦索引被关闭，那么这个索引只能显示元数据信息，"),t("strong",[s._v("不能够进行读写操作")]),s._v("。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-7.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("当关闭以后，再插入数据时：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-8.png",loading:"lazy"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("打开索引")])])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-9.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("打开后又可以重新写数据了")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-10.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"删除索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除索引"}},[s._v("¶")]),s._v(" 删除索引")]),s._v(" "),t("p",[s._v("最后我们将创建的test-index-users删除。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("DELETE /test-index-users\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-11.png",loading:"lazy"}})]),s._v(" "),t("h3",{attrs:{id:"查看索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看索引"}},[s._v("¶")]),s._v(" 查看索引")]),s._v(" "),t("p",[s._v("由于test-index-users被删除，所以我们看下之前bank的索引的信息")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("mapping")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("GET /bank/_mapping\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-12.png",loading:"lazy"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("settings")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("GET /bank/_settings\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-13.png",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"kibana管理索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kibana管理索引"}},[s._v("¶")]),s._v(" Kibana管理索引")]),s._v(" "),t("p",[s._v("在Kibana如下路径，我们可以查看和管理索引")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-index-manage-6.png",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("¶")]),s._v(" 参考文章")]),s._v(" "),t("p",[s._v("https://www.elastic.co/guide/cn/elasticsearch/guide/current/_creating_an_index.html")]),s._v(" "),t("p",[s._v("https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html")]),s._v(" "),t("p",[s._v("https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html")]),s._v(" "),t("p",[s._v("https://www.cnblogs.com/quanxiaoha/p/11515057.html")])])}),[],!1,null,null,null);a.default=e.exports}}]);