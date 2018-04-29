$(document).ready(function(){

    // gallery video item height
    function video_height(){
        var _height = $('.gallery-image').height();
        $('.video-item').height(_height);
    };
    video_height();

    // stop playing video when popup closed
    $('.modal').on('hide.bs.modal', function(){

        var _frame = $(this).find('.frame-holder, .class-frame-holder'),
            _frame_content = _frame.html();

        _frame.find('iframe').remove();
        _frame.html(_frame_content);
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {

        var _frame = $(this).find('.class-frame-holder'),
            _frame_content = _frame.html();
        _frame.find('iframe').remove();
        _frame.html(_frame_content);
    });

    // responsive iframes
    $allVideos = $('.frame-holder iframe, .class-frame-holder iframe');

    // The element that is fluid width
    $fluidEl = $(".frame-holder, .class-frame-holder");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
        $(this)
            .data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

    // When the window is resized
    $(window).resize(function() {
        var newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

        // Kick off one resize to fix all videos on page load
    }).resize();



    // labels in form
    $('.contact-form-holder .form-control').on('focus', function(){

        if( !$(this).hasClass('active') ){
            $(this).addClass('active');
        }else{
            if( $(this).val() == '' ){
                $(this).removeClass('active');
            }
        }

    });

    $('.contact-form-holder .form-control').on('blur', function(){

        if( !$(this).hasClass('active') ){
            $(this).addClass('active');
        }else{
            if( $(this).val() == '' ){
                $(this).removeClass('active');
            }
        }

    });

    // slow scroll to anchor
    $('a[href^="#comments-block"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
    });

    //video block height
    function video_block_height(){
        var _height = $('.video-item').outerHeight(true),
            videos_quantity = 3, // quantity of videos without scroll
            max_height  = _height * videos_quantity;

        $('.video-block').css('height', max_height);
    };
    video_block_height();

    // check if anchor in url
    if(location.hash == '#comments-block') {
        setTimeout(function(){
            $('body').animate({
                scrollTop: $('#comments-block').offset().top}, 1000);
            return false;
        }, 1500);
    }

    // open modals to click on events
    $('.calendar .cal-event-week').on('click', function(){

        var modal_id = '#event'+$(this).data('event-id');

        $('.panel-body h1').html($(this).html());

        $(modal_id).modal('show');

    });

    $(window).resize(function(){
        video_height();
        video_block_height();
    });
});
