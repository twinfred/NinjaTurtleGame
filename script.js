$(document).ready(function(){
    $('#beach').hover(function(){
        console.log('hover')
        $('#background').css("background-image", "url(dojo_arena_photos/beach.jpg)")},
        function(){
        $('#background').css("background-image", "none");
    })
    $('#planet').hover(function(){
        console.log('hover')
        $('#background').css("background-image", "url(dojo_arena_photos/earth.jpg)")},
        function(){
        $('#background').css("background-image", "none");
    })
    $('#dojo').hover(function(){
        console.log('hover')
        $('#background').css("background-image", "url(dojo_arena_photos/dojo.jpg)")},
        function(){
        $('#background').css("background-image", "none");
    })
    $('#forest').hover(function(){
        console.log('hover')
        $('#background').css("background-image", "url(dojo_arena_photos/forest.jpg)")},
        function(){
        $('#background').css("background-image", "none");
    })
    $('#snow').hover(function(){
        console.log('hover')
        $('#background').css("background-image", "url(dojo_arena_photos/snow.jpg)")},
        function(){
        $('#background').css("background-image", "none");
    })
    $('#matrix').hover(function(){
        console.log('hover')
        $('#background').css("background-image", "url(dojo_arena_photos/matrix.jpg)")},
        function(){
        $('#background').css("background-image", "none");
    })

    $("#beach").click(function() {
        $('button').hide(),
        $('#arenaTitle').hide(),
        $('#playerTitle').show(),
        $('.playerSelect').show(),
        $('#background').css("background-image", "url(dojo_arena_photos/beach.jpg)");
    })
})