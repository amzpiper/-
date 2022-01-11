(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{615:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"elasticsearch---备份和迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch---备份和迁移"}},[s._v("¶")]),s._v(" ElasticSearch - 备份和迁移")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#elasticsearch---%e5%a4%87%e4%bb%bd%e5%92%8c%e8%bf%81%e7%a7%bb"}},[s._v("ElasticSearch - 备份和迁移")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%e6%96%b9%e6%a1%88"}},[s._v("方案")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%e7%a6%bb%e7%ba%bf%e6%96%b9%e6%a1%88"}},[s._v("离线方案")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%e5%a2%9e%e9%87%8f%e5%a4%87%e4%bb%bd%e6%96%b9%e6%a1%88"}},[s._v("增量备份方案")])])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%e4%bd%bf%e7%94%a8%e5%bf%ab%e7%85%a7%e8%bf%9b%e8%a1%8c%e5%a4%87%e4%bb%bd"}},[s._v("使用快照进行备份")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%e9%85%8d%e7%bd%ae%e4%bf%a1%e6%81%af"}},[s._v("配置信息")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%e5%88%9b%e5%bb%ba%e4%bb%93%e5%ba%93"}},[s._v("创建仓库")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%e5%88%9b%e5%bb%ba%e5%bf%ab%e7%85%a7"}},[s._v("创建快照")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%e6%81%a2%e5%a4%8d%e6%95%b0%e6%8d%ae"}},[s._v("恢复数据")])])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%e6%96%b9%e6%a1%88%e4%bd%bf%e7%94%a8%e5%9c%ba%e6%99%af"}},[s._v("方案使用场景")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%e8%bf%81%e7%a7%bb%e8%80%83%e8%99%91%e7%9a%84%e9%97%ae%e9%a2%98"}},[s._v("迁移考虑的问题")])])])])]),s._v(" "),t("h2",{attrs:{id:"方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[s._v("¶")]),s._v(" 方案")]),s._v(" "),t("h3",{attrs:{id:"离线方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线方案"}},[s._v("¶")]),s._v(" 离线方案")]),s._v(" "),t("ul",[t("li",[s._v("Snapshot")]),s._v(" "),t("li",[s._v("Reindex")]),s._v(" "),t("li",[s._v("Logstash")]),s._v(" "),t("li",[s._v("ElasticSearch-dump")]),s._v(" "),t("li",[s._v("ElasticSearch-Exporter")])]),s._v(" "),t("h3",{attrs:{id:"增量备份方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增量备份方案"}},[s._v("¶")]),s._v(" 增量备份方案")]),s._v(" "),t("ul",[t("li",[s._v("logstash")])]),s._v(" "),t("h2",{attrs:{id:"使用快照进行备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用快照进行备份"}},[s._v("¶")]),s._v(" 使用快照进行备份")]),s._v(" "),t("h3",{attrs:{id:"配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置信息"}},[s._v("¶")]),s._v(" 配置信息")]),s._v(" "),t("p",[s._v("注册前要注意配置文件加上: elasticsearch.yml")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("path.repo: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/elasticsearch/backup"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[s._v("¶")]),s._v(" 创建仓库")]),s._v(" "),t("blockquote",[t("p",[s._v("注册一个仓库，存放快照，记住，这里不是生成快照，只是注册一个仓库")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XPUT "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://10.11.60.5:9200/_snapshot/repo_backup_1'")]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n\t"type": "fs",\n\t"settings": {\n\t\t"location": "/opt/elasticsearch/backup",\n\t\t"max_snapshot_bytes_per_sec": "20mb",\n\t\t"max_restore_bytes_per_sec": "20mb",\n\t\t"compress": true\n\t}\n}\'')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("查看仓库信息:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XGET "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://10.11.60.5:9200/_snapshot/repo_backup_1?pretty'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@STOR-ES elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -XGET 'http://10.11.60.5:9200/_snapshot/repo_backup_1?pretty'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repo_backup_1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fs"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"location"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/elasticsearch/backup"')]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_restore_bytes_per_sec"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20mb"')]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compress"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_snapshot_bytes_per_sec"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20mb"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"创建快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建快照"}},[s._v("¶")]),s._v(" 创建快照")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XPUT "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://10.11.60.5:9200/_snapshot/repo_backup_1/snapshot_1?wait_for_completion=true&pretty'")]),s._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n\t"indices": "bro-2019-09-14,bro-2019-09-15,wmi-2019-09-14,wmi-2019-09-15,syslog-2019-09-14,sylog-2019-09-15",\n\t"rename_pattern": "bro_(.+)",\n\t"rename_replacement": "dev_bro_'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('",\n\t"ignore_unavailable": true,\n\t"include_global_state": true\n}\'')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("执行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"snapshot"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"snapshot"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"snapshot_1"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2040399")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.4.3"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"indices"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bro-2019-09-14"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bro-2019-09-15"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wmi-2019-09-15"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"syslog-2019-09-14"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wmi-2019-09-14"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"state"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SUCCESS"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_time"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-09-18T05:58:08.860Z"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_time_in_millis"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1568786288860")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end_time"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-09-18T06:02:18.037Z"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"end_time_in_millis"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1568786538037")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"duration_in_millis"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("249177")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failures"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shards"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"恢复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复数据"}},[s._v("¶")]),s._v(" 恢复数据")]),s._v(" "),t("h2",{attrs:{id:"方案使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案使用场景"}},[s._v("¶")]),s._v(" 方案使用场景")]),s._v(" "),t("h2",{attrs:{id:"迁移考虑的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迁移考虑的问题"}},[s._v("¶")]),s._v(" 迁移考虑的问题")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("版本问题，从低版本到高版本数据的迁移")])]),s._v(" "),t("li",[t("p",[s._v("多租户的适配问题")])])]),s._v(" "),t("blockquote",[t("p",[s._v("多个工厂的数据进入不同index, 原有的数据bro-2019-09-15的数据需要进入factorycode-bro-2019-09-15")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("多次或者分批迁移数据")])]),s._v(" "),t("li",[t("p",[s._v("数据在迁移时候富化")])]),s._v(" "),t("li",[t("p",[s._v("FieldMapping 和 数据信息 分离?")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);