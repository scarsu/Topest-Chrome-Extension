var $btn = $("<div id='topest-btn-chrome-plugin'>TOP</div>")
$btn.click(function(){
  var $content=null;
  var $notion=$(".notion-scroller")
  if($notion.length>0){
    $content = $notion
  }else{
    $content = $("html, body")
  }
  $content.animate({
    scrollTop: 0
  }, 200, null);
})
$("body").append($btn)