(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{652:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongo进阶---wt引擎：checkpoint原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongo进阶---wt引擎：checkpoint原理"}},[t._v("¶")]),t._v(" Mongo进阶 - WT引擎：checkpoint原理")]),t._v(" "),a("blockquote",[a("p",[t._v("Checkpoint主要有两个目的: 一是将内存里面发生修改的数据写到数据文件进行持久化保存，确保数据一致性；二是实现数据库在某个时刻意外发生故障，再次启动时，缩短数据库的恢复时间，WiredTiger存储引擎中的Checkpoint模块就是来实现这个功能的。@pdai")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#mongo%E8%BF%9B%E9%98%B6---wt%E5%BC%95%E6%93%8Echeckpoint%E5%8E%9F%E7%90%86"}},[t._v("Mongo进阶 - WT引擎：checkpoint原理")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%90%86%E8%A7%A3checkpoint"}},[t._v("为什么要理解Checkpoint")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#checkpoint%E5%8C%85%E5%90%AB%E7%9A%84%E5%85%B3%E9%94%AE%E4%BF%A1%E6%81%AF"}},[t._v("Checkpoint包含的关键信息")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#checkpoint%E6%89%A7%E8%A1%8C%E7%9A%84%E5%AE%8C%E6%95%B4%E6%B5%81%E7%A8%8B"}},[t._v("Checkpoint执行的完整流程")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#checkpoint%E6%89%A7%E8%A1%8C%E7%9A%84%E8%A7%A6%E5%8F%91%E6%97%B6%E6%9C%BA"}},[t._v("Checkpoint执行的触发时机")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%AB%A0"}},[t._v("参考文章")])])])])]),t._v(" "),a("h2",{attrs:{id:"为什么要理解checkpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要理解checkpoint"}},[t._v("¶")]),t._v(" 为什么要理解Checkpoint")]),t._v(" "),a("p",[t._v("总的来说，Checkpoint主要有两个目的：")]),t._v(" "),a("ul",[a("li",[t._v("一是将内存里面发生修改的数据写到数据文件进行持久化保存，确保数据一致性；")]),t._v(" "),a("li",[t._v("二是实现数据库在某个时刻意外发生故障，再次启动时，缩短数据库的恢复时间，WiredTiger存储引擎中的Checkpoint模块就是来实现这个功能的。")])]),t._v(" "),a("h2",{attrs:{id:"checkpoint包含的关键信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkpoint包含的关键信息"}},[t._v("¶")]),t._v(" Checkpoint包含的关键信息")]),t._v(" "),a("p",[t._v("本质上来说，Checkpoint相当于一个日志，记录了上次Checkpoint后相关数据文件的变化。")]),t._v(" "),a("p",[t._v("一个Checkpoint包含关键信息如下图所示：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/mongo/mongo-x-checkpoint-1.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("每个checkpoint包含一个root page、三个指向磁盘具体位置上pages的列表以及磁盘上文件的大小。")]),t._v(" "),a("p",[t._v("我们可以通过WiredTiger提供的wt命令工具（工具需要单独编译，下一篇会讲解如何编译安装wt工具）查看每个checkpoints具体信息。")]),t._v(" "),a("p",[t._v("例如，在dbPath指定的data目录下执行如下命令：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("wt list -c\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("输出集合对应数据文件和索引文件的checkpoints信息：")]),t._v(" "),a("p",[t._v("如数据文件file:collection-7-16963667508695721.wt的checkpoint信息：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("WiredTigerCheckpoint.1:Sat Apr "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" 08:35:59 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" KB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       file-size: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" KB, checkpoint-size: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" KB\n               offset, size, checksum\n       root   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3824871989")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xe3faea35"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       alloc  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12288")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4074814944")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xf2e0bde0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       discard "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       avail  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("如索引文件file:index-8-16963667508695721.wt的checkpoint信息：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("WiredTigerCheckpoint.1:Sat Apr "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" 08:35:59 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" KB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       file-size: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" KB, checkpoint-size: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" KB\n               offset, size, checksum\n       root   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("997122142")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0x3b6ee05e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       alloc  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12288")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4074814944")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0xf2e0bde0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       discard "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       avail  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("详细字段信息描述如下：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("root page")]),t._v("：")])]),t._v(" "),a("p",[t._v("包含rootpage的大小（size），在文件中的位置（offset），校验和（checksum），创建一个checkpoint时，会生成一个新root page。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("allocated list pages")]),t._v("：")])]),t._v(" "),a("p",[t._v("用于记录最后一次checkpoint之后，在这次checkpoint执行时，由WiredTiger块管理器新分配的pages，会记录每个新分配page的size，offset和checksum。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("discarded list pages")]),t._v("：")])]),t._v(" "),a("p",[t._v("用于记录最后一次checkpoint之后，在这次checkpoint执行时，丢弃的不在使用的pages，会记录每个丢弃page的size，offset和checksum。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("available list pages")]),t._v("：")])]),t._v(" "),a("p",[t._v("在这次checkpoint执行时，所有由WiredTiger块管理器分配但还没有被使用的pages；当删除一个之前创建的checkpoint时，它所附带的可用pages将合并到最新的这个checkpoint的可用列表上，也会记录每个可用page的size，offset和checksum。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("file size")]),t._v("：\n在这次checkpoint执行后，磁盘上数据文件的大小。")])]),t._v(" "),a("h2",{attrs:{id:"checkpoint执行的完整流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkpoint执行的完整流程"}},[t._v("¶")]),t._v(" Checkpoint执行的完整流程")]),t._v(" "),a("p",[t._v("Checkpoint是数据库中一个比较耗资源的操作，何时触发执行以及以什么样的流程执行是本节要研究的内容，如下所述：")]),t._v(" "),a("p",[t._v("执行流程：")]),t._v(" "),a("p",[t._v("一个checkpoint典型执行流程如下图所述：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/db/mongo/mongo-x-checkpoint-2.png",loading:"lazy"}})]),t._v(" "),a("p",[a("strong",[t._v("流程描述如下")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("查询集合数据时，会打开集合对应的数据文件并读取其最新checkpoint数据；")])]),t._v(" "),a("li",[a("p",[t._v("集合文件会按checkponit信息指定的大小（file size）被truncate掉，所以系统发生意外故障，恢复时可能会丢失checkponit之后的数据（如果没有开启Journal）；")])]),t._v(" "),a("li",[a("p",[t._v("在内存构造一棵包含root page的live tree，表示这是当前可以修改的checkpoint结构，用来跟踪后面写操作引起的文件变化；其它历史的checkpoint信息只能读，可以被删除；")])]),t._v(" "),a("li",[a("p",[t._v("内存里面的page随着增删改查被修改后，写入并需分配新的磁盘page时，将会从livetree中的available列表中选取可用的page供其使用。随后，这个新的page被加入到checkpoint的allocated列表中；")])]),t._v(" "),a("li",[a("p",[t._v("如果一个checkpoint被删除时，它所包含的allocated和discarded两个列表信息将被合并到最新checkpoint的对应列表上；任何不再需要的磁盘pages，也会将其引用添加到live tree的available列表中；")])]),t._v(" "),a("li",[a("p",[t._v("当新的checkpoint生成时，会重新刷新其allocated、available、discard三个列表中的信息，并计算此时集合文件的大小以及rootpage的位置、大小、checksum等信息，将这些信息作checkpoint元信息写入文件；")])]),t._v(" "),a("li",[a("p",[t._v("生成的checkpoint默认名称为WiredTigerCheckpoint，如果不明确指定其它名称，则新check point将自动取代上一次生成的checkpoint。")])])]),t._v(" "),a("h2",{attrs:{id:"checkpoint执行的触发时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkpoint执行的触发时机"}},[t._v("¶")]),t._v(" Checkpoint执行的触发时机")]),t._v(" "),a("p",[t._v("触发checkpoint执行，通常有如下几种情况：")]),t._v(" "),a("ul",[a("li",[t._v("按一定时间周期：默认60s，执行一次checkpoint；")]),t._v(" "),a("li",[t._v("按一定日志文件大小：当Journal日志文件大小达到2GB（如果已开启），执行一次checkpoint；")]),t._v(" "),a("li",[t._v("任何打开的数据文件被修改，关闭时将自动执行一次checkpoint。")])]),t._v(" "),a("p",[t._v("注意：checkpoint是一个相当重量级的操作，当对集合文件执行checkpoint时，会在文件上获得一个排它锁，其它需要等待此锁的操作，可能会出现EBUSY的错误。")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("¶")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mongoing.com/archives/73180",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章来源"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("作者：郭远威")]),t._v(" "),a("li",[t._v("MongoDB中文社区委员，长沙分会主席;《大数据存储MongoDB实战指南》作者资深大数据架构师，通信行业业务架构与数据迁移专家")])])])}),[],!1,null,null,null);s.default=n.exports}}]);