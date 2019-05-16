
网页浏览器（web browser）输入URL时，页面是如何呈现的？

根据 Web 浏览器地址栏中指定的 URL，Web 浏览器从 Web 服务器端获 取文件资源(resource)等信息，从而显示出 Web 页面。

像这种通过发送请求获取服务器资源的 Web 浏览器等，都可称为客户端(client)。

 ![image.png](https://upload-images.jianshu.io/upload_images/6828981-bc7f1af13e793071.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Web 使用一种名为 HTTP(HyperText Transfer Protocol，超文本传输协议 1)的协议作为规范，完成从客户 端到服务器端等一系列运作流程。而协议是指规则的约定。可以说，Web 是建立在 HTTP 协议上通信的。

* http的诞生，90年，为了研究者实现资源共享

### TCP/IP 是互联网相关的各类协议族的总称
>协议中存在各式各样的内容。从电缆的规格到 IP 地址的选定方法、寻找异地用户的方法、双方建立通信的顺
序，以及 Web 页面显示需要处理的步骤，等等。
像这样把与互联网相关联的协议集合起来总称为 TCP/IP。也有说法认为，TCP/IP 是指 TCP 和 IP 这两种协
议。还有一种说法认为，TCP/ IP 是在 IP 协议的通信过程中，使用到的协议族的统称。

![image.png](https://upload-images.jianshu.io/upload_images/6828981-7524c9954d832f2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### TCP/IP 协议族各层的作用如下。
* 应用层
应用层决定了向用户提供应用服务时通信的活动。
TCP/IP 协议族内预存了各类通用的应用服务。比如，FTP(File Transfer Protocol，文件传输协议)和 DNS(Domain Name System，域名系统)服务就是其中两类。
HTTP 协议也处于该层。
* 传输层
传输层对上层应用层，提供处于网络连接中的两台计算机之间的数据传输。
在传输层有两个性质不同的协议:TCP(Transmission Control Protocol，传输控制协议)和 UDP(User Data Protocol，用户数据报协议)。
