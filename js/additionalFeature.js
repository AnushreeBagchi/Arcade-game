$("canvas").addClass("hide")

function gamePageStart(){
    player.x=200;
    player.x=200;
    $("canvas").toggleClass("hide")
    $(".playerList").toggleClass("hide")
    $(".reset").toggleClass("hide")
    $(".score").toggleClass("hide")
    $(".choosePlayer").toggleClass("hide")
}    

// Reset functionality
$(".reset").on("click",function (){
    
    gamePageStart();
   
});
// win page
function win(){
    player.x=200;
    player.y=400;
    player.scoreCount++;
    //$("canvas").toggleClass("hide")
    //$(".reset").toggleClass("hide")
   // $(".score").toggleClass("hide")
}

// Choose player functionality
$(".choosePlayer").on("click",function(){
    $(".playerList").removeClass("hide");
    $("#c1").on("click",function(){
        player.sprite='images/char-boy.png';
        player.render();
        gamePageStart();
    
    })
    $("#c2").on("click",function(){
        player.sprite="images/char-cat-girl.png";
        player.render();
        gamePageStart();

    })
    $("#c3").on("click",function(){
        player.sprite="images/char-horn-girl.png";
        player.render();
        gamePageStart();
    })
    $("#c4").on("click",function(){
        player.sprite="images/char-pink-girl.png";
        player.render();
        gamePageStart();
    })
    $("#c5").on("click",function(){
        player.sprite="images/char-princess-girl.png";
        player.render();
        gamePageStart();
    })
    
})

