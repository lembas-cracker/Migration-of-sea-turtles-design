// Alternative:
//
// $("[toggle-drawer]").on("click", function() {
//   toggleDrawer($(this).attr("toggle-drawer"));
// })

$( "#daily-btn" ).on( "click", function() {
  toggleDrawer("#drawer-1");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

$( "#burger-menu-btn" ).on( "click", function() {
  toggleDrawer("#drawer-3");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

$( "#mission-btn" ).on( "click", function() {
  toggleDrawer("#drawer-2");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

$( "#close-drawer-1" ).on("click", function() {
  toggleDrawer("#drawer-1");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

$( "#close-drawer-2" ).on("click", function() {
  toggleDrawer("#drawer-2");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

$(".opacity-drawer").on("click", function() {
  hideAllDrawers();
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

function toggleBodyOverflow() {
  var currentValue = $("body").css("overflow");

  if (currentValue === "hidden") {
    $("body").css("overflow", "auto");
  } else {
    $("body").css("overflow", "hidden");
  }
}

function toggleOpacityDrawer() {
  $(".opacity-drawer").stop().fadeToggle();
}
function toggleDrawer(whichDrawer) {
  $(whichDrawer).toggleClass( "drawer-closed" );
}

function hideAllDrawers() {
  $(".drawer").addClass("drawer-closed");
}

