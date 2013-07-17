attribution
========================

This is an edit of jquery-infinite-carousel by Stephane Roucheray (https://code.google.com/p/jquery-infinite-carousel/), which is licensed under GNU GPL v2.

Please see the initial documentation at https://code.google.com/p/jquery-infinite-carousel/ for how to impletement the carousel.


edits
========================

The edits for one to set the carousel to a particular slide upon initialization of the carousel.

The specific implementation of this edit was to allow a variable to be passed via the URL that could be used to intialize the carousel to a particular slide.

Therefore, the url "foo/bar?slide=X" would initialize the slideshow to slide X. This allows a user to keep consistent the particular slide he or she was on throughout his/her navigation of the carousel.


how to use
========================

You can set the carousel to a particular initial slide using,
	
       jQuery('#viewport').carousel('#simplePrevious', '#simpleNext', initial_slide);


Or you can parse the URL using Regex, 

      function parseURL (name) {
    			name = RegExp ('[?&]' + name.replace (/([[\]])/, '\\$1') + '=([^&#]*)');
  				return (window.location.href.match (name) || "0")[1];
			}

And then call the carousel.js using

  		jQuery(document).ready(function(){
				   var numTurns = parseInt(parseURL("subcat"));
			     jQuery('#viewport').carousel('#simplePrevious', '#simpleNext', numTurns);	
			});
