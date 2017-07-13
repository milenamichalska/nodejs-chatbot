var socket = io();
var msg = "Hello bot!";
$('#msg').val(msg);

$('#msg').keyup(function(e){
    if(e.keyCode == 13)
    {
        msg = $('#msg').val();
        console.log(msg);

        $('#msg_area').append($('<li>').text(msg).addClass("message usermsg"));
        $('#msg_area').animate({ scrollTop: $(document).height() }, "slow");

        socket.emit('usermsg', msg);

        $('#msg').val('');
        return false;
    }
    else if(e.keyCode == 38){
        $('#msg').val(msg);
    }
});


socket.on('botmsg', function(msg){
    console.log(msg);
    $('#msg_area').append($('<li>').text(msg).addClass("message botmsg"));
    $('#msg_area').animate({ scrollTop: $(document).height() }, "slow");
});