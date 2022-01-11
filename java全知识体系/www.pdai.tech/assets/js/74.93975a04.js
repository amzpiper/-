(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{539:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"大数据处理---trie树数据库倒排索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数据处理---trie树数据库倒排索引"}},[s._v("¶")]),s._v(" 大数据处理 - Trie树/数据库/倒排索引")]),s._v(" "),a("blockquote",[a("p",[s._v("大数据处理处理思想之 Trie树/数据库/倒排索引, 本文主要梳理下思路。@pdai")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86---trie%E6%A0%91%E6%95%B0%E6%8D%AE%E5%BA%93%E5%80%92%E6%8E%92%E7%B4%A2%E5%BC%95"}},[s._v("大数据处理 - Trie树/数据库/倒排索引")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#trie%E6%A0%91"}},[s._v("Trie树")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B4%A2%E5%BC%95"}},[s._v("数据库索引")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E5%80%92%E6%8E%92%E7%B4%A2%E5%BC%95inverted-index"}},[s._v("倒排索引(Inverted index)")])])])])]),s._v(" "),a("h2",{attrs:{id:"trie树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trie树"}},[s._v("¶")]),s._v(" Trie树")]),s._v(" "),a("blockquote",[a("p",[s._v("Trie树的介绍和实现请参考 "),a("RouterLink",{attrs:{to:"/md/algorithm/alg-basic-tree-trie.html"}},[s._v("树 - 前缀树(Trie)")])],1)]),s._v(" "),a("ul",[a("li",[a("code",[s._v("适用范围")]),s._v(": 数据量大，重复多，但是数据种类小可以放入内存")]),s._v(" "),a("li",[a("code",[s._v("基本原理及要点")]),s._v(": 实现方式，节点孩子的表示方式")]),s._v(" "),a("li",[a("code",[s._v("扩展")]),s._v(": 压缩实现。")])]),s._v(" "),a("p",[a("strong",[s._v("一些适用场景")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("寻找"),a("strong",[s._v("热门查询")]),s._v(": 查询串的"),a("strong",[s._v("重复度比较高")]),s._v("，虽然总数是1千万，但如果除去重复后，不超过3百万个，每个不超过255字节。")]),s._v(" "),a("li",[s._v("有10个文件，每个文件1G，每个文件的每一行都存放的是用户的query，每个文件的"),a("strong",[s._v("query都可能重复")]),s._v("。要你按照query的频度排序。")]),s._v(" "),a("li",[s._v("1000万字符串，其中有些是相同的("),a("strong",[s._v("重复")]),s._v("),需要把重复的全部去掉，保留没有重复的字符串。请问怎么设计和实现?")]),s._v(" "),a("li",[s._v("一个文本文件，大约有一万行，每行一个词，要求统计出其中"),a("strong",[s._v("最频繁出现")]),s._v("的前10个词。其解决方法是: 用trie树统计每个词出现的次数，时间复杂度是O(n*le)(le表示单词的平准长度)，然后是找出出现最频繁的前10个词。")])]),s._v(" "),a("h2",{attrs:{id:"数据库索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库索引"}},[s._v("¶")]),s._v(" 数据库索引")]),s._v(" "),a("blockquote",[a("p",[s._v("数据库索引相关，可以参看 "),a("RouterLink",{attrs:{to:"/md/db/sql-mysql/sql-mysql-b-tree.html"}},[s._v("MySQL - 索引(B+树)")])],1)]),s._v(" "),a("ul",[a("li",[a("code",[s._v("适用范围")]),s._v(": 大数据量的增删改查")]),s._v(" "),a("li",[a("code",[s._v("基本原理及要点")]),s._v(": 利用数据的设计实现方法，对海量数据的增删改查进行处理。")])]),s._v(" "),a("h2",{attrs:{id:"倒排索引inverted-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引inverted-index"}},[s._v("¶")]),s._v(" 倒排索引(Inverted index)")]),s._v(" "),a("blockquote",[a("p",[s._v("倒排索引，可以参看 ElsaticSearch底层的实现。")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("适用范围")]),s._v(": 搜索引擎，关键字查询")]),s._v(" "),a("li",[a("code",[s._v("基本原理及要点")]),s._v(": 为何叫倒排索引? 一种索引方法，被用来存储在全文搜索下某个单词在一个文档或者一组文档中的存储位置的映射。")])]),s._v(" "),a("p",[s._v("以英文为例，下面是要被索引的文本:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("T0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"it is what it is"')]),s._v("\nT1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"what is it"')]),s._v("\nT2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"it is a banana"')]),s._v("\n// 我们就能得到下面的倒排索引: \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"banana"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"it"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"what"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n// 检索的条件"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"what"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is"')]),s._v("和"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"it"')]),s._v("将对应集合的交集。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("正向索引开发出来用来存储每个文档的单词的列表。正向索引的查询往往满足每个文档有序频繁的全文查询和每个单词在校验文档中的验证这样的查询。在正向索引中，文档占据了中心的位置，每个文档指向了一个它所包含的索引项的序列。也就是说文档指向了它包含的那些单词，而"),a("strong",[s._v("倒排索引则是单词指向了包含它的文档，很容易看到这个反向的关系")]),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);