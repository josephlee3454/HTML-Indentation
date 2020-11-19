$(document).ready(function(){
$(".first-butt").click(function(){
    alert("hey how about them buttons");
})
$(".second-butt").click(function(){
    $("p").hide()
})
$(".third-butt").click(function(){
    $("p").show()
})

// $( ".fourth-button " ).toggle(function() {
//   alert( "i cant see th" );
// }, function() {
//   alert( "Second" );
// });
$(".fifth-butt").click(function(){
    $("header").slideUp();
  });

$(".sixth-button").click(function() { 
    $("header").slideToggle(); 
    }); 
$(".seventh-butt").click(function(){
    $("p").fadeIn();
});
$(".eigth-butt").click(function(){
    $("p").fadeOut();
});
$(".ninth-butt").click(function(){
    $("p").addClass("color");
});
$(".tenth-butt").click(function(){
    $("header").before("<h1>hello please work!</h1>");
});
$(".eleven-butt").click(function(){
    $("header").after("<h1>hello please work!</h1>");
});
$(".twelve-butt").click(function(){
    $("p").append("<p>hello its working<p>");
  });
$(".thirteen-butt").click(function(){
    $("p").html("well <b>It works </b>!")
  })
$(".fourteen-butt").click(function () {
    alert("title is: " + $("em").attr("title"));
});
$(".fifteen-butt").click(function () {
    // alert("Value: " + $(".first-header:text").val())
$(".first-header:text").val("GeeksforGeeks!"); 

});
$(".sixteen-butt").click(function(){
    $("p").text("Hello world!");

});

  });
