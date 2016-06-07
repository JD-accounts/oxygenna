// =require jquery/dist/jquery.js
// =require bootstrap/dist/js/bootstrap.js

!function ($) {
    $(function() {
        // scroll to hash links in sidebar
        $('.oxy-docs-sidebar-nav-link-js').click(function(event) {
            var hash = $(this).prop('hash');
            $.scrollTo(hash, 300, {
                offset: -$('.oxy-navbar').outerHeight()
            });
            event.preventDefault();
        })
    });
}(jQuery)
