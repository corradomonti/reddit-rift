$('.entry').each(function () {
  var commentsUrl = $(this).find('a.comments').attr('href');
  var titleObject = $(this).find('a.title');
  var linkUrl = titleObject.attr('href');
  var encodedTitle = encodeURIComponent(titleObject.text());
  if (linkUrl.indexOf("reddit-tool") < 0) {
  		var sep = linkUrl.indexOf("?") < 0 ? "?" : "&";
  		titleObject.attr('href', linkUrl + sep + "reddit-url="+commentsUrl + "&reddit-title=" + encodedTitle);
  }
});
