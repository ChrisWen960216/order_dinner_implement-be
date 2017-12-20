$(function(){
    getList();
    $('#booking').click(function(){
        var name = $('#name').val();
        var uid = $('#uid').val();
        var phone = $('#phone').val();
        
        $.ajax({  
            type: "post",  
            dataType: "json",  
            url: "/users/add",
            data:{
                name:name,
                uid:uid,
                phone:phone
            },
            success: function (){
                $(".booking-hint").html("预定成功");
                $(".booking-hint").css("color","green");
                getList()
            },  
            error: function () {  
                $(".booking-hint").html("预定失败");
                $(".booking-hint").css("color","red"); 
            }  
        });
    })
    
    $('#cancel').click(function(){
        var name = $('#name').val();
        var uid = $('#uid').val();
        var phone = $('#phone').val();
        
        $.ajax({  
            type: "post",  
            dataType: "json",  
            url: "/users/delete",
            data:{
                name:name,
                uid:uid,
                phone:phone
            },
            success: function (){
                $(".cancel-hint").html("取消预定成功");
                $(".cancel-hint").css("color","green");
                getList()
            },  
            error: function () {  
                $(".cancel-hint").html("取消预定失败");
                $(".cancel-hint").css("color","red");
            }  
        });
    })
})

function getList(){
    $.ajax({  
        type: "get",  
        dataType: "json",  
        url: "/userlist",    
        success: function (res) {
            updateTable(res)
        },  
        error: function (res) {
            console.log("查询失败")  
        }  
    });
}

function updateTable(res) {  
    if (res.code) {  
        var str = "";  
        var data = res.payload;  

        for (i in data) {  
            str += "<tr>" +  
            "<td>" + data[i].name + "</td>" +  
            "<td>" + data[i].phone + "</td>" +  
            "</tr>";  
        }  
        $("tbody").html(str);  
    } 
    
}

