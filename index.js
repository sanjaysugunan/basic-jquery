$("h1").css("color","red");
//selecting elements with jquery
$("h1");
$("button");
//manipulating styles with jquery
$("h1").css("color","red");
console.log($("h1").css("color"));
$("h1").css("font-size","5rem");
console.log($("h1").css("font-size"));
//but styling in javascript is weird 
//so we add or remove with style properties
$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("big-title margin-50");
$("h1").hasClass("margin-50");
//manipulating text in jquery
$("h1").text("Bye");
$("button").text("Don't click me");
$("h1").html("<em>Hey</em>");
//manipulating attributes in jquery
console.log($("img").attr("src"));
$("a").attr("href","https://www.yahoo.com");
console.log($("h1").attr("class"));
//adding event listners with jquery
$("h1").click(function (){
    $("h1").css("color","purple");
});
$("button").click(function(){
   $("h1").css("color","red");
});
$("input").keydown(function (event){
  console.log(event.key);
});
$("h1").on("mouseover", function (){
   $("h1").css("color","blue");
});
$("h1").on("click", function (){
    $("h1").css("color","brown");
 });

//adding and removing elements with jquery

$("h1").before("<button>new</button>");
$("h1").after("<button>new</button>");
$("h1").prepend("<button>new</button>");
$("h1").append("<button>new</button>");
$("h1 button").remove();

//websites animation with jquery


$("button").on("click", function(){
  $("h1").hide();
});
$("button").on("click", function(){
    $("h1").show();
  });
  $("button").on("click", function(){
    $("h1").toggle();
  });
  $("button").on("click", function(){
    $("h1").fadeOut();
  });
  $("button").on("click", function(){
    $("h1").fadeIn();
  });
  $("button").on("click", function(){
    $("h1").fadeToggle();
  });
  $("button").on("click", function(){
    $("h1").slideUp();
  });
  $("button").on("click", function(){
    $("h1").slideDown();
  });
  $("button").on("click", function(){
    $("h1").SlideToggle();
  });
  //animate can only take properties with a numeric value
  $("button").on("click", function(){
    $("h1").animate({opacity:0.5});
  });
  $("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
  });