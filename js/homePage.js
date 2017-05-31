/**
 * Created by Administrator on 2017/2/22.
 */
$(function(){
    $(".gameLis a:last-of-type").on("click",function(){
        $("#infoPanel").show();
    })
    $(".close").on("click",function(){
        $("#infoPanel").hide();
    })
})