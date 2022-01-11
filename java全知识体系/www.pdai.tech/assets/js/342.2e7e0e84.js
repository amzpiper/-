(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{806:function(e,r,v){"use strict";v.r(r);var a=v(11),t=Object(a.a)({},(function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"虚拟化技术---docker-vs-虚拟机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟化技术---docker-vs-虚拟机"}},[e._v("¶")]),e._v(" 虚拟化技术 - Docker Vs. 虚拟机")]),e._v(" "),v("blockquote",[v("p",[e._v("人们为了提高系统及硬件资源的利用率而引入了"),v("strong",[e._v("虚拟化技术")]),e._v("。虚拟化是一种"),v("strong",[e._v("资源管理技术")]),e._v("，它可以各种实体资源抽像后再分隔，从而打破实体结构的限制，最大程度的提高资源的利用率。"),v("strong",[e._v("Docker属于软件虚拟化技术中的操作系统层虚拟化技术")]),e._v("，它是基于LXC实现的一个应用容器引擎，Docker让开发者可以打包他们的应用及依赖环境到一个可移植的容器中，然后可以将这个容器快速部署开发、测试或生产环境中。了解本文从三个问题着手，"),v("strong",[e._v("什么是虚拟化技术，docker和虚拟机区别，docker可以用来做什么？")]),e._v("@pdai")])]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%e8%99%9a%e6%8b%9f%e5%8c%96%e6%8a%80%e6%9c%af---docker-vs-%e8%99%9a%e6%8b%9f%e6%9c%ba"}},[e._v("虚拟化技术 - Docker Vs. 虚拟机")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%e4%bb%80%e4%b9%88%e6%98%af%e8%99%9a%e6%8b%9f%e5%8c%96%e6%8a%80%e6%9c%af"}},[e._v("什么是虚拟化技术？")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%e4%bb%80%e4%b9%88%e6%98%af%e8%99%9a%e6%8b%9f%e5%8c%96"}},[e._v("什么是虚拟化")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#%e8%99%9a%e6%8b%9f%e5%8c%96%e6%8a%80%e6%9c%af%e5%88%86%e7%b1%bb"}},[e._v("虚拟化技术分类")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%e7%a1%ac%e4%bb%b6%e8%99%9a%e6%8b%9f%e5%8c%96"}},[e._v("硬件虚拟化")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#%e8%bd%af%e4%bb%b6%e8%99%9a%e6%8b%9f%e5%8c%96"}},[e._v("软件虚拟化")])])])]),e._v(" "),v("li",[v("a",{attrs:{href:"#%e5%87%a0%e7%a7%8d%e8%99%9a%e6%8b%9f%e5%8c%96%e6%8a%80%e6%9c%af"}},[e._v("几种虚拟化技术")])])])]),e._v(" "),v("li",[v("a",{attrs:{href:"#docker%e8%99%9a%e6%8b%9f%e5%8c%96"}},[e._v("Docker虚拟化")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%e4%bb%80%e4%b9%88%e6%98%afdocker"}},[e._v("什么是Docker？")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#docker%e8%83%bd%e5%b9%b2%e4%bb%80%e4%b9%88"}},[e._v("Docker能干什么？")])])])]),e._v(" "),v("li",[v("a",{attrs:{href:"#docker%e5%92%8c%e8%99%9a%e6%8b%9f%e6%9c%ba%e7%9a%84%e5%8c%ba%e5%88%ab"}},[e._v("Docker和虚拟机的区别？")]),e._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%e5%9f%ba%e6%9c%ac%e5%af%b9%e6%af%94"}},[e._v("基本对比")])]),e._v(" "),v("li",[v("a",{attrs:{href:"#%e8%99%9a%e6%8b%9f%e6%8a%80%e6%9c%af%e5%af%b9%e6%af%94"}},[e._v("虚拟技术对比")])])])]),e._v(" "),v("li",[v("a",{attrs:{href:"#%e5%8f%82%e8%80%83%e6%96%87%e7%ab%a0"}},[e._v("参考文章")])])])])]),e._v(" "),v("h2",{attrs:{id:"什么是虚拟化技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟化技术"}},[e._v("¶")]),e._v(" 什么是虚拟化技术？")]),e._v(" "),v("h3",{attrs:{id:"什么是虚拟化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟化"}},[e._v("¶")]),e._v(" 什么是虚拟化")]),e._v(" "),v("p",[e._v("在计算机技术中，虚拟化（Virtualization）是一种资源管理技术。它是将计算机的各种实体资源，如：服务器、网络、内存及存储等，予以抽象、转换后呈现出来，打破实体结构间的不可切割的障碍，使用户可以用更好的方式来利用这些资源。")]),e._v(" "),v("p",[e._v("虚拟化的目的是为了在同一个主机上运行多个系统或应用，从而提高系统资源的利用率，并带来降低成本、方便管理和容错容灾等好处。")]),e._v(" "),v("h3",{attrs:{id:"虚拟化技术分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟化技术分类"}},[e._v("¶")]),e._v(" 虚拟化技术分类")]),e._v(" "),v("p",[e._v("从实现形式来分，虚拟化技术可分为基于硬件的虚拟化和基于软件的虚拟化。")]),e._v(" "),v("h4",{attrs:{id:"硬件虚拟化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#硬件虚拟化"}},[e._v("¶")]),e._v(" 硬件虚拟化")]),e._v(" "),v("p",[e._v("硬件虚拟化就是硬件物理平台本身提供了对特殊指令的截获和重定向的支持。支持虚拟化的硬件，也是一些基于硬件实现软件虚拟化技术的关键。在基于硬件实现软件虚拟化的技术中，在硬件是实现虚拟化的基础，硬件(主要是CPU)会为虚拟化软件提供支持，从而实现硬件资源的虚拟化。")]),e._v(" "),v("p",[e._v("支持虚拟化的硬件有：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("Intel-VT-(Intel Virtualization Technology)")]),e._v("，Intel公司为解决纯软件虚拟化解决方案在可靠性、安全性和性能上的不足而引进的技术。它可以让一个CPU工作起来像多个CPU在并行运行，从而使得在一部电脑内同时运行多个操作系统成为可能")]),e._v(" "),v("li",[v("strong",[e._v("AMD-V-(AMD Virtualization)")]),e._v("，是AMD公司的虚拟化技术。它是对x86处理器系统架构的一组硬件扩展和硬件辅助虚拟化技术，可以简化纯软件的虚拟化解决方案，改进VMM（虚拟机监视器）的设计，更充分地利用硬件资源，提高服务器和数据中心的虚拟化效率")])]),e._v(" "),v("h4",{attrs:{id:"软件虚拟化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#软件虚拟化"}},[e._v("¶")]),e._v(" 软件虚拟化")]),e._v(" "),v("p",[e._v("软件虚拟化就是利用软件技术，在现有的物理平台上实现对物理平台访问的截获和模拟。在软件虚拟化技术中，有些技术不需要硬件支持，如：QEMU；而有些软件虚拟化技术，则依赖硬件支持，如：VMware、KVM。")]),e._v(" "),v("p",[e._v("对软件虚拟化进行细分，又可以分为以下几类：")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("完全虚拟化")]),e._v("：（Full Virtualization）虚拟机模拟完整的底层硬件环境和特权指令的执行过程，使客户机操作系统可以独立运行。支持完全虚拟化的软件有：Parallels Workstation、VirtualBox、Virtual Iron、Oracle VM、Virtual PC、Virtual Server、Hyper-V、VMware Workstation、QEMU等")]),e._v(" "),v("li",[v("strong",[e._v("硬件辅助虚拟化")]),e._v("：（Hardware-assisted Virtualization）是指通过硬件辅助支持模拟运行环境，使客户机操作系统可以独立运行，实现完全虚拟化的功能。支持硬件辅助虚拟化的软件有：Linux KVM、VMware Workstation、VMware Fusion、Virtual PC、Xen、VirtualBox、Parallels Workstation等")]),e._v(" "),v("li",[v("strong",[e._v("部分虚拟化")]),e._v("：（Partial Virtualization）只针对部分硬件资源进行虚拟化，虚拟机模拟部分底层硬件环境，特别是地址空间。这样的环境支持资源共享和线程独立，但是不允许建立独立的客户机操作系统。")]),e._v(" "),v("li",[v("strong",[e._v("平行虚拟化")]),e._v("：（Para-Virtualization）虚拟机不需要模拟硬件，而是将部分硬件接口以软件的形式提供给客户机操作系统。如：早期的Xen。")]),e._v(" "),v("li",[v("strong",[e._v("操作系统层虚拟化")]),e._v("：（OS-level virtualization）这种技术将操作系统内核虚拟化，可以允许使用者空间软件实例被分割成几个独立的单元，在内核中运行，而不是只有一个单一实例运行。这个软件实例，也被称为是一个容器（containers）、虚拟引擎（Virtualization engine）、虚拟专用服务器（virtual private servers）。每个容器的进程是独立的，对于使用者来说，就像是在使用自己的专用服务器。\nDocker容器技术就是属于操作系统层虚拟化的范畴。")])]),e._v(" "),v("h3",{attrs:{id:"几种虚拟化技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#几种虚拟化技术"}},[e._v("¶")]),e._v(" 几种虚拟化技术")]),e._v(" "),v("p",[e._v("虚拟化是通过软件的方式模拟实体服务器，其初衷是为了解决“一种应用占用一台服务器”模式所带来的服务器数量剧增的问题，从而降低数据中心复杂度，简化管理难度。在虚拟化的发展过程中，出现过以下主要虚拟化技术或产品：")]),e._v(" "),v("ul",[v("li",[e._v("Xen - 由剑桥大学开发的，一款开源的虚拟机监视器。采用ICA协议，它通过一种叫做准虚拟化的技术来获取高性能，甚至在一些与传统虚拟技术极度不友好的架构上（如：x86），Xen也有极佳的表现。Xen属于半虚拟化的技术，所以其性能损失非常小。Xen没有指令翻译，其或者使用使能理解和翻译虚拟操作系统发出的未修改指令的CPU（即：完全虚拟化）；或者修改操作系统，使它发出的指令最优化，便于在虚拟化环境中执行（即：准虚拟化）。")]),e._v(" "),v("li",[v("strong",[e._v("KVM")]),e._v(" - "),v("strong",[e._v("KVM是一个Linux kernel模块，可以使用modprobe来加载KVM，加载后还需要通过其他工具创建虚拟机。KVM是一个全虚拟化的解决方案，但需要CPU支持虚拟化功能。相比Xen来说，KVM可以更加方便的整合进Linux内核，但它还需要其它虚拟化软件（如：QEMU）才能实现虚拟化功能")]),e._v("。")]),e._v(" "),v("li",[v("strong",[e._v("LXC")]),e._v(" - 即："),v("strong",[e._v("Linux Container，Linux容器，是一种轻量级的虚拟化的手段。它可以提供轻量级的虚拟化，以隔离进程和资源，而且不需要提供指令解释机制以及全虚拟化的其他复杂性。容器会有效地将由单个操作系统管理的资源划分到孤立的组中，以更好地在孤立的组之间平衡有冲突的资源使用需求。")])]),e._v(" "),v("li",[v("strong",[e._v("OpenVZ")]),e._v(" - 是SWsoft公司开发的开源软件，是该公司Virtuozzo软件的基础产品，是基于Linux平台的操作系统级服务器虚拟化解决方案。通过OpenVZ，可以在单个物理服务器上创建多个相互隔离的虚拟专用服务器(VPS)并以最大的效率共享硬件和管理资源。其上运行虚拟服务器被称为VPS（Virtual Private Serve），每个VPS的运行环境和独立服务器完全一致。OpenVZ基于Linux系统内核及作业系统提供操作系统级虚拟化，在虚拟化过程中资源消耗非常小，官方宣称约1-2%。")]),e._v(" "),v("li",[v("strong",[e._v("Hyper-V")]),e._v(" - "),v("strong",[e._v("是微软件推出的一种虚拟化技术，可以采用半虚拟化或全虚拟的方式创建虚拟机。虽然它可以创建Windows或Linux操作系统，但其本身只能运行在Windows系统下，使用范围较为有限")]),e._v("。")]),e._v(" "),v("li",[v("strong",[e._v("Oracle VM")]),e._v(" - Oracle推出的服务器虚拟化软件，基于开源的Xen技术，包括Oracle VM Server和Oracle VM Manager两部分。")]),e._v(" "),v("li",[v("strong",[e._v("VMWare")]),e._v(" - 是一家非常出名虚拟化软件公司，其产品涵盖服务器、桌面等各种虚拟化领域，如："),v("strong",[e._v("VMware Workstation")]),e._v(" - 是一款桌面虚拟机软件，可以在一台实体机器上模拟完整的网络环境，并可运行多个Windows、DOS、Linux或Mac系统，是非常好的开发、测试、部署解决方案。从技术角度来说，VMware Workstation是一款完全虚拟化产品，可借助硬件辅助在不修改用户操作系统的情况下完整虚拟化操作系统。")]),e._v(" "),v("li",[v("strong",[e._v("VMware ESX Server")]),e._v(" - 是一款适用于任何系统环境的企业级的虚拟机软件，可以认为是VMware Server的升级版。相比VMware Workstation来说，其功能更加强大，可以用于构建高伸缩和高可靠企业级服务器，并可实现远程管理、高级资源管理控制等高级功能。")])]),e._v(" "),v("h2",{attrs:{id:"docker虚拟化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker虚拟化"}},[e._v("¶")]),e._v(" Docker虚拟化")]),e._v(" "),v("h3",{attrs:{id:"什么是docker"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker"}},[e._v("¶")]),e._v(" 什么是Docker？")]),e._v(" "),v("p",[e._v("Docker是一个开源的应用容器引擎，它让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到安装了任何 Linux 发行版本的机器上。Docker基于LXC来实现类似VM的功能，可以在更有限的硬件资源上提供给用户更多的计算资源。与同VM等虚拟化的方式不同，LXC不属于全虚拟化、部分虚拟化或半虚拟化中的任何一个分类，而是一个操作系统级虚拟化。")]),e._v(" "),v("p",[e._v("Docker是直接运行在宿主操作系统之上的一个容器，使用沙箱机制完全虚拟出一个完整的操作，容器之间不会有任何接口，从而让容器与宿主机之间、容器与容器之间隔离的更加彻底。每个容器会有自己的权限管理，独立的网络与存储栈，及自己的资源管理能，使同一台宿主机上可以友好的共存多个容器。")]),e._v(" "),v("p",[e._v("Docker借助Linux的内核特性，如：控制组（Control Group）、命名空间（Namespace）等，并直接调用操作系统的系统调用接口。从而降低每个容器的系统开销，并实现降低容器复杂度、启动快、资源占用小等特征。")]),e._v(" "),v("h3",{attrs:{id:"docker能干什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker能干什么"}},[e._v("¶")]),e._v(" Docker能干什么？")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("简化配置")])])]),e._v(" "),v("p",[e._v("这是Docker公司宣传的Docker的主要使用场景。虚拟机的最大好处是能在你的硬件设施上运行各种配置不一样的平台（软件、系统），Docker在降低额外开销的情况下提供了同样的功能。它能让你将运行环境和配置放在代码中然后部署，同一个Docker的配置可以在不同的环境中使用，这样就降低了硬件要求和应用环境之间耦合度。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("代码流水线（Code Pipeline）管理")])])]),e._v(" "),v("p",[e._v("前一个场景对于管理代码的流水线起到了很大的帮助。代码从开发者的机器到最终在生产环境上的部署，需要经过很多的中间环境。而每一个中间环境都有自己微小的差别，Docker给应用提供了一个从开发到上线均一致的环境，让代码的流水线变得简单不少。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("提高开发效率")])])]),e._v(" "),v("p",[e._v("这就带来了一些额外的好处：Docker能提升开发者的开发效率。详细一点的例子，可以参考Aater在DevOpsDays Austin 2014大会或者是DockerCon上的演讲。")]),e._v(" "),v("p",[e._v("不同的开发环境中，我们都想把两件事做好。一是我们想让开发环境尽量贴近生产环境，二是我们想快速搭建开发环境。")]),e._v(" "),v("p",[e._v("理想状态中，要达到第一个目标，我们需要将每一个服务都跑在独立的虚拟机中以便监控生产环境中服务的运行状态。然而，我们却不想每次都需要网络连接，每次重新编译的时候远程连接上去特别麻烦。这就是Docker做的特别好的地方，开发环境的机器通常内存比较小，之前使用虚拟的时候，我们经常需要为开发环境的机器加内存，而现在Docker可以轻易的让几十个服务在Docker中跑起来。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("隔离应用")])])]),e._v(" "),v("p",[e._v("有很多种原因会让你选择在一个机器上运行不同的应用，比如之前提到的提高开发效率的场景等。")]),e._v(" "),v("p",[e._v("我们经常需要考虑两点，一是因为要降低成本而进行服务器整合，二是将一个整体式的应用拆分成松耦合的单个服务（译者注：微服务架构）。如果你想了解为什么松耦合的应用这么重要，请参考Steve Yege的这篇论文，文中将Google和亚马逊做了比较。")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("整合服务器")]),e._v("\n \n正如通过虚拟机来整合多个应用，Docker隔离应用的能力使得Docker可以整合多个服务器以降低成本。由于没有多个操作系统的内存占用，以及能在多个实例之间共享没有使用的内存，Docker可以比虚拟机提供更好的服务器整合解决方案。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("调适能力")])])])]),e._v(" "),v("p",[e._v("Docker提供了很多的工具，这些工具不一定只是针对容器，但是却适用于容器。它们提供了很多的功能，包括可以为容器设置检查点、设置版本和查看两个容器之间的差别，这些特性可以帮助调试Bug。你可以在《Docker拯救世界》的文章中找到这一点的例证。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("多租户")])])]),e._v(" "),v("p",[e._v("另外一个Docker有意思的使用场景是在多租户的应用中，它可以避免关键应用的重写。我们一个特别的关于这个场景的例子是为IoT（物联网）的应用开发一个快速、易用的多租户环境。这种多租户的基本代码非常复杂，很难处理，重新规划这样一个应用不但消耗时间，也浪费金钱。")]),e._v(" "),v("p",[e._v("使用Docker，可以为每一个租户的应用层的多个实例创建隔离的环境，这不仅简单而且成本低廉，当然这一切得益于Docker环境的启动速度和其高效的diff命令。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("快速部署")])])]),e._v(" "),v("p",[e._v("在虚拟机之前，引入新的硬件资源需要消耗几天的时间。Docker的虚拟化技术将这个时间降到了几分钟，Docker只是创建一个容器进程而无需启动操作系统，这个过程只需要秒级的时间。这正是Google和Facebook都看重的特性。")]),e._v(" "),v("p",[e._v("你可以在数据中心创建销毁资源而无需担心重新启动带来的开销。通常数据中心的资源利用率只有30%，通过使用Docker并进行有效的资源分配可以提高资源的利用率。")]),e._v(" "),v("h2",{attrs:{id:"docker和虚拟机的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker和虚拟机的区别"}},[e._v("¶")]),e._v(" Docker和虚拟机的区别？")]),e._v(" "),v("blockquote",[v("p",[e._v("虚拟机Virtual Machine与容器化技术（代表Docker）都是虚拟化技术，两者的区别在于虚拟化的程度不同。")])]),e._v(" "),v("h3",{attrs:{id:"基本对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本对比"}},[e._v("¶")]),e._v(" 基本对比")]),e._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pdai-1257820000.cos.ap-beijing.myqcloud.com/pdai.tech/public/_images/devops/docker/docker-y-0.jpg",loading:"lazy"}})]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("虚拟机")]),e._v(" "),v("ul",[v("li",[e._v("基础设施（Infrastructure）。它可以是你的个人电脑，数据中心的服务器，或者是云主机。")]),e._v(" "),v("li",[e._v("主操作系统（Host Operating System）。你的个人电脑之上，运行的可能是MacOS，Windows或者某个Linux发行版。")]),e._v(" "),v("li",[e._v("虚拟机管理系统（Hypervisor）。利用Hypervisor，可以在主操作系统之上运行多个不同的从操作系统。类型1的Hypervisor有支持MacOS的HyperKit，支持Windows的Hyper-V以及支持Linux的KVM。类型2的Hypervisor有VirtualBox和VMWare。")]),e._v(" "),v("li",[e._v("操作系统（Guest Operating System）。假设你需要运行3个相互隔离的应用，则需要使用Hypervisor启动3个从操作系统，也就是3个虚拟机。这些虚拟机都非常大，也许有700MB，这就意味着它们将占用2.1GB的磁盘空间。更糟糕的是，它们还会消耗很多CPU和内存。")]),e._v(" "),v("li",[e._v("各种依赖。每一个从操作系统都需要安装许多依赖。如果你的的应用需要连接PostgreSQL的话，则需要安装libpq-dev；如果你使用Ruby的话，应该需要安装gems；如果使用其他编程语言，比如Python或者Node.js，都会需要安装对应的依赖库。")])])]),e._v(" "),v("li",[v("strong",[e._v("Docker容器")]),e._v(" "),v("ul",[v("li",[e._v('主操作系统（Host Operating System）。所有主流的Linux发行版都可以运行Docker。对于MacOS和Windows，也有一些办法"运行"Docker。')]),e._v(" "),v("li",[e._v("Docker守护进程（Docker Daemon）。Docker守护进程取代了Hypervisor，它是运行在操作系统之上的后台进程，负责管理Docker容器。")]),e._v(" "),v("li",[e._v("各种依赖。对于Docker，应用的所有依赖都打包在Docker镜像中，Docker容器是基于Docker镜像创建的。")]),e._v(" "),v("li",[e._v("应用。应用的源代码与它的依赖都打包在Docker镜像中，不同的应用需要不同的Docker镜像。不同的应用运行在不同的Docker容器中，它们是相互隔离的。")])])])]),e._v(" "),v("p",[e._v("虚拟机是在物理资源层面实现的隔离，相对于虚拟机，Docker是你APP层面实现的隔离，并且省去了虚拟机操作系统（Guest OS）），从而节省了一部分的系统资源；Docker守护进程可以直接与主操作系统进行通信，为各个Docker容器分配资源；它还可以将容器与主操作系统隔离，并将各个容器互相隔离。虚拟机启动需要数分钟，而Docker容器可以在数毫秒内启动。由于没有臃肿的从操作系统，Docker可以节省大量的磁盘空间以及其他系统资源。")]),e._v(" "),v("p",[e._v("虚拟机与容器docker的区别，在于"),v("strong",[e._v("vm多了一层guest OS，虚拟机的Hypervisor会对硬件资源也进行虚拟化，而容器Docker会直接使用宿主机的硬件资源")]),e._v("。")]),e._v(" "),v("p",[e._v("下面我们采用形象的比喻区分两者的"),v("strong",[e._v("隔离级别")]),e._v("：")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("服务器")]),e._v("：比作一个大型的仓管基地，包含场地与零散的货物——相当于各种服务器资源。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("虚拟机技术")]),e._v("：比作仓库，拥有独立的空间堆放各种货物或集装箱，仓库之间完全独立——仓库相当于各种系统，独立的应用系统和操作系统。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("Docker")]),e._v("：比作集装箱，操作各种货物的打包——将各种应用程序和他们所依赖的运行环境打包成标准的容器，容器之间隔离。")])])]),e._v(" "),v("h3",{attrs:{id:"虚拟技术对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟技术对比"}},[e._v("¶")]),e._v(" 虚拟技术对比")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("隔离性")])])]),e._v(" "),v("p",[e._v("在于隔离性上面，由于vm对操作系统也进行了虚拟化，隔离的更加彻底。而Docker共享宿主机的操作系统，隔离性较差。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("运行效率")])])]),e._v(" "),v("p",[e._v("由于vm的隔离操作，导致生成虚拟机的速率大大低于容器Docker生成的速度，因为Docker直接利用宿主机的系统内核。比如openstack能够以10台/min的速度创建虚拟机，而docker可以做到在几秒钟之内创建大量容器，它们的启动速度是在数量级上的差距。")]),e._v(" "),v("p",[e._v("因为虚拟机增加了一层虚拟硬件层，运行在虚拟机上的应用程序在进行数值计算时是运行在Hypervisor虚拟的CPU上的；另外一方面是由于计算程序本身的特性导致的差异。虚拟机虚拟的cpu架构不同于实际cpu架构，数值计算程序一般针对特定的cpu架构有一定的优化措施，虚拟化使这些措施作废，甚至起到反效果。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("资源利用率")])])]),e._v(" "),v("p",[e._v("在资源利用率上虚拟机由于隔离更彻底，因此利用率也会相对较低。")]),e._v(" "),v("p",[e._v("因为虚拟机增加了一层虚拟硬件层，运行在虚拟机上的应用程序在进行数值计算时是运行在Hypervisor虚拟的CPU上的；另外一方面是由于计算程序本身的特性导致的差异。虚拟机虚拟的cpu架构不同于实际cpu架构，数值计算程序一般针对特定的cpu架构有一定的优化措施，虚拟化使这些措施作废，甚至起到反效果。比如对于本次实验的平台，实际的CPU架构是2块物理CPU。")]),e._v(" "),v("h2",{attrs:{id:"参考文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("¶")]),e._v(" 参考文章")]),e._v(" "),v("ul",[v("li",[e._v("https://blog.csdn.net/steelren/article/details/78491923")]),e._v(" "),v("li",[e._v("https://www.cnblogs.com/jie-fang/p/10279629.html")])])])}),[],!1,null,null,null);r.default=t.exports}}]);