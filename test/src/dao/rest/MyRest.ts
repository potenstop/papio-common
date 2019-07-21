/**
 *
 * 功能描述:
 *
 * @className MyRest
 * @projectName papio
 * @author yanshaowen
 * @date 2019/2/14 10:27
 */
import {
    AxiosDataSource,
    Property,
    RequestMapping,
    RequestMethod,
    RequestParam, RestConnection, RestDataSource,
    RestRemote,
    ReturnGenericsProperty,
} from "../../../../src/PapioCommon";
class Standard<T> {
    @Property
    public code: number;
    @Property
    public message: string;
    @Property
    public data: T;
    constructor() {
        this.code = 0;
        this.message = "suc";
    }
}

import {expect} from "chai";
import {OutgoingHttpHeaders} from "http";
const json = {
    id: "EKGV5MTV000999DH",
    url: "https://tech.163.com/19/0720/07/EKGV5MTV000999DH.html",
    html: "\n                    \n                    <p><!--StartFragment--></p><p><i><font color=\"#548dd4\"><b>编者按：1969年7月16日，宇航员尼尔·阿姆斯特朗（Neil Armstrong）、巴兹·奥尔德林（Buzz Aldrin）和迈克尔·柯林斯（Michael Collins）从位于美国佛罗里达州的NASA肯尼迪航天中心的39A发射台起飞，踏上了月球之旅，同时也被载入史册。四天后，阿姆斯特朗和奥尔德林将阿波罗11号登月舱“鹰”号降落在月球上的静海，成为首次踏上月球表面的人类。</b></font></i></p><p><i><font color=\"#548dd4\"><b>今年是阿波罗11号登月任务50周年，<font>网易科技《知否》栏目组特别推出“你不知道的登月秘密”系列文章，一起回顾人类探月进程中那些鲜为人知却值得纪念的瞬间。</font></b></font></i></p><p><font color=\"#548dd4\"><font style=\"font-weight: bold;\"><i>今天推出系列文章第八篇《</i></font><i><b>阿波罗11号登月秘密(八)：百事可乐logo差点印在火箭上》。</b></i></font></p><p><font color=\"#244061\"><b><i>更多精彩内容请关注</i><i>纪念专题：</i></b><b><i></i></b><a href=\"https://c.m.163.com/news/s/S1563447187414.html\" target=\"_self\" urlmacroreplace=\"false\" style=\"line-height: 1;\"><i><b>“人类登月50年”</b></i></a></font></p><!--StartFragment--><!--EndFragment--><p><font color=\"#f79646\"><b>作者 | 止水</b></font></p><p><!--StartFragment--><!--EndFragment--></p><p><font color=\"#f79646\"><b>出品 | 网易科技《知否》栏目组（公众号：tech_163）</b></font></p><p>“地球是人类的摇篮，但人类不可能永远被束缚在摇篮里。”这是苏联现代火箭之父康斯坦丁·齐奥尔科夫斯基（Tsiolkovsky）的一句名言。</p><p>而他的想法代表了绝大部分对宇宙与人类未来走向极为关心的航天科学家们的心声。是的，地球作为人类的家园，使我们从无知走向规范，从规范走向文明。在漫长的历史周期中，这个伟大的星球一次次改变了生命对于自身命运的认知，而人类作为已知的地球生命最高级的代表，已经能够通过自身的文明科技，去探索宇宙中地球之外的其它区域，包括月球。</p><p>在1976年之后，美苏登月竞赛告一段落，人类“探月引擎”一度熄火。</p><p>在1990-2010，这20年的人类探月进程中，中国的“嫦娥探月工程”强势崛起，令国人信心倍增的同时，也令世界为之侧目。然而，“嫦娥”一次次成功“奔月”，也常常会让我们忽略一点，“探月”舞台上的选手，不单单只有中国。</p><p>在这第二轮探月大潮中，日本、美国、欧洲宇航局、印度等等这些新时期的“弄潮好手”，各自又都表现得如何呢？功过是非自有评判，我们且慢慢回溯诸方探月强国各自的历史“高光时刻”。</p><p><b style=\"box-sizing: border-box;\">1998年的美国：兰·宾德</b><b style=\"box-sizing: border-box;\">的执着与妥协</b></p><p>1998年，兰·宾德摘下了耳机，将他的注意力全部投入到了前方的计算机显示屏上，在那上面，若干根线条正在8个图像上来回跳动，而最令宾德在意的是其中的两条——一条黄线、一条蓝线——它们正在推进器温度图上迅速攀升，宾德正在等待两台火箭引擎升温至100摄氏度，好让它们点火起飞。</p><p>在这个小小的办公室里，“月球勘探者号计划”的首席研究员宾德和他的工程师小团队正在盯着他们的“月球勘探者号”探测器（Lunar Prospector）。“月球勘探者号”所携带的使命对整个人类探月进程来说都意义非凡，因为它所传回来的数据将证明月球上是否真得存在冰。</p><p class=\"f_center\"><img alt=\"阿波罗11号登月秘密(八)：百事可乐logo差点印在火箭上\" src=\"http://cms-bucket.ws.126.net/2019/07/19/a0db9f0c6c1a4ab1afe82dd8b88e61cf.png\" style=\"box-sizing: border-box; border-width: 0px; border-style: initial; border-; vertical-align: middle; max-width: 50%; display: block; margin: 0px auto;\"></p><p>“月球勘探者号”是NASA“发现计划”（Discovery Program）的一部分，这个项目是前NASA局长丹·戈丁（Dan Goldin）一手操办的。有趣的是，“发现计划”当时所主打的口号是“更快、更好、更便宜”，“更快、更好”不见得有多少成效，但“更便宜”这点却是被真真切切地贯彻了，因为整个“发现计划”的预算上限也就只有2.8亿美元。</p><p>相比于宾德和他的团队为“月球勘探者号”多年的付出，NASA在“月球勘探者号”的建造到发射升空，再到后续为期18个月的监控的整个过程中，只为他们提供了不到6200万美元的资助，至于地方和人手，则都是由洛克希德·马丁公司提供的。</p><p>“整个勘探者号计划的花销只相当于此前阿波罗飞船上的某些单个仪器，”时任NASA新闻发言人的道格拉斯·伊斯贝尔（Douglas Isbell）佐证了这一点。</p><p>“我们的提案之所以被选中，是因为我们以最低的价格提供了最佳的月球探索计划。我们制定了整个计划，制定了我们的科学实验计划，制定了航天器的制造方案，整件事都是我们干的，这就是我们真实的分工情况。”在宾德看来，当NASA内部的官僚机构不再插手的时候，所有的科研工作都将变得前所未有的高效。</p><p>其实，宾德从1989年就已经开始着手研究对“月球勘探者号”的设计了，然而当时的NASA还没有燃起对“重返月球”的渴望。</p><p class=\"f_center\"><img alt=\"阿波罗11号登月秘密(八)：百事可乐logo差点印在火箭上\" src=\"http://cms-bucket.ws.126.net/2019/07/19/04787b2b214549e88b614707121194cd.png\" style=\"box-sizing: border-box; border-width: 0px; border-style: initial; border-; vertical-align: middle; max-width: 50%; display: block; margin: 0px auto;\"></p><p>“对于月球探索，当时的人们普遍认为我们已经干了该干的事，然而事实却是，月球上有四分之三的地方都还未被详细勘探过。”时任NASA新闻发言人的伊斯贝尔在当时这样评论道。</p><p>出于对NASA和绝大多数大型官僚机构天生的反感，宾德曾极力想要自己单干。为了寻求资助，宾德曾找过许多基金、航天公司，甚至于是可口可乐、百事可乐和必胜客。然而对于航天飞行来说，即便是宾德所提出的预算最低的项目，也是造价不菲。</p><p>虽然，当时的百事可乐曾表示愿意为宾德提供400万美元的资助，当然前提是宾德必须同意百事可乐在其的广告中使用探测器录得的月球画面，并且准许百事将其logo印在火箭上面。然而，因为宾德到最后也没能筹集到他想要的金额，双方的计划最终还是告吹了。</p><p>宾德在初尝失败后虽然收起了他的计划，但他并未就此放弃，他只是在等待一个新的时机，而这个机会最终还是来自宾德所厌恶的NASA。</p><p class=\"f_center\"><img alt=\"阿波罗11号登月秘密(八)：百事可乐logo差点印在火箭上\" src=\"http://cms-bucket.ws.126.net/2019/07/19/7d7088cead36481d9ed7f1832c246255.png\" style=\"box-sizing: border-box; border-width: 0px; border-style: initial; border-; vertical-align: middle; max-width: 50%; display: block; margin: 0px auto;\"></p><p>作为NASA“发现计划”中的第三个行星探测任务，宾德所领导的“月球探勘者号”计划的主要任务是对月球表面物质组成、南北极可能的水冰沉积、月球磁场与重力场进行研究。</p><p>1999年7月31日，“月球探勘者号”撞击靠近月球南极点的撞击坑，结束了它的任务。原本，科学家们预期可通过分析撞击时扬起的月球表土，检测到水的存在，但这个最后的实验并未成功。</p><p>虽然“月球勘探者号”并未在月球上找到水，但它所提供的资料却帮助科学家们绘制月球表面组成矿物分布图，并让我们进一步了解月球的形成和演化。</p><p>宾德当时在接受媒体采访时，表示：“月球勘探者号之后，还会有月球勘探者2和月球勘探者3，甚至于我们最后会将公司的总部搬到月球上去。”为了实现他的这些计划，宾德表示，他未来将通过私募基金为的后续计划寻求更多的资金支持。</p><p>在宾德看来，人类从地球进入太空将是我们的宿命。“对我来说，这就是我们要去的地方，在我们厌倦了（地球）之前，我们只能通过科学去不断地探索。”</p><p>在宾德所描绘的未来蓝图里，人类将从地球迁徙至月球、火星，最终抵达太阳系的边缘，甚至可能脱离太阳系。虽然，宾德的这些想法直到今日都还未实现，但他却重新点燃了那一代人的航天梦，启发他们去探索未知的宇宙。</p><p><b style=\"box-sizing: border-box;\">“葬我于月亮之上”</b></p><p>值得一提的是，“月球探勘者号”除了携带了宾德等美国航天人的月球探索梦想，还携带了一位特殊的“乘客”登陆月球，他就是舒梅克－李维九号彗星发现人尤金·舒梅克博士（Eugene Shoemaker），或者更准确得说，是尤金·舒梅克博士的部分骨灰，而这也让尤金成为了至今为止，唯一一位葬在月球上的人。</p><p class=\"f_center\"><img alt=\"阿波罗11号登月秘密(八)：百事可乐logo差点印在火箭上\" src=\"http://cms-bucket.ws.126.net/2019/07/19/5a0a1a81a9844a7eb661cc83c3c75139.png\" style=\"box-sizing: border-box; border-width: 0px; border-style: initial; border-; vertical-align: middle; max-width: 50%; display: block; margin: 0px auto;\"></p><p>在尤金的一生中，他和他的妻子一起发现了大约20颗彗星和800颗小行星。除此之外，尤金还和大卫·李维(David Levy)因共同发现了舒梅克－李维九号彗星而蜚声世界，该卫星在1994年的时候撞上了木星。</p><p>作为一名受过专业训练的地质学家，尤金早在上世纪60年代的时候，就曾向NASA提出了申请，希望能成为一名宇航员，但因为体验不合格的原因，他被拒之门外。</p><p>虽然没当成宇航员，但尤金后来还是多次为美国的太空探索计划提供了帮助，这其中就包括“阿波罗登月计划”。大多数参与过阿波罗计划的宇航员都上过尤金的课，尤金传授了他们许多关于巴林杰陨石坑的知识。</p><p>1997年7月18日，尤金·舒梅克在澳大利亚考察撞击坑的路上遭遇车祸，不治身亡。在尤金去世前，他曾简单提及自己这辈子最大的遗憾就是“没能登上月球，用自己的锤子敲打它”。</p><p class=\"f_center\"><img alt=\"阿波罗11号登月秘密(八)：百事可乐logo差点印在火箭上\" src=\"http://cms-bucket.ws.126.net/2019/07/19/1f3fadb27be348a59ad3b9d6523d135d.png\" style=\"box-sizing: border-box; border-width: 0px; border-style: initial; border-; vertical-align: middle; max-width: 50%; display: block; margin: 0px auto;\"></p><p>死亡或许可以停止尤金的脚步，但是并不能中断他的旅途。或许是为了缅怀尤金为美国航天事业所做出的贡献，NASA遵循了尤金的遗愿，将他的骨灰带上了“月球勘探者号”，送上了月球。</p><p>尤金的骨灰被装进一个聚碳酸酯胶囊里，胶囊外面还包裹着一层黄铜箔，上面用激光蚀刻了他的名字和日期，两幅图像，还有一首小诗。</p><p>两幅图像分别来自舒梅克－李维九号彗星和巴林杰陨石坑，前者是他一生最让人铭记的成就，后者则是他一生做出的最长情的贡献——在那里他曾培养了一批又一批的宇航员。</p><p>而黄铜箔上的小诗，则来自于莎士比亚的经典作品《罗密欧与朱丽叶》：</p><p><i>“在他死后</i></p><p><i>把他切碎成漫天繁星</i></p><p><i>他会照亮天堂的美好</i></p><p><i>人类从此会爱上夜晚</i></p><p><i>不再崇拜灿烂的艳阳。”</i></p><p>人生短促，又有多少人能做到死而无憾呢，尤金是幸运的，他的梦想在30多年后变成了现实，他以一种特殊的形式登上了“月球勘探者号”，飞向了他梦寐以求的月球。</p><p>1999年，在完成探测任务后，月球探勘者号撞入月球，带着尤金的骨灰，深埋于这颗美丽又孤单的星球。</p><p><font color=\"#f79646\"><b>网易科技《知否》栏目，好奇世界，与你一起探索未知。</b></font></p><p><!--StartFragment--><!--EndFragment--></p><p><font color=\"#f79646\"><b>关注网易科技微信号（ID：tech_163），发送“知否”，即可查看所有知否稿件。</b></font></p><p><!--EndFragment--></p><p></p><div class=\"gg200x300\">\n<div class=\"at_item right_ad_item\" adtype=\"rightAd\" requesturl=\"https://nex.163.com/q?app=7BE0FC82&c=tech&l=133&site=netease&affiliate=tech&cat=article&type=logo300x250&location=12\"></div>\n<a href=\"javascript:;\" target=\"_self\" class=\"ad_hover_href\"></a>\n</div>\n                    <!-- 作者 -->\n                    \n                        <p></p>\n                        <div class=\"ep-source cDGray\">\n                            <span class=\"left\"><a href=\"http://tech.163.com/\"><img src=\"https://static.ws.126.net/cnews/css13/img/end_tech.png\" alt=\"乔俊婧\" width=\"13\" height=\"12\" class=\"icon\"></a> 本文来源：知否  </span>\n                            <span class=\"ep-editor\">责任编辑：乔俊婧_NBJ11279</span>\n                        </div>\n                    \n                    <!-- 声明 -->\n                    \n                    \n                    \n                ",
    title: "阿波罗11号登月秘密(八)：百事可乐logo差点印在火箭上",
    articleSource: "知否",
    webSource: "net",
    editor: "责任编辑：乔俊婧_NBJ11279",
    time: "2019-07-21T00:52:19.310Z",
    zone: "tech",
    labels: [
        "阿波罗",
        "登月",
        "彗星",
    ],
    commentList: [
        {
            id: null,
            content: "努力挣钱，有一天也把自己的骨灰送到宇宙中去",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 18,
            share: 0,
            member: {
                memberId: null,
                memberName: null,
                avatar: null,
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "0",
            },
        },
        {
            id: null,
            content: "你现在身处的难道不是宇宙中？",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 10,
            share: 0,
            member: {
                memberId: null,
                memberName: null,
                avatar: null,
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "0",
            },
        },
        {
            id: null,
            content: "尤金的骨灰被装进一个聚碳酸酯胶囊里，胶囊外面还包裹着一层黄铜箔，上面用激光蚀刻了他的名字和日期，两幅图像，还有一首小诗。<br><br>两幅图像分别来自舒梅克－李维九号彗星和巴林杰陨石坑，前者是他一生最让人铭记的成就，后者则是他一生做出的最长情的贡献——在那里他曾培养了一批又一批的宇航员。<br><br>而黄铜箔上的小诗，则来自于莎士比亚的经典作品《罗密欧与朱丽叶》：<br><br>“在他死后<br><br>把他切碎成漫天繁星<br><br>他会照亮天堂的美好<br><br>人类从此会爱上夜晚<br><br>不再崇拜灿烂的艳阳。”<br><br>这是什么样的情怀和才情啊！！！",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 8,
            share: 0,
            member: {
                memberId: null,
                memberName: "金猪肉业",
                avatar: "http://cms-bucket.nosdn.127.net/2018/08/13/078ea9f65d954410b62a52ac773875a1.jpeg",
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "55312935",
            },
        },
        {
            id: null,
            content: "莎士比亚，英国文学史上最杰出的戏剧家，也是欧洲文艺复兴时期最重要、最伟大的作家。回望过去，展望未来。人类伟大的物质财富和精神财富。",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 0,
            share: 0,
            member: {
                memberId: null,
                memberName: "流氓雁",
                avatar: "http://img1.ph.126.net/bC3AbC2RBCdf-F2BAWVaWw==/5717534131715049274.png",
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "2706697",
            },
        },
        {
            id: null,
            content: "人类真是个奇怪的东西。一方面征途早已踏上了星辰大海，一方面还为了一点欲望而争夺不休",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 0,
            share: 0,
            member: {
                memberId: null,
                memberName: "用无知的精神打倒无知",
                avatar: "http://cms-bucket.nosdn.127.net/3223095d72ba49cf84301f7d6289d33e20161214192823.jpg",
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "49767848",
            },
        },
        {
            id: null,
            content: "送到太空中",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 0,
            share: 0,
            member: {
                memberId: null,
                memberName: "皮皮虾队长",
                avatar: "http://mobilepics.nosdn.127.net/netease_subject/6db47a5040499ab86f6b19e54cf43ed71487066155786177",
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "437981",
            },
        },
        {
            id: null,
            content: "我们只是生活在宇宙中的一艘小船上——————地球、",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 0,
            share: 0,
            member: {
                memberId: null,
                memberName: null,
                avatar: null,
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "0",
            },
        },
        {
            id: null,
            content: "我们现在身处的不过是一座监牢",
            time: "2019-07-21T00:52:19.310Z",
            against: 0,
            vote: 3,
            share: 0,
            member: {
                memberId: null,
                memberName: null,
                avatar: null,
                sourceWeb: "net",
                sourceEntrance: "comment",
                sourceMemberId: "0",
            },
        },
    ],
};
describe("测试 DateUtil.test", () => {
    it("post()", async () => {
        const httpDataSource = new RestDataSource();
        httpDataSource.setName("master");
        httpDataSource.setReadOnly(false);
        httpDataSource.setUrl("http://localhost:8080");
        httpDataSource.build();
        const restConnection: RestConnection = await httpDataSource.getConnection() as RestConnection;
        try {
            const standard = await restConnection.request(
                Standard,
                new Map<string, new () => object>().set("Standard", Standard).set("Standard.data", String),
                "/content-news/push",
                RequestMethod.POST, 3000, {id: 1}, json,
            );
            console.log(standard);
        } catch (e) {
            console.log(e);
        }

    });
    it("get()", async () => {
        const httpDataSource = new RestDataSource();
        httpDataSource.setName("master");
        httpDataSource.setReadOnly(false);
        httpDataSource.setUrl("http://localhost:8080");
        httpDataSource.build();
        const restConnection: RestConnection = await httpDataSource.getConnection() as RestConnection;
        const standard = await restConnection.request(
            Standard,
            new Map<string, new () => object>().set("Standard", Standard).set("Standard.data", String),
            "/member/visitor/login",
            RequestMethod.GET, 1000, {id: 1},
            );
    });
});
