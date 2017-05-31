/**
 * Created by Administrator on 2017/2/23.
 */
$(function(){
    var success=['勇敢坚毅真正之才智乃刚毅之志向。 —— 拿破仑',
        '志向不过是记忆的奴隶，生气勃勃地降生，但却很难成长。 —— 莎士比亚',
        '骏马是跑出来的，强兵是打出来的。',
        '只有登上山顶，才能看到那边的风光。',
        '如果惧怕前面跌宕的山岩，生命就永远只能是死水一潭。',
        '平时没有跑发卫千米，占时就难以进行一百米的冲刺。',
        '梯子的梯阶从来不是用来搁脚的，它只是让人们的脚放上一段时间，以便让别一只脚能够再往上登。',
        '没有激流就称不上勇进，没有山峰则谈不上攀登。',
        '真正的才智是刚毅的志向。 —— 拿破仑',
        '山路曲折盘旋，但毕竟朝着顶峰延伸。',
        '只有创造，才是真正的享受，只有拚搏，才是充实的生活。',
        '敢于向黑暗宣战的人，心里必须充满光明。',
        '种子牢记着雨滴献身的叮嘱，增强了冒尖的勇气。',
        '自然界没有风风雨雨，大地就不会春华秋实。',
        '只会幻想而不行动的人，永远也体会不到收获果实时的喜悦。',
        '勤奋是你生命的密码，能译出你一部壮丽的史诗。',
        '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
        '奋斗者在汗水汇集的江河里，将事业之舟驶到了理想的彼岸。',
        '忙于采集的蜜蜂，无暇在人前高谈阔论。',
        '勇士搏出惊涛骇流而不沉沦，懦夫在风平浪静也会溺水。'];
    var fail=['志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
        '海浪为劈风斩浪的航船饯行，为随波逐流的轻舟送葬。',
        '人生最重要的一点是，永远不要迷失自己。',
        '一个人承受孤独的能力有多大，他的能力就有多大。',
        '实力塑造性格，性格决定命运。',
        '普通人成功并非靠天赋，而是靠把寻常的天资发挥到不寻常的高度。',
        '对于强者，要关注他们的灵魂，对于弱者，他关注他们的生存。',
        '积极的人在每一次忧患中都看到一个机会，而消极的人则在每个机会都看到某种忧患。',
        '成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。',
        '当你感到悲哀痛苦时，最好是去学些什么东西。学习会使你永远立于不败之地。',
        '有的人一生默默无闻，有的人一生轰轰烈烈，甚至千古流芳，为什么会这样？因为默默无闻的人只是满足于现状，而不去想怎么轰轰烈烈过一生，不要求自己，去做，去行动，怎么能够成功？',
        '人性最可怜的就是：我们总是梦想着天边的一座奇妙的玫瑰园，而不去欣赏今天就开在我们窗口的玫瑰。',
        '在人生的道路上，即使一切都失去了，只要一息尚存，你就没有丝毫理由绝望。因为失去的一切，又可能在新的层次上复得。',
        '没有一劳永逸的开始；也没有无法拯救的结束。人生中，你需要把握的是：该开始的，要义无反顾地开始；该结束的，就干净利落地结束。',
        '生命的奖赏远在旅途终点，而非起点附近。我不知道要走多少步才能达到目标，踏上第一千步的时候，仍然可能遭到失败。但我不会因此放弃，我会坚持不懈，直至成功！',
        '不要认为只要付出就一定会有回报，这是错误的。学会有效地工作，这是经营自己强项的重要课程。',
        '苦心人天不负，卧薪尝胆，三千越甲可吞吴。有志者事竞成，破釜沉舟，百二秦川终属楚。',
        '生命本身是一个过程，成功与失败只是人生过程中一些小小的片段，若果把生命与成功或失败联系在一起，生命将失去本身该有的意义。',
        '我们不要哀叹生活的不幸，诅咒命运的不公。在命运面前，我们要做强者，掐住命运的咽喉，叩问命运，改变命运。',
        '努力和效果之间，永远有这样一段距离。成功和失败的唯一区别是，你能不能坚持挺过这段无法估计的距离。'];
    var maxPacing=$(".well-box").offset().top;
    var stop=false;//控制柱子是否增长的布尔变量（两种互斥的情况下并且不想每次都绑定解绑或者重新定义等可以用一个变量来控制两种情况的发生，只要改变该变量即可）
    var index=0;//柱子的索引
    var fNum;//弹出对话框的字符串内容的索引
    var imgIndex;//背景图片的索引
    var distance;//两根柱子之间的距离
    var stickLeft=94;//棍子初始的定位left
    var count=1;//关卡数
    function initShow(){
        index=0;
        stop=false;
        stickLeft=94;//每次失败或成功刷新页面的时候要将原来操作的变量还原为初始值
        imgIndex=Math.floor(Math.random()*20)+1;
        $("body").addClass("bg"+imgIndex);
        $(".play-title").html("关卡"+count);
        $(".prompt").hide();
        $(".container").css({"left":"0px","bottom":"0px"});
        $(".man img").attr("src","img/stick_stand.png");
        $(".man").css({"left":"35px","bottom":"200px"});
    }
    function initFail(){
        initShow();
        $(".stick").removeClass("stickRote").css({"height":"0px","left":stickLeft+"px","bottom":"200px"});
    }
    function initSuccess(){
        count++;//改变关卡数
        initShow();
        $(".stick").css({"height":"0px","left":stickLeft+"px","bottom":"200px"});
        $(".btnClick").on("mousedown",mousedown).on("mouseup",mouseup);//成功时解除了绑定，所以每次成功更新时都要重新绑定按钮事件
    }
    //jquery的链式结构
    $(".btnClick").on("mousedown",mousedown).on("mouseup",mouseup);
    function mousedown(){
        //offset()属性获取的是指定对象距离浏览器的偏移对象，包括top,left,要分别获取
        //换按钮的两种方法
        if(!stop){
            $(".btnClick img").attr("src","img/btn-bg-click.png");
            //$(this).addClass("btnImg2");
            $(".stick").animate({"height":maxPacing+"px"},3000);
        }

    }
    function mouseup(){
        index++;
        stop=true;
        if(stop){
            $(".btnClick img").attr("src","img/btn-bg.png");
            //$(this).removeClass("btnImg2");
            $(".stick").stop().addClass("stickRote");
            setTimeout(manRun,600);
        }
    }
    function manRun(){
        $(".man img").attr("src","img/stick.gif");
        var manLeft=$(".man").position().left;
        var stickHeight=$(".stick").height();
        var manWidth=$(".man").width();
        var posit1=manLeft+stickHeight+manWidth;
        //$(".man").animate({"left":posit+"px"},800,"linear");
        distance=$(".well").eq(index).position().left-$(".well").eq(index-1).position().left-100;
        var posit2=distance+100+manLeft;
        if(stickHeight>=distance&&stickHeight<distance+100){
            $(".man").animate({"left":posit2+"px"},800,"linear",manPass);
        }else{
            $(".man").animate({"left":posit1+"px"},800,"linear",manFall);
        }
    }
    function manPass(){
        stop=false;
        var contLeft=$(".well").eq(index).position().left;
        //棍子相对父容器的定位值
        stickLeft+=distance+100;
        //因为小人是相对父容器container定位的，只要将container定位的位移改变即可，小人的位置相对父容器不变但相对浏览器的位置会随之移动
        $(".container").css({"left":-contLeft+"px"});
        $(".man img").attr("src","img/stick_stand.png");
        $(".stick").removeClass("stickRote").css({"height":"0px","left":stickLeft+"px"});
        if(index==3){
            //最后一个柱子时解除按钮的事件绑定(所以每次成功之后点下一关页面初始化时一定要再重新绑定按钮事件)
            $(".btnClick").off("mousedown mouseup");//解除多个事件绑定
            setTimeout(sucShow,700);
        }
    }
    function manFall(){
        $(".man").animate({"bottom":"-80px"},200,"linear");
        fNum=Math.floor(Math.random()*20);
        $(".prompt p").html(fail[fNum]);
        //jquery和js的不同：js中如果同一个对象绑定了两个相同的事件，后面的会将前面绑定的事件覆盖掉，只执行后面的；
        //但jQuery中可以同时绑定两个相同的事件，不过要注意的是，在使用的时候要注意在之前先解除另一个同名的事件，否则会相互影响可能出现错误。
        $(".prompt button").html("再来一次").off("click").on("click",initFail);
        $(".prompt").show();
    }
    function sucShow(){
        fNum=Math.floor(Math.random()*20);
        $(".prompt p").html(success[fNum]);
        //
        $(".prompt button").html("下一关").off("click").on("click",initSuccess);
        $(".prompt").show();
    }

})