(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{633:function(a,t,s){"use strict";s.r(t);var i=s(11),e=Object(i.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"es详解---原理：从图解构筑对es原理的初步认知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es详解---原理：从图解构筑对es原理的初步认知"}},[a._v("¶")]),a._v(" ES详解 - 原理：从图解构筑对ES原理的初步认知")]),a._v(" "),s("blockquote",[s("p",[a._v("在学习ElasticSearch原理时，我推荐你先通过官方博客中的一篇图解文章(虽然是基于2.x版本）来构筑对ES的初步认知（这种认识是体系上的快速认知）。@pdai")])]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#es%E8%AF%A6%E8%A7%A3---%E5%8E%9F%E7%90%86%E4%BB%8E%E5%9B%BE%E8%A7%A3%E6%9E%84%E7%AD%91%E5%AF%B9es%E5%8E%9F%E7%90%86%E7%9A%84%E5%88%9D%E6%AD%A5%E8%AE%A4%E7%9F%A5"}},[a._v("ES详解 - 原理：从图解构筑对ES原理的初步认知")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%89%8D%E8%A8%80"}},[a._v("前言")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%BE%E8%A7%A3elasticsearch"}},[a._v("图解ElasticSearch")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%BE%E8%A7%A3lucene"}},[a._v("图解Lucene")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#segment"}},[a._v("Segment")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#inverted-index"}},[a._v("Inverted Index")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#stored-field%E5%AD%97%E6%AE%B5%E6%9F%A5%E6%89%BE"}},[a._v("Stored Field字段查找")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#document-values%E4%B8%BA%E4%BA%86%E6%8E%92%E5%BA%8F%E8%81%9A%E5%90%88"}},[a._v("Document Values为了排序，聚合")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E6%90%9C%E7%B4%A2%E5%8F%91%E7%94%9F%E6%97%B6"}},[a._v("搜索发生时")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E7%BC%93%E5%AD%98%E7%9A%84%E6%95%85%E4%BA%8B"}},[a._v("缓存的故事")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9C%A8shard%E4%B8%AD%E6%90%9C%E7%B4%A2"}},[a._v("在Shard中搜索")])])])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%80%E4%B8%AA%E7%9C%9F%E5%AE%9E%E7%9A%84%E8%AF%B7%E6%B1%82"}},[a._v("一个真实的请求")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%9D%A5%E6%BA%90"}},[a._v("参考来源")])])])])]),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("¶")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("本文先自上而下，后自底向上的介绍ElasticSearch的底层工作原理，试图回答以下问题：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("为什么我的搜索 "),s("code",[a._v("*foo-bar*")]),a._v(" 无法匹配 "),s("code",[a._v("foo-bar")]),a._v(" ？")])]),a._v(" "),s("li",[s("p",[a._v("为什么增加更多的文件会压缩索引（Index）？")])]),a._v(" "),s("li",[s("p",[a._v("为什么ElasticSearch占用很多内存？")])])]),a._v(" "),s("p",[s("strong",[a._v("版本")])]),a._v(" "),s("p",[a._v("elasticsearch版本: elasticsearch-2.2.0")]),a._v(" "),s("h2",{attrs:{id:"图解elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解elasticsearch"}},[a._v("¶")]),a._v(" 图解ElasticSearch")]),a._v(" "),s("ul",[s("li",[a._v("云上的集群")])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-1.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[a._v("集群里的盒子")])]),a._v(" "),s("p",[a._v("云里面的每个白色正方形的盒子代表一个节点——Node。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-2.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[a._v("节点之间")])]),a._v(" "),s("p",[a._v("在一个或者多个节点直接，多个绿色小方块组合在一起形成一个ElasticSearch的索引。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-3.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[a._v("索引里的小方块")])]),a._v(" "),s("p",[a._v("在一个索引下，分布在多个节点里的绿色小方块称为分片——Shard。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-4.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[a._v("Shard＝Lucene Index")])]),a._v(" "),s("p",[a._v("一个ElasticSearch的Shard本质上是一个Lucene Index。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-5.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("Lucene是一个Full Text 搜索库（也有很多其他形式的搜索库），ElasticSearch是建立在Lucene之上的。接下来的故事要说的大部分内容实际上是ElasticSearch如何基于Lucene工作的。")]),a._v(" "),s("h2",{attrs:{id:"图解lucene"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图解lucene"}},[a._v("¶")]),a._v(" 图解Lucene")]),a._v(" "),s("h3",{attrs:{id:"segment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#segment"}},[a._v("¶")]),a._v(" Segment")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Mini索引——segment")])])]),a._v(" "),s("p",[a._v("在Lucene里面有很多小的segment，我们可以把它们看成Lucene内部的mini-index。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-6.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Segment内部")]),a._v("（有着许多数据结构）\n"),s("ul",[s("li",[a._v("Inverted Index")]),a._v(" "),s("li",[a._v("Stored Fields")]),a._v(" "),s("li",[a._v("Document Values")]),a._v(" "),s("li",[a._v("Cache")])])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-7.png",loading:"lazy"}})]),a._v(" "),s("h4",{attrs:{id:"inverted-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inverted-index"}},[a._v("¶")]),a._v(" Inverted Index")]),a._v(" "),s("p",[a._v("最最重要的Inverted Index")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-8.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("Inverted Index主要包括两部分：")]),a._v(" "),s("ul",[s("li",[a._v("一个有序的数据字典Dictionary（包括单词Term和它出现的频率）。")]),a._v(" "),s("li",[a._v("与单词Term对应的Postings（即存在这个单词的文件）。")])]),a._v(" "),s("p",[a._v("当我们搜索的时候，首先将搜索的内容分解，然后在字典里找到对应Term，从而查找到与搜索相关的文件内容。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-9.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("查询“the fury”")])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-10.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("自动补全")]),a._v("（AutoCompletion-Prefix）")])]),a._v(" "),s("p",[a._v("如果想要查找以字母“c”开头的字母，可以简单的通过二分查找（Binary Search）在Inverted Index表中找到例如“choice”、“coming”这样的词（Term）。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-11.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("昂贵的查找")])])]),a._v(" "),s("p",[a._v("如果想要查找所有包含“our”字母的单词，那么系统会扫描整个Inverted Index，这是非常昂贵的。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-12.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("在此种情况下，如果想要做优化，那么我们面对的问题是如何生成合适的Term。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("问题的转化")])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-13.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("对于以上诸如此类的问题，我们可能会有几种可行的解决方案：")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("* suffix -> xiffus *")])])]),a._v(" "),s("p",[a._v("如果我们想以后缀作为搜索条件，可以为Term做反向处理。")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[a._v("(60.6384, 6.5017) -> u4u8gyykk")])])]),a._v(" "),s("p",[a._v("对于GEO位置信息，可以将它转换为GEO Hash。")]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("code",[a._v("123 -> {1-hundreds, 12-tens, 123}")])])]),a._v(" "),s("p",[a._v("对于简单的数字，可以为它生成多重形式的Term。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("解决拼写错误")])])]),a._v(" "),s("p",[a._v("一个Python库 为单词生成了一个包含错误拼写信息的树形状态机，解决拼写错误的问题。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-14.png",loading:"lazy"}})]),a._v(" "),s("h4",{attrs:{id:"stored-field字段查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stored-field字段查找"}},[a._v("¶")]),a._v(" Stored Field字段查找")]),a._v(" "),s("p",[a._v("当我们想要查找包含某个特定标题内容的文件时，Inverted Index就不能很好的解决这个问题，所以Lucene提供了另外一种数据结构Stored Fields来解决这个问题。本质上，Stored Fields是一个简单的键值对key-value。默认情况下，ElasticSearch会存储整个文件的JSON source。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-15.png",loading:"lazy"}})]),a._v(" "),s("h4",{attrs:{id:"document-values为了排序聚合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-values为了排序聚合"}},[a._v("¶")]),a._v(" Document Values为了排序，聚合")]),a._v(" "),s("p",[a._v("即使这样，我们发现以上结构仍然无法解决诸如：排序、聚合、facet，因为我们可能会要读取大量不需要的信息。")]),a._v(" "),s("p",[a._v("所以，另一种数据结构解决了此种问题：Document Values。这种结构本质上就是一个列式的存储，它高度优化了具有相同类型的数据的存储结构。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-16.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("为了提高效率，ElasticSearch可以将索引下某一个Document Value全部读取到内存中进行操作，这大大提升访问速度，但是也同时会消耗掉大量的内存空间。")]),a._v(" "),s("p",[a._v("总之，这些数据结构Inverted Index、Stored Fields、Document Values及其缓存，都在segment内部。")]),a._v(" "),s("h3",{attrs:{id:"搜索发生时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索发生时"}},[a._v("¶")]),a._v(" 搜索发生时")]),a._v(" "),s("p",[a._v("搜索时，Lucene会搜索所有的segment然后将每个segment的搜索结果返回，最后合并呈现给客户。")]),a._v(" "),s("p",[a._v("Lucene的一些特性使得这个过程非常重要：")]),a._v(" "),s("ul",[s("li",[a._v("Segments是不可变的（immutable）\n"),s("ul",[s("li",[a._v("Delete? 当删除发生时，Lucene做的只是将其标志位置为删除，但是文件还是会在它原来的地方，不会发生改变")]),a._v(" "),s("li",[a._v("Update? 所以对于更新来说，本质上它做的工作是：先删除，然后重新索引（Re-index）")])])]),a._v(" "),s("li",[a._v("随处可见的压缩\n"),s("ul",[s("li",[a._v("Lucene非常擅长压缩数据，基本上所有教科书上的压缩方式，都能在Lucene中找到。")])])]),a._v(" "),s("li",[a._v("缓存所有的所有\n"),s("ul",[s("li",[a._v("Lucene也会将所有的信息做缓存，这大大提高了它的查询效率。")])])])]),a._v(" "),s("h3",{attrs:{id:"缓存的故事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存的故事"}},[a._v("¶")]),a._v(" 缓存的故事")]),a._v(" "),s("p",[a._v("当ElasticSearch索引一个文件的时候，会为文件建立相应的缓存，并且会定期（每秒）刷新这些数据，然后这些文件就可以被搜索到。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-17.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("随着时间的增加，我们会有很多segments，")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-18.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("所以ElasticSearch会将这些segment合并，在这个过程中，segment会最终被删除掉")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-19.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这就是为什么增加文件可能会使索引所占空间变小，它会引起merge，从而可能会有更多的压缩。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("举个栗子")])])]),a._v(" "),s("p",[a._v("有两个segment将会merge")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-20.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这两个segment最终会被删除，然后合并成一个新的segment")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-21.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这时这个新的segment在缓存中处于cold状态，但是大多数segment仍然保持不变，处于warm状态。")]),a._v(" "),s("p",[a._v("以上场景经常在Lucene Index内部发生的。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-22.png",loading:"lazy"}})]),a._v(" "),s("h3",{attrs:{id:"在shard中搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在shard中搜索"}},[a._v("¶")]),a._v(" 在Shard中搜索")]),a._v(" "),s("p",[a._v("ElasticSearch从Shard中搜索的过程与Lucene Segment中搜索的过程类似。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-23.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("与在Lucene Segment中搜索不同的是，Shard可能是分布在不同Node上的，所以在搜索与返回结果时，所有的信息都会通过网络传输。")]),a._v(" "),s("p",[a._v("需要注意的是：")]),a._v(" "),s("p",[a._v("1次搜索查找2个shard ＝ 2次分别搜索shard")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-24.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("对于日志文件的处理")])])]),a._v(" "),s("p",[a._v("当我们想搜索特定日期产生的日志时，通过根据时间戳对日志文件进行分块与索引，会极大提高搜索效率。")]),a._v(" "),s("p",[a._v("当我们想要删除旧的数据时也非常方便，只需删除老的索引即可。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-25.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("在上种情况下，每个index有两个shards")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("如何Scale")])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-26.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("shard不会进行更进一步的拆分，但是shard可能会被转移到不同节点上")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-27.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("所以，如果当集群节点压力增长到一定的程度，我们可能会考虑增加新的节点，这就会要求我们对所有数据进行重新索引，这是我们不太希望看到的，所以我们需要在规划的时候就考虑清楚，如何去平衡足够多的节点与不足节点之间的关系。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("节点分配与Shard优化")]),a._v(" "),s("ul",[s("li",[a._v("为更重要的数据索引节点，分配性能更好的机器")]),a._v(" "),s("li",[a._v("确保每个shard都有副本信息replica")])])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-28.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("路由Routing")])])]),a._v(" "),s("p",[a._v("每个节点，每个都存留一份路由表，所以当请求到任何一个节点时，ElasticSearch都有能力将请求转发到期望节点的shard进一步处理。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-29.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"一个真实的请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个真实的请求"}},[a._v("¶")]),a._v(" 一个真实的请求")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-30.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Query")])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-31.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("Query有一个类型filtered，以及一个multi_match的查询")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("Aggregation")])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-32.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("根据作者进行聚合，得到top10的hits的top10作者的信息")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("请求分发")])])]),a._v(" "),s("p",[a._v("这个请求可能被分发到集群里的任意一个节点")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-33.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("上帝节点")])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-34.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("这时这个节点就成为当前请求的协调者（Coordinator），它决定：\na) 根据索引信息，判断请求会被路由到哪个核心节点\nb) 以及哪个副本是可用的\nc) 等等")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("路由")])])]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-35.png",loading:"lazy"}})]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("在真实搜索之前")])])]),a._v(" "),s("p",[a._v("ElasticSearch 会将Query转换成Lucene Query")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-36.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("然后在所有的segment中执行计算")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-37.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("对于Filter条件本身也会有缓存")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-38.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("但queries不会被缓存，所以如果相同的Query重复执行，应用程序自己需要做缓存")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-39.png",loading:"lazy"}})]),a._v(" "),s("p",[a._v("所以，")]),a._v(" "),s("p",[a._v("a) filters可以在任何时候使用\nb) query只有在需要score的时候才使用")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("返回")])])]),a._v(" "),s("p",[a._v("搜索结束之后，结果会沿着下行的路径向上逐层返回。")]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-40.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-41.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-42.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-43.png",loading:"lazy"}})]),a._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/es/es-th-1-44.png",loading:"lazy"}})]),a._v(" "),s("h2",{attrs:{id:"参考来源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考来源"}},[a._v("¶")]),a._v(" 参考来源")]),a._v(" "),s("p",[a._v("SlideShare: Elasticsearch From the Bottom Up")]),a._v(" "),s("p",[a._v("Youtube: Elasticsearch from the bottom up")]),a._v(" "),s("p",[a._v("Wiki: Document-term matrix")]),a._v(" "),s("p",[a._v("Wiki: Search engine indexing")]),a._v(" "),s("p",[a._v("Skip list")]),a._v(" "),s("p",[a._v("Standford Edu: Faster postings list intersection via skip pointers")]),a._v(" "),s("p",[a._v("StackOverflow: how an search index works when querying many words?")]),a._v(" "),s("p",[a._v("StackOverflow: how does lucene calculate intersection of documents so fast?")]),a._v(" "),s("p",[a._v("Lucene and its magical indexes")]),a._v(" "),s("p",[a._v("misspellings 2.0c: A tool to detect misspellings")])])}),[],!1,null,null,null);t.default=e.exports}}]);