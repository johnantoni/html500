

var checkUrl = function() {
    var hash = window.location.hash;
    if(hash.length <= 1) {
        hash = "#part-1";
    }
    $('#nav a').removeClass('current');
    $('#nav a[href="'+hash+'"]').addClass('current');

    $('.part').hide();
    $(hash).show();
}

$(document).ready(function(){
    var parts = $('.part');
    parts.hide();
    $(parts[0]).show();

    parts.each(function(i, e){
        var id = 'part-'+(i+1)
        var next = ((i+1) % (parts.length)) + 1;

        $(this).attr('id', id);
        $('<a>')
            .attr('href', '#'+id)
            .text($(this).find('h2').last().text())
            .appendTo($('#nav'));

        var next_text;
        if(next == 1) {
            next_text = '&laquo; Back to the start';
        } else {
            next_text = 'Next &raquo;';
        }

        $('<a>')
            .attr('href', '#part-'+next)
            .html(next_text)
            .appendTo(
                $('<div>')
                .addClass('next')
                .appendTo(parts[i])
            );
    });

    $('img').each(function(i, e){
        new $.museum($(this), {disable_url_hash: true});
    });

    window.onhashchange = checkUrl;
    checkUrl();
});

