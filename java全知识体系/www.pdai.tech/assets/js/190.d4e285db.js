(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{654:function(e,r,t){"use strict";t.r(r);var n=t(11),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mongo进阶---原理和wiredtiger引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo进阶---原理和wiredtiger引擎"}},[e._v("¶")]),e._v(" Mongo进阶 - 原理和WiredTiger引擎")]),e._v(" "),t("p",[e._v("WiredTiger从被MongoDB收购到成为MongoDB的默认存储引擎的一年半得到了迅猛的发展，也逐步被外部熟知。WiredTiger（以下简称WT）是一个优秀的单机数据库存储引擎，它拥有诸多的特性，既支持BTree索引，也支持LSM Tree索引，支持行存储和列存储，实现ACID级别事务、支持大到4G的记录等。WT的产生不是因为这些特性，而是和计算机发展的现状息息相关。")]),e._v(" "),t("p",[e._v("现代计算机近20年来CPU的计算能力和内存容量飞速发展，但磁盘的访问速度并没有得到相应的提高，WT就是在这样的一个情况下研发出来，它设计了充分利用CPU并行计算的内存模型的无锁并行框架，使得WT引擎在多核CPU上的表现优于其他存储引擎。针对磁盘存储特性，WT实现了一套基于BLOCK/Extent的友好的磁盘访问算法，使得WT在数据压缩和磁盘I/O访问上优势明显。实现了基于snapshot技术的ACID事务，snapshot技术大大简化了WT的事务模型，摒弃了传统的事务锁隔离又同时能保证事务的ACID。WT根据现代内存容量特性实现了一种基于Hazard Pointer 的LRU cache模型，充分利用了内存容量的同时又能拥有很高的事务读写并发。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://mongoing.com/archives/2540",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB Wiredtiger存储引擎实现原理"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://mongoing.com/archives/5367",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB 存储引擎 WiredTiger 原理解析"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/wiredtiger/wiredtiger/wiki/Block-Manager-Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Block Manager Overview"),t("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);