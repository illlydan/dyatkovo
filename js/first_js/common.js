document.addEventListener('DOMContentLoaded', function () {

    let hovers = document.querySelectorAll('.slider-hover')
    let slides = Array.from(document.querySelectorAll('.slide'))

    for (let i = 0; i < hovers.length; ++i) {
        let hover = hovers[i];

        hover.addEventListener('mouseenter', function (e) {

            let id = e.target.dataset.hover
            let slide = slides[id]

            slide.classList.toggle('show')
            hover.classList.toggle('showw')
        })

        hover.addEventListener('mouseleave', function (e) {
            let id = e.target.dataset.hover
            let slide = slides[id]

            slide.classList.toggle('show')
            hover.classList.toggle('showw')
        })

    }
})

$(document).ready(function () {
    function resizez() {
        if ($(window).width() >= 1024) {
            $('#search').attr("placeholder", "Р‘РѕР»РµРµ 2 000 РїСЂРµРґРјРµС‚РѕРІ РѕС‚Р»РёС‡РЅРѕР№ РјРµР±РµР»Рё");
        }
        else {
            $('#search').attr("placeholder", "РџРѕРёСЃРє");
        }
    };
    $(window).resize(function () {
        resizez();
    });
    resizez();
});

$('.js-accordeon .js-item').each(function (i, item) {
    var $item = $(item);
    var $trigger = $item.find('.js-title');
    var $content = $item.find('.js-content');

    $trigger.on('click', function (e) {
        e.preventDefault();

        $item.toggleClass('is-open');

        if ($item.hasClass('is-open')) {
            // РѕС‚РєСЂС‹РІР°РµС‚СЃСЏ
            // РјС‹ Р·РЅР°РµРј С‡С‚Рѕ Сѓ СЌР»РµРјРµРЅС‚Р° height: 0; Р·РЅР°С‡РёС‚ РјРѕР¶РµРј РїРѕР»СѓС‡РёС‚СЊ РІС‹СЃРѕС‚Сѓ СЃРєСЂРѕР»Р»Р°
            var contentHeight = $content[0].scrollHeight;
            $content.css('height', contentHeight);

            // РїРѕ РѕРєРѕРЅС‡Р°РЅРёРё Р°РЅРёРјР°С†РёРё РѕР±РЅСѓР»СЏРµРј СЃС‚РёР»Рё
            setTimeout(function () {
                $content.css('height', 'auto');
            }, 500); // РІСЂРµРјСЏ Р°РЅРёРјР°С†РёРё РІ css
        } else {
            // Р·Р°РєСЂС‹РІР°РµС‚СЃСЏ
            $content.css('height', $content.height());

            setTimeout(function () {
                $content.removeAttr('style');
            }, 1); // РјРёРЅРё-Р·Р°РґРµСЂР¶РєР° РґР»СЏ СЂРµРЅРґРµСЂРёРЅРіР° Р±СЂР°СѓР·РµСЂР°
        }
    });
});

$(document).ready(function () {
    $(".select a.set-1").click(function () {
        $(".select-options-set-1").toggle();
        $(".select-options-set-2 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });

    $(".select a.set-2").click(function () {
        $(".select-options-set-2").toggle();
        $(".select-options-set-1 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".select a.set-3").click(function () {
        $(".select-options-set-3").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".select a.set-4").click(function () {
        $(".select-options-set-4").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-5").hide();
    });
    $(".select a.set-5").click(function () {
        $(".select-options-set-5").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-4").hide();
    });

    $(".tag-container-1").click(function () {
        $(".select-options-set-1").toggle();
        $(".select-options-set-2 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".tag-container-2").click(function () {
        $(".select-options-set-2").toggle();
        $(".select-options-set-1 , .select-options-set-3, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".tag-container-3").click(function () {
        $(".select-options-set-3").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-4, .select-options-set-5").hide();
    });
    $(".tag-container-4").click(function () {
        $(".select-options-set-4").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-5").hide();
    });
    $(".tag-container-5").click(function () {
        $(".select-options-set-5").toggle();
        $(".select-options-set-1 , .select-options-set-2, .select-options-set-3, .select-options-set-4").hide();
    });

    /*   $('#option-1').click(function(){
           $('.tag-option-1').toggle();
           $(".set-1").css('display','none');
           $(".mid-input-1").css('border','none');
           $(".tag-container-1").css('opacity','1');
           $(".tag-container-1").css('border','1px solid #1F1F1F');
       });
   
       $('#option-2').click(function(){
           $('.tag-option-2').toggle();
       });
       $('#option-3').click(function(){
           $('.tag-option-3').toggle();
       });
   
       $('#option-4').click(function(){
           $('.tag-option-4').toggle();
       });
   
       $('#option-5').click(function(){
           $('.tag-option-5').toggle();
       });
   
       $('#option-6').click(function(){
           $('.tag-option-6').toggle();
       });*/
});

$(window).ready(function () {
    function resize() {
        if ($(window).width() >= 600) {

            // masonry
            var $grid = $('#grid-masonry').masonry({
                itemSelector: '.grid-masonry-item',
                percentPosition: true,
                transitionDuration: 0,
            });

            $grid.imagesLoaded().progress(function () {
                $grid.masonry();
            });
        }

        else {
            var $grid = $('.grid-masonry').masonry(masonryOptions);
            $grid.masonry('destroy'); // destroy
        }
    };
    $(window).resize(function () {
        resize();
    });
    resize();
});

const showCloseBtn = () => {
    const search = document.querySelector('.search'),
        input = document.getElementById('search'),
        closeBtn = document.querySelector('.search img');
    const searchResult = document.querySelector('.search-result');

    if (input.value.length > 0) {
        search.classList.add('active');
    } else {
        search.classList.remove('active');
    }

    if (window.innerWidth < 601) {
        if (input.value.length > 0) {
            searchResult.classList.add('active');
        } else {
            searchResult.classList.remove('active');
        }
    }

    closeBtn.addEventListener('click', () => {
        input.value = '';
        search.classList.remove('active');
        searchResult.classList.remove('active');
    })
}
function toggleCrumbs(e) {
    "A" !== event.target.nodeName && e.classList.add("open");
}
const togglrHeart = () => {
    const heart = document.querySelectorAll('.heart');

    heart.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
        })
    })
}
togglrHeart();
const togglrHeartBig = () => {
    const heartBig = document.querySelectorAll('.heart-big');

    heartBig.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
        })
    })
}
togglrHeartBig();
const slides_count = document.querySelectorAll(".product-slider .product-slider__slide");

$(document).ready(function () {
    if (document.querySelector(".js-burger")) {
        $(".js-burger").click(function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(".menu").removeClass("active");
                $("body").removeClass("overflow");
            } else {
                $(this).addClass("active");
                $(".menu").addClass("active");
                $("body").addClass("overflow");
            }
        });
    }
});

function siblingsEl(array, need) {
    var b = [];
    for (var i = array.length; i--;) {
        if (array[i].classList.contains(need)) {
            b.push(array[i]);
        }
    }
    return b;
}
function toggleSub(btn) {
    let li = siblingsEl(Array.from(btn.parentNode.parentNode.children), 'hasSub');
    if (window.innerWidth < 1025) {
        let hasSub = li;
        hasSub.forEach(el => {
            if (btn.parentNode !== el) {
                el.classList.remove('active');
            } else {
                el.classList.toggle('active');
            }
        });
    }
}
function closeSub(btn) {
    let parent = getClosest(btn, 'hasSub');
    parent.classList.remove('active');
}
function getClosest(el, tag) {
    do {
        if (el.classList.contains(tag)) {
            return el;
        }
    } while (el = el.parentNode);

    return null;
}

const openSearch = () => {
    const headerButtonsSearch = document.querySelectorAll('.header__buttons-search'),
        search = document.querySelector('.search');

    headerButtonsSearch.forEach(el => {
        el.addEventListener('click', () => {
            search.classList.add('active');
        })
    })
}
openSearch();

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
};
const enableScroll = () => {
    document.body.style.cssText = '';
};

const showfolter = () => {
    const filterBtn = document.querySelector('.filter-btn'),
        filter = document.querySelector('.catalog-main .catalog__left'),
        catalogFiltersBtn = document.querySelector('.catalog-main .catalog-filters__btn'),
        selectOptions = document.querySelectorAll('.catalog-main .select-options');

    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            filter.classList.add('active');
            filter.classList.add('b-show');
            disableScroll();
            selectOptions.forEach(el => {
                el.style.display = 'none';
            })
        })
    }
    if (catalogFiltersBtn) {
        catalogFiltersBtn.addEventListener('click', () => {
            filter.classList.remove('active');
            filter.classList.remove('b-show');
            enableScroll();
        })
    }
}
showfolter();

function showCount(currentElem) {
    currentElem.classList.toggle('active');
}

const heightFilter = () => {
    const filterHolder = document.querySelector('.catalog-main .catalog-filters__wrapper'),
        filterHeader = document.querySelector('.catalog-main .catalog__filters-title'),
        filterBtns = document.querySelector('.catalog-main .catalog-filters__btn-wrap');

    if (filterHolder) {
        if (window.innerWidth < 1056) {
            let wh = document.documentElement.clientHeight;
            let filterHolderH = wh - filterHeader.clientHeight - filterBtns.clientHeight - 32;
            filterHolder.style.height = filterHolderH + 'px';
        }
        if (window.innerWidth > 1056) {
            let wh = document.documentElement.clientHeight;
            let filterHolderH = wh - filterHeader.clientHeight - filterBtns.clientHeight - 346;
            filterHolder.style.height = filterHolderH + 'px';
        }
    }
}
heightFilter();

function clearFilter() {
    const selectWrap = document.querySelectorAll('.select-wrap');
    selectWrap.forEach(el => {
        const selectWrapClose = el.querySelector('.select-wrap-close');
        selectWrapClose.addEventListener('click', () => {
            el.classList.remove('active');
        })
    })
}
clearFilter();

function widthInnerText() {
    const tagTriggerContainer = document.querySelectorAll('.tag-trigger-container');

    tagTriggerContainer.forEach(el => {
        let selectInputs = el.querySelector('.mid-input');
        let tagContainer = el.querySelector('.tag-container').offsetWidth;
        selectInputs.style.width = tagContainer + 'px';
    })
}

function openSelect(currentElem) {
    currentElem.classList.toggle('active');

    let setText = currentElem.querySelector('.set');
    const checkboxes = currentElem.querySelectorAll('.input-holder input');
    const labelTexts = currentElem.querySelectorAll('.input-holder label');
    const selectWrapClose = currentElem.querySelector('.select-wrap-close');
    const selectWrapArr = currentElem.querySelector('.select-wrap-arr');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', () => {
            if (Array.from(checkboxes).every(element => !element.checked)) {
                setText.innerHTML = labelTexts[0].innerHTML;
                setText.classList.remove('black');
                selectWrapClose.classList.remove('active');
                selectWrapArr.style.display = 'flex';
            }
            if (checkboxes[i].checked) {
                setText.classList.add('black');
                selectWrapClose.classList.add('active');
                selectWrapArr.style.display = 'none';
            }
            if (checkboxes[0].checked) {
                setText.innerHTML = labelTexts[0].innerHTML;
            }
            if (checkboxes[1].checked) {
                setText.innerHTML = labelTexts[1].innerHTML;
            }
            if (checkboxes[0].checked && checkboxes[1].checked) {
                setText.innerHTML = labelTexts[0].innerHTML + ', ' + labelTexts[1].innerHTML;
            }
        })
    }
    selectWrapClose.addEventListener('click', () => {
        setText.innerHTML = labelTexts[0].innerHTML;
        setText.classList.remove('black');
        selectWrapClose.classList.remove('active');
        selectWrapArr.style.display = 'flex';
        checkboxes.forEach(el => {
            el.checked = false;
        })
    })
}

