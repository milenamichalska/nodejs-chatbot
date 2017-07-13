var socket = io();
var msg = "Hello bot!";
$('#msg').val(msg);

var bubbles = function () {
    $('#msg_area').append('<p class="bubble-chat"> ' +
        '<div class="container-circle"> ' +
        '<div class="circle cc1" id="circle1">' +
        '</div> <div class="circle cc2" id="circle2">' +
        '</div> <div class="circle cc3" id="circle3">' +
        '</div> </div> </p>');
};
var scrollDown = function () {
    $('#msg_area').animate({ scrollTop: $(document).height() }, "slow");
}

$('#msg').keyup(function(e){
    if(e.keyCode == 13)
    {
        msg = $('#msg').val();
        console.log(msg);

        $('#msg_area').append($('<li>').text(msg).addClass("message usermsg"));
        scrollDown();
        bubbles();
        scrollDown();

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
    //remove bubbles
    $('#msg_area').append($('<li>').text(msg).addClass("message botmsg"));
    scrollDown();
});