
$(document).ready(function() {
function timeOut() {
    setTimeout($('.modal_container').slideDown(), 5000)
}
setTimeout(timeOut, 5000)
// Exit intent
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

// Exit intent trigger

addEvent(document, 'mouseout', function(evt) {

    if (evt.toElement == null && evt.relatedTarget == null) {
        $('.modal_container').slideDown();
    }

});

// Closing the Popup Box
$('.close').click(function(){
    $('.modal_container').slideUp();
});

$('#modalTextBox button').click(function(){
    if (!$('#modalTextBox input').val()) {
        alert('Please enter an email address!');
    } else {
        $('.modal_container').slideUp();
    }
})

});
