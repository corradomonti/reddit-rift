$('.entry').each(function () {
  var titleObj = $(this).find('a.title');
  var linkUrl = titleObj.attr('href');
  if (linkUrl.indexOf("reddit-tool") < 0) { // Just to be on the safe side
  		var commentsObj = $(this).find('a.comments');
		var commentsUrl = commentsObj.attr('href');
		var numComments = commentsObj.text().split(" ", 1)[0];
		var encodedTitle = encodeURIComponent(titleObj.text());
  		var sep = linkUrl.indexOf("?") < 0 ? "?" : "&";
  		titleObj.attr('href', linkUrl + sep + 
  				"reddit-url=" + commentsUrl +
  				"&reddit-title=" + encodedTitle +
  				"&reddit-ncom=" + numComments);
  }
});
