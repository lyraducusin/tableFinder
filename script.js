$(document).ready(function() {

  var available;
  var name;
  var container;
  var userText;
  var phoneNumber;
  var numberParty;
  $(".available").click(function () {
    $("form").toggle(true);
    $(".tableNumber").text("Table Number: " + this.innerHTML);
    container = $(this);
  });


  $(".save").on("click",function(event){

    $("form").css("display","none");
    $(".available").css("z-index","0");
    var userName = $(".name").val();
    var userNum = $(".phoneNumber").val();
    var userGuestNum = $(".numberOfParty").val();
    console.log(userName, userNum, userGuestNum);
    container.attr("name", userName);
    container.addClass("reserved");
    container.removeClass("available");
    $("form").hide();
    $("tableNumber").remove(this.innerHTML);
    container.off("click");
    $(container).parent(".table").append("<div class ='hoverBox'>" + "<p> Name: " + userName + "</p>" + "<p> Party size: "  + userGuestNum + "</p><div>");

  //  $(".reserved").append("<div class='test'>" + userName + userNum + userGuestNum + "</div>")

  });

  //Should display the info for reservation
  $(".available").on("mouseenter", function(event) {
    if($(this).hasClass("reserved")){
      name = $(this).attr("name");
      userGuestNum = $(this).attr("numberOfParty");
      userNum = $(this).attr("phoneNumber");
      userText = $(this).text();
      $(this).text("");
    }
    }).on("mouseleave", function(event) {
    if($(this).hasClass("reserved")){
      $(this).text(userText);
    }
    });


  //Exit the icon
  $(".boxclose").on("click",function(){
    $("form").toggle();
  });
});
