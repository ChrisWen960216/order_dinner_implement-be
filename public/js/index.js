$(function () {
  getList();
  $('#booking').click(function () {
    var name = $('#name').val();
    var uid = $('#uid').val();
    var phone = $('#phone').val();

    $('.cancel-hint').html('');

    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/users/add',
      data: {
        name: name,
        uid: uid,
        phone: phone
      },
      success: function (res) {
        switch (res.code) {
        case 0:
          $('.booking-hint').html('预定成功');
          $('.booking-hint').css('color', 'green');
          getList();
          $('#name').val('');
          $('#uid').val('');
          $('#phone').val('');
          break;
        case 1:
        case 2:
          $('.booking-hint').html(res.payload);
          $('.booking-hint').css('color', 'red');
          break;
        default:
          $('.booking-hint').html('服务器错误，请联系管理员');
          $('.booking-hint').css('color', 'red');
        }
      },
      error: function () {
        $('.booking-hint').html('服务器错误，请联系管理员');
        $('.booking-hint').css('color', 'red');
      }
    });
  });

  $('#cancel').click(function () {
    var name = $('#name').val();
    var uid = $('#uid').val();
    var phone = $('#phone').val();

    $('.booking-hint').html('');

    $.ajax({
      type: 'post',
      dataType: 'json',
      url: '/users/delete',
      data: {
        name: name,
        uid: uid,
        phone: phone
      },
      success: function (res) {
        switch (res.code) {
        case 0:
          $('.cancel-hint').html('取消预定成功');
          $('.cancel-hint').css('color', 'green');
          getList();
          $('#name').val('');
          $('#uid').val('');
          $('#phone').val('');
          break;
        case 1:
        case 2:
          $('.cancel-hint').html(res.payload);
          $('.cancel-hint').css('color', 'red');
          break;
        default:
          $('.cancel-hint').html('服务器错误，请联系管理员');
          $('.cancel-hint').css('color', 'red');
        }
      },
      error: function () {
        $('.cancel-hint').html('取消预定失败');
        $('.cancel-hint').css('color', 'red');
      }
    });
  });
});

function getList () {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: '/userlist',
    success: function (res) {
      updateTable(res);
    },
    error: function (res) {
      console.log('查询失败');
    }
  });
}

function updateTable (res) {
  if (!res.code) {
    var str = '';
    var data = res.payload;
    if (!res.timeStatus) {
      $('.info').html('<p>' + '受理时间为 ' + res.startTime + '-' + res.finshTime + '</p>');
    }
    for (var i in data) {
      str += '<tr>' +
        '<td>' + data[i].name + '</td>' +
        '<td>' + data[i].phone + '</td>' +
        '</tr>';
    }
    $('tbody').html(str);
  }
}
