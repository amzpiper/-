(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{677:function(s,e,t){"use strict";t.r(e);var a=t(11),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis进阶---数据结构：对象机制详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis进阶---数据结构：对象机制详解"}},[s._v("¶")]),s._v(" Redis进阶 - 数据结构：对象机制详解")]),s._v(" "),t("blockquote",[t("p",[s._v("我们在前文已经阐述了"),t("RouterLink",{attrs:{to:"/md/db/nosql-redis/db-redis-data-types.html"}},[s._v("Redis 5种基础数据类型详解")]),s._v("，分别是字符串(string)、列表(list)、哈希(hash)、集合(set)、有序集合(zset)，以及5.0版本中"),t("RouterLink",{attrs:{to:"/md/db/nosql-redis/db-redis-data-type-stream.html"}},[s._v("Redis Stream结构详解")]),s._v("；那么这些基础类型的底层是如何实现的呢？Redis的每种对象其实都由"),t("strong",[s._v("对象结构(redisObject)")]),s._v(" 与 "),t("strong",[s._v("对应编码的数据结构")]),s._v("组合而成, 本文主要介绍"),t("strong",[s._v("对象结构(redisObject)")]),s._v(" 部分。@pdai")],1)]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#redis%E8%BF%9B%E9%98%B6---%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%AF%B9%E8%B1%A1%E6%9C%BA%E5%88%B6%E8%AF%A6%E8%A7%A3"}},[s._v("Redis进阶 - 数据结构：对象机制详解")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%BC%95%E5%85%A5%E4%BB%8E%E5%93%AA%E9%87%8C%E5%BC%80%E5%A7%8B%E5%AD%A6%E4%B9%A0%E5%BA%95%E5%B1%82"}},[s._v("引入:从哪里开始学习底层？")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88redis%E4%BC%9A%E8%AE%BE%E8%AE%A1redisobject%E5%AF%B9%E8%B1%A1"}},[s._v("为什么Redis会设计redisObject对象")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#redisobject%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"}},[s._v("redisObject数据结构")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E7%9A%84%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5%E5%92%8C%E5%A4%9A%E6%80%81"}},[s._v("命令的类型检查和多态")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%AF%B9%E8%B1%A1%E5%85%B1%E4%BA%AB"}},[s._v("对象共享")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0%E4%BB%A5%E5%8F%8A%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%B6%88%E6%AF%81"}},[s._v("引用计数以及对象的消毁")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%B0%8F%E7%BB%93"}},[s._v("小结")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0"}},[s._v("参考文章")])])])])]),s._v(" "),t("h2",{attrs:{id:"引入从哪里开始学习底层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入从哪里开始学习底层"}},[s._v("¶")]),s._v(" 引入:从哪里开始学习底层？")]),s._v(" "),t("blockquote",[t("p",[s._v("我在整理Redis底层设计时，发现网上其实是有很多资料的，但是缺少一种自上而下的承接。这里我将收集很多网上的资料并重新组织，来帮助你更好的理解Redis底层设计。@pdai")])]),s._v(" "),t("p",[s._v("我们在前文已经阐述了"),t("RouterLink",{attrs:{to:"/md/db/nosql-redis/db-redis-data-types.html"}},[s._v("Redis 5种基础数据类型详解")]),s._v("和"),t("RouterLink",{attrs:{to:"/md/db/nosql-redis/db-redis-data-type-stream.html"}},[s._v("Redis入门 - 数据结构：Stream详解")]),s._v("；那么这些基础类型的底层是如何实现的呢？")],1),s._v(" "),t("p",[s._v("带着这个问题我们来着手理解底层设计，首先看下图：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/redis/db-redis-object-2-2.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("它反映了Redis的每种对象其实都由"),t("strong",[s._v("对象结构(redisObject)")]),s._v(" 与 "),t("strong",[s._v("对应编码的数据结构")]),s._v("组合而成，而每种对象类型对应若干编码方式，不同的编码方式所对应的底层数据结构是不同的。")]),s._v(" "),t("p",[s._v("所以，我们需要从几个个角度来着手底层研究：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("对象设计机制")]),s._v(": 对象结构(redisObject)")]),s._v(" "),t("li",[t("strong",[s._v("编码类型和底层数据结构")]),s._v(": 对应编码的数据结构")])]),s._v(" "),t("h2",{attrs:{id:"为什么redis会设计redisobject对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么redis会设计redisobject对象"}},[s._v("¶")]),s._v(" 为什么Redis会设计redisObject对象")]),s._v(" "),t("blockquote",[t("p",[s._v("为什么Redis会设计redisObject对象？")])]),s._v(" "),t("p",[s._v("在redis的命令中，用于对键进行处理的命令占了很大一部分，而对于键所保存的值的类型（键的类型），键能执行的命令又各不相同。如： "),t("code",[s._v("LPUSH")]),s._v(" 和 "),t("code",[s._v("LLEN")]),s._v(" 只能用于列表键, 而 "),t("code",[s._v("SADD")]),s._v(" 和 "),t("code",[s._v("SRANDMEMBER")]),s._v(" 只能用于集合键, 等等; 另外一些命令, 比如 "),t("code",[s._v("DEL")]),s._v("、 "),t("code",[s._v("TTL")]),s._v(" 和 "),t("code",[s._v("TYPE")]),s._v(", 可以用于任何类型的键；但是要正确实现这些命令, 必须为不同类型的键设置不同的处理方式: 比如说, 删除一个列表键和删除一个字符串键的操作过程就不太一样。")]),s._v(" "),t("p",[s._v("以上的描述说明, "),t("strong",[s._v("Redis 必须让每个键都带有类型信息, 使得程序可以检查键的类型, 并为它选择合适的处理方式")]),s._v(".")]),s._v(" "),t("p",[s._v("比如说， 集合类型就可以由字典和整数集合两种不同的数据结构实现， 但是， 当用户执行 ZADD 命令时， 他/她应该不必关心集合使用的是什么编码， 只要 Redis 能按照 ZADD 命令的指示， 将新元素添加到集合就可以了。")]),s._v(" "),t("p",[s._v("这说明, "),t("strong",[s._v("操作数据类型的命令除了要对键的类型进行检查之外, 还需要根据数据类型的不同编码进行多态处理")]),s._v(".")]),s._v(" "),t("p",[s._v("为了解决以上问题, "),t("strong",[s._v("Redis 构建了自己的类型系统")]),s._v(", 这个系统的主要功能包括:")]),s._v(" "),t("ul",[t("li",[s._v("redisObject 对象.")]),s._v(" "),t("li",[s._v("基于 redisObject 对象的类型检查.")]),s._v(" "),t("li",[s._v("基于 redisObject 对象的显式多态函数.")]),s._v(" "),t("li",[s._v("对 redisObject 进行分配、共享和销毁的机制.")])]),s._v(" "),t("h2",{attrs:{id:"redisobject数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redisobject数据结构"}},[s._v("¶")]),s._v(" redisObject数据结构")]),s._v(" "),t("p",[s._v("redisObject 是 Redis 类型系统的核心, 数据库中的每个键、值, 以及 Redis 本身处理的参数, 都表示为这种数据类型.")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * Redis 对象\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("redisObject")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编码方式")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// LRU - 24位, 记录最末一次访问时间（相对于lru_clock）; 或者 LFU（最少使用的数据：8位频率，16位访问时间）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" lru"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("LRU_BITS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// LRU_BITS: 24")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引用计数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" refcount"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指向底层数据结构实例")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" robj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("下图对应上面的结构")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/redis/db-redis-object-1.png",loading:"lazy"}})]),s._v(" "),t("p",[t("strong",[s._v("其中type、encoding和ptr是最重要的三个属性")]),s._v("。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("type记录了对象所保存的值的类型")]),s._v("，它的值可能是以下常量中的一个：")])]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n* 对象类型\n*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_STRING")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符串")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_LIST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 列表")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_SET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 集合")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ZSET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有序集")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_HASH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 哈希表")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("encoding记录了对象所保存的值的编码")]),s._v("，它的值可能是以下常量中的一个：")])]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n* 对象编码\n*/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_RAW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Raw representation */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Encoded as integer */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_HT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Encoded as hash table */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_ZIPMAP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 注意：版本2.6后不再使用. */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_LINKEDLIST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 注意：不再使用了，旧版本2.x中String的底层之一. */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_ZIPLIST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Encoded as ziplist */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_INTSET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Encoded as intset */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_SKIPLIST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Encoded as skiplist */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_EMBSTR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Embedded sds string encoding */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_QUICKLIST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Encoded as linked list of ziplists */")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("OBJ_ENCODING_STREAM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" ")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Encoded as a radix tree of listpacks */")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[t("strong",[s._v("ptr是一个指针，指向实际保存值的数据结构")]),s._v("，这个数据结构由type和encoding属性决定。举个例子， 如果一个redisObject 的type 属性为"),t("code",[s._v("OBJ_LIST")]),s._v(" ， encoding 属性为"),t("code",[s._v("OBJ_ENCODING_QUICKLIST")]),s._v(" ，那么这个对象就是一个Redis 列表（List)，它的值保存在一个QuickList的数据结构内，而ptr 指针就指向quicklist的对象；")])]),s._v(" "),t("p",[s._v("下图展示了redisObject 、Redis 所有数据类型、Redis 所有编码方式以及底层数据结构之间的关系（pdai：从6.0版本中梳理而来）：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/redis/db-redis-object-2-2.png",loading:"lazy"}})]),s._v(" "),t("blockquote",[t("p",[s._v("注意："),t("code",[s._v("OBJ_ENCODING_ZIPMAP")]),s._v("没有出现在图中，因为在redis2.6开始，它不再是任何数据类型的底层结构(虽然还有zipmap.c的代码); "),t("code",[s._v("OBJ_ENCODING_LINKEDLIST")]),s._v("也不支持了，相关代码也删除了。")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("lru属性: 记录了对象最后一次被命令程序访问的时间")])])]),s._v(" "),t("p",[t("strong",[s._v("空转时长")]),s._v("：当前时间减去键的值对象的lru时间，就是该键的空转时长。Object idletime命令可以打印出给定键的空转时长")]),s._v(" "),t("p",[s._v("如果服务器打开了maxmemory选项，并且服务器用于回收内存的算法为volatile-lru或者allkeys-lru，那么当服务器占用的内存数超过了maxmemory选项所设置的上限值时，空转时长较高的那部分键会优先被服务器释放，从而回收内存。")]),s._v(" "),t("h2",{attrs:{id:"命令的类型检查和多态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令的类型检查和多态"}},[s._v("¶")]),s._v(" 命令的类型检查和多态")]),s._v(" "),t("blockquote",[t("p",[s._v("那么Redis是如何处理一条命令的呢？")])]),s._v(" "),t("p",[t("strong",[s._v("当执行一个处理数据类型命令的时候，redis执行以下步骤")])]),s._v(" "),t("ul",[t("li",[s._v("根据给定的key，在数据库字典中查找和他相对应的redisObject，如果没找到，就返回NULL；")]),s._v(" "),t("li",[s._v("检查redisObject的type属性和执行命令所需的类型是否相符，如果不相符，返回类型错误；")]),s._v(" "),t("li",[s._v("根据redisObject的encoding属性所指定的编码，选择合适的操作函数来处理底层的数据结构；")]),s._v(" "),t("li",[s._v("返回数据结构的操作结果作为命令的返回值。")])]),s._v(" "),t("p",[s._v("比如现在执行LPOP命令：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/redis/db-redis-object-3.png",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"对象共享"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象共享"}},[s._v("¶")]),s._v(" 对象共享")]),s._v(" "),t("blockquote",[t("p",[s._v("redis一般会把一些常见的值放到一个共享对象中，这样可使程序避免了重复分配的麻烦，也节约了一些CPU时间。")])]),s._v(" "),t("p",[t("strong",[s._v("redis预分配的值对象如下")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("各种命令的返回值，比如成功时返回的OK，错误时返回的ERROR，命令入队事务时返回的QUEUE，等等")]),s._v(" "),t("li",[s._v("包括0 在内，小于REDIS_SHARED_INTEGERS的所有整数（REDIS_SHARED_INTEGERS的默认值是10000）")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/redis/db-redis-object-4.png",loading:"lazy"}})]),s._v(" "),t("blockquote",[t("p",[s._v("注意：共享对象只能被字典和双向链表这类能带有指针的数据结构使用。像整数集合和压缩列表这些只能保存字符串、整数等自勉之的内存数据结构")])]),s._v(" "),t("p",[t("strong",[s._v("为什么redis不共享列表对象、哈希对象、集合对象、有序集合对象，只共享字符串对象")]),s._v("？")]),s._v(" "),t("ul",[t("li",[s._v("列表对象、哈希对象、集合对象、有序集合对象，本身可以包含字符串对象，复杂度较高。")]),s._v(" "),t("li",[s._v("如果共享对象是保存字符串对象，那么验证操作的复杂度为O(1)")]),s._v(" "),t("li",[s._v("如果共享对象是保存字符串值的字符串对象，那么验证操作的复杂度为O(N)")]),s._v(" "),t("li",[s._v("如果共享对象是包含多个值的对象，其中值本身又是字符串对象，即其它对象中嵌套了字符串对象，比如列表对象、哈希对象，那么验证操作的复杂度将会是O(N的平方)")])]),s._v(" "),t("p",[s._v("如果对复杂度较高的对象创建共享对象，需要消耗很大的CPU，用这种消耗去换取内存空间，是不合适的")]),s._v(" "),t("h2",{attrs:{id:"引用计数以及对象的消毁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数以及对象的消毁"}},[s._v("¶")]),s._v(" 引用计数以及对象的消毁")]),s._v(" "),t("blockquote",[t("p",[s._v("redisObject中有refcount属性，是对象的引用计数，显然计数0那么就是可以回收。")])]),s._v(" "),t("ul",[t("li",[s._v("每个redisObject结构都带有一个refcount属性，指示这个对象被引用了多少次；")]),s._v(" "),t("li",[s._v("当新创建一个对象时，它的refcount属性被设置为1；")]),s._v(" "),t("li",[s._v("当对一个对象进行共享时，redis将这个对象的refcount加一；")]),s._v(" "),t("li",[s._v("当使用完一个对象后，或者消除对一个对象的引用之后，程序将对象的refcount减一；")]),s._v(" "),t("li",[s._v("当对象的refcount降至0 时，这个RedisObject结构，以及它引用的数据结构的内存都会被释放。")])]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("¶")]),s._v(" 小结")]),s._v(" "),t("ul",[t("li",[s._v("redis使用自己实现的对象机制（redisObject)来实现类型判断、命令多态和基于引用次数的垃圾回收；")]),s._v(" "),t("li",[s._v("redis会预分配一些常用的数据对象，并通过共享这些对象来减少内存占用，和避免频繁的为小对象分配内存。")])]),s._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("¶")]),s._v(" 参考文章")]),s._v(" "),t("ul",[t("li",[s._v("https://www.cnblogs.com/gaopengfirst/p/10072680.html")]),s._v(" "),t("li",[s._v("https://www.cnblogs.com/neooelric/p/9621736.html")]),s._v(" "),t("li",[s._v("https://juejin.cn/post/6844904192042074126")])])])}),[],!1,null,null,null);e.default=r.exports}}]);