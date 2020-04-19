   $(document).ready(function(){

    $(".js--scroll-to-features").click(function(){
        $("html,body").animate( {scrollTop: $(".js--features").offset().top}, 1000);
    });
    $(".js--scroll-to-partnership").click(function(){
        $("html,body").animate({scrollTop: $(".js--partnership").offset().top},1000)
    });
    $(".js--animated").waypoint(function(direction){
        $(".js--animated").addClass("animated fadeIn")
    },{
        offset: "70%"
    });
});

