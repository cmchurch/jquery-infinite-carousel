/** * @author StÃ©phane Roucheray  * @extends jquery */
/* Edits made by C. Church, 05-22-2013 */

jQuery.fn.carousel = function (previous, next, init) { //changed options variable to init to accept an initialized value - edit: C. Church, 05-22-2013
    var sliderList = jQuery(this).children()[0];
    if (sliderList) {
        var increment = jQuery(sliderList).children().outerWidth("true"),
            elmnts = jQuery(sliderList).children(),
            numElmts = elmnts.length,
            sizeFirstElmnt = increment,
            shownInViewport = Math.round(jQuery(this).width() / sizeFirstElmnt),
            firstElementOnViewPort = 1,
            isAnimating = false;
        for (i = 0; i < shownInViewport; i++) {
            jQuery(sliderList).css('width', (numElmts + shownInViewport) * increment + increment + "px");
            jQuery(sliderList).append(jQuery(elmnts[i]).clone());
        }
		
		//accept a value (init) that will set the carousel to initially display a particular pane [numbering starts at 0] - edit: C. Church, 05-22-2013
			if (init<numElmts) {
				firstElementOnViewPort = init + 1; 
				jQuery(sliderList).css('left', "-" + increment * init + "px");
			}
			
        jQuery(previous).click(function (event) {
            if (!isAnimating) {
                if (firstElementOnViewPort == 1) {
                    jQuery(sliderList).css('left', "-" + numElmts * sizeFirstElmnt + "px");
                    firstElementOnViewPort = numElmts;
                } else {
                    firstElementOnViewPort--;
                }
                jQuery(sliderList).animate({
                    left: "+=" + increment,
                    y: 0,
                    queue: true
                }, "swing", function () {
                    isAnimating = false;
                });
                isAnimating = true;
            }
        });
        jQuery(next).click(function (event) {
            if (!isAnimating) {
                if (firstElementOnViewPort > numElmts) {
                    firstElementOnViewPort = 2;
                    jQuery(sliderList).css('left', "0px");
                } else {
                    firstElementOnViewPort++;
                }
                jQuery(sliderList).animate({
                    left: "-=" + increment,
                    y: 0,
                    queue: true
                }, "swing", function () {
                    isAnimating = false;
                });
                isAnimating = true;
            }
        });
    }
};