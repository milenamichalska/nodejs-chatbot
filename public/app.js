var socket = io();

var send = function(){

    var msg = $('#msg').val();
    console.log(msg);

    $('#msg_area').append($('<li>').text(msg));

    socket.emit('usermsg', msg);

    $('#msg').val('');
    return false;
};

socket.on('botmsg', function(msg){
    console.log(msg);
    $('#msg_area').append($('<li>').text(msg));
});