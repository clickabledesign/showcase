var current_url = encodeURIComponent(location.href);

$("[data-share]").each(function() {
  var $this = $(this);
  var url = $(this).data("share");
  url += current_url;
  $this.attr("href",url);
  
  $this.click(function() {
    var url = $(this).attr("href")
    
    window.open(url, "_blank");
    return false;
  });
  
})