let photosPath = 'host:8080/uploads/';

$(document).ready(function () {
    prepareButtons()
});

function prepareButtons() {
    //галерея
    $('.catalog-element-media__thumb').on("click", imageOnClick)
    $('.catalog-element-media-next').on("click", nextImageOnClick)
    $('.catalog-element-media-prev').on("click", prevImageOnClick)

    //табы
    $('.tabs__list-item').on("click", tabsOnClick)
}

function imageOnClick() {
    $('.catalog-element-media__thumb').removeClass('active')
    $(this).addClass('active')
    let thisImgSrc = $(this).find('img').attr('src')
    $('#apartment-photo').attr('src', thisImgSrc)
}

function nextImageOnClick() {
    let last = $('.catalog-element-media__thumb.active')
    last.removeClass('active')
    let current = last.next()

    if (current.length<1) {
        current = $( "#catalog-element-media-thumbs-scroll .catalog-element-media__thumb:first-child" )
    }

    current.addClass('active')

    let thisImgSrc = current.find('img').attr('src')
    $('#apartment-photo').attr('src', thisImgSrc)
}

function prevImageOnClick() {
    let last = $('.catalog-element-media__thumb.active')
    last.removeClass('active')
    let current = last.prev()

    if (current.length<1) {
        current = $( "#catalog-element-media-thumbs-scroll .catalog-element-media__thumb:last-child" )
    }

    current.addClass('active')

    let thisImgSrc = current.find('img').attr('src')
    $('#apartment-photo').attr('src', thisImgSrc)
}

function tabsOnClick() {
    $('.tabs__item').removeClass('show')
    $('.tabs__list-toggle').removeClass('active')
    $(this).find('a').addClass('active')

    switch ($(this).find('a').attr('data-target')) {
        case 'detail-description':
            $('#detail-description').addClass('show')
            break

        case 'legal-services_':
            $('#legal-services_').addClass('show')
            break
    }
}