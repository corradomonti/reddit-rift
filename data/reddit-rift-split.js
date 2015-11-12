if (window.document == document && !document.addedredditheader) {
	document.addedredditheader = true;
	// Set p to all the GET parameters beginning with 'reddit-'
	var p = window.location.href.substring(window.location.href.lastIndexOf("?")+1).split("&").filter(function(s) {return s.startsWith("reddit-");});
	// If there are some...
	if (p) {
		// Put them in a map
		p = p.reduce(function(mapped, elem) {
			kv = elem.split("=");
			mapped[kv[0]] = kv[1];
			return mapped;
		}, {} );
		// Let's build my small header and put it in the DOM
		var myHeader = "<div class='reddit-header'><a href="+p['reddit-url']+">"+decodeURIComponent(p['reddit-title'])+"</a></div>";
		document.body.insertAdjacentHTML("afterbegin", myHeader);
	} else console.log("No reddit parameters found.");
}
