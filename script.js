$(document).ready(function() {

  $(".available").click(function () {
      $(".form").css("display","block");
      $(".tableNumber").text("Table Number: " + this.innerHTML);
      $(".available").css("z-index","-20");

    $(".save").click(function(){
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

});
