// =require jquery/dist/jquery.js
// =require bootstrap/dist/js/bootstrap.js

!function ($) {
    $(function() {
        // scroll to hash links in sidebar
        $('.oxy-docs-sidebar-nav__heading-js').click(function(event) {
            var $this = $(this);
            // scroll content to hash of heading
            var hash = $this.prop('hash');
            $.scrollTo(hash, 300, {
                offset: -$('.oxy-navbar').outerHeight(),
                axis: 'y'
            });

            // open / close sub menuis
            if($this.next().is('ul')) {
                $this.next().toggle();
            }
            event.preventDefault();
        })

        // CONTENT STYLING

        // table styles
        $('.oxy-docs-content table').each(function() {
            $(this).addClass('table table-bordered table-striped');
        });

        // code highlight
        hljs.configure({languages: ['css, javascript', 'html', 'scss']});
        $('.oxy-docs-content pre code').each(function(i, block) {
            var $this = $(this);
            var classes = $this.attr('class');
            if(undefined !== classes) {
                classes = classes.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    if(classes[i].indexOf('language-') !== -1) {
                        console.log(classes[i]);
                        $this.addClass(classes[i].replace('language-', ''));
                    }
                }
            }
                // $(this).addClass('javascript');
            hljs.highlightBlock(block);
        });

        $('.oxy-docs-content img').addClass('img-fluid center-block');

    });
}(jQuery)
