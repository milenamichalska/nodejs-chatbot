var socket = io();

$('#msg').keyup(function(e){
    if(e.keyCode == 13)
    {
        var msg = $('#msg').val();
        console.log(msg);

        $('#msg_area').append($('<li>').text(msg).addClass("message usermsg"));
        $('#msg_area').animate({ scrollTop: $(document).height() }, "slow");

        socket.emit('usermsg', msg);

        $('#msg').val('');
        return false;
    }
});


socket.on('botmsg', function(msg){
    console.log(msg);
    $('#msg_area').append($('<li>').text(msg).addClass("message botmsg"));
    $('#msg_area').animate({ scrollTop: $(document).height() }, "slow");
});