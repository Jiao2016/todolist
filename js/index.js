/**
 * Created by 嬌嬌 on 2016/11/2.
 */
$(function () {
    //获取
    function getData() {
        var arr=localStorage.todo?JSON.parse(localStorage.todo):[];
        return arr;
    }
//保存数据
    function saveData(arr) {
        localStorage.todo=JSON.stringify(arr);
    }
    //反选
    function changeState() {
        var arr=getData();
        console.log(arr);
        var index=$(this).parent().attr("index");
        arr[index].done=!arr[index].done;
        saveData(arr);
        rewrite();
    }
//重绘
    function rewrite() {
        $(".not,.done").empty();
        var arr=getData();
        $.each(arr,function (index,value) {
            if (value.done){
                $("<li></li>").attr("index",index).html('<input type="checkbox" onfocus="changeState.call(this)"><span class="checkinner" contenteditable="true" data-role="content">'+value.content+'</span><i class="del">删除</i>').appendTo(".done");
            }else{
                $("<li></li>").attr("index",index).html('<input type="checkbox" onfocus="changeState.call(this)"><span class="checkinner" contenteditable="true"  data-role="content">'+value.content+'</span><i class="del">删除</i>').appendTo(".not");
            }
        })
    }
//删除
    $("ul").on("click",".del",function () {
        var arr=getData();
        var index=$(this).parent().attr("index");
        arr.splice(index,1);
        saveData(arr);
        rewrite();
    });

//添加
    $(".tjbtn").click(function () {
        var value=$(".srk").val();
        if (value==""){
            return;
        }
        var arr=getData();
        arr.push({content:value,done:false});
        $(".srk").val("");
        saveData(arr);
        rewrite();
    });
    rewrite();
    $("ul").on("blur","[contenteditable=true]",function () {
        var arr=getData();
//    var index=$(this).nextAll(".del").attr("id");
        var index=$(this).parent().attr("index");
        var attr=$(this).attr("data-role");
        var value=$(this).html();
        arr[index][attr]=value;
        saveData(arr);
    });


//    移动端事件
});
