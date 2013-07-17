attribution
========================

This is an edit of jquery-infinite-carousel by Stephane Roucheray (https://code.google.com/p/jquery-infinite-carousel/), which is licensed under GNU GPL v2.

Please see the initial documentation at https://code.google.com/p/jquery-infinite-carousel/ for how to impletement the carousel.


edits
========================

The modifications allow for one to set the carousel to a particular slide upon its initialization.

The specific implementation of this modification was as follows: a variable was passed via the URL, and this variable was then used to intialize the carousel to a particular slide. This allowed a user to keep the particular slide he or she was on throughout his/her navigation of the carousel.

Therefore, the url "foo/bar?slide=X" would initialize the slideshow to slide X. 


how to use
========================

You can set the carousel to a particular initial slide using,
	
       jQuery('#viewport').carousel('#simplePrevious', '#simpleNext', initial_slide);


Or you can parse the URL ( "foo/bar?slide=X" ) using Regex, 

      function parseURL (name) {
    			name = RegExp ('[?&]' + name.replace (/([[\]])/, '\\$1') + '=([^&#]*)');
  				return (window.location.href.match (name) || "0")[1];
			}

And then call the carousel.js using

  		jQuery(document).ready(function(){
			     var initial_slide = parseInt(parseURL("slide"));
			     jQuery('#viewport').carousel('#simplePrevious', '#simpleNext', initial_slide);	
			});
