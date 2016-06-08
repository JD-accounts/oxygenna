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

        // table styles
        $('table').each(function() {
          $(this).addClass('table table-bordered table-striped');
        });

        // code highlight
        hljs.configure({languages: ['css, javascript', 'html', 'scss']});
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });

    });
}(jQuery)
