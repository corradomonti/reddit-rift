$('.entry').each(function () {
  var titleObj = $(this).find('a.title');
  var linkUrl = titleObj.attr('href');
  var isImgurImage = /(^.*imgur.com\/\w+).\w+/.exec(linkUrl);
  if (isImgurImage) linkUrl = isImgurImage[1];
	var commentsObj = $(this).find('a.comments');
	var commentsUrl = commentsObj.attr('href');
	var numComments = commentsObj.text().split(" ", 1)[0];
	var encodedTitle = encodeURIComponent(titleObj.text());
	var sep = linkUrl.indexOf("?") < 0 ? "?" : "&";
  var newUrl = linkUrl + sep +
			"reddit-url=" + commentsUrl +
			"&reddit-title=" + encodedTitle +
			"&reddit-ncom=" + numComments;
	titleObj.attr('data-href-url',     newUrl);
  titleObj.attr('href',              newUrl);
	titleObj.attr('data-outbound-url', newUrl);
});
