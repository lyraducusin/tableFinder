$(document).ready(function() {

  $(".available").click(function () {
      $(".form").css("display","block");
      $(".tableNumber").text("Table Number: " + this.innerHTML);
      $(".available").css("z-index","-20");

    $(".submitInfo").click(function(){
        $(".form").css("display","none");
        $(".available").css("z-index","0");
      })
  });

  $(".available").mouseenter(function () {
    $(this).fadeTo(400, .25);
    });
    $(".available").mouseleave(function () {
    $(this).fadeTo(400, 1);
    });
    
    $("#exit").click(function(){
       $(".inputs").hide();

   });
});
