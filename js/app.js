

function slider() {
    const swiper = new Swiper('.slider-content-one', {
        slidesPerView: 1,
        speed: 800,
        navigation: {
            nextEl: '.slider-content__next',
            prevEl: '.slider-content__prev',
        },
        thumbs: {
            swiper: {
                el: '.content__colors',
                slidesPerView: 2,
                breakpoints: {
                    1: {
                        slidesPerView: 1.3,
                        spaceBetween: 12, 
                    },
        
                    577: {
                        slidesPerView: 1.3,
                        spaceBetween: 0, 
                    },
                    767: {
                        slidesPerView: 2, 
                    },
                },
            }
            
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 16,
                pagination: {
                    el: '.slider-content__pagination',
                    type: 'bullets',
                    clickable: true,
                  }, 
            },

            577: {
                slidesPerView: 1,
                spaceBetween: 0, 
            },
            768: {
                slidesPerView: 1, 
            },
        },
    });
}
slider()

function sliderSecond() {
    const swiper = new Swiper('.slider-content-two', {
        slidesPerView: 1,
        speed: 800,
        navigation: {
            nextEl: '.slider-content__next',
            prevEl: '.slider-content__prev',
        },
        thumbs: {
            swiper: {
                el: '.content__colors',
                slidesPerView: 3,
                breakpoints: {
                    1: {
                        slidesPerView: 1.3,
                        spaceBetween: 12, 
                    },
        
                    577: {
                        slidesPerView: 2,
                        spaceBetween: 0, 
                    },
                    768: {
                        slidesPerView: 2, 
                    },
                },
            }
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 16,
                pagination: {
                    el: '.slider-content__pagination',
                    type: 'bullets',
                    clickable: true,
                  }, 
            },

            577: {
                slidesPerView: 1,
                spaceBetween: 0, 
            },
            768: {
                slidesPerView: 1, 
            },
        },
    });
}
sliderSecond()

function sliderProduct() {
    const swiper = new Swiper('.product-inner__slider', {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 800,
        thumbs: {
            swiper: {
                el: '.product-inner__thumb',
                slidesPerView: 6,
                direction: 'vertical',
            }
        },
        pagination: {
            el: '.product-inner__pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 16,
                direction: 'horizontal',
            },

            577: {
                slidesPerView: 1,
                spaceBetween: 32,
                direction: 'horizontal',
            },
            990: {
                slidesPerView: 1,
                spaceBetween: 32, 
                direction: 'vertical',
            },
        },
    });
} 
sliderProduct()

function sliderRow() {
     
    const swiper = new Swiper('.row-content__slider', {
        
        slidesPerView: 4,
        spaceBetween: 32,
        speed: 800,
        pagination: {
            el: '.row-slider__pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.row-slider__next',
            prevEl: '.row-slider__prev',
        },
        breakpoints: {

            1: {
                slidesPerView: 1.2,
                spaceBetween: 16
            },

            577: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
        },
    }); 
    
}
sliderRow()

function sliderRow2() {

    if (window.innerWidth <= 768) {
        const wrapper = document.querySelectorAll('.row-slider__swiper')

        wrapper.forEach(el => {
            new Swiper(el, {
                slidesPerView: 4,
                spaceBetween: 12,
                speed: 800,
                pagination: {
                    el: '.swiper-slider__pagination',
                    type: 'progressbar',
                },
                breakpoints: {

                    1: {
                        slidesPerView: 1.2,
                        spaceBetween: 12
                    },

                    577: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                },
            });
        });

    }
}
sliderRow2()

function sliderPopularProduct() {
    const swiper = new Swiper('.slider-popular-products', {
        slidesPerView: 4,
        spaceBetween: 32,
        speed: 800,
        navigation: {
            nextEl: '.popular-slider__next',
            prevEl: '.popular-slider__prev',
        },
        pagination: {
            el: '.popular-slider__pagination',
            type: 'progressbar',
        },
        breakpoints: {

            1: {
                slidesPerView: 1.2,
                spaceBetween: 12
            },

            577: {
                slidesPerView: 2,
                spaceBetween: 32,
            }, 
            769: {
                slidesPerView: 2.5,
                spaceBetween: 32,
            }, 
            991: {
                slidesPerView: 3.5,
                spaceBetween: 32,
            }, 
            1100: {
                slidesPerView: 4,
                spaceBetween: 32,
            }, 
        },
    });
}
sliderPopularProduct()

function sliderSimilarProduct() {
    const swiper = new Swiper('.slider-similar-products', {
        slidesPerView: 4,
        spaceBetween: 32,
        speed: 800,
        navigation: {
            nextEl: '.similar-slider__next',
            prevEl: '.similar-slider__prev',
        },
        pagination: {
            el: '.popular-slider__pagination',
            type: 'progressbar',
        },
        breakpoints: {

            1: {
                slidesPerView: 1.2,
                spaceBetween: 12
            },

            577: {
                slidesPerView: 2,
                spaceBetween: 32,
            }, 
            769: {
                slidesPerView: 2.5,
                spaceBetween: 32,
            }, 
            991: {
                slidesPerView: 3.5,
                spaceBetween: 32,
            }, 
            1100: {
                slidesPerView: 4,
                spaceBetween: 32,
            }, 
        },
    });
}
sliderSimilarProduct()


function sliderRowSecond() {
    const swiper = new Swiper('.inner-slider', {
        slidesPerView: 3,
        spaceBetween: 32,
        speed: 800,
        navigation: {
            nextEl: '.row-content__next',
            prevEl: '.row-content__prev',
        },
        pagination: {
            el: '.row-inner__pagination',
            type: 'progressbar',
        },
        breakpoints: {

            1: {
                slidesPerView: 1.2,
                spaceBetween: 12
            },

            577: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    });
}
sliderRowSecond()


function sliderQuickViewProduct() {
    const swiper = new Swiper('.quick-box__left', {
        slidesPerView: 1,
        spaceBetween: 32,
        speed: 900,
        navigation: {
            nextEl: '.quick-left__next',
            prevEl: '.quick-left__prev',
        },
        pagination: {
            el: '.quick-left__pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return current + ' из ' + (total);
            }
        },
    });
}
sliderQuickViewProduct()

function matherialTabs() {
    const tabBtn = document.querySelectorAll('.matherials-controls__item'),
        tabPanel = document.querySelectorAll('.matherials-panel');

    tabBtn.forEach(item => {
        item.addEventListener('click', selectedTab)
    });

    function selectedTab() {
        tabBtn.forEach(item => {
            item.classList.remove('matherials-active')
        });
        this.classList.add('matherials-active')
        let currentTab = this.getAttribute('data-tab');
        showTabPanel(currentTab);

    }
    function showTabPanel(activeTab) {
        tabPanel.forEach(item => {
            item.classList.contains(activeTab) ? item.classList.add('panel-active') : item.classList.remove('panel-active');
        });
    }
}
matherialTabs()


function customSelect(openSelectBtn, wrapOptions, wrapSelect, selectTitletext, selectField, selectOptionitems, selectClear) {
    const btnSelect = document.querySelectorAll(openSelectBtn),
        wrapOptionSelect = document.querySelectorAll(wrapOptions),
        clearbtn = document.querySelectorAll(selectClear);

    btnSelect.forEach(item => {
        item.addEventListener('click', openSelect)
    });
    function openSelect() {
        btnSelect.forEach(item => {
            // item.closest(wrapSelect).classList.remove('select-active');
        });
        this.closest(wrapSelect).classList.toggle('select-active');
        this.closest('.sort-item__title').style.background = "#1f1f1f";
        this.closest('.sort-item__title').querySelector('.sort-title__text').style.color = '#fff';
        let wrapSelectTitle = this.closest(wrapSelect).querySelector(selectTitletext);
        let fieldSelect = this.closest(wrapSelect).querySelector(selectField);
        let optionSelect = (this.closest(wrapSelect).querySelectorAll(selectOptionitems))

        optionSelect.forEach(item => {
            item.addEventListener('click', selectedOption)
        });
        function selectedOption() {
            optionSelect.forEach(item => {
                item.classList.remove('selected-option')
            });
            this.classList.add('selected-option')
            wrapSelectTitle.innerText = this.innerText;
            fieldSelect.value = this.innerText;
            this.closest('.objects-sort__item').classList.remove('select-active');
            this.closest('.objects-sort__item').querySelector('.sort-item__title').style.background = '#1f1f1f';
            this.closest('.objects-sort__item').querySelector('.sort-item__title .sort-title__text').style.color = '#fff';
            this.closest('.objects-sort__item').querySelector('.sort-title__clear').style.display = 'flex';
        }
    }
    clearbtn.forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.sort-item__title').style.background = "transparent";
            item.closest('.sort-item__title').querySelector('.sort-title__text').style.color = "#1f1f1f";
            item.closest('.objects-sort__item').classList.remove('select-active');
            item.style.display = 'none';
            item.closest('.sort-item__title').querySelector('.sort-title__text').innerText = item.getAttribute('data-default');
        })
    });
}
customSelect('.sort-title__text', '.sort-item__list', '.objects-sort__item', '.sort-title__text', '.sort-title__field', '.sort-list__item', '.sort-title__clear')


function openCommentTextarea() {
    const btn = document.querySelector('.form-inner__btn'),
        textArea = document.querySelector('.form-order__message');
    if (btn) {
        btn.addEventListener('click', () => {
            textArea.classList.toggle('message-open');
        });

    }
}
openCommentTextarea()


function getFileName() {
    const file = document.querySelector('.form-file__field');
    if (file) {
        file.addEventListener('change', () => {
            document.querySelector('.form-file__text').innerText = file.files[0].name;
        })
    }
}
getFileName()


function productSpoiler() {
    const spoilerOpenBtn = document.querySelectorAll('.product-spoiler__title')

    spoilerOpenBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.product-left__spoiler').classList.toggle('spoiler-active')
        })
    });
}
productSpoiler()


function sizeSilected() {
    const btnItem = document.querySelectorAll('.category-wrap__item');

    for (let i = 0; i < btnItem.length; i++) {
        let test = btnItem[i].querySelectorAll('.category-sizes__item');

        test.forEach(item => {
            item.addEventListener('click', selected)
        });
        function selected() {
            test.forEach(item => {
                item.classList.remove('size-selected')
            });
            this.classList.add('size-selected')
        }
    }
}
sizeSilected()


function hoverSearchBlock() {
    const searchField = document.querySelector('.middle-search__field'),
        searchFieldWrap = document.querySelector('.middle-header__search');

    searchField.addEventListener('mouseover', () => {
        searchFieldWrap.classList.add('hover-search');
    })
    searchField.addEventListener('mouseout', () => {
        searchFieldWrap.classList.remove('hover-search');
    })
}
hoverSearchBlock()


function openSearchResultPanel() {
    const field = document.querySelector('.search-inner__field'),
        clearValueInputBtn = document.querySelector('.search-inner__clear');

    if (field) {
        field.addEventListener('input', () => {

            let getValueInput = field.value;

            if (getValueInput != '') {
                document.querySelector('.content-search__inner').classList.add('search-result-active');
            } else {
                document.querySelector('.content-search__inner').classList.remove('search-result-active');
            }

        });
    }

    if (clearValueInputBtn) {
        clearValueInputBtn.addEventListener('click', () => {
            field.value = '';
            document.querySelector('.content-search__inner').classList.remove('search-result-active');

        });
    }


}
openSearchResultPanel()


function salonTab() {
    const tabBtn = document.querySelectorAll('.tabs-inner__item'),
        tabPanel = document.querySelectorAll('.panel-content__tab');

    if (tabBtn) {
        tabBtn.forEach(item => {
            item.addEventListener('click', selectedTab)
        });

        function selectedTab() {
            tabBtn.forEach(item => {
                item.classList.remove('tabs-item-active')
            });
            this.classList.add('tabs-item-active')
            let currentTab = this.getAttribute('data-tab');
            activePanelTab(currentTab);
        }

        function activePanelTab(tabCurrent) {
            tabPanel.forEach(item => {
                if (item.classList.contains(tabCurrent)) {
                    item.classList.add('active-tab');
                }
                else {
                    item.classList.remove('active-tab');
                }
            });
        }
    }

}
salonTab()


function modalTabCity() {
    const tabBtnItem = document.querySelectorAll('.modal-tab__item'),
        modalTabCityPanel = document.querySelectorAll('.modal-panel__item');
    if (tabBtnItem) {
        tabBtnItem.forEach(item => {
            item.addEventListener('click', selectedTab);
        });

        function selectedTab() {
            tabBtnItem.forEach(item => {
                item.classList.remove('active-modal-tab');
            });
            this.classList.add('active-modal-tab');
            let currenTabitem = this.getAttribute('data-modal-tab');

            selectedModalTabPanel(currenTabitem);
        }

        function selectedModalTabPanel(tabItem) {
            modalTabCityPanel.forEach(item => {
                if (item.classList.contains(tabItem)) {
                    item.classList.add('modal-panel-active');
                } else {
                    item.classList.remove('modal-panel-active');
                }
            });
        }
    }
}
modalTabCity()


function searchModalcity() {
    const modalPanel = document.querySelector('.modal-panel'),
        modalSearchResult = document.querySelector('.modal-result'),
        modalSearchInput = document.querySelector('.search-wrap__field'),
        modalSearchClear = document.querySelector('.search-wrap__clear'),
        modalSearchBtn = document.querySelector('.search-wrap__btn'),
        modalOpenBtn = document.querySelector('.item-location'),
        modalCloseBtn = document.querySelector('.modal-body__close'),
        modalBody = document.querySelector('.modal-city');



    if (modalSearchInput) {
        modalOpenBtn.addEventListener('click', () => {
            modalBody.classList.add('active-modal');
            document.body.classList.add('no-scroll');
        });
        modalCloseBtn.addEventListener('click', () => {
            modalBody.classList.remove('active-modal');
            document.body.classList.remove('no-scroll');
        });


        modalSearchInput.addEventListener('input', () => {

            let getModalSearchValue = modalSearchInput.value;



            if (getModalSearchValue != '') {

                modalPanel.classList.remove('panel-show');
                modalSearchResult.classList.add('panel-show');
                modalSearchBtn.classList.remove('btn-show');
                modalSearchClear.classList.add('btn-show');
                let arrModalSearchValue = getModalSearchValue.split('')

            } else {

                modalPanel.classList.add('panel-show');
                modalSearchResult.classList.remove('panel-show');
                modalSearchBtn.classList.add('btn-show');
                modalSearchClear.classList.remove('btn-show');

            }

        });

        modalSearchClear.addEventListener('click', () => {
            modalSearchInput.value = '';
            modalPanel.classList.add('panel-show');
            modalSearchResult.classList.remove('panel-show');
            modalSearchBtn.classList.add('btn-show');
            modalSearchClear.classList.remove('btn-show');
        })

    }
}
searchModalcity()


function modalQuickViewModal() {
    const modalBody = document.querySelector('.quick-view'),
        modalOpenBtn = document.querySelectorAll('.item-shop'); // Заменить на нужный класс

    modalOpenBtn.forEach(element => {
        element.addEventListener('click', () => {
            modalBody.classList.add('active-modal')
            document.body.classList.add('no-scroll')
        })
    });
    modalBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('active-modal')) {
            modalBody.classList.remove('active-modal')
            document.body.classList.remove('no-scroll')
        }

    });

}
modalQuickViewModal()


function hoverGetImgDropDownNavigation() {
    const itemHover = document.querySelectorAll('.list-item__link'),
        imgWrap = document.querySelector('.drop-item__img img'),
        titleCollaction = document.querySelector('.drop-text__title'),
        textCollaction = document.querySelector('.drop-text__text');

    itemHover.forEach(item => {
        item.addEventListener('mouseover', () => {
            let getItemImg = item.getAttribute('data-img');
            let getItemTitle = item.innerText;
            let getItemText = item.closest('.drop-inner__item').querySelector('.drop-item__title').getAttribute('data-title');
            imgWrap.src = getItemImg;
            titleCollaction.innerText = getItemTitle;
            textCollaction.innerText = getItemText;
        })
    });

}
hoverGetImgDropDownNavigation()


function modalRegistrationSalon(getOpenBtn, getCloseBtn, getModal) {
    const openBtn = document.querySelector(getOpenBtn),
        closeBtn = document.querySelector(getCloseBtn),
        modalBody = document.querySelector(getModal);

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            modalBody.classList.add('active-modal');
            document.body.classList.add('no-scroll');
        })
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modalBody.classList.remove('active-modal');
            document.body.classList.remove('no-scroll');
        })
    }

    const btnSelected = () => {
        const btnItem = document.querySelectorAll('.order-wrap__item');

        if (btnItem) {
            btnItem.forEach(item => {
                item.addEventListener('click', selectedItem)
            });
            function selectedItem() {

                btnItem.forEach(item => {
                    item.classList.remove('order-item-active')
                });

                this.classList.add('order-item-active')
            }
        }
    }
    btnSelected();


}
modalRegistrationSalon('.registration-salon-btn', '.close-order-salon', '.order-salon-modal');
modalRegistrationSalon('.order-size', '.close-order-size', '.order-size-modal');

function select(selectBtn, selectOptions) {
    const select = document.querySelectorAll(selectBtn);

    select.forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.order-row__select').classList.toggle('select-open');
        })
    });

    const selectOptionItem = document.querySelectorAll(selectOptions);
    for (let i = 0; i < selectOptionItem.length; i++) {
        let optionItem = selectOptionItem[i].querySelectorAll('.select-body__option')

        optionItem.forEach(item => {
            item.addEventListener('click', selected)
        })
        function selected() {
            optionItem.forEach(item => {
                item.classList.remove('option-selected');
            })
            this.classList.add('option-selected');
            this.closest('.order-row__select').querySelector('.order-header__title').innerText = this.innerText;
            this.closest('.order-row__select').querySelector('.order-header__input').value = this.innerText;
            if (document.querySelector('.option-time')) {
                document.querySelector('.order-btn__time').innerText = this.innerText;

            }
        }
    }

} 
select('.order-salon-modal .order-header__title', '.order-salon-modal .order-row__select');
select('.order-size-modal .order-header__title', '.order-size-modal .order-row__select');


function openCalendarBody() {
    const openBtn = document.querySelectorAll('.order-header__date');

    if (openBtn) {
        openBtn.forEach(element => {
            element.addEventListener('click', () => {
                element.closest('.order-row__date').classList.toggle('date-body-open');
            })
        });
    }
}
openCalendarBody()

function selectedThumbImg() {
    const productItem = document.querySelectorAll('.category-wrap__item');

    for (let i = 0; i < productItem.length; i++) {
        let img = productItem[i].querySelector('.category-item__img img');
        let thumbWrap = productItem[i].querySelectorAll('.category-item__row');

        // console.log(thumbWrap);
        thumbWrap.forEach(item => {
            let thumb = item.querySelectorAll('.category-row__thumb');
            thumb.forEach(element => {
                element.addEventListener('click', selectedImg)
            });
            thumb.forEach(element => {
                element.addEventListener('mouseover', selectedImg)
            });
            function selectedImg() {
                thumb.forEach(element => {
                    element.classList.remove('thumb-active');
                });
                this.classList.add('thumb-active');
                let imgProduct = this.closest('.category-wrap__item').querySelector('.category-item__img img');
                imgProduct.src = this.querySelector('img').src
            }
        });
    }
}
selectedThumbImg()

function vewiModalPageList() {
    const btn = document.querySelector('.pages__btn'),
        bodyModal = document.querySelector('.list-pages')

    btn.addEventListener('click', () => {
        console.log(btn);
        bodyModal.classList.toggle('active-list-page')
        btn.classList.toggle('btn-list-active')
        if (btn.classList.contains('btn-list-active')) {
            btn.textContent = 'Свернуть'
        } else {
            btn.textContent = 'Список страниц'
        }
    })
}
vewiModalPageList()

function sliderHomePage() {
    (() => {
        "use strict";
        let e = (e, t = 500, s = 0) => {
            e.classList.contains("_slide") ||
                (e.classList.add("_slide"),
                    (e.style.transitionProperty = "height, margin, padding"),
                    (e.style.transitionDuration = t + "ms"),
                    (e.style.height = `${e.offsetHeight}px`),
                    e.offsetHeight,
                    (e.style.overflow = "hidden"),
                    (e.style.height = s ? `${s}px` : "0px"),
                    (e.style.paddingTop = 0),
                    (e.style.paddingBottom = 0),
                    (e.style.marginTop = 0),
                    (e.style.marginBottom = 0),
                    window.setTimeout(() => {
                        (e.hidden = !s),
                            !s && e.style.removeProperty("height"),
                            e.style.removeProperty("padding-top"),
                            e.style.removeProperty("padding-bottom"),
                            e.style.removeProperty("margin-top"),
                            e.style.removeProperty("margin-bottom"),
                            !s && e.style.removeProperty("overflow"),
                            e.style.removeProperty("transition-duration"),
                            e.style.removeProperty("transition-property"),
                            e.classList.remove("_slide");
                    }, t));
        },
            t = (e, t = 500, s = 0) => {
                if (!e.classList.contains("_slide")) {
                    e.classList.add("_slide"),
                        (e.hidden = !e.hidden && null),
                        s && e.style.removeProperty("height");
                    let l = e.offsetHeight;
                    (e.style.overflow = "hidden"),
                        (e.style.height = s ? `${s}px` : "0px"),
                        (e.style.paddingTop = 0),
                        (e.style.paddingBottom = 0),
                        (e.style.marginTop = 0),
                        (e.style.marginBottom = 0),
                        e.offsetHeight,
                        (e.style.transitionProperty = "height, margin, padding"),
                        (e.style.transitionDuration = t + "ms"),
                        (e.style.height = l + "px"),
                        e.style.removeProperty("padding-top"),
                        e.style.removeProperty("padding-bottom"),
                        e.style.removeProperty("margin-top"),
                        e.style.removeProperty("margin-bottom"),
                        window.setTimeout(() => {
                            e.style.removeProperty("height"),
                                e.style.removeProperty("overflow"),
                                e.style.removeProperty("transition-duration"),
                                e.style.removeProperty("transition-property"),
                                e.classList.remove("_slide");
                        }, t);
                }
            },
            s = (s, l = 500) => (s.hidden ? t(s, l) : e(s, l));
        // setTimeout(function () {
        //     let e = document.querySelector(".choise__toggle");
        //     if (e) {
        //         let t = document.querySelector("._tab-active");
        //         (e.style.width = `${t.offsetWidth}px`),
        //             (e.style.transform = `translateX(${t.offsetLeft}px)`);
        //     }
        // }, 500);
        class l {
            constructor(e, t = null) {
                if (
                    ((this.config = Object.assign({ init: !0, logging: !1 }, e)),
                        (this.selectClasses = {
                            classSelect: "select",
                            classSelectBody: "select__body",
                            classSelectTitle: "select__title",
                            classSelectValue: "select__value",
                            classSelectLabel: "select__label",
                            classSelectInput: "select__input",
                            classSelectText: "select__text",
                            classSelectLink: "select__link",
                            classSelectOptions: "select__options",
                            classSelectOptionsScroll: "select__scroll",
                            classSelectOption: "select__option",
                            classSelectContent: "select__content",
                            classSelectRow: "select__row",
                            classSelectData: "select__asset",
                            classSelectDisabled: "_select-disabled",
                            classSelectTag: "_select-tag",
                            classSelectOpen: "_select-open",
                            classSelectActive: "_select-active",
                            classSelectFocus: "_select-focus",
                            classSelectMultiple: "_select-multiple",
                            classSelectCheckBox: "_select-checkbox",
                            classSelectOptionSelected: "_select-selected",
                        }),
                        (this._this = this),
                        this.config.init)
                ) {
                    const e = t
                        ? document.querySelectorAll(t)
                        : document.querySelectorAll("select");
                    e.length
                        ? (this.selectsInit(e),
                            this.setLogging(`Проснулся, построил селектов: (${e.length})`))
                        : this.setLogging("Нет ни одного select. Сплю...zzZZZzZZz...");
                }
            }
            getSelectClass(e) {
                return `.${e}`;
            }
            getSelectElement(e, t) {
                return {
                    originalSelect: e.querySelector("select"),
                    selectElement: e.querySelector(this.getSelectClass(t)),
                };
            }
            selectsInit(e) {
                e.forEach((e, t) => {
                    this.selectInit(e, t + 1);
                }),
                    document.addEventListener(
                        "click",
                        function (e) {
                            this.selectsActions(e);
                        }.bind(this)
                    ),
                    document.addEventListener(
                        "keydown",
                        function (e) {
                            this.selectsActions(e);
                        }.bind(this)
                    ),
                    document.addEventListener(
                        "focusin",
                        function (e) {
                            this.selectsActions(e);
                        }.bind(this)
                    ),
                    document.addEventListener(
                        "focusout",
                        function (e) {
                            this.selectsActions(e);
                        }.bind(this)
                    );
            }
            selectInit(e, t) {
                const s = this;
                let l = document.createElement("div");
                if (
                    (l.classList.add(this.selectClasses.classSelect),
                        e.parentNode.insertBefore(l, e),
                        l.appendChild(e),
                        (e.hidden = !0),
                        t && (e.dataset.id = t),
                        l.insertAdjacentHTML(
                            "beforeend",
                            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
                        ),
                        this.selectBuild(e),
                        this.getSelectPlaceholder(e) &&
                        ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
                            this.getSelectPlaceholder(e).label.show))
                ) {
                    this.getSelectElement(
                        l,
                        this.selectClasses.classSelectTitle
                    ).selectElement.insertAdjacentHTML(
                        "afterbegin",
                        `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(e).label.text
                            ? this.getSelectPlaceholder(e).label.text
                            : this.getSelectPlaceholder(e).value
                        }</span>`
                    );
                }
                (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
                    e.addEventListener("change", function (e) {
                        s.selectChange(e);
                    });
            }
            selectBuild(e) {
                const t = e.parentElement;
                (t.dataset.id = e.dataset.id),
                    t.classList.add(
                        e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
                    ),
                    e.multiple
                        ? t.classList.add(this.selectClasses.classSelectMultiple)
                        : t.classList.remove(this.selectClasses.classSelectMultiple),
                    e.hasAttribute("data-checkbox") && e.multiple
                        ? t.classList.add(this.selectClasses.classSelectCheckBox)
                        : t.classList.remove(this.selectClasses.classSelectCheckBox),
                    this.setSelectTitleValue(t, e),
                    this.setOptions(t, e),
                    e.hasAttribute("data-search") && this.searchActions(t),
                    e.hasAttribute("data-open") && this.selectAction(t),
                    this.selectDisabled(t, e);
            }
            selectsActions(e) {
                const t = e.target,
                    s = e.type;
                if (
                    t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
                    t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
                ) {
                    const l = t.closest(".select")
                        ? t.closest(".select")
                        : document.querySelector(
                            `.${this.selectClasses.classSelect}[data-id="${t.closest(
                                this.getSelectClass(this.selectClasses.classSelectTag)
                            ).dataset.selectId
                            }"]`
                        ),
                        c = this.getSelectElement(l).originalSelect;
                    if ("click" === s) {
                        if (!c.disabled)
                            if (
                                t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
                            ) {
                                const e = t.closest(
                                    this.getSelectClass(this.selectClasses.classSelectTag)
                                ),
                                    s = document.querySelector(
                                        `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                                    );
                                this.optionAction(l, c, s);
                            } else if (
                                t.closest(
                                    this.getSelectClass(this.selectClasses.classSelectTitle)
                                )
                            )
                                this.selectAction(l);
                            else if (
                                t.closest(
                                    this.getSelectClass(this.selectClasses.classSelectOption)
                                )
                            ) {
                                const e = t.closest(
                                    this.getSelectClass(this.selectClasses.classSelectOption)
                                );
                                this.optionAction(l, c, e);
                            }
                    } else
                        "focusin" === s || "focusout" === s
                            ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) &&
                            ("focusin" === s
                                ? l.classList.add(this.selectClasses.classSelectFocus)
                                : l.classList.remove(this.selectClasses.classSelectFocus))
                            : "keydown" === s && "Escape" === e.code && this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose() {
                const e = document.querySelectorAll(
                    `${this.getSelectClass(
                        this.selectClasses.classSelect
                    )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
                );
                e.length &&
                    e.forEach((e) => {
                        this.selectAction(e);
                    });
            }
            selectAction(e) {
                const t = this.getSelectElement(e).originalSelect,
                    l = this.getSelectElement(
                        e,
                        this.selectClasses.classSelectOptions
                    ).selectElement;
                l.classList.contains("_slide") ||
                    (e.classList.toggle(this.selectClasses.classSelectOpen),
                        s(l, t.dataset.speed));
            }
            setSelectTitleValue(e, t) {
                const s = this.getSelectElement(
                    e,
                    this.selectClasses.classSelectBody
                ).selectElement,
                    l = this.getSelectElement(
                        e,
                        this.selectClasses.classSelectTitle
                    ).selectElement;
                l && l.remove(),
                    s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
            }
            getSelectTitleValue(e, t) {
                let s = this.getSelectedOptionsData(t, 2).html;
                if (
                    (t.multiple &&
                        t.hasAttribute("data-tags") &&
                        ((s = this.getSelectedOptionsData(t)
                            .elements.map(
                                (t) =>
                                    `<span role="button" data-select-id="${e.dataset.id
                                    }" data-value="${t.value
                                    }" class="_select-tag">${this.getSelectElementContent(
                                        t
                                    )}</span>`
                            )
                            .join("")),
                            t.dataset.tags &&
                            document.querySelector(t.dataset.tags) &&
                            ((document.querySelector(t.dataset.tags).innerHTML = s),
                                t.hasAttribute("data-search") && (s = !1))),
                        (s = s.length ? s : t.dataset.placeholder),
                        this.getSelectedOptionsData(t).values.length
                            ? e.classList.add(this.selectClasses.classSelectActive)
                            : e.classList.remove(this.selectClasses.classSelectActive),
                        t.hasAttribute("data-search"))
                )
                    return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
                {
                    const e =
                        this.getSelectedOptionsData(t).elements.length &&
                            this.getSelectedOptionsData(t).elements[0].dataset.class
                            ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
                            : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
                }
            }
            getSelectElementContent(e) {
                const t = e.dataset.asset ? `${e.dataset.asset}` : "",
                    s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
                let l = "";
                return (
                    (l += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
                    (l += t ? `<span class="${this.selectClasses.classSelectData}">` : ""),
                    (l += t ? s : ""),
                    (l += t ? "</span>" : ""),
                    (l += t ? `<span class="${this.selectClasses.classSelectText}">` : ""),
                    (l += e.textContent),
                    (l += t ? "</span>" : ""),
                    (l += t ? "</span>" : ""),
                    l
                );
            }
            getSelectPlaceholder(e) {
                const t = Array.from(e.options).find((e) => !e.value);
                if (t)
                    return {
                        value: t.textContent,
                        show: t.hasAttribute("data-show"),
                        label: { show: t.hasAttribute("data-label"), text: t.dataset.label },
                    };
            }
            getSelectedOptionsData(e, t) {
                let s = [];
                return (
                    e.multiple
                        ? (s = Array.from(e.options)
                            .filter((e) => e.value)
                            .filter((e) => e.selected))
                        : s.push(e.options[e.selectedIndex]),
                    {
                        elements: s.map((e) => e),
                        values: s.filter((e) => e.value).map((e) => e.value),
                        html: s.map((e) => this.getSelectElementContent(e)),
                    }
                );
            }
            getOptions(e) {
                let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
                    s = e.dataset.scroll ? `style="max-height:${e.dataset.scroll}px"` : "",
                    l = Array.from(e.options);
                if (l.length > 0) {
                    let c = "";
                    return (
                        ((this.getSelectPlaceholder(e) &&
                            !this.getSelectPlaceholder(e).show) ||
                            e.multiple) &&
                        (l = l.filter((e) => e.value)),
                        (c += t
                            ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
                            : ""),
                        l.forEach((t) => {
                            c += this.getOption(t, e);
                        }),
                        (c += t ? "</div>" : ""),
                        c
                    );
                }
            }
            getOption(e, t) {
                const s =
                    e.selected && t.multiple
                        ? ` ${this.selectClasses.classSelectOptionSelected}`
                        : "",
                    l = e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
                    c = e.dataset.class ? ` ${e.dataset.class}` : "",
                    a = !!e.dataset.href && e.dataset.href,
                    i = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
                let o = "";
                return (
                    (o += a
                        ? `<a ${i} ${l} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${c}${s}">`
                        : `<button ${l} class="${this.selectClasses.classSelectOption}${c}${s}" data-value="${e.value}" type="button">`),
                    (o += this.getSelectElementContent(e)),
                    (o += a ? "</a>" : "</button>"),
                    o
                );
            }
            setOptions(e, t) {
                this.getSelectElement(
                    e,
                    this.selectClasses.classSelectOptions
                ).selectElement.innerHTML = this.getOptions(t);
            }
            optionAction(e, t, s) {
                if (t.multiple) {
                    s.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    this.getSelectedOptionsData(t).elements.forEach((e) => {
                        e.removeAttribute("selected");
                    });
                    e.querySelectorAll(
                        this.getSelectClass(this.selectClasses.classSelectOptionSelected)
                    ).forEach((e) => {
                        t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
                            "selected",
                            "selected"
                        );
                    });
                } else
                    t.hasAttribute("data-show-selected") ||
                        (e.querySelector(
                            `${this.getSelectClass(
                                this.selectClasses.classSelectOption
                            )}[hidden]`
                        ) &&
                            (e.querySelector(
                                `${this.getSelectClass(
                                    this.selectClasses.classSelectOption
                                )}[hidden]`
                            ).hidden = !1),
                            (s.hidden = !0)),
                        (t.value = s.hasAttribute("data-value")
                            ? s.dataset.value
                            : s.textContent),
                        this.selectAction(e);
                this.setSelectTitleValue(e, t), this.setSelectChange(t);
            }
            selectChange(e) {
                const t = e.target;
                this.selectBuild(t), this.setSelectChange(t);
            }
            setSelectChange(e) {
                if (
                    (e.hasAttribute("data-validate") && a.validateInput(e),
                        e.hasAttribute("data-submit") && e.value)
                ) {
                    let t = document.createElement("button");
                    (t.type = "submit"), e.closest("form").append(t), t.click(), t.remove();
                }
                const t = e.parentElement;
                this.selectCallback(t, e);
            }
            selectDisabled(e, t) {
                t.disabled
                    ? (e.classList.add(this.selectClasses.classSelectDisabled),
                        (this.getSelectElement(
                            e,
                            this.selectClasses.classSelectTitle
                        ).selectElement.disabled = !0))
                    : (e.classList.remove(this.selectClasses.classSelectDisabled),
                        (this.getSelectElement(
                            e,
                            this.selectClasses.classSelectTitle
                        ).selectElement.disabled = !1));
            }
            searchActions(e) {
                this.getSelectElement(e).originalSelect;
                const t = this.getSelectElement(
                    e,
                    this.selectClasses.classSelectInput
                ).selectElement,
                    s = this.getSelectElement(
                        e,
                        this.selectClasses.classSelectOptions
                    ).selectElement,
                    l = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
                    c = this;
                t.addEventListener("input", function () {
                    l.forEach((e) => {
                        e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
                            ? (e.hidden = !1)
                            : (e.hidden = !0);
                    }),
                        !0 === s.hidden && c.selectAction(e);
                });
            }
            selectCallback(e, t) {
                document.dispatchEvent(
                    new CustomEvent("selectCallback", { detail: { select: t } })
                );
            }
            setLogging(e) {
                this.config.logging && console.log(`[select]: ${e}`);
            }
        }
        const c = { inputMaskModule: null, selectModule: null };
        let a = {
            getErrors(e) {
                let t = 0,
                    s = e.querySelectorAll("*[data-required]");
                return (
                    s.length &&
                    s.forEach((e) => {
                        (null === e.offsetParent && "SELECT" !== e.tagName) ||
                            e.disabled ||
                            (t += this.validateInput(e));
                    }),
                    t
                );
            },
            validateInput(e) {
                let t = 0;
                return (
                    "email" === e.dataset.required
                        ? ((e.value = e.value.replace(" ", "")),
                            this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
                        : ("checkbox" !== e.type || e.checked) && e.value
                            ? this.removeError(e)
                            : (this.addError(e), t++),
                    t
                );
            },
            addError(e) {
                e.classList.add("_form-error"),
                    e.parentElement.classList.add("_form-error");
                let t = e.parentElement.querySelector(".form__error");
                t && e.parentElement.removeChild(t),
                    e.dataset.error &&
                    e.parentElement.insertAdjacentHTML(
                        "beforeend",
                        `<div class="form__error">${e.dataset.error}</div>`
                    );
            },
            removeError(e) {
                e.classList.remove("_form-error"),
                    e.parentElement.classList.remove("_form-error"),
                    e.parentElement.querySelector(".form__error") &&
                    e.parentElement.removeChild(
                        e.parentElement.querySelector(".form__error")
                    );
            },
            formClean(e) {
                e.reset(),
                    setTimeout(() => {
                        let t = e.querySelectorAll("input,textarea");
                        for (let e = 0; e < t.length; e++) {
                            const s = t[e];
                            s.parentElement.classList.remove("_form-focus"),
                                s.classList.remove("_form-focus"),
                                a.removeError(s),
                                (s.value = s.dataset.placeholder);
                        }
                        let s = e.querySelectorAll(".checkbox__input");
                        if (s.length > 0)
                            for (let e = 0; e < s.length; e++) {
                                s[e].checked = !1;
                            }
                        if (c.selectModule) {
                            let t = e.querySelectorAll(".select");
                            if (t.length)
                                for (let e = 0; e < t.length; e++) {
                                    const s = t[e].querySelector("select");
                                    c.selectModule.selectBuild(s);
                                }
                        }
                    }, 0);
            },
            emailTest: (e) =>
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
        };
        var i;
        (i = !1), (c.selectModule = new l({ logging: i }));
    })();


    (() => {
        "use strict";
        let e = (e, t = 500, s = 0) => {
            e.classList.contains("_slide") ||
                (e.classList.add("_slide"),
                    (e.style.transitionProperty = "height, margin, padding"),
                    (e.style.transitionDuration = t + "ms"),
                    (e.style.height = `${e.offsetHeight}px`),
                    e.offsetHeight,
                    (e.style.overflow = "hidden"),
                    (e.style.height = s ? `${s}px` : "0px"),
                    (e.style.paddingTop = 0),
                    (e.style.paddingBottom = 0),
                    (e.style.marginTop = 0),
                    (e.style.marginBottom = 0),
                    window.setTimeout(() => {
                        (e.hidden = !s),
                            !s && e.style.removeProperty("height"),
                            e.style.removeProperty("padding-top"),
                            e.style.removeProperty("padding-bottom"),
                            e.style.removeProperty("margin-top"),
                            e.style.removeProperty("margin-bottom"),
                            !s && e.style.removeProperty("overflow"),
                            e.style.removeProperty("transition-duration"),
                            e.style.removeProperty("transition-property"),
                            e.classList.remove("_slide");
                    }, t));
        },
            t = (e, t = 500, s = 0) => {
                if (!e.classList.contains("_slide")) {
                    e.classList.add("_slide"),
                        (e.hidden = !e.hidden && null),
                        s && e.style.removeProperty("height");
                    let i = e.offsetHeight;
                    (e.style.overflow = "hidden"),
                        (e.style.height = s ? `${s}px` : "0px"),
                        (e.style.paddingTop = 0),
                        (e.style.paddingBottom = 0),
                        (e.style.marginTop = 0),
                        (e.style.marginBottom = 0),
                        e.offsetHeight,
                        (e.style.transitionProperty = "height, margin, padding"),
                        (e.style.transitionDuration = t + "ms"),
                        (e.style.height = i + "px"),
                        e.style.removeProperty("padding-top"),
                        e.style.removeProperty("padding-bottom"),
                        e.style.removeProperty("margin-top"),
                        e.style.removeProperty("margin-bottom"),
                        window.setTimeout(() => {
                            e.style.removeProperty("height"),
                                e.style.removeProperty("overflow"),
                                e.style.removeProperty("transition-duration"),
                                e.style.removeProperty("transition-property"),
                                e.classList.remove("_slide");
                        }, t);
                }
            };
        // setTimeout(function () {
        //     let e = document.querySelector(".choise__toggle"),
        //         t = document.querySelector("._tab-active");
        //     if (e) {
        //         (e.style.width = `${t.offsetWidth}px`),
        //             (e.style.transform = `translateX(${t.offsetLeft}px)`);
        //     }
        // }, 500);
        function s(e) {
            return (
                null !== e &&
                "object" == typeof e &&
                "constructor" in e &&
                e.constructor === Object
            );
        }
        function i(e = {}, t = {}) {
            Object.keys(t).forEach((n) => {
                void 0 === e[n]
                    ? (e[n] = t[n])
                    : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0 && i(e[n], t[n]);
            });
        }
        const n = {
            body: {},
            addEventListener() { },
            removeEventListener() { },
            activeElement: { blur() { }, nodeName: "" },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({ initEvent() { } }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() { },
                getElementsByTagName: () => [],
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: "",
            },
        };
        function r() {
            const e = "undefined" != typeof document ? document : {};
            return i(e, n), e;
        }
        const a = {
            document: n,
            navigator: { userAgent: "" },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: "",
            },
            history: { replaceState() { }, pushState() { }, go() { }, back() { } },
            CustomEvent: function () {
                return this;
            },
            addEventListener() { },
            removeEventListener() { },
            getComputedStyle: () => ({ getPropertyValue: () => "" }),
            Image() { },
            Date() { },
            screen: {},
            setTimeout() { },
            clearTimeout() { },
            matchMedia: () => ({}),
            requestAnimationFrame: (e) =>
                "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e);
            },
        };
        function l() {
            const e = "undefined" != typeof window ? window : {};
            return i(e, a), e;
        }
        class o extends Array {
            constructor(e) {
                super(...(e || [])),
                    (function (e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e;
                            },
                        });
                    })(this);
            }
        }
        function d(e = []) {
            const t = [];
            return (
                e.forEach((e) => {
                    Array.isArray(e) ? t.push(...d(e)) : t.push(e);
                }),
                t
            );
        }
        function c(e, t) {
            return Array.prototype.filter.call(e, t);
        }
        function p(e, t) {
            const s = l(),
                i = r();
            let n = [];
            if (!t && e instanceof o) return e;
            if (!e) return new o(n);
            if ("string" == typeof e) {
                const s = e.trim();
                if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                    let e = "div";
                    0 === s.indexOf("<li") && (e = "ul"),
                        0 === s.indexOf("<tr") && (e = "tbody"),
                        (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
                        0 === s.indexOf("<tbody") && (e = "table"),
                        0 === s.indexOf("<option") && (e = "select");
                    const t = i.createElement(e);
                    t.innerHTML = s;
                    for (let e = 0; e < t.childNodes.length; e += 1)
                        n.push(t.childNodes[e]);
                } else
                    n = (function (e, t) {
                        if ("string" != typeof e) return [e];
                        const s = [],
                            i = t.querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) s.push(i[e]);
                        return s;
                    })(e.trim(), t || i);
            } else if (e.nodeType || e === s || e === i) n.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof o) return e;
                n = e;
            }
            return new o(
                (function (e) {
                    const t = [];
                    for (let s = 0; s < e.length; s += 1)
                        -1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t;
                })(n)
            );
        }
        p.fn = o.prototype;
        const u = "resize scroll".split(" ");
        function h(e) {
            return function (...t) {
                if (void 0 === t[0]) {
                    for (let t = 0; t < this.length; t += 1)
                        u.indexOf(e) < 0 &&
                            (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
                    return this;
                }
                return this.on(e, ...t);
            };
        }
        h("click"),
            h("blur"),
            h("focus"),
            h("focusin"),
            h("focusout"),
            h("keyup"),
            h("keydown"),
            h("keypress"),
            h("submit"),
            h("change"),
            h("mousedown"),
            h("mousemove"),
            h("mouseup"),
            h("mouseenter"),
            h("mouseleave"),
            h("mouseout"),
            h("mouseover"),
            h("touchstart"),
            h("touchend"),
            h("touchmove"),
            h("resize"),
            h("scroll");
        const f = {
            addClass: function (...e) {
                const t = d(e.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.add(...t);
                    }),
                    this
                );
            },
            removeClass: function (...e) {
                const t = d(e.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.remove(...t);
                    }),
                    this
                );
            },
            hasClass: function (...e) {
                const t = d(e.map((e) => e.split(" ")));
                return (
                    c(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
                        .length > 0
                );
            },
            toggleClass: function (...e) {
                const t = d(e.map((e) => e.split(" ")));
                this.forEach((e) => {
                    t.forEach((t) => {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let s = 0; s < this.length; s += 1)
                    if (2 === arguments.length) this[s].setAttribute(e, t);
                    else
                        for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
                return this;
            },
            removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this;
            },
            on: function (...e) {
                let [t, s, i, n] = e;
                function r(e) {
                    const t = e.target;
                    if (!t) return;
                    const n = e.target.dom7EventData || [];
                    if ((n.indexOf(e) < 0 && n.unshift(e), p(t).is(s))) i.apply(t, n);
                    else {
                        const e = p(t).parents();
                        for (let t = 0; t < e.length; t += 1)
                            p(e[t]).is(s) && i.apply(e[t], n);
                    }
                }
                function a(e) {
                    const t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
                }
                "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
                    n || (n = !1);
                const l = t.split(" ");
                let o;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (s)
                        for (o = 0; o < l.length; o += 1) {
                            const e = l[o];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                                t.addEventListener(e, r, n);
                        }
                    else
                        for (o = 0; o < l.length; o += 1) {
                            const e = l[o];
                            t.dom7Listeners || (t.dom7Listeners = {}),
                                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                                t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
                                t.addEventListener(e, a, n);
                        }
                }
                return this;
            },
            off: function (...e) {
                let [t, s, i, n] = e;
                "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
                    n || (n = !1);
                const r = t.split(" ");
                for (let e = 0; e < r.length; e += 1) {
                    const t = r[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const r = this[e];
                        let a;
                        if (
                            (!s && r.dom7Listeners
                                ? (a = r.dom7Listeners[t])
                                : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
                                a && a.length)
                        )
                            for (let e = a.length - 1; e >= 0; e -= 1) {
                                const s = a[e];
                                (i && s.listener === i) ||
                                    (i &&
                                        s.listener &&
                                        s.listener.dom7proxy &&
                                        s.listener.dom7proxy === i)
                                    ? (r.removeEventListener(t, s.proxyListener, n), a.splice(e, 1))
                                    : i ||
                                    (r.removeEventListener(t, s.proxyListener, n),
                                        a.splice(e, 1));
                            }
                    }
                }
                return this;
            },
            trigger: function (...e) {
                const t = l(),
                    s = e[0].split(" "),
                    i = e[1];
                for (let n = 0; n < s.length; n += 1) {
                    const r = s[n];
                    for (let s = 0; s < this.length; s += 1) {
                        const n = this[s];
                        if (t.CustomEvent) {
                            const s = new t.CustomEvent(r, {
                                detail: i,
                                bubbles: !0,
                                cancelable: !0,
                            });
                            (n.dom7EventData = e.filter((e, t) => t > 0)),
                                n.dispatchEvent(s),
                                (n.dom7EventData = []),
                                delete n.dom7EventData;
                        }
                    }
                }
                return this;
            },
            transitionEnd: function (e) {
                const t = this;
                return (
                    e &&
                    t.on("transitionend", function s(i) {
                        i.target === this && (e.call(this, i), t.off("transitionend", s));
                    }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return (
                            this[0].offsetWidth +
                            parseFloat(e.getPropertyValue("margin-right")) +
                            parseFloat(e.getPropertyValue("margin-left"))
                        );
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return (
                            this[0].offsetHeight +
                            parseFloat(e.getPropertyValue("margin-top")) +
                            parseFloat(e.getPropertyValue("margin-bottom"))
                        );
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                const e = l();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    const e = l(),
                        t = r(),
                        s = this[0],
                        i = s.getBoundingClientRect(),
                        n = t.body,
                        a = s.clientTop || n.clientTop || 0,
                        o = s.clientLeft || n.clientLeft || 0,
                        d = s === e ? e.scrollY : s.scrollTop,
                        c = s === e ? e.scrollX : s.scrollLeft;
                    return { top: i.top + d - a, left: i.left + c - o };
                }
                return null;
            },
            css: function (e, t) {
                const s = l();
                let i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1)
                            for (const t in e) this[i].style[t] = e[t];
                        return this;
                    }
                    if (this[0])
                        return s.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function (e) {
                return e
                    ? (this.forEach((t, s) => {
                        e.apply(t, [t, s]);
                    }),
                        this)
                    : this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                const t = l(),
                    s = r(),
                    i = this[0];
                let n, a;
                if (!i || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (i.matches) return i.matches(e);
                    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                    if (i.msMatchesSelector) return i.msMatchesSelector(e);
                    for (n = p(e), a = 0; a < n.length; a += 1) if (n[a] === i) return !0;
                    return !1;
                }
                if (e === s) return i === s;
                if (e === t) return i === t;
                if (e.nodeType || e instanceof o) {
                    for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
                        if (n[a] === i) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                let e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);)
                        1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return p([]);
                if (e < 0) {
                    const s = t + e;
                    return p(s < 0 ? [] : [this[s]]);
                }
                return p([this[e]]);
            },
            append: function (...e) {
                let t;
                const s = r();
                for (let i = 0; i < e.length; i += 1) {
                    t = e[i];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const i = s.createElement("div");
                            for (i.innerHTML = t; i.firstChild;)
                                this[e].appendChild(i.firstChild);
                        } else if (t instanceof o)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t);
                }
                return this;
            },
            prepend: function (e) {
                const t = r();
                let s, i;
                for (s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const n = t.createElement("div");
                        for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
                            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
                    } else if (e instanceof o)
                        for (i = 0; i < e.length; i += 1)
                            this[s].insertBefore(e[i], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0
                    ? e
                        ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e)
                            ? p([this[0].nextElementSibling])
                            : p([])
                        : this[0].nextElementSibling
                            ? p([this[0].nextElementSibling])
                            : p([])
                    : p([]);
            },
            nextAll: function (e) {
                const t = [];
                let s = this[0];
                if (!s) return p([]);
                for (; s.nextElementSibling;) {
                    const i = s.nextElementSibling;
                    e ? p(i).is(e) && t.push(i) : t.push(i), (s = i);
                }
                return p(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e
                        ? t.previousElementSibling && p(t.previousElementSibling).is(e)
                            ? p([t.previousElementSibling])
                            : p([])
                        : t.previousElementSibling
                            ? p([t.previousElementSibling])
                            : p([]);
                }
                return p([]);
            },
            prevAll: function (e) {
                const t = [];
                let s = this[0];
                if (!s) return p([]);
                for (; s.previousElementSibling;) {
                    const i = s.previousElementSibling;
                    e ? p(i).is(e) && t.push(i) : t.push(i), (s = i);
                }
                return p(t);
            },
            parent: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1)
                    null !== this[s].parentNode &&
                        (e
                            ? p(this[s].parentNode).is(e) && t.push(this[s].parentNode)
                            : t.push(this[s].parentNode));
                return p(t);
            },
            parents: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    let i = this[s].parentNode;
                    for (; i;) e ? p(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
                }
                return p(t);
            },
            closest: function (e) {
                let t = this;
                return void 0 === e ? p([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1) t.push(i[e]);
                }
                return p(t);
            },
            children: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].children;
                    for (let s = 0; s < i.length; s += 1)
                        (e && !p(i[s]).is(e)) || t.push(i[s]);
                }
                return p(t);
            },
            filter: function (e) {
                return p(c(this, e));
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
        Object.keys(f).forEach((e) => {
            Object.defineProperty(p.fn, e, { value: f[e], writable: !0 });
        });
        const m = p;
        function g(e, t = 0) {
            return setTimeout(e, t);
        }
        function v() {
            return Date.now();
        }
        function b(e, t = "x") {
            const s = l();
            let i, n, r;
            const a = (function (e) {
                const t = l();
                let s;
                return (
                    t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                    !s && e.currentStyle && (s = e.currentStyle),
                    s || (s = e.style),
                    s
                );
            })(e);
            return (
                s.WebKitCSSMatrix
                    ? ((n = a.transform || a.webkitTransform),
                        n.split(",").length > 6 &&
                        (n = n
                            .split(", ")
                            .map((e) => e.replace(",", "."))
                            .join(", ")),
                        (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
                    : ((r =
                        a.MozTransform ||
                        a.OTransform ||
                        a.MsTransform ||
                        a.msTransform ||
                        a.transform ||
                        a
                            .getPropertyValue("transform")
                            .replace("translate(", "matrix(1, 0, 0, 1,")),
                        (i = r.toString().split(","))),
                "x" === t &&
                (n = s.WebKitCSSMatrix
                    ? r.m41
                    : 16 === i.length
                        ? parseFloat(i[12])
                        : parseFloat(i[4])),
                "y" === t &&
                (n = s.WebKitCSSMatrix
                    ? r.m42
                    : 16 === i.length
                        ? parseFloat(i[13])
                        : parseFloat(i[5])),
                n || 0
            );
        }
        function w(e) {
            return (
                "object" == typeof e &&
                null !== e &&
                e.constructor &&
                "Object" === Object.prototype.toString.call(e).slice(8, -1)
            );
        }
        function y(...e) {
            const t = Object(e[0]),
                s = ["__proto__", "constructor", "prototype"];
            for (let n = 1; n < e.length; n += 1) {
                const r = e[n];
                if (
                    null != r &&
                    ((i = r),
                        !("undefined" != typeof window && void 0 !== window.HTMLElement
                            ? i instanceof HTMLElement
                            : i && (1 === i.nodeType || 11 === i.nodeType)))
                ) {
                    const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
                    for (let s = 0, i = e.length; s < i; s += 1) {
                        const i = e[s],
                            n = Object.getOwnPropertyDescriptor(r, i);
                        void 0 !== n &&
                            n.enumerable &&
                            (w(t[i]) && w(r[i])
                                ? r[i].__swiper__
                                    ? (t[i] = r[i])
                                    : y(t[i], r[i])
                                : !w(t[i]) && w(r[i])
                                    ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : y(t[i], r[i]))
                                    : (t[i] = r[i]));
                    }
                }
            }
            var i;
            return t;
        }
        function T(e, t, s) {
            e.style.setProperty(t, s);
        }
        function C({ swiper: e, targetPosition: t, side: s }) {
            const i = l(),
                n = -e.translate;
            let r,
                a = null;
            const o = e.params.speed;
            (e.wrapperEl.style.scrollSnapType = "none"),
                i.cancelAnimationFrame(e.cssModeFrameID);
            const d = t > n ? "next" : "prev",
                c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
                p = () => {
                    (r = new Date().getTime()), null === a && (a = r);
                    const l = Math.max(Math.min((r - a) / o, 1), 0),
                        d = 0.5 - Math.cos(l * Math.PI) / 2;
                    let u = n + d * (t - n);
                    if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
                        return (
                            (e.wrapperEl.style.overflow = "hidden"),
                            (e.wrapperEl.style.scrollSnapType = ""),
                            setTimeout(() => {
                                (e.wrapperEl.style.overflow = ""),
                                    e.wrapperEl.scrollTo({ [s]: u });
                            }),
                            void i.cancelAnimationFrame(e.cssModeFrameID)
                        );
                    e.cssModeFrameID = i.requestAnimationFrame(p);
                };
            p();
        }
        let S, x, E;
        function M() {
            return (
                S ||
                (S = (function () {
                    const e = l(),
                        t = r();
                    return {
                        smoothScroll:
                            t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!(
                            "ontouchstart" in e ||
                            (e.DocumentTouch && t instanceof e.DocumentTouch)
                        ),
                        passiveListener: (function () {
                            let t = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0;
                                    },
                                });
                                e.addEventListener("testPassiveListener", null, s);
                            } catch (e) { }
                            return t;
                        })(),
                        gestures: "ongesturestart" in e,
                    };
                })()),
                S
            );
        }
        function $(e = {}) {
            return (
                x ||
                (x = (function ({ userAgent: e } = {}) {
                    const t = M(),
                        s = l(),
                        i = s.navigator.platform,
                        n = e || s.navigator.userAgent,
                        r = { ios: !1, android: !1 },
                        a = s.screen.width,
                        o = s.screen.height,
                        d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = n.match(/(iPad).*OS\s([\d_]+)/);
                    const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                        u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === i;
                    let f = "MacIntel" === i;
                    return (
                        !c &&
                        f &&
                        t.touch &&
                        [
                            "1024x1366",
                            "1366x1024",
                            "834x1194",
                            "1194x834",
                            "834x1112",
                            "1112x834",
                            "768x1024",
                            "1024x768",
                            "820x1180",
                            "1180x820",
                            "810x1080",
                            "1080x810",
                        ].indexOf(`${a}x${o}`) >= 0 &&
                        ((c = n.match(/(Version)\/([\d.]+)/)),
                            c || (c = [0, 1, "13_0_0"]),
                            (f = !1)),
                        d && !h && ((r.os = "android"), (r.android = !0)),
                        (c || u || p) && ((r.os = "ios"), (r.ios = !0)),
                        r
                    );
                })(e)),
                x
            );
        }
        function P() {
            return (
                E ||
                (E = (function () {
                    const e = l();
                    return {
                        isSafari: (function () {
                            const t = e.navigator.userAgent.toLowerCase();
                            return (
                                t.indexOf("safari") >= 0 &&
                                t.indexOf("chrome") < 0 &&
                                t.indexOf("android") < 0
                            );
                        })(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                            e.navigator.userAgent
                        ),
                    };
                })()),
                E
            );
        }
        const k = {
            on(e, t, s) {
                const i = this;
                if ("function" != typeof t) return i;
                const n = s ? "unshift" : "push";
                return (
                    e.split(" ").forEach((e) => {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []),
                            i.eventsListeners[e][n](t);
                    }),
                    i
                );
            },
            once(e, t, s) {
                const i = this;
                if ("function" != typeof t) return i;
                function n(...s) {
                    i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
                }
                return (n.__emitterProxy = t), i.on(e, n, s);
            },
            onAny(e, t) {
                const s = this;
                if ("function" != typeof e) return s;
                const i = t ? "unshift" : "push";
                return (
                    s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
                );
            },
            offAny(e) {
                const t = this;
                if (!t.eventsAnyListeners) return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
            },
            off(e, t) {
                const s = this;
                return s.eventsListeners
                    ? (e.split(" ").forEach((e) => {
                        void 0 === t
                            ? (s.eventsListeners[e] = [])
                            : s.eventsListeners[e] &&
                            s.eventsListeners[e].forEach((i, n) => {
                                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                                    s.eventsListeners[e].splice(n, 1);
                            });
                    }),
                        s)
                    : s;
            },
            emit(...e) {
                const t = this;
                if (!t.eventsListeners) return t;
                let s, i, n;
                "string" == typeof e[0] || Array.isArray(e[0])
                    ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
                    : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
                    i.unshift(n);
                return (
                    (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
                        t.eventsAnyListeners &&
                            t.eventsAnyListeners.length &&
                            t.eventsAnyListeners.forEach((t) => {
                                t.apply(n, [e, ...i]);
                            }),
                            t.eventsListeners &&
                            t.eventsListeners[e] &&
                            t.eventsListeners[e].forEach((e) => {
                                e.apply(n, i);
                            });
                    }),
                    t
                );
            },
        };
        const L = {
            updateSize: function () {
                const e = this;
                let t, s;
                const i = e.$el;
                (t =
                    void 0 !== e.params.width && null !== e.params.width
                        ? e.params.width
                        : i[0].clientWidth),
                    (s =
                        void 0 !== e.params.height && null !== e.params.height
                            ? e.params.height
                            : i[0].clientHeight),
                    (0 === t && e.isHorizontal()) ||
                    (0 === s && e.isVertical()) ||
                    ((t =
                        t -
                        parseInt(i.css("padding-left") || 0, 10) -
                        parseInt(i.css("padding-right") || 0, 10)),
                        (s =
                            s -
                            parseInt(i.css("padding-top") || 0, 10) -
                            parseInt(i.css("padding-bottom") || 0, 10)),
                        Number.isNaN(t) && (t = 0),
                        Number.isNaN(s) && (s = 0),
                        Object.assign(e, {
                            width: t,
                            height: s,
                            size: e.isHorizontal() ? t : s,
                        }));
            },
            updateSlides: function () {
                const e = this;
                function t(t) {
                    return e.isHorizontal()
                        ? t
                        : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom",
                        }[t];
                }
                function s(e, s) {
                    return parseFloat(e.getPropertyValue(t(s)) || 0);
                }
                const i = e.params,
                    { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: l } = e,
                    o = e.virtual && i.virtual.enabled,
                    d = o ? e.virtual.slides.length : e.slides.length,
                    c = n.children(`.${e.params.slideClass}`),
                    p = o ? e.virtual.slides.length : c.length;
                let u = [];
                const h = [],
                    f = [];
                let m = i.slidesOffsetBefore;
                "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                let g = i.slidesOffsetAfter;
                "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length,
                    b = e.slidesGrid.length;
                let w = i.spaceBetween,
                    y = -m,
                    C = 0,
                    S = 0;
                if (void 0 === r) return;
                "string" == typeof w &&
                    w.indexOf("%") >= 0 &&
                    (w = (parseFloat(w.replace("%", "")) / 100) * r),
                    (e.virtualSize = -w),
                    a
                        ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                        : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                    i.centeredSlides &&
                    i.cssMode &&
                    (T(e.wrapperEl, "--swiper-centered-offset-before", ""),
                        T(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const x = i.grid && i.grid.rows > 1 && e.grid;
                let E;
                x && e.grid.initSlides(p);
                const M =
                    "auto" === i.slidesPerView &&
                    i.breakpoints &&
                    Object.keys(i.breakpoints).filter(
                        (e) => void 0 !== i.breakpoints[e].slidesPerView
                    ).length > 0;
                for (let n = 0; n < p; n += 1) {
                    E = 0;
                    const a = c.eq(n);
                    if (
                        (x && e.grid.updateSlide(n, a, p, t), "none" !== a.css("display"))
                    ) {
                        if ("auto" === i.slidesPerView) {
                            M && (c[n].style[t("width")] = "");
                            const r = getComputedStyle(a[0]),
                                l = a[0].style.transform,
                                o = a[0].style.webkitTransform;
                            if (
                                (l && (a[0].style.transform = "none"),
                                    o && (a[0].style.webkitTransform = "none"),
                                    i.roundLengths)
                            )
                                E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                            else {
                                const e = s(r, "width"),
                                    t = s(r, "padding-left"),
                                    i = s(r, "padding-right"),
                                    n = s(r, "margin-left"),
                                    l = s(r, "margin-right"),
                                    o = r.getPropertyValue("box-sizing");
                                if (o && "border-box" === o) E = e + n + l;
                                else {
                                    const { clientWidth: s, offsetWidth: r } = a[0];
                                    E = e + t + i + n + l + (r - s);
                                }
                            }
                            l && (a[0].style.transform = l),
                                o && (a[0].style.webkitTransform = o),
                                i.roundLengths && (E = Math.floor(E));
                        } else
                            (E = (r - (i.slidesPerView - 1) * w) / i.slidesPerView),
                                i.roundLengths && (E = Math.floor(E)),
                                c[n] && (c[n].style[t("width")] = `${E}px`);
                        c[n] && (c[n].swiperSlideSize = E),
                            f.push(E),
                            i.centeredSlides
                                ? ((y = y + E / 2 + C / 2 + w),
                                    0 === C && 0 !== n && (y = y - r / 2 - w),
                                    0 === n && (y = y - r / 2 - w),
                                    Math.abs(y) < 0.001 && (y = 0),
                                    i.roundLengths && (y = Math.floor(y)),
                                    S % i.slidesPerGroup == 0 && u.push(y),
                                    h.push(y))
                                : (i.roundLengths && (y = Math.floor(y)),
                                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                                    e.params.slidesPerGroup ==
                                    0 && u.push(y),
                                    h.push(y),
                                    (y = y + E + w)),
                            (e.virtualSize += E + w),
                            (C = E),
                            (S += 1);
                    }
                }
                if (
                    ((e.virtualSize = Math.max(e.virtualSize, r) + g),
                        a &&
                        l &&
                        ("slide" === i.effect || "coverflow" === i.effect) &&
                        n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
                        i.setWrapperSize &&
                        n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
                        x && e.grid.updateWrapperSize(E, u, t),
                        !i.centeredSlides)
                ) {
                    const t = [];
                    for (let s = 0; s < u.length; s += 1) {
                        let n = u[s];
                        i.roundLengths && (n = Math.floor(n)),
                            u[s] <= e.virtualSize - r && t.push(n);
                    }
                    (u = t),
                        Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
                        u.push(e.virtualSize - r);
                }
                if ((0 === u.length && (u = [0]), 0 !== i.spaceBetween)) {
                    const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                    c.filter((e, t) => !i.cssMode || t !== c.length - 1).css({
                        [s]: `${w}px`,
                    });
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((t) => {
                        e += t + (i.spaceBetween ? i.spaceBetween : 0);
                    }),
                        (e -= i.spaceBetween);
                    const t = e - r;
                    u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
                }
                if (i.centerInsufficientSlides) {
                    let e = 0;
                    if (
                        (f.forEach((t) => {
                            e += t + (i.spaceBetween ? i.spaceBetween : 0);
                        }),
                            (e -= i.spaceBetween),
                            e < r)
                    ) {
                        const t = (r - e) / 2;
                        u.forEach((e, s) => {
                            u[s] = e - t;
                        }),
                            h.forEach((e, s) => {
                                h[s] = e + t;
                            });
                    }
                }
                if (
                    (Object.assign(e, {
                        slides: c,
                        snapGrid: u,
                        slidesGrid: h,
                        slidesSizesGrid: f,
                    }),
                        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
                ) {
                    T(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                        T(
                            e.wrapperEl,
                            "--swiper-centered-offset-after",
                            e.size / 2 - f[f.length - 1] / 2 + "px"
                        );
                    const t = -e.snapGrid[0],
                        s = -e.slidesGrid[0];
                    (e.snapGrid = e.snapGrid.map((e) => e + t)),
                        (e.slidesGrid = e.slidesGrid.map((e) => e + s));
                }
                p !== d && e.emit("slidesLengthChange"),
                    u.length !== v &&
                    (e.params.watchOverflow && e.checkOverflow(),
                        e.emit("snapGridLengthChange")),
                    h.length !== b && e.emit("slidesGridLengthChange"),
                    i.watchSlidesProgress && e.updateSlidesOffset();
            },
            updateAutoHeight: function (e) {
                const t = this,
                    s = [],
                    i = t.virtual && t.params.virtual.enabled;
                let n,
                    r = 0;
                "number" == typeof e
                    ? t.setTransition(e)
                    : !0 === e && t.setTransition(t.params.speed);
                const a = (e) =>
                    i
                        ? t.slides.filter(
                            (t) =>
                                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                        )[0]
                        : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        t.visibleSlides.each((e) => {
                            s.push(e);
                        });
                    else
                        for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                            const e = t.activeIndex + n;
                            if (e > t.slides.length && !i) break;
                            s.push(a(e));
                        }
                else s.push(a(t.activeIndex));
                for (n = 0; n < s.length; n += 1)
                    if (void 0 !== s[n]) {
                        const e = s[n].offsetHeight;
                        r = e > r ? e : r;
                    }
                r && t.$wrapperEl.css("height", `${r}px`);
            },
            updateSlidesOffset: function () {
                const e = this,
                    t = e.slides;
                for (let s = 0; s < t.length; s += 1)
                    t[s].swiperSlideOffset = e.isHorizontal()
                        ? t[s].offsetLeft
                        : t[s].offsetTop;
            },
            updateSlidesProgress: function (e = (this && this.translate) || 0) {
                const t = this,
                    s = t.params,
                    { slides: i, rtlTranslate: n, snapGrid: r } = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                n && (a = e),
                    i.removeClass(s.slideVisibleClass),
                    (t.visibleSlidesIndexes = []),
                    (t.visibleSlides = []);
                for (let e = 0; e < i.length; e += 1) {
                    const l = i[e];
                    let o = l.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
                    const d =
                        (a + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                        (l.swiperSlideSize + s.spaceBetween),
                        c =
                            (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                            (l.swiperSlideSize + s.spaceBetween),
                        p = -(a - o),
                        u = p + t.slidesSizesGrid[e];
                    ((p >= 0 && p < t.size - 1) ||
                        (u > 1 && u <= t.size) ||
                        (p <= 0 && u >= t.size)) &&
                        (t.visibleSlides.push(l),
                            t.visibleSlidesIndexes.push(e),
                            i.eq(e).addClass(s.slideVisibleClass)),
                        (l.progress = n ? -d : d),
                        (l.originalProgress = n ? -c : c);
                }
                t.visibleSlides = m(t.visibleSlides);
            },
            updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = (t && t.translate && t.translate * s) || 0;
                }
                const s = t.params,
                    i = t.maxTranslate() - t.minTranslate();
                let { progress: n, isBeginning: r, isEnd: a } = t;
                const l = r,
                    o = a;
                0 === i
                    ? ((n = 0), (r = !0), (a = !0))
                    : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
                    Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
                    (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
                    t.updateSlidesProgress(e),
                    r && !l && t.emit("reachBeginning toEdge"),
                    a && !o && t.emit("reachEnd toEdge"),
                    ((l && !r) || (o && !a)) && t.emit("fromEdge"),
                    t.emit("progress", n);
            },
            updateSlidesClasses: function () {
                const e = this,
                    {
                        slides: t,
                        params: s,
                        $wrapperEl: i,
                        activeIndex: n,
                        realIndex: r,
                    } = e,
                    a = e.virtual && s.virtual.enabled;
                let l;
                t.removeClass(
                    `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
                ),
                    (l = a
                        ? e.$wrapperEl.find(
                            `.${s.slideClass}[data-swiper-slide-index="${n}"]`
                        )
                        : t.eq(n)),
                    l.addClass(s.slideActiveClass),
                    s.loop &&
                    (l.hasClass(s.slideDuplicateClass)
                        ? i
                            .children(
                                `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                            )
                            .addClass(s.slideDuplicateActiveClass)
                        : i
                            .children(
                                `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                            )
                            .addClass(s.slideDuplicateActiveClass));
                let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
                let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                s.loop &&
                    0 === d.length &&
                    ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
                    s.loop &&
                    (o.hasClass(s.slideDuplicateClass)
                        ? i
                            .children(
                                `.${s.slideClass}:not(.${s.slideDuplicateClass
                                })[data-swiper-slide-index="${o.attr(
                                    "data-swiper-slide-index"
                                )}"]`
                            )
                            .addClass(s.slideDuplicateNextClass)
                        : i
                            .children(
                                `.${s.slideClass}.${s.slideDuplicateClass
                                }[data-swiper-slide-index="${o.attr(
                                    "data-swiper-slide-index"
                                )}"]`
                            )
                            .addClass(s.slideDuplicateNextClass),
                        d.hasClass(s.slideDuplicateClass)
                            ? i
                                .children(
                                    `.${s.slideClass}:not(.${s.slideDuplicateClass
                                    })[data-swiper-slide-index="${d.attr(
                                        "data-swiper-slide-index"
                                    )}"]`
                                )
                                .addClass(s.slideDuplicatePrevClass)
                            : i
                                .children(
                                    `.${s.slideClass}.${s.slideDuplicateClass
                                    }[data-swiper-slide-index="${d.attr(
                                        "data-swiper-slide-index"
                                    )}"]`
                                )
                                .addClass(s.slideDuplicatePrevClass)),
                    e.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
                const t = this,
                    s = t.rtlTranslate ? t.translate : -t.translate,
                    {
                        slidesGrid: i,
                        snapGrid: n,
                        params: r,
                        activeIndex: a,
                        realIndex: l,
                        snapIndex: o,
                    } = t;
                let d,
                    c = e;
                if (void 0 === c) {
                    for (let e = 0; e < i.length; e += 1)
                        void 0 !== i[e + 1]
                            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                                ? (c = e)
                                : s >= i[e] && s < i[e + 1] && (c = e + 1)
                            : s >= i[e] && (c = e);
                    r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                }
                if (n.indexOf(s) >= 0) d = n.indexOf(s);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, c);
                    d = e + Math.floor((c - e) / r.slidesPerGroup);
                }
                if ((d >= n.length && (d = n.length - 1), c === a))
                    return void (d !== o && ((t.snapIndex = d), t.emit("snapIndexChange")));
                const p = parseInt(
                    t.slides.eq(c).attr("data-swiper-slide-index") || c,
                    10
                );
                Object.assign(t, {
                    snapIndex: d,
                    realIndex: p,
                    previousIndex: a,
                    activeIndex: c,
                }),
                    t.emit("activeIndexChange"),
                    t.emit("snapIndexChange"),
                    l !== p && t.emit("realIndexChange"),
                    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
            },
            updateClickedSlide: function (e) {
                const t = this,
                    s = t.params,
                    i = m(e).closest(`.${s.slideClass}`)[0];
                let n,
                    r = !1;
                if (i)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === i) {
                            (r = !0), (n = e);
                            break;
                        }
                if (!i || !r)
                    return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                (t.clickedSlide = i),
                    t.virtual && t.params.virtual.enabled
                        ? (t.clickedIndex = parseInt(
                            m(i).attr("data-swiper-slide-index"),
                            10
                        ))
                        : (t.clickedIndex = n),
                    s.slideToClickedSlide &&
                    void 0 !== t.clickedIndex &&
                    t.clickedIndex !== t.activeIndex &&
                    t.slideToClickedSlide();
            },
        };
        const O = {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
                const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
                if (t.virtualTranslate) return s ? -i : i;
                if (t.cssMode) return i;
                let r = b(n[0], e);
                return s && (r = -r), r || 0;
            },
            setTranslate: function (e, t) {
                const s = this,
                    {
                        rtlTranslate: i,
                        params: n,
                        $wrapperEl: r,
                        wrapperEl: a,
                        progress: l,
                    } = s;
                let o,
                    d = 0,
                    c = 0;
                s.isHorizontal() ? (d = i ? -e : e) : (c = e),
                    n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
                    n.cssMode
                        ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
                            ? -d
                            : -c)
                        : n.virtualTranslate ||
                        r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                    (s.previousTranslate = s.translate),
                    (s.translate = s.isHorizontal() ? d : c);
                const p = s.maxTranslate() - s.minTranslate();
                (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
                    o !== l && s.updateProgress(e),
                    s.emit("setTranslate", s.translate, t);
            },
            minTranslate: function () {
                return -this.snapGrid[0];
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
                const r = this,
                    { params: a, wrapperEl: l } = r;
                if (r.animating && a.preventInteractionOnTransition) return !1;
                const o = r.minTranslate(),
                    d = r.maxTranslate();
                let c;
                if (
                    ((c = i && e > o ? o : i && e < d ? d : e),
                        r.updateProgress(c),
                        a.cssMode)
                ) {
                    const e = r.isHorizontal();
                    if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                    else {
                        if (!r.support.smoothScroll)
                            return (
                                C({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
                            );
                        l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
                    }
                    return !0;
                }
                return (
                    0 === t
                        ? (r.setTransition(0),
                            r.setTranslate(c),
                            s &&
                            (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
                        : (r.setTransition(t),
                            r.setTranslate(c),
                            s &&
                            (r.emit("beforeTransitionStart", t, n),
                                r.emit("transitionStart")),
                            r.animating ||
                            ((r.animating = !0),
                                r.onTranslateToWrapperTransitionEnd ||
                                (r.onTranslateToWrapperTransitionEnd = function (e) {
                                    r &&
                                        !r.destroyed &&
                                        e.target === this &&
                                        (r.$wrapperEl[0].removeEventListener(
                                            "transitionend",
                                            r.onTranslateToWrapperTransitionEnd
                                        ),
                                            r.$wrapperEl[0].removeEventListener(
                                                "webkitTransitionEnd",
                                                r.onTranslateToWrapperTransitionEnd
                                            ),
                                            (r.onTranslateToWrapperTransitionEnd = null),
                                            delete r.onTranslateToWrapperTransitionEnd,
                                            s && r.emit("transitionEnd"));
                                }),
                                r.$wrapperEl[0].addEventListener(
                                    "transitionend",
                                    r.onTranslateToWrapperTransitionEnd
                                ),
                                r.$wrapperEl[0].addEventListener(
                                    "webkitTransitionEnd",
                                    r.onTranslateToWrapperTransitionEnd
                                ))),
                    !0
                );
            },
        };
        function A({ swiper: e, runCallbacks: t, direction: s, step: i }) {
            const { activeIndex: n, previousIndex: r } = e;
            let a = s;
            if (
                (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
                    e.emit(`transition${i}`),
                    t && n !== r)
            ) {
                if ("reset" === a) return void e.emit(`slideResetTransition${i}`);
                e.emit(`slideChangeTransition${i}`),
                    "next" === a
                        ? e.emit(`slideNextTransition${i}`)
                        : e.emit(`slidePrevTransition${i}`);
            }
        }
        const _ = {
            slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
                if ("number" != typeof e && "string" != typeof e)
                    throw new Error(
                        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                    );
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t))
                        throw new Error(
                            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                        );
                    e = t;
                }
                const r = this;
                let a = e;
                a < 0 && (a = 0);
                const {
                    params: l,
                    snapGrid: o,
                    slidesGrid: d,
                    previousIndex: c,
                    activeIndex: p,
                    rtlTranslate: u,
                    wrapperEl: h,
                    enabled: f,
                } = r;
                if ((r.animating && l.preventInteractionOnTransition) || (!f && !i && !n))
                    return !1;
                const m = Math.min(r.params.slidesPerGroupSkip, a);
                let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
                g >= o.length && (g = o.length - 1),
                    (p || l.initialSlide || 0) === (c || 0) &&
                    s &&
                    r.emit("beforeSlideChangeStart");
                const v = -o[g];
                if ((r.updateProgress(v), l.normalizeSlideIndex))
                    for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * v),
                            s = Math.floor(100 * d[e]),
                            i = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1]
                            ? t >= s && t < i - (i - s) / 2
                                ? (a = e)
                                : t >= s && t < i && (a = e + 1)
                            : t >= s && (a = e);
                    }
                if (r.initialized && a !== p) {
                    if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                        return !1;
                    if (
                        !r.allowSlidePrev &&
                        v > r.translate &&
                        v > r.maxTranslate() &&
                        (p || 0) !== a
                    )
                        return !1;
                }
                let b;
                if (
                    ((b = a > p ? "next" : a < p ? "prev" : "reset"),
                        (u && -v === r.translate) || (!u && v === r.translate))
                )
                    return (
                        r.updateActiveIndex(a),
                        l.autoHeight && r.updateAutoHeight(),
                        r.updateSlidesClasses(),
                        "slide" !== l.effect && r.setTranslate(v),
                        "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
                        !1
                    );
                if (l.cssMode) {
                    const e = r.isHorizontal(),
                        s = u ? v : -v;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t &&
                            ((r.wrapperEl.style.scrollSnapType = "none"),
                                (r._immediateVirtual = !0)),
                            (h[e ? "scrollLeft" : "scrollTop"] = s),
                            t &&
                            requestAnimationFrame(() => {
                                (r.wrapperEl.style.scrollSnapType = ""),
                                    (r._swiperImmediateVirtual = !1);
                            });
                    } else {
                        if (!r.support.smoothScroll)
                            return (
                                C({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
                            );
                        h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
                    }
                    return !0;
                }
                return (
                    0 === t
                        ? (r.setTransition(0),
                            r.setTranslate(v),
                            r.updateActiveIndex(a),
                            r.updateSlidesClasses(),
                            r.emit("beforeTransitionStart", t, i),
                            r.transitionStart(s, b),
                            r.transitionEnd(s, b))
                        : (r.setTransition(t),
                            r.setTranslate(v),
                            r.updateActiveIndex(a),
                            r.updateSlidesClasses(),
                            r.emit("beforeTransitionStart", t, i),
                            r.transitionStart(s, b),
                            r.animating ||
                            ((r.animating = !0),
                                r.onSlideToWrapperTransitionEnd ||
                                (r.onSlideToWrapperTransitionEnd = function (e) {
                                    r &&
                                        !r.destroyed &&
                                        e.target === this &&
                                        (r.$wrapperEl[0].removeEventListener(
                                            "transitionend",
                                            r.onSlideToWrapperTransitionEnd
                                        ),
                                            r.$wrapperEl[0].removeEventListener(
                                                "webkitTransitionEnd",
                                                r.onSlideToWrapperTransitionEnd
                                            ),
                                            (r.onSlideToWrapperTransitionEnd = null),
                                            delete r.onSlideToWrapperTransitionEnd,
                                            r.transitionEnd(s, b));
                                }),
                                r.$wrapperEl[0].addEventListener(
                                    "transitionend",
                                    r.onSlideToWrapperTransitionEnd
                                ),
                                r.$wrapperEl[0].addEventListener(
                                    "webkitTransitionEnd",
                                    r.onSlideToWrapperTransitionEnd
                                ))),
                    !0
                );
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
                const n = this;
                let r = e;
                return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
                const i = this,
                    { animating: n, enabled: r, params: a } = i;
                if (!r) return i;
                let l = a.slidesPerGroup;
                "auto" === a.slidesPerView &&
                    1 === a.slidesPerGroup &&
                    a.slidesPerGroupAuto &&
                    (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const o = i.activeIndex < a.slidesPerGroupSkip ? 1 : l;
                if (a.loop) {
                    if (n && a.loopPreventsSlide) return !1;
                    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                }
                return i.slideTo(i.activeIndex + o, e, t, s);
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
                const i = this,
                    {
                        params: n,
                        animating: r,
                        snapGrid: a,
                        slidesGrid: l,
                        rtlTranslate: o,
                        enabled: d,
                    } = i;
                if (!d) return i;
                if (n.loop) {
                    if (r && n.loopPreventsSlide) return !1;
                    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                }
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                const p = c(o ? i.translate : -i.translate),
                    u = a.map((e) => c(e));
                let h = a[u.indexOf(p) - 1];
                if (void 0 === h && n.cssMode) {
                    let e;
                    a.forEach((t, s) => {
                        p >= t && (e = s);
                    }),
                        void 0 !== e && (h = a[e > 0 ? e - 1 : e]);
                }
                let f = 0;
                return (
                    void 0 !== h &&
                    ((f = l.indexOf(h)),
                        f < 0 && (f = i.activeIndex - 1),
                        "auto" === n.slidesPerView &&
                        1 === n.slidesPerGroup &&
                        n.slidesPerGroupAuto &&
                        ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
                            (f = Math.max(f, 0)))),
                    i.slideTo(f, e, t, s)
                );
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
                return this.slideTo(this.activeIndex, e, t, s);
            },
            slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
                const n = this;
                let r = n.activeIndex;
                const a = Math.min(n.params.slidesPerGroupSkip, r),
                    l = a + Math.floor((r - a) / n.params.slidesPerGroup),
                    o = n.rtlTranslate ? n.translate : -n.translate;
                if (o >= n.snapGrid[l]) {
                    const e = n.snapGrid[l];
                    o - e > (n.snapGrid[l + 1] - e) * i && (r += n.params.slidesPerGroup);
                } else {
                    const e = n.snapGrid[l - 1];
                    o - e <= (n.snapGrid[l] - e) * i && (r -= n.params.slidesPerGroup);
                }
                return (
                    (r = Math.max(r, 0)),
                    (r = Math.min(r, n.slidesGrid.length - 1)),
                    n.slideTo(r, e, t, s)
                );
            },
            slideToClickedSlide: function () {
                const e = this,
                    { params: t, $wrapperEl: s } = e,
                    i =
                        "auto" === t.slidesPerView
                            ? e.slidesPerViewDynamic()
                            : t.slidesPerView;
                let n,
                    r = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    (n = parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        t.centeredSlides
                            ? r < e.loopedSlides - i / 2 ||
                                r > e.slides.length - e.loopedSlides + i / 2
                                ? (e.loopFix(),
                                    (r = s
                                        .children(
                                            `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                                        )
                                        .eq(0)
                                        .index()),
                                    g(() => {
                                        e.slideTo(r);
                                    }))
                                : e.slideTo(r)
                            : r > e.slides.length - i
                                ? (e.loopFix(),
                                    (r = s
                                        .children(
                                            `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                                        )
                                        .eq(0)
                                        .index()),
                                    g(() => {
                                        e.slideTo(r);
                                    }))
                                : e.slideTo(r);
                } else e.slideTo(r);
            },
        };
        const z = {
            loopCreate: function () {
                const e = this,
                    t = r(),
                    { params: s, $wrapperEl: i } = e,
                    n = i.children().length > 0 ? m(i.children()[0].parentNode) : i;
                n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                let a = n.children(`.${s.slideClass}`);
                if (s.loopFillGroupWithBlank) {
                    const e = s.slidesPerGroup - (a.length % s.slidesPerGroup);
                    if (e !== s.slidesPerGroup) {
                        for (let i = 0; i < e; i += 1) {
                            const e = m(t.createElement("div")).addClass(
                                `${s.slideClass} ${s.slideBlankClass}`
                            );
                            n.append(e);
                        }
                        a = n.children(`.${s.slideClass}`);
                    }
                }
                "auto" !== s.slidesPerView ||
                    s.loopedSlides ||
                    (s.loopedSlides = a.length),
                    (e.loopedSlides = Math.ceil(
                        parseFloat(s.loopedSlides || s.slidesPerView, 10)
                    )),
                    (e.loopedSlides += s.loopAdditionalSlides),
                    e.loopedSlides > a.length && (e.loopedSlides = a.length);
                const l = [],
                    o = [];
                a.each((t, s) => {
                    const i = m(t);
                    s < e.loopedSlides && o.push(t),
                        s < a.length && s >= a.length - e.loopedSlides && l.push(t),
                        i.attr("data-swiper-slide-index", s);
                });
                for (let e = 0; e < o.length; e += 1)
                    n.append(m(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                for (let e = l.length - 1; e >= 0; e -= 1)
                    n.prepend(m(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            },
            loopFix: function () {
                const e = this;
                e.emit("beforeLoopFix");
                const {
                    activeIndex: t,
                    slides: s,
                    loopedSlides: i,
                    allowSlidePrev: n,
                    allowSlideNext: r,
                    snapGrid: a,
                    rtlTranslate: l,
                } = e;
                let o;
                (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                const d = -a[t] - e.getTranslate();
                if (t < i) {
                    (o = s.length - 3 * i + t), (o += i);
                    e.slideTo(o, 0, !1, !0) &&
                        0 !== d &&
                        e.setTranslate((l ? -e.translate : e.translate) - d);
                } else if (t >= s.length - i) {
                    (o = -s.length + t + i), (o += i);
                    e.slideTo(o, 0, !1, !0) &&
                        0 !== d &&
                        e.setTranslate((l ? -e.translate : e.translate) - d);
                }
                (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
            },
            loopDestroy: function () {
                const { $wrapperEl: e, params: t, slides: s } = this;
                e
                    .children(
                        `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                    )
                    .remove(),
                    s.removeAttr("data-swiper-slide-index");
            },
        };
        function I(e) {
            const t = this,
                s = r(),
                i = l(),
                n = t.touchEventsData,
                { params: a, touches: o, enabled: d } = t;
            if (!d) return;
            if (t.animating && a.preventInteractionOnTransition) return;
            !t.animating && a.cssMode && a.loop && t.loopFix();
            let c = e;
            c.originalEvent && (c = c.originalEvent);
            let p = m(c.target);
            if ("wrapper" === a.touchEventsTarget && !p.closest(t.wrapperEl).length)
                return;
            if (
                ((n.isTouchEvent = "touchstart" === c.type),
                    !n.isTouchEvent && "which" in c && 3 === c.which)
            )
                return;
            if (!n.isTouchEvent && "button" in c && c.button > 0) return;
            if (n.isTouched && n.isMoved) return;
            !!a.noSwipingClass &&
                "" !== a.noSwipingClass &&
                c.target &&
                c.target.shadowRoot &&
                e.path &&
                e.path[0] &&
                (p = m(e.path[0]));
            const u = a.noSwipingSelector
                ? a.noSwipingSelector
                : `.${a.noSwipingClass}`,
                h = !(!c.target || !c.target.shadowRoot);
            if (
                a.noSwiping &&
                (h
                    ? (function (e, t = this) {
                        return (function t(s) {
                            return s && s !== r() && s !== l()
                                ? (s.assignedSlot && (s = s.assignedSlot),
                                    s.closest(e) || t(s.getRootNode().host))
                                : null;
                        })(t);
                    })(u, c.target)
                    : p.closest(u)[0])
            )
                return void (t.allowClick = !0);
            if (a.swipeHandler && !p.closest(a.swipeHandler)[0]) return;
            (o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
                (o.currentY =
                    "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
            const f = o.currentX,
                g = o.currentY,
                b = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                w = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
            if (b && (f <= w || f >= i.innerWidth - w)) {
                if ("prevent" !== b) return;
                e.preventDefault();
            }
            if (
                (Object.assign(n, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                }),
                    (o.startX = f),
                    (o.startY = g),
                    (n.touchStartTime = v()),
                    (t.allowClick = !0),
                    t.updateSize(),
                    (t.swipeDirection = void 0),
                    a.threshold > 0 && (n.allowThresholdMove = !1),
                    "touchstart" !== c.type)
            ) {
                let e = !0;
                p.is(n.focusableElements) && (e = !1),
                    s.activeElement &&
                    m(s.activeElement).is(n.focusableElements) &&
                    s.activeElement !== p[0] &&
                    s.activeElement.blur();
                const i = e && t.allowTouchMove && a.touchStartPreventDefault;
                (!a.touchStartForcePreventDefault && !i) ||
                    p[0].isContentEditable ||
                    c.preventDefault();
            }
            t.emit("touchStart", c);
        }
        function B(e) {
            const t = r(),
                s = this,
                i = s.touchEventsData,
                { params: n, touches: a, rtlTranslate: l, enabled: o } = s;
            if (!o) return;
            let d = e;
            if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
                return void (
                    i.startMoving &&
                    i.isScrolling &&
                    s.emit("touchMoveOpposite", d)
                );
            if (i.isTouchEvent && "touchmove" !== d.type) return;
            const c =
                "touchmove" === d.type &&
                d.targetTouches &&
                (d.targetTouches[0] || d.changedTouches[0]),
                p = "touchmove" === d.type ? c.pageX : d.pageX,
                u = "touchmove" === d.type ? c.pageY : d.pageY;
            if (d.preventedByNestedSwiper) return (a.startX = p), void (a.startY = u);
            if (!s.allowTouchMove)
                return (
                    (s.allowClick = !1),
                    void (
                        i.isTouched &&
                        (Object.assign(a, { startX: p, startY: u, currentX: p, currentY: u }),
                            (i.touchStartTime = v()))
                    )
                );
            if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                if (s.isVertical()) {
                    if (
                        (u < a.startY && s.translate <= s.maxTranslate()) ||
                        (u > a.startY && s.translate >= s.minTranslate())
                    )
                        return (i.isTouched = !1), void (i.isMoved = !1);
                } else if (
                    (p < a.startX && s.translate <= s.maxTranslate()) ||
                    (p > a.startX && s.translate >= s.minTranslate())
                )
                    return;
            if (
                i.isTouchEvent &&
                t.activeElement &&
                d.target === t.activeElement &&
                m(d.target).is(i.focusableElements)
            )
                return (i.isMoved = !0), void (s.allowClick = !1);
            if (
                (i.allowTouchCallbacks && s.emit("touchMove", d),
                    d.targetTouches && d.targetTouches.length > 1)
            )
                return;
            (a.currentX = p), (a.currentY = u);
            const h = a.currentX - a.startX,
                f = a.currentY - a.startY;
            if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
                return;
            if (void 0 === i.isScrolling) {
                let e;
                (s.isHorizontal() && a.currentY === a.startY) ||
                    (s.isVertical() && a.currentX === a.startX)
                    ? (i.isScrolling = !1)
                    : h * h + f * f >= 25 &&
                    ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
                        (i.isScrolling = s.isHorizontal()
                            ? e > n.touchAngle
                            : 90 - e > n.touchAngle));
            }
            if (
                (i.isScrolling && s.emit("touchMoveOpposite", d),
                    void 0 === i.startMoving &&
                    ((a.currentX === a.startX && a.currentY === a.startY) ||
                        (i.startMoving = !0)),
                    i.isScrolling)
            )
                return void (i.isTouched = !1);
            if (!i.startMoving) return;
            (s.allowClick = !1),
                !n.cssMode && d.cancelable && d.preventDefault(),
                n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
                i.isMoved ||
                (n.loop && !n.cssMode && s.loopFix(),
                    (i.startTranslate = s.getTranslate()),
                    s.setTransition(0),
                    s.animating &&
                    s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (i.allowMomentumBounce = !1),
                    !n.grabCursor ||
                    (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
                    s.setGrabCursor(!0),
                    s.emit("sliderFirstMove", d)),
                s.emit("sliderMove", d),
                (i.isMoved = !0);
            let g = s.isHorizontal() ? h : f;
            (a.diff = g),
                (g *= n.touchRatio),
                l && (g = -g),
                (s.swipeDirection = g > 0 ? "prev" : "next"),
                (i.currentTranslate = g + i.startTranslate);
            let b = !0,
                w = n.resistanceRatio;
            if (
                (n.touchReleaseOnEdges && (w = 0),
                    g > 0 && i.currentTranslate > s.minTranslate()
                        ? ((b = !1),
                            n.resistance &&
                            (i.currentTranslate =
                                s.minTranslate() -
                                1 +
                                (-s.minTranslate() + i.startTranslate + g) ** w))
                        : g < 0 &&
                        i.currentTranslate < s.maxTranslate() &&
                        ((b = !1),
                            n.resistance &&
                            (i.currentTranslate =
                                s.maxTranslate() +
                                1 -
                                (s.maxTranslate() - i.startTranslate - g) ** w)),
                    b && (d.preventedByNestedSwiper = !0),
                    !s.allowSlideNext &&
                    "next" === s.swipeDirection &&
                    i.currentTranslate < i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                    !s.allowSlidePrev &&
                    "prev" === s.swipeDirection &&
                    i.currentTranslate > i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                    s.allowSlidePrev ||
                    s.allowSlideNext ||
                    (i.currentTranslate = i.startTranslate),
                    n.threshold > 0)
            ) {
                if (!(Math.abs(g) > n.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                    return (
                        (i.allowThresholdMove = !0),
                        (a.startX = a.currentX),
                        (a.startY = a.currentY),
                        (i.currentTranslate = i.startTranslate),
                        void (a.diff = s.isHorizontal()
                            ? a.currentX - a.startX
                            : a.currentY - a.startY)
                    );
            }
            n.followFinger &&
                !n.cssMode &&
                (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
                    n.watchSlidesProgress) &&
                    (s.updateActiveIndex(), s.updateSlidesClasses()),
                    s.params.freeMode &&
                    n.freeMode.enabled &&
                    s.freeMode &&
                    s.freeMode.onTouchMove(),
                    s.updateProgress(i.currentTranslate),
                    s.setTranslate(i.currentTranslate));
        }
        function D(e) {
            const t = this,
                s = t.touchEventsData,
                { params: i, touches: n, rtlTranslate: r, slidesGrid: a, enabled: l } = t;
            if (!l) return;
            let o = e;
            if (
                (o.originalEvent && (o = o.originalEvent),
                    s.allowTouchCallbacks && t.emit("touchEnd", o),
                    (s.allowTouchCallbacks = !1),
                    !s.isTouched)
            )
                return (
                    s.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    (s.isMoved = !1),
                    void (s.startMoving = !1)
                );
            i.grabCursor &&
                s.isMoved &&
                s.isTouched &&
                (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                t.setGrabCursor(!1);
            const d = v(),
                c = d - s.touchStartTime;
            if (t.allowClick) {
                const e = o.path || (o.composedPath && o.composedPath());
                t.updateClickedSlide((e && e[0]) || o.target),
                    t.emit("tap click", o),
                    c < 300 &&
                    d - s.lastClickTime < 300 &&
                    t.emit("doubleTap doubleClick", o);
            }
            if (
                ((s.lastClickTime = v()),
                    g(() => {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !s.isTouched ||
                    !s.isMoved ||
                    !t.swipeDirection ||
                    0 === n.diff ||
                    s.currentTranslate === s.startTranslate)
            )
                return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
            let p;
            if (
                ((s.isTouched = !1),
                    (s.isMoved = !1),
                    (s.startMoving = !1),
                    (p = i.followFinger
                        ? r
                            ? t.translate
                            : -t.translate
                        : -s.currentTranslate),
                    i.cssMode)
            )
                return;
            if (t.params.freeMode && i.freeMode.enabled)
                return void t.freeMode.onTouchEnd({ currentPos: p });
            let u = 0,
                h = t.slidesSizesGrid[0];
            for (
                let e = 0;
                e < a.length;
                e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
            ) {
                const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== a[e + t]
                    ? p >= a[e] && p < a[e + t] && ((u = e), (h = a[e + t] - a[e]))
                    : p >= a[e] && ((u = e), (h = a[a.length - 1] - a[a.length - 2]));
            }
            const f = (p - a[u]) / h,
                m = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (c > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                    (f >= i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u)),
                    "prev" === t.swipeDirection &&
                    (f > 1 - i.longSwipesRatio ? t.slideTo(u + m) : t.slideTo(u));
            } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                    (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
                    ? o.target === t.navigation.nextEl
                        ? t.slideTo(u + m)
                        : t.slideTo(u)
                    : ("next" === t.swipeDirection && t.slideTo(u + m),
                        "prev" === t.swipeDirection && t.slideTo(u));
            }
        }
        function G() {
            const e = this,
                { params: t, el: s } = e;
            if (s && 0 === s.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
            (e.allowSlideNext = !0),
                (e.allowSlidePrev = !0),
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.isBeginning &&
                    !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0),
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                (e.allowSlidePrev = n),
                (e.allowSlideNext = i),
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
        function N(e) {
            const t = this;
            t.enabled &&
                (t.allowClick ||
                    (t.params.preventClicks && e.preventDefault(),
                        t.params.preventClicksPropagation &&
                        t.animating &&
                        (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function H() {
            const e = this,
                { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
            if (!i) return;
            let n;
            (e.previousTranslate = e.translate),
                e.isHorizontal()
                    ? (e.translate = -t.scrollLeft)
                    : (e.translate = -t.scrollTop),
                -0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            const r = e.maxTranslate() - e.minTranslate();
            (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
                n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
                e.emit("setTranslate", e.translate, !1);
        }
        let V = !1;
        function j() { }
        const q = (e, t) => {
            const s = r(),
                {
                    params: i,
                    touchEvents: n,
                    el: a,
                    wrapperEl: l,
                    device: o,
                    support: d,
                } = e,
                c = !!i.nested,
                p = "on" === t ? "addEventListener" : "removeEventListener",
                u = t;
            if (d.touch) {
                const t = !(
                    "touchstart" !== n.start ||
                    !d.passiveListener ||
                    !i.passiveListeners
                ) && { passive: !0, capture: !1 };
                a[p](n.start, e.onTouchStart, t),
                    a[p](
                        n.move,
                        e.onTouchMove,
                        d.passiveListener ? { passive: !1, capture: c } : c
                    ),
                    a[p](n.end, e.onTouchEnd, t),
                    n.cancel && a[p](n.cancel, e.onTouchEnd, t);
            } else
                a[p](n.start, e.onTouchStart, !1),
                    s[p](n.move, e.onTouchMove, c),
                    s[p](n.end, e.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) &&
                a[p]("click", e.onClick, !0),
                i.cssMode && l[p]("scroll", e.onScroll),
                i.updateOnWindowResize
                    ? e[u](
                        o.ios || o.android
                            ? "resize orientationchange observerUpdate"
                            : "resize observerUpdate",
                        G,
                        !0
                    )
                    : e[u]("observerUpdate", G, !0);
        };
        const F = {
            attachEvents: function () {
                const e = this,
                    t = r(),
                    { params: s, support: i } = e;
                (e.onTouchStart = I.bind(e)),
                    (e.onTouchMove = B.bind(e)),
                    (e.onTouchEnd = D.bind(e)),
                    s.cssMode && (e.onScroll = H.bind(e)),
                    (e.onClick = N.bind(e)),
                    i.touch && !V && (t.addEventListener("touchstart", j), (V = !0)),
                    q(e, "on");
            },
            detachEvents: function () {
                q(this, "off");
            },
        },
            R = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        const W = {
            setBreakpoint: function () {
                const e = this,
                    {
                        activeIndex: t,
                        initialized: s,
                        loopedSlides: i = 0,
                        params: n,
                        $el: r,
                    } = e,
                    a = n.breakpoints;
                if (!a || (a && 0 === Object.keys(a).length)) return;
                const l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in a ? a[l] : void 0) || e.originalParams,
                    d = R(e, n),
                    c = R(e, o),
                    p = n.enabled;
                d && !c
                    ? (r.removeClass(
                        `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
                    ),
                        e.emitContainerClasses())
                    : !d &&
                    c &&
                    (r.addClass(`${n.containerModifierClass}grid`),
                        ((o.grid.fill && "column" === o.grid.fill) ||
                            (!o.grid.fill && "column" === n.grid.fill)) &&
                        r.addClass(`${n.containerModifierClass}grid-column`),
                        e.emitContainerClasses());
                const u = o.direction && o.direction !== n.direction,
                    h = n.loop && (o.slidesPerView !== n.slidesPerView || u);
                u && s && e.changeDirection(), y(e.params, o);
                const f = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                }),
                    p && !f ? e.disable() : !p && f && e.enable(),
                    (e.currentBreakpoint = l),
                    e.emit("_beforeBreakpoint", o),
                    h &&
                    s &&
                    (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - i + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", o);
            },
            getBreakpoint: function (e, t = "window", s) {
                if (!e || ("container" === t && !s)) return;
                let i = !1;
                const n = l(),
                    r = "window" === t ? n.innerHeight : s.clientHeight,
                    a = Object.keys(e).map((e) => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return { value: r * t, point: e };
                        }
                        return { value: e, point: e };
                    });
                a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < a.length; e += 1) {
                    const { point: r, value: l } = a[e];
                    "window" === t
                        ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = r)
                        : l <= s.clientWidth && (i = r);
                }
                return i || "max";
            },
        };
        const X = {
            addClasses: function () {
                const e = this,
                    { classNames: t, params: s, rtl: i, $el: n, device: r, support: a } = e,
                    l = (function (e, t) {
                        const s = [];
                        return (
                            e.forEach((e) => {
                                "object" == typeof e
                                    ? Object.keys(e).forEach((i) => {
                                        e[i] && s.push(t + i);
                                    })
                                    : "string" == typeof e && s.push(t + e);
                            }),
                            s
                        );
                    })(
                        [
                            "initialized",
                            s.direction,
                            { "pointer-events": !a.touch },
                            { "free-mode": e.params.freeMode && s.freeMode.enabled },
                            { autoheight: s.autoHeight },
                            { rtl: i },
                            { grid: s.grid && s.grid.rows > 1 },
                            {
                                "grid-column":
                                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                            },
                            { android: r.android },
                            { ios: r.ios },
                            { "css-mode": s.cssMode },
                            { centered: s.cssMode && s.centeredSlides },
                        ],
                        s.containerModifierClass
                    );
                t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses();
            },
            removeClasses: function () {
                const { $el: e, classNames: t } = this;
                e.removeClass(t.join(" ")), this.emitContainerClasses();
            },
        };
        const Y = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        };
        function U(e, t) {
            return function (s = {}) {
                const i = Object.keys(s)[0],
                    n = s[i];
                "object" == typeof n && null !== n
                    ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                        !0 === e[i] &&
                        (e[i] = { auto: !0 }),
                        i in e && "enabled" in n
                            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                                "object" != typeof e[i] ||
                                "enabled" in e[i] ||
                                (e[i].enabled = !0),
                                e[i] || (e[i] = { enabled: !1 }),
                                y(t, s))
                            : y(t, s))
                    : y(t, s);
            };
        }
        const K = {
            eventsEmitter: k,
            update: L,
            translate: O,
            transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e),
                        s.emit("setTransition", e, t);
                },
                transitionStart: function (e = !0, t) {
                    const s = this,
                        { params: i } = s;
                    i.cssMode ||
                        (i.autoHeight && s.updateAutoHeight(),
                            A({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
                },
                transitionEnd: function (e = !0, t) {
                    const s = this,
                        { params: i } = s;
                    (s.animating = !1),
                        i.cssMode ||
                        (s.setTransition(0),
                            A({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
                },
            },
            slide: _,
            loop: z,
            grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (
                        t.support.touch ||
                        !t.params.simulateTouch ||
                        (t.params.watchOverflow && t.isLocked) ||
                        t.params.cssMode
                    )
                        return;
                    const s =
                        "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    (s.style.cursor = "move"),
                        (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                        (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                        (s.style.cursor = e ? "grabbing" : "grab");
                },
                unsetGrabCursor: function () {
                    const e = this;
                    e.support.touch ||
                        (e.params.watchOverflow && e.isLocked) ||
                        e.params.cssMode ||
                        (e[
                            "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
                        ].style.cursor = "");
                },
            },
            events: F,
            breakpoints: W,
            checkOverflow: {
                checkOverflow: function () {
                    const e = this,
                        { isLocked: t, params: s } = e,
                        { slidesOffsetBefore: i } = s;
                    if (i) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > s;
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                        !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                        t && t !== e.isLocked && (e.isEnd = !1),
                        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
                },
            },
            classes: X,
            images: {
                loadImage: function (e, t, s, i, n, r) {
                    const a = l();
                    let o;
                    function d() {
                        r && r();
                    }
                    m(e).parent("picture")[0] || (e.complete && n)
                        ? d()
                        : t
                            ? ((o = new a.Image()),
                                (o.onload = d),
                                (o.onerror = d),
                                i && (o.sizes = i),
                                s && (o.srcset = s),
                                t && (o.src = t))
                            : d();
                },
                preloadImages: function () {
                    const e = this;
                    function t() {
                        null != e &&
                            e &&
                            !e.destroyed &&
                            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                                e.imagesLoaded === e.imagesToLoad.length &&
                                (e.params.updateOnImagesReady && e.update(),
                                    e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const i = e.imagesToLoad[s];
                        e.loadImage(
                            i,
                            i.currentSrc || i.getAttribute("src"),
                            i.srcset || i.getAttribute("srcset"),
                            i.sizes || i.getAttribute("sizes"),
                            !0,
                            t
                        );
                    }
                },
            },
        },
            J = {};
        class Q {
            constructor(...e) {
                let t, s;
                if (
                    (1 === e.length &&
                        e[0].constructor &&
                        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
                        ? (s = e[0])
                        : ([t, s] = e),
                        s || (s = {}),
                        (s = y({}, s)),
                        t && !s.el && (s.el = t),
                        s.el && m(s.el).length > 1)
                ) {
                    const e = [];
                    return (
                        m(s.el).each((t) => {
                            const i = y({}, s, { el: t });
                            e.push(new Q(i));
                        }),
                        e
                    );
                }
                const i = this;
                (i.__swiper__ = !0),
                    (i.support = M()),
                    (i.device = $({ userAgent: s.userAgent })),
                    (i.browser = P()),
                    (i.eventsListeners = {}),
                    (i.eventsAnyListeners = []),
                    (i.modules = [...i.__modules__]),
                    s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
                const n = {};
                i.modules.forEach((e) => {
                    e({
                        swiper: i,
                        extendParams: U(s, n),
                        on: i.on.bind(i),
                        once: i.once.bind(i),
                        off: i.off.bind(i),
                        emit: i.emit.bind(i),
                    });
                });
                const r = y({}, Y, n);
                return (
                    (i.params = y({}, r, J, s)),
                    (i.originalParams = y({}, i.params)),
                    (i.passedParams = y({}, s)),
                    i.params &&
                    i.params.on &&
                    Object.keys(i.params.on).forEach((e) => {
                        i.on(e, i.params.on[e]);
                    }),
                    i.params && i.params.onAny && i.onAny(i.params.onAny),
                    (i.$ = m),
                    Object.assign(i, {
                        enabled: i.params.enabled,
                        el: t,
                        classNames: [],
                        slides: m(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === i.params.direction,
                        isVertical: () => "vertical" === i.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: i.params.allowSlideNext,
                        allowSlidePrev: i.params.allowSlidePrev,
                        touchEvents: (function () {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return (
                                (i.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2],
                                    cancel: e[3],
                                }),
                                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                                i.support.touch || !i.params.simulateTouch
                                    ? i.touchEventsTouch
                                    : i.touchEventsDesktop
                            );
                        })(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: i.params.focusableElements,
                            lastClickTime: v(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: i.params.allowTouchMove,
                        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    i.emit("_swiper"),
                    i.params.init && i.init(),
                    i
                );
            }
            enable() {
                const e = this;
                e.enabled ||
                    ((e.enabled = !0),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.emit("enable"));
            }
            disable() {
                const e = this;
                e.enabled &&
                    ((e.enabled = !1),
                        e.params.grabCursor && e.unsetGrabCursor(),
                        e.emit("disable"));
            }
            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const i = s.minTranslate(),
                    n = (s.maxTranslate() - i) * e + i;
                s.translateTo(n, void 0 === t ? 0 : t),
                    s.updateActiveIndex(),
                    s.updateSlidesClasses();
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className
                    .split(" ")
                    .filter(
                        (t) =>
                            0 === t.indexOf("swiper") ||
                            0 === t.indexOf(e.params.containerModifierClass)
                    );
                e.emit("_containerClasses", t.join(" "));
            }
            getSlideClasses(e) {
                const t = this;
                return e.className
                    .split(" ")
                    .filter(
                        (e) =>
                            0 === e.indexOf("swiper-slide") ||
                            0 === e.indexOf(t.params.slideClass)
                    )
                    .join(" ");
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((s) => {
                    const i = e.getSlideClasses(s);
                    t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
                }),
                    e.emit("_slideClasses", t);
            }
            slidesPerViewDynamic(e = "current", t = !1) {
                const {
                    params: s,
                    slides: i,
                    slidesGrid: n,
                    slidesSizesGrid: r,
                    size: a,
                    activeIndex: l,
                } = this;
                let o = 1;
                if (s.centeredSlides) {
                    let e,
                        t = i[l].swiperSlideSize;
                    for (let s = l + 1; s < i.length; s += 1)
                        i[s] &&
                            !e &&
                            ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
                    for (let s = l - 1; s >= 0; s -= 1)
                        i[s] &&
                            !e &&
                            ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
                } else if ("current" === e)
                    for (let e = l + 1; e < i.length; e += 1) {
                        (t ? n[e] + r[e] - n[l] < a : n[e] - n[l] < a) && (o += 1);
                    }
                else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        n[l] - n[e] < a && (o += 1);
                    }
                return o;
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const { snapGrid: t, params: s } = e;
                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
                }
                let n;
                s.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode && e.params.freeMode.enabled
                        ? (i(), e.params.autoHeight && e.updateAutoHeight())
                        : ((n =
                            ("auto" === e.params.slidesPerView ||
                                e.params.slidesPerView > 1) &&
                                e.isEnd &&
                                !e.params.centeredSlides
                                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                                : e.slideTo(e.activeIndex, 0, !1, !0)),
                            n || i()),
                    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update");
            }
            changeDirection(e, t = !0) {
                const s = this,
                    i = s.params.direction;
                return (
                    e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                    e === i ||
                    ("horizontal" !== e && "vertical" !== e) ||
                    (s.$el
                        .removeClass(`${s.params.containerModifierClass}${i}`)
                        .addClass(`${s.params.containerModifierClass}${e}`),
                        s.emitContainerClasses(),
                        (s.params.direction = e),
                        s.slides.each((t) => {
                            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                        }),
                        s.emit("changeDirection"),
                        t && s.update()),
                    s
                );
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const s = m(e || t.params.el);
                if (!(e = s[0])) return !1;
                e.swiper = t;
                const i = () =>
                    `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let n = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = m(e.shadowRoot.querySelector(i()));
                        return (t.children = (e) => s.children(e)), t;
                    }
                    return s.children(i());
                })();
                if (0 === n.length && t.params.createElements) {
                    const e = r().createElement("div");
                    (n = m(e)),
                        (e.className = t.params.wrapperClass),
                        s.append(e),
                        s.children(`.${t.params.slideClass}`).each((e) => {
                            n.append(e);
                        });
                }
                return (
                    Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: n,
                        wrapperEl: n[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate:
                            "horizontal" === t.params.direction &&
                            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === n.css("display"),
                    }),
                    !0
                );
            }
            init(e) {
                const t = this;
                if (t.initialized) return t;
                return (
                    !1 === t.mount(e) ||
                    (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                            ? t.slideTo(
                                t.params.initialSlide + t.loopedSlides,
                                0,
                                t.params.runCallbacksOnInit,
                                !1,
                                !0
                            )
                            : t.slideTo(
                                t.params.initialSlide,
                                0,
                                t.params.runCallbacksOnInit,
                                !1,
                                !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                    t
                );
            }
            destroy(e = !0, t = !0) {
                const s = this,
                    { params: i, $el: n, $wrapperEl: r, slides: a } = s;
                return (
                    void 0 === s.params ||
                    s.destroyed ||
                    (s.emit("beforeDestroy"),
                        (s.initialized = !1),
                        s.detachEvents(),
                        i.loop && s.loopDestroy(),
                        t &&
                        (s.removeClasses(),
                            n.removeAttr("style"),
                            r.removeAttr("style"),
                            a &&
                            a.length &&
                            a
                                .removeClass(
                                    [
                                        i.slideVisibleClass,
                                        i.slideActiveClass,
                                        i.slideNextClass,
                                        i.slidePrevClass,
                                    ].join(" ")
                                )
                                .removeAttr("style")
                                .removeAttr("data-swiper-slide-index")),
                        s.emit("destroy"),
                        Object.keys(s.eventsListeners).forEach((e) => {
                            s.off(e);
                        }),
                        !1 !== e &&
                        ((s.$el[0].swiper = null),
                            (function (e) {
                                const t = e;
                                Object.keys(t).forEach((e) => {
                                    try {
                                        t[e] = null;
                                    } catch (e) { }
                                    try {
                                        delete t[e];
                                    } catch (e) { }
                                });
                            })(s)),
                        (s.destroyed = !0)),
                    null
                );
            }
            static extendDefaults(e) {
                y(J, e);
            }
            static get extendedDefaults() {
                return J;
            }
            static get defaults() {
                return Y;
            }
            static installModule(e) {
                Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
                const t = Q.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
            }
            static use(e) {
                return Array.isArray(e)
                    ? (e.forEach((e) => Q.installModule(e)), Q)
                    : (Q.installModule(e), Q);
            }
        }
        Object.keys(K).forEach((e) => {
            Object.keys(K[e]).forEach((t) => {
                Q.prototype[t] = K[e][t];
            });
        }),
            Q.use([
                function ({ swiper: e, on: t, emit: s }) {
                    const i = l();
                    let n = null;
                    const r = () => {
                        e &&
                            !e.destroyed &&
                            e.initialized &&
                            (s("beforeResize"), s("resize"));
                    },
                        a = () => {
                            e && !e.destroyed && e.initialized && s("orientationchange");
                        };
                    t("init", () => {
                        e.params.resizeObserver && void 0 !== i.ResizeObserver
                            ? e &&
                            !e.destroyed &&
                            e.initialized &&
                            ((n = new ResizeObserver((t) => {
                                const { width: s, height: i } = e;
                                let n = s,
                                    a = i;
                                t.forEach(
                                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                                        (i && i !== e.el) ||
                                            ((n = s ? s.width : (t[0] || t).inlineSize),
                                                (a = s ? s.height : (t[0] || t).blockSize));
                                    }
                                ),
                                    (n === s && a === i) || r();
                            })),
                                n.observe(e.el))
                            : (i.addEventListener("resize", r),
                                i.addEventListener("orientationchange", a));
                    }),
                        t("destroy", () => {
                            n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                                i.removeEventListener("resize", r),
                                i.removeEventListener("orientationchange", a);
                        });
                },
                function ({ swiper: e, extendParams: t, on: s, emit: i }) {
                    const n = [],
                        r = l(),
                        a = (e, t = {}) => {
                            const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                                (e) => {
                                    if (1 === e.length) return void i("observerUpdate", e[0]);
                                    const t = function () {
                                        i("observerUpdate", e[0]);
                                    };
                                    r.requestAnimationFrame
                                        ? r.requestAnimationFrame(t)
                                        : r.setTimeout(t, 0);
                                }
                            );
                            // s.observe(e, {
                            //     attributes: void 0 === t.attributes || t.attributes,
                            //     childList: void 0 === t.childList || t.childList,
                            //     characterData: void 0 === t.characterData || t.characterData,
                            // }),
                            n.push(s);
                        };
                    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                        s("init", () => {
                            if (e.params.observer) {
                                if (e.params.observeParents) {
                                    const t = e.$el.parents();
                                    for (let e = 0; e < t.length; e += 1) a(t[e]);
                                }
                                a(e.$el[0], { childList: e.params.observeSlideChildren }),
                                    a(e.$wrapperEl[0], { attributes: !1 });
                            }
                        }),
                        s("destroy", () => {
                            n.forEach((e) => {
                                e.disconnect();
                            }),
                                n.splice(0, n.length);
                        });
                },
            ]);
        const Z = Q;
        function ee(e, t, s, i) {
            const n = r();
            return (
                e.params.createElements &&
                Object.keys(i).forEach((r) => {
                    if (!s[r] && !0 === s.auto) {
                        let a = e.$el.children(`.${i[r]}`)[0];
                        a ||
                            ((a = n.createElement("div")),
                                (a.className = i[r]),
                                e.$el.append(a)),
                            (s[r] = a),
                            (t[r] = a);
                    }
                }),
                s
            );
        }
        function te({ swiper: e, extendParams: t, on: s, emit: i }) {
            function n(t) {
                let s;
                return (
                    t &&
                    ((s = m(t)),
                        e.params.uniqueNavElements &&
                        "string" == typeof t &&
                        s.length > 1 &&
                        1 === e.$el.find(t).length &&
                        (s = e.$el.find(t))),
                    s
                );
            }
            function r(t, s) {
                const i = e.params.navigation;
                t &&
                    t.length > 0 &&
                    (t[s ? "addClass" : "removeClass"](i.disabledClass),
                        t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
                        e.params.watchOverflow &&
                        e.enabled &&
                        t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
            }
            function a() {
                if (e.params.loop) return;
                const { $nextEl: t, $prevEl: s } = e.navigation;
                r(s, e.isBeginning), r(t, e.isEnd);
            }
            function l(t) {
                t.preventDefault(), (e.isBeginning && !e.params.loop) || e.slidePrev();
            }
            function o(t) {
                t.preventDefault(), (e.isEnd && !e.params.loop) || e.slideNext();
            }
            function d() {
                const t = e.params.navigation;
                if (
                    ((e.params.navigation = ee(
                        e,
                        e.originalParams.navigation,
                        e.params.navigation,
                        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
                    )),
                        !t.nextEl && !t.prevEl)
                )
                    return;
                const s = n(t.nextEl),
                    i = n(t.prevEl);
                s && s.length > 0 && s.on("click", o),
                    i && i.length > 0 && i.on("click", l),
                    Object.assign(e.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: i,
                        prevEl: i && i[0],
                    }),
                    e.enabled ||
                    (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass));
            }
            function c() {
                const { $nextEl: t, $prevEl: s } = e.navigation;
                t &&
                    t.length &&
                    (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)),
                    s &&
                    s.length &&
                    (s.off("click", l), s.removeClass(e.params.navigation.disabledClass));
            }
            t({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                },
            }),
                (e.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null,
                }),
                s("init", () => {
                    d(), a();
                }),
                s("toEdge fromEdge lock unlock", () => {
                    a();
                }),
                s("destroy", () => {
                    c();
                }),
                s("enable disable", () => {
                    const { $nextEl: t, $prevEl: s } = e.navigation;
                    t &&
                        t[e.enabled ? "removeClass" : "addClass"](
                            e.params.navigation.lockClass
                        ),
                        s &&
                        s[e.enabled ? "removeClass" : "addClass"](
                            e.params.navigation.lockClass
                        );
                }),
                s("click", (t, s) => {
                    const { $nextEl: n, $prevEl: r } = e.navigation,
                        a = s.target;
                    if (e.params.navigation.hideOnClick && !m(a).is(r) && !m(a).is(n)) {
                        if (
                            e.pagination &&
                            e.params.pagination &&
                            e.params.pagination.clickable &&
                            (e.pagination.el === a || e.pagination.el.contains(a))
                        )
                            return;
                        let t;
                        n
                            ? (t = n.hasClass(e.params.navigation.hiddenClass))
                            : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                            i(!0 === t ? "navigationShow" : "navigationHide"),
                            n && n.toggleClass(e.params.navigation.hiddenClass),
                            r && r.toggleClass(e.params.navigation.hiddenClass);
                    }
                }),
                Object.assign(e.navigation, { update: a, init: d, destroy: c });
        }
        function se(e = "") {
            return `.${e
                .trim()
                .replace(/([\.:!\/])/g, "\\$1")
                .replace(/ /g, ".")}`;
        }
        function ie({ swiper: e, extendParams: t, on: s, emit: i }) {
            const n = "swiper-pagination";
            let r;
            t({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (e) => e,
                    formatFractionTotal: (e) => e,
                    bulletClass: `${n}-bullet`,
                    bulletActiveClass: `${n}-bullet-active`,
                    modifierClass: `${n}-`,
                    currentClass: `${n}-current`,
                    totalClass: `${n}-total`,
                    hiddenClass: `${n}-hidden`,
                    progressbarFillClass: `${n}-progressbar-fill`,
                    progressbarOppositeClass: `${n}-progressbar-opposite`,
                    clickableClass: `${n}-clickable`,
                    lockClass: `${n}-lock`,
                    horizontalClass: `${n}-horizontal`,
                    verticalClass: `${n}-vertical`,
                },
            }),
                (e.pagination = { el: null, $el: null, bullets: [] });
            let a = 0;
            function l() {
                return (
                    !e.params.pagination.el ||
                    !e.pagination.el ||
                    !e.pagination.$el ||
                    0 === e.pagination.$el.length
                );
            }
            function o(t, s) {
                const { bulletActiveClass: i } = e.params.pagination;
                t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
            }
            function d() {
                const t = e.rtl,
                    s = e.params.pagination;
                if (l()) return;
                const n =
                    e.virtual && e.params.virtual.enabled
                        ? e.virtual.slides.length
                        : e.slides.length,
                    d = e.pagination.$el;
                let c;
                const p = e.params.loop
                    ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                    : e.snapGrid.length;
                if (
                    (e.params.loop
                        ? ((c = Math.ceil(
                            (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                        )),
                            c > n - 1 - 2 * e.loopedSlides && (c -= n - 2 * e.loopedSlides),
                            c > p - 1 && (c -= p),
                            c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
                        : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                        "bullets" === s.type &&
                        e.pagination.bullets &&
                        e.pagination.bullets.length > 0)
                ) {
                    const i = e.pagination.bullets;
                    let n, l, p;
                    if (
                        (s.dynamicBullets &&
                            ((r = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                d.css(
                                    e.isHorizontal() ? "width" : "height",
                                    r * (s.dynamicMainBullets + 4) + "px"
                                ),
                                s.dynamicMainBullets > 1 &&
                                void 0 !== e.previousIndex &&
                                ((a += c - e.previousIndex),
                                    a > s.dynamicMainBullets - 1
                                        ? (a = s.dynamicMainBullets - 1)
                                        : a < 0 && (a = 0)),
                                (n = c - a),
                                (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                                (p = (l + n) / 2)),
                            i.removeClass(
                                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                                    .map((e) => `${s.bulletActiveClass}${e}`)
                                    .join(" ")
                            ),
                            d.length > 1)
                    )
                        i.each((e) => {
                            const t = m(e),
                                i = t.index();
                            i === c && t.addClass(s.bulletActiveClass),
                                s.dynamicBullets &&
                                (i >= n && i <= l && t.addClass(`${s.bulletActiveClass}-main`),
                                    i === n && o(t, "prev"),
                                    i === l && o(t, "next"));
                        });
                    else {
                        const t = i.eq(c),
                            r = t.index();
                        if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                            const t = i.eq(n),
                                a = i.eq(l);
                            for (let e = n; e <= l; e += 1)
                                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                            if (e.params.loop)
                                if (r >= i.length - s.dynamicMainBullets) {
                                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                        i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                                        `${s.bulletActiveClass}-prev`
                                    );
                                } else o(t, "prev"), o(a, "next");
                            else o(t, "prev"), o(a, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        const n = Math.min(i.length, s.dynamicMainBullets + 4),
                            a = (r * n - r) / 2 - p * r,
                            l = t ? "right" : "left";
                        i.css(e.isHorizontal() ? l : "top", `${a}px`);
                    }
                }
                if (
                    ("fraction" === s.type &&
                        (d.find(se(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
                            d.find(se(s.totalClass)).text(s.formatFractionTotal(p))),
                        "progressbar" === s.type)
                ) {
                    let t;
                    t = s.progressbarOpposite
                        ? e.isHorizontal()
                            ? "vertical"
                            : "horizontal"
                        : e.isHorizontal()
                            ? "horizontal"
                            : "vertical";
                    const i = (c + 1) / p;
                    let n = 1,
                        r = 1;
                    "horizontal" === t ? (n = i) : (r = i),
                        d
                            .find(se(s.progressbarFillClass))
                            .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
                            .transition(e.params.speed);
                }
                "custom" === s.type && s.renderCustom
                    ? (d.html(s.renderCustom(e, c + 1, p)), i("paginationRender", d[0]))
                    : i("paginationUpdate", d[0]),
                    e.params.watchOverflow &&
                    e.enabled &&
                    d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
            }
            function c() {
                const t = e.params.pagination;
                if (l()) return;
                const s =
                    e.virtual && e.params.virtual.enabled
                        ? e.virtual.slides.length
                        : e.slides.length,
                    n = e.pagination.$el;
                let r = "";
                if ("bullets" === t.type) {
                    let i = e.params.loop
                        ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                        : e.snapGrid.length;
                    e.params.freeMode &&
                        e.params.freeMode.enabled &&
                        !e.params.loop &&
                        i > s &&
                        (i = s);
                    for (let s = 0; s < i; s += 1)
                        t.renderBullet
                            ? (r += t.renderBullet.call(e, s, t.bulletClass))
                            : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                    n.html(r), (e.pagination.bullets = n.find(se(t.bulletClass)));
                }
                "fraction" === t.type &&
                    ((r = t.renderFraction
                        ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                        : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
                        n.html(r)),
                    "progressbar" === t.type &&
                    ((r = t.renderProgressbar
                        ? t.renderProgressbar.call(e, t.progressbarFillClass)
                        : `<span class="${t.progressbarFillClass}"></span>`),
                        n.html(r)),
                    "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
            }
            function p() {
                e.params.pagination = ee(
                    e,
                    e.originalParams.pagination,
                    e.params.pagination,
                    { el: "swiper-pagination" }
                );
                const t = e.params.pagination;
                if (!t.el) return;
                let s = m(t.el);
                0 !== s.length &&
                    (e.params.uniqueNavElements &&
                        "string" == typeof t.el &&
                        s.length > 1 &&
                        ((s = e.$el.find(t.el)),
                            s.length > 1 &&
                            (s = s.filter((t) => m(t).parents(".swiper")[0] === e.el))),
                        "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
                        s.addClass(t.modifierClass + t.type),
                        s.addClass(t.modifierClass + e.params.direction),
                        "bullets" === t.type &&
                        t.dynamicBullets &&
                        (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
                            (a = 0),
                            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type &&
                        t.progressbarOpposite &&
                        s.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                        s.on("click", se(t.bulletClass), function (t) {
                            t.preventDefault();
                            let s = m(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (s += e.loopedSlides), e.slideTo(s);
                        }),
                        Object.assign(e.pagination, { $el: s, el: s[0] }),
                        e.enabled || s.addClass(t.lockClass));
            }
            function u() {
                const t = e.params.pagination;
                if (l()) return;
                const s = e.pagination.$el;
                s.removeClass(t.hiddenClass),
                    s.removeClass(t.modifierClass + t.type),
                    s.removeClass(t.modifierClass + e.params.direction),
                    e.pagination.bullets &&
                    e.pagination.bullets.removeClass &&
                    e.pagination.bullets.removeClass(t.bulletActiveClass),
                    t.clickable && s.off("click", se(t.bulletClass));
            }
            s("init", () => {
                p(), c(), d();
            }),
                s("activeIndexChange", () => {
                    (e.params.loop || void 0 === e.snapIndex) && d();
                }),
                s("snapIndexChange", () => {
                    e.params.loop || d();
                }),
                s("slidesLengthChange", () => {
                    e.params.loop && (c(), d());
                }),
                s("snapGridLengthChange", () => {
                    e.params.loop || (c(), d());
                }),
                s("destroy", () => {
                    u();
                }),
                s("enable disable", () => {
                    const { $el: t } = e.pagination;
                    t &&
                        t[e.enabled ? "removeClass" : "addClass"](
                            e.params.pagination.lockClass
                        );
                }),
                s("lock unlock", () => {
                    d();
                }),
                s("click", (t, s) => {
                    const n = s.target,
                        { $el: r } = e.pagination;
                    if (
                        e.params.pagination.el &&
                        e.params.pagination.hideOnClick &&
                        r.length > 0 &&
                        !m(n).hasClass(e.params.pagination.bulletClass)
                    ) {
                        if (
                            e.navigation &&
                            ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                                (e.navigation.prevEl && n === e.navigation.prevEl))
                        )
                            return;
                        const t = r.hasClass(e.params.pagination.hiddenClass);
                        i(!0 === t ? "paginationShow" : "paginationHide"),
                            r.toggleClass(e.params.pagination.hiddenClass);
                    }
                }),
                Object.assign(e.pagination, {
                    render: c,
                    update: d,
                    init: p,
                    destroy: u,
                });
        }
        function ne({ swiper: e, extendParams: t, on: s, emit: i }) {
            const n = r();
            let a,
                l,
                o,
                d,
                c = !1,
                p = null,
                u = null;
            function h() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t, rtlTranslate: s, progress: i } = e,
                    { $dragEl: n, $el: r } = t,
                    a = e.params.scrollbar;
                let d = l,
                    c = (o - l) * i;
                s
                    ? ((c = -c), c > 0 ? ((d = l - c), (c = 0)) : -c + l > o && (d = o + c))
                    : c < 0
                        ? ((d = l + c), (c = 0))
                        : c + l > o && (d = o - c),
                    e.isHorizontal()
                        ? (n.transform(`translate3d(${c}px, 0, 0)`),
                            (n[0].style.width = `${d}px`))
                        : (n.transform(`translate3d(0px, ${c}px, 0)`),
                            (n[0].style.height = `${d}px`)),
                    a.hide &&
                    (clearTimeout(p),
                        (r[0].style.opacity = 1),
                        (p = setTimeout(() => {
                            (r[0].style.opacity = 0), r.transition(400);
                        }, 1e3)));
            }
            function f() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const { scrollbar: t } = e,
                    { $dragEl: s, $el: i } = t;
                (s[0].style.width = ""),
                    (s[0].style.height = ""),
                    (o = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
                    (d =
                        e.size /
                        (e.virtualSize +
                            e.params.slidesOffsetBefore -
                            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
                    (l =
                        "auto" === e.params.scrollbar.dragSize
                            ? o * d
                            : parseInt(e.params.scrollbar.dragSize, 10)),
                    e.isHorizontal()
                        ? (s[0].style.width = `${l}px`)
                        : (s[0].style.height = `${l}px`),
                    (i[0].style.display = d >= 1 ? "none" : ""),
                    e.params.scrollbar.hide && (i[0].style.opacity = 0),
                    e.params.watchOverflow &&
                    e.enabled &&
                    t.$el[e.isLocked ? "addClass" : "removeClass"](
                        e.params.scrollbar.lockClass
                    );
            }
            function v(t) {
                return e.isHorizontal()
                    ? "touchstart" === t.type || "touchmove" === t.type
                        ? t.targetTouches[0].clientX
                        : t.clientX
                    : "touchstart" === t.type || "touchmove" === t.type
                        ? t.targetTouches[0].clientY
                        : t.clientY;
            }
            function b(t) {
                const { scrollbar: s, rtlTranslate: i } = e,
                    { $el: n } = s;
                let r;
                (r =
                    (v(t) -
                        n.offset()[e.isHorizontal() ? "left" : "top"] -
                        (null !== a ? a : l / 2)) /
                    (o - l)),
                    (r = Math.max(Math.min(r, 1), 0)),
                    i && (r = 1 - r);
                const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
                e.updateProgress(d),
                    e.setTranslate(d),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
            }
            function w(t) {
                const s = e.params.scrollbar,
                    { scrollbar: n, $wrapperEl: r } = e,
                    { $el: l, $dragEl: o } = n;
                (c = !0),
                    (a =
                        t.target === o[0] || t.target === o
                            ? v(t) -
                            t.target.getBoundingClientRect()[
                            e.isHorizontal() ? "left" : "top"
                            ]
                            : null),
                    t.preventDefault(),
                    t.stopPropagation(),
                    r.transition(100),
                    o.transition(100),
                    b(t),
                    clearTimeout(u),
                    l.transition(0),
                    s.hide && l.css("opacity", 1),
                    e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
                    i("scrollbarDragStart", t);
            }
            function y(t) {
                const { scrollbar: s, $wrapperEl: n } = e,
                    { $el: r, $dragEl: a } = s;
                c &&
                    (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                        b(t),
                        n.transition(0),
                        r.transition(0),
                        a.transition(0),
                        i("scrollbarDragMove", t));
            }
            function T(t) {
                const s = e.params.scrollbar,
                    { scrollbar: n, $wrapperEl: r } = e,
                    { $el: a } = n;
                c &&
                    ((c = !1),
                        e.params.cssMode &&
                        (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
                        s.hide &&
                        (clearTimeout(u),
                            (u = g(() => {
                                a.css("opacity", 0), a.transition(400);
                            }, 1e3))),
                        i("scrollbarDragEnd", t),
                        s.snapOnRelease && e.slideToClosest());
            }
            function C(t) {
                const {
                    scrollbar: s,
                    touchEventsTouch: i,
                    touchEventsDesktop: r,
                    params: a,
                    support: l,
                } = e,
                    o = s.$el[0],
                    d = !(!l.passiveListener || !a.passiveListeners) && {
                        passive: !1,
                        capture: !1,
                    },
                    c = !(!l.passiveListener || !a.passiveListeners) && {
                        passive: !0,
                        capture: !1,
                    };
                if (!o) return;
                const p = "on" === t ? "addEventListener" : "removeEventListener";
                l.touch
                    ? (o[p](i.start, w, d), o[p](i.move, y, d), o[p](i.end, T, c))
                    : (o[p](r.start, w, d), n[p](r.move, y, d), n[p](r.end, T, c));
            }
            function S() {
                const { scrollbar: t, $el: s } = e;
                e.params.scrollbar = ee(
                    e,
                    e.originalParams.scrollbar,
                    e.params.scrollbar,
                    { el: "swiper-scrollbar" }
                );
                const i = e.params.scrollbar;
                if (!i.el) return;
                let n = m(i.el);
                e.params.uniqueNavElements &&
                    "string" == typeof i.el &&
                    n.length > 1 &&
                    1 === s.find(i.el).length &&
                    (n = s.find(i.el));
                let r = n.find(`.${e.params.scrollbar.dragClass}`);
                0 === r.length &&
                    ((r = m(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
                        n.append(r)),
                    Object.assign(t, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }),
                    i.draggable && e.params.scrollbar.el && C("on"),
                    n &&
                    n[e.enabled ? "removeClass" : "addClass"](
                        e.params.scrollbar.lockClass
                    );
            }
            function x() {
                e.params.scrollbar.el && C("off");
            }
            t({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                },
            }),
                (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
                s("init", () => {
                    S(), f(), h();
                }),
                s("update resize observerUpdate lock unlock", () => {
                    f();
                }),
                s("setTranslate", () => {
                    h();
                }),
                s("setTransition", (t, s) => {
                    !(function (t) {
                        e.params.scrollbar.el &&
                            e.scrollbar.el &&
                            e.scrollbar.$dragEl.transition(t);
                    })(s);
                }),
                s("enable disable", () => {
                    const { $el: t } = e.scrollbar;
                    t &&
                        t[e.enabled ? "removeClass" : "addClass"](
                            e.params.scrollbar.lockClass
                        );
                }),
                s("destroy", () => {
                    x();
                }),
                Object.assign(e.scrollbar, {
                    updateSize: f,
                    setTranslate: h,
                    init: S,
                    destroy: x,
                });
        }
        function re({ swiper: e, extendParams: t, emit: s, once: i }) {
            t({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: 0.02,
                },
            }),
                Object.assign(e, {
                    freeMode: {
                        onTouchMove: function () {
                            const { touchEventsData: t, touches: s } = e;
                            0 === t.velocities.length &&
                                t.velocities.push({
                                    position: s[e.isHorizontal() ? "startX" : "startY"],
                                    time: t.touchStartTime,
                                }),
                                t.velocities.push({
                                    position: s[e.isHorizontal() ? "currentX" : "currentY"],
                                    time: v(),
                                });
                        },
                        onTouchEnd: function ({ currentPos: t }) {
                            const {
                                params: n,
                                $wrapperEl: r,
                                rtlTranslate: a,
                                snapGrid: l,
                                touchEventsData: o,
                            } = e,
                                d = v() - o.touchStartTime;
                            if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
                            else if (t > -e.maxTranslate())
                                e.slides.length < l.length
                                    ? e.slideTo(l.length - 1)
                                    : e.slideTo(e.slides.length - 1);
                            else {
                                if (n.freeMode.momentum) {
                                    if (o.velocities.length > 1) {
                                        const t = o.velocities.pop(),
                                            s = o.velocities.pop(),
                                            i = t.position - s.position,
                                            r = t.time - s.time;
                                        (e.velocity = i / r),
                                            (e.velocity /= 2),
                                            Math.abs(e.velocity) < n.freeMode.minimumVelocity &&
                                            (e.velocity = 0),
                                            (r > 150 || v() - t.time > 300) && (e.velocity = 0);
                                    } else e.velocity = 0;
                                    (e.velocity *= n.freeMode.momentumVelocityRatio),
                                        (o.velocities.length = 0);
                                    let t = 1e3 * n.freeMode.momentumRatio;
                                    const d = e.velocity * t;
                                    let c = e.translate + d;
                                    a && (c = -c);
                                    let p,
                                        u = !1;
                                    const h =
                                        20 * Math.abs(e.velocity) * n.freeMode.momentumBounceRatio;
                                    let f;
                                    if (c < e.maxTranslate())
                                        n.freeMode.momentumBounce
                                            ? (c + e.maxTranslate() < -h && (c = e.maxTranslate() - h),
                                                (p = e.maxTranslate()),
                                                (u = !0),
                                                (o.allowMomentumBounce = !0))
                                            : (c = e.maxTranslate()),
                                            n.loop && n.centeredSlides && (f = !0);
                                    else if (c > e.minTranslate())
                                        n.freeMode.momentumBounce
                                            ? (c - e.minTranslate() > h && (c = e.minTranslate() + h),
                                                (p = e.minTranslate()),
                                                (u = !0),
                                                (o.allowMomentumBounce = !0))
                                            : (c = e.minTranslate()),
                                            n.loop && n.centeredSlides && (f = !0);
                                    else if (n.freeMode.sticky) {
                                        let t;
                                        for (let e = 0; e < l.length; e += 1)
                                            if (l[e] > -c) {
                                                t = e;
                                                break;
                                            }
                                        (c =
                                            Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) ||
                                                "next" === e.swipeDirection
                                                ? l[t]
                                                : l[t - 1]),
                                            (c = -c);
                                    }
                                    if (
                                        (f &&
                                            i("transitionEnd", () => {
                                                e.loopFix();
                                            }),
                                            0 !== e.velocity)
                                    ) {
                                        if (
                                            ((t = a
                                                ? Math.abs((-c - e.translate) / e.velocity)
                                                : Math.abs((c - e.translate) / e.velocity)),
                                                n.freeMode.sticky)
                                        ) {
                                            const s = Math.abs((a ? -c : c) - e.translate),
                                                i = e.slidesSizesGrid[e.activeIndex];
                                            t =
                                                s < i
                                                    ? n.speed
                                                    : s < 2 * i
                                                        ? 1.5 * n.speed
                                                        : 2.5 * n.speed;
                                        }
                                    } else if (n.freeMode.sticky) return void e.slideToClosest();
                                    n.freeMode.momentumBounce && u
                                        ? (e.updateProgress(p),
                                            e.setTransition(t),
                                            e.setTranslate(c),
                                            e.transitionStart(!0, e.swipeDirection),
                                            (e.animating = !0),
                                            r.transitionEnd(() => {
                                                e &&
                                                    !e.destroyed &&
                                                    o.allowMomentumBounce &&
                                                    (s("momentumBounce"),
                                                        e.setTransition(n.speed),
                                                        setTimeout(() => {
                                                            e.setTranslate(p),
                                                                r.transitionEnd(() => {
                                                                    e && !e.destroyed && e.transitionEnd();
                                                                });
                                                        }, 0));
                                            }))
                                        : e.velocity
                                            ? (s("_freeModeNoMomentumRelease"),
                                                e.updateProgress(c),
                                                e.setTransition(t),
                                                e.setTranslate(c),
                                                e.transitionStart(!0, e.swipeDirection),
                                                e.animating ||
                                                ((e.animating = !0),
                                                    r.transitionEnd(() => {
                                                        e && !e.destroyed && e.transitionEnd();
                                                    })))
                                            : e.updateProgress(c),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses();
                                } else {
                                    if (n.freeMode.sticky) return void e.slideToClosest();
                                    n.freeMode && s("_freeModeNoMomentumRelease");
                                }
                                (!n.freeMode.momentum || d >= n.longSwipesMs) &&
                                    (e.updateProgress(),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses());
                            }
                        },
                    },
                });
        }
        function ae() {
            let e = document.querySelectorAll(
                '[class*="__swiper"]:not(.swiper-wrapper)'
            );
            e &&
                e.forEach((e) => {
                    e.parentElement.classList.add("swiper"),
                        e.classList.add("swiper-wrapper");
                    for (const t of e.children) t.classList.add("swiper-slide");
                });
        }
        function adaptSlider() {
            if (document.querySelector('.adaptiv-wrapper') && window.innerWidth < 600) {
                new Z('.adaptiv-wrapper', {
                    modules: [te, ie],
                    observer: !0,
                    observeParents: !0,
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                    //   autoHeight: !0,
                    speed: 800,
                    //   pagination: { el: "", clickable: !0 },
                    navigation: { nextEl: ".adaptiv-button-next", prevEl: ".adaptiv-button-prev" },
                    on: {},
                });
            }
        }
        window.addEventListener("resize", () => {
            let slider = document.querySelector('.adaptiv-wrapper')
            if (slider) {
                if (slider.swiper && window.innerWidth > 600) {
                    slider.swiper.destroy()
                } else if (!slider.swiper && window.innerWidth < 600) {
                    adaptSlider()
                }
            }
        })
        window.addEventListener("load", function (e) {
            ae(),
                adaptSlider(),
                document.querySelector(".swiper") &&
                (new Z(".hero-big", {
                    modules: [te, ie],
                    observer: !0,
                    observeParents: !0,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    autoHeight: !0,
                    speed: 800,
                    pagination: { el: ".hero-big__pagg", clickable: !0 },
                    navigation: { nextEl: ".hero-big__next", prevEl: ".hero-big__prev" },
                    on: {},
                }),
                    new Z(".hero-small", {
                        modules: [te, ie],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 1,
                        spaceBetween: 30,
                        autoHeight: !0,
                        speed: 800,
                        pagination: { el: ".hero-small__pagg", clickable: !0 },
                        navigation: {
                            nextEl: ".hero-small__next",
                            prevEl: ".hero-small__prev",
                        },
                        on: {},
                    }),
                    new Z(".popular__slider-wrap", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 3,
                        spaceBetween: 0,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".popular__scrollbar", hide: !1, draggable: !0 },
                        navigation: { nextEl: ".popular__next", prevEl: ".popular__prev" },
                        on: {},
                        breakpoints: {
                            1: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            577: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        },
                    }),
                    new Z(".hits__slider-wrap", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 4,
                        spaceBetween: 32,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".hits__scrollbar", hide: !1, draggable: !0 },
                        navigation: { nextEl: ".hits__next", prevEl: ".hits__prev" },
                        on: {},
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        },
                    }),
                    new Z(".hist-slider", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 4,
                        spaceBetween: 32,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".hits__scrollbar", hide: !1, draggable: !0 },
                        navigation: { nextEl: ".hits-next", prevEl: ".hits-prev" },
                        on: {},
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        },
                    }),
                    new Z(".hist-slider--second", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 4,
                        spaceBetween: 32,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".hits__scrollbar", hide: !1, draggable: !0 },
                        navigation: { nextEl: ".next-hits--second", prevEl: ".prev-hits--second" },
                        on: {},
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        },
                    }),
                    new Z(".hits__slider-wrapp", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 3,
                        spaceBetween: 32,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".hits__scrollbar", hide: !1, draggable: !0 },
                        navigation: { nextEl: ".hits__nextf", prevEl: ".hits__prevf" },
                        on: {},
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        },
                    }),
                    new Z(".hits__slider-ned", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 6,
                        spaceBetween: 32,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".hits__scrollbarv", hide: !1, draggable: !0 },
                        navigation: { nextEl: ".hits__nextv", prevEl: ".hits__prevv" },
                        on: {},
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        },
                    }),
                    new Z(".new__slider-wrap", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 4,
                        spaceBetween: 32,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".new__scrollbar", hide: !1, draggable: !0 },
                        navigation: { nextEl: ".new__next", prevEl: ".new__prev" },
                        on: {},
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        },
                    }),
                    new Z(".best-price__slider-wrap", {
                        modules: [te, ne, re],
                        observer: !0,
                        observeParents: !0,
                        slidesPerView: 4,
                        spaceBetween: 32,
                        autoHeight: !0,
                        speed: 800,
                        freeMode: !0,
                        scrollbar: { el: ".best-price__scrollbar", hide: !1, draggable: !0 },
                        navigation: {
                            nextEl: ".best-price__next",
                            prevEl: ".best-price__prev",
                        },
                        on: {},
                        breakpoints: {
                            320: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        },
                    }));
        });
        let le = !1;
        setTimeout(() => {
            if (le) {
                let e = new Event("windowScroll");
                window.addEventListener("scroll", function (t) {
                    document.dispatchEvent(e);
                });
            }
        }, 0),
            (function (e) {
                let t = new Image();
                (t.onload = t.onerror =
                    function () {
                        e(2 == t.height);
                    }),
                    (t.src =
                        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
            })(function (e) {
                let t = !0 === e ? "webp" : "no-webp";
                document.documentElement.classList.add(t);
            }),
            (function () {
                const s = document.querySelectorAll("[data-tabs]");
                let i = [];
                if (s) {
                    if (s.length > 0) {
                        const e = location.hash.replace("#", "");
                        e.startsWith("tab-") && (i = e.replace("tab-", "").split("-")),
                            s.forEach((e, t) => {
                                e.classList.add("_tab-init"),
                                    e.setAttribute("data-tabs-index", t),
                                    e.addEventListener("click", a),
                                    (function (e) {
                                        const t = e.querySelectorAll("[data-tabs-titles]>*"),
                                            s = e.querySelectorAll("[data-tabs-body]>*"),
                                            n = e.dataset.tabsIndex,
                                            r = i[0] == n;
                                        if (r) {
                                            // e.querySelector(
                                            //     "[data-tabs-titles]>._tab-active"
                                            // ).classList.remove("_tab-active");
                                        }
                                        s.length > 0 &&
                                            s.forEach((e, s) => {
                                                // t[s].setAttribute("data-tabs-title", ""),
                                                //     e.setAttribute("data-tabs-item", ""),
                                                //     r && s == i[1] && t[s].classList.add("_tab-active"),
                                                //     (e.hidden = !t[s].classList.contains("_tab-active"));
                                            });
                                    })(e);
                            });
                        const t = Array.from(s).filter(function (e, t, s) {
                            return e.dataset.tabs;
                        });
                        t.length > 0 &&
                            (function (e) {
                                const t = [];
                                e.forEach((e) => {
                                    const s = e.dataset.tabs,
                                        i = {};
                                    (i.value = s), (i.item = e), t.push(i);
                                });
                                let s = t.map(function (e) {
                                    return `(max-width:${e.value}px),${e.value}`;
                                });
                                (s = s.filter(function (e, t, s) {
                                    return s.indexOf(e) === t;
                                })),
                                    s.forEach((e) => {
                                        const s = e.split(","),
                                            i = window.matchMedia(s[0]),
                                            r = s[1],
                                            a = t.filter(function (e) {
                                                if (e.value === r) return !0;
                                            });
                                        i.addEventListener("change", function () {
                                            n(a, i);
                                        }),
                                            n(a, i);
                                    });
                            })(t);
                    }

                }
                function n(e, t) {
                    e.forEach((e) => {
                        const s = (e = e.item).querySelector("[data-tabs-titles]"),
                            i = e.querySelectorAll("[data-tabs-title]"),
                            n = e.querySelector("[data-tabs-body]");
                        e.querySelectorAll("[data-tabs-item]").forEach((r, a) => {
                            t.matches
                                ? (n.append(i[a]), n.append(r), e.classList.add("_tab-spoller"))
                                : (s.append(i[a]), e.classList.remove("_tab-spoller"));
                        });
                    });
                }
                let r = document.querySelector(".choise__toggle");
                function a(s) {
                    const i = s.target;
                    if (i.closest("[data-tabs-title]")) {
                        const n = i.closest("[data-tabs-title]"),
                            a = n.closest("[data-tabs]");
                        if (
                            !n.classList.contains("_tab-active") &&
                            !a.querySelectorAll("._slide").length
                        ) {
                            // (r.style.width = `${n.offsetWidth}px`),
                            // (r.style.transform = `translateX(${n.offsetLeft}px)`);
                            const s = a.querySelector("[data-tabs-title]._tab-active");
                            s && s.classList.remove("_tab-active"),
                                n.classList.add("_tab-active"),
                                (function (s) {
                                    const i = s.querySelectorAll("[data-tabs-title]"),
                                        n = s.querySelectorAll("[data-tabs-item]"),
                                        r = s.dataset.tabsIndex,
                                        a = (function (e) {
                                            if (e.hasAttribute("data-tabs-animate"))
                                                return e.dataset.tabsAnimate > 0
                                                    ? e.dataset.tabsAnimate
                                                    : 500;
                                        })(s);
                                    n.length > 0 &&
                                        n.forEach((s, n) => {
                                            i[n].classList.contains("_tab-active")
                                                ? (a ? t(s, a) : (s.hidden = !1),
                                                    (location.hash = `tab-${r}-${n}`))
                                                : a
                                                    ? e(s, a)
                                                    : (s.hidden = !0);
                                        });
                                })(a);
                        }
                        s.preventDefault();
                    }
                }
            })();
    })();

}
sliderHomePage()

function burgerMenu () { 
    const openBtn = document.querySelector('.middle-links__burger'),
        mobileMenuBody = document.querySelector('.mobile-menu')

    const  openMobileMenu = () => { 

        openBtn.addEventListener('click', ()=> {
            mobileMenuBody.classList.add('open-mobile-menu')
            document.body.classList.add('no-scroll')
        })

    }
    openMobileMenu();
    
    const  closeMobileMenu = () => {
        const oneBtnClose = document.querySelector('.mobile-menu__close'),
            allBtnClose = document.querySelectorAll('.nav-next__close')

        oneBtnClose.addEventListener('click', ()=> {
            
            mobileMenuBody.classList.remove('open-mobile-menu')
            document.body.classList.remove('no-scroll')
        })

        allBtnClose.forEach(el => {
            el.addEventListener('click', ()=> {
                mobileMenuBody.classList.remove('open-mobile-menu')
                document.body.classList.remove('no-scroll')
                el.closest('.mobile-menu__item').classList.remove('next-lvl-open')
            })
        });

    }
    closeMobileMenu()
} 
burgerMenu()

function mobileSelect(){
    const btnSelect = document.querySelector('.mobile-select__title')

    btnSelect.addEventListener('click', ()=> { 
        btnSelect.closest('.mobile-select').classList.toggle('select-active')
    })
}
mobileSelect()

function mobileSelectPhones(){
    const btnSelect = document.querySelector('.mobile-contact__phone')

    btnSelect.addEventListener('click', ()=> { 
        btnSelect.closest('.mobile-contact').classList.toggle('select-active')
    })
}
mobileSelectPhones()

function mobileNextLvlMenu() {
    const btn = document.querySelectorAll('.mobile-menu__title'),
        backMenuBtn = document.querySelectorAll('.nav-next__back')


    btn.forEach(el => {
        el.addEventListener('click', ()=> {
            el.closest('.mobile-menu__item').classList.add('next-lvl-open')
        })
    });


    backMenuBtn.forEach(el => {

        el.addEventListener('click', ()=> {
            el.closest('.mobile-menu__item').classList.remove('next-lvl-open') 
        })

    });

}
mobileNextLvlMenu()

function mobileNavDropdown() {
    const btn = document.querySelectorAll('.nav-next__text')

    btn.forEach(el => {
        el.addEventListener('click', ()=> {
            el.closest('.nav-next__item').classList.toggle('open-dropdown')
        })
    });
}
mobileNavDropdown()




function selectedThumbImg2() {
    const productItem = document.querySelectorAll('.product-js');
    for (let i = 0; i < productItem.length; i++) {
        let img = productItem[i].querySelector('.category-item__img img');
        let thumbWrap = productItem[i].querySelectorAll('.category-item__row');

        // console.log(thumbWrap);
        thumbWrap.forEach(item => {
            let thumb = item.querySelectorAll('.category-row__thumb');
            thumb.forEach(element => {
                element.addEventListener('click', selectedImg)
            });
            thumb.forEach(element => {
                element.addEventListener('mouseover', selectedImg)
            });
            function selectedImg() {
                thumb.forEach(element => {
                    element.classList.remove('thumb-active');
                });
                this.classList.add('thumb-active');
                let imgProduct = this.closest('.product-js').querySelector('.product-js-img img');
                imgProduct.src = this.querySelector('img').src
            }
        });
    }
}
selectedThumbImg2()

document.addEventListener('DOMContentLoaded', function () {

    let hovers = document.querySelectorAll('.slider-hover')
    let slides = Array.from(document.querySelectorAll('.slide'))

    if (hovers) {
        if (window.innerWidth >= 577) {
            for (let i = 0; i < hovers.length; ++i) {
                let hover = hovers[i];

                hover.addEventListener('mouseenter', function (e) {

                    let id = e.target.dataset.hover
                    let slide = slides[id]
                    slide.classList.toggle('show')
                    hover.classList.toggle('showw')
                    hovers[0].classList.remove('arr')
                })

                hover.addEventListener('mouseleave', function (e) {
                    let id = e.target.dataset.hover
                    let slide = slides[id]

                    slide.classList.toggle('show')
                    hover.classList.toggle('showw')
                    if (!hovers[i].classList.contains('showw')) { hovers[0].classList.add('arr') }
                })

            }
        }
        if (window.innerWidth <= 576) {
            for (let i = 0; i < hovers.length; ++i) {
                let hover = hovers[i];
                hover.addEventListener('click', openSlide)
            }

            function openSlide() {
                console.log('asdasd');
                for (let i = 0; i < hovers.length; ++i) {
                    let hover = hovers[i];
                    hover.classList.remove('showw')
                    hover.classList.remove('arr')
                    slides[i].classList.remove('show')
                }
                this.classList.add('showw')


                console.log(this.dataset.hover);
                slides.forEach(el => {
                    if (el.dataset.slide === this.dataset.hover) {
                        el.classList.add('show')
                    }
                });
            }
        }
    }
})

ymaps.ready(init);
function init() {
    if (document.querySelector('#map')) {
        let centerMode;
        let zoom;
        if (window.innerWidth >= 577) {
            centerMode = [55.658267, 37.431424]
            zoom = 16
        } else {
            centerMode = [55.658267, 37.781]
            zoom = 11
        }
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты. 
            center: centerMode,
            // Уровень масштабирования. 
            zoom: zoom
        });

        let coordinate;
        if (window.innerWidth >= 577) {
            coordinate = [55.658267, 37.431424]
        } else {
            coordinate = [55.658267, 37.431424]
        }
        var myGeoObjects = [];

        // Наша метка
        myGeoObjects = new ymaps.Placemark(coordinate, {
            balloonContentBody: 'Текст в балуне',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/location.png',
            iconImageSize: [30, 40],
        });


        var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false,
        });

        clusterer.add(myGeoObjects);
        myMap.geoObjects.add(clusterer);
    }
}

if ($('#order-phone')) {
    $('#order-phone').inputmask({ "mask": "+7 (999) 999-99-99" });
}
if ($('#order-size-phone')) {
    $('#order-size-phone').inputmask({ "mask": "+7 (999) 999-99-99" });
}
 

var Cal = function (divId) {


    this.divId = divId;


    this.DaysOfWeek = [
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб',
        'Вс'
    ];


    this.Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    var d = new Date();

    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();

};


Cal.prototype.nextMonth = function () {
    if (this.currMonth == 11) {
        this.currMonth = 0;
        this.currYear = this.currYear + 1;
    }
    else {
        this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
};


Cal.prototype.previousMonth = function () {
    if (this.currMonth == 0) {
        this.currMonth = 11;
        this.currYear = this.currYear - 1;
    }
    else {
        this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
};


Cal.prototype.showcurr = function () {
    this.showMonth(this.currYear, this.currMonth);
};


Cal.prototype.showMonth = function (y, m) {

    var d = new Date()

        , firstDayOfMonth = new Date(y, m, 7).getDay()

        , lastDateOfMonth = new Date(y, m + 1, 0).getDate()

        , lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();


    var html = '<div class="calendar">';

    html += '<div class="calendar__header"><span>';
    html += '</span></div>';
    document.querySelector('#calendar-one .calendar-row__month').innerText = this.Months[m];
    document.querySelector('#calendar-two .calendar-row__month').innerText = this.Months[m];



    html += '<div class="days">';
    for (var i = 0; i < this.DaysOfWeek.length; i++) {
        html += '<span>' + this.DaysOfWeek[i] + '</span>';
    }
    html += '</div>';


    var i = 1;
    do {
        var dow = new Date(y, m, i).getDay();

        if (dow == 1) {
            html += '<div class="calendar_row test">';
        }

        else if (i == 1) {
            html += '<div class="calendar_row first">';
            var k = lastDayOfLastMonth - firstDayOfMonth + 1;
            for (var j = 0; j < firstDayOfMonth; j++) {
                html += '<span class="not-current">' + k + '</span>';
                k++;
            }

        }

        var chk = new Date();
        var chkY = chk.getFullYear();
        var chkM = chk.getMonth();
        if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
            html += '<span class="normal selected-day">' + i + '</span>';
            document.querySelector('.title-date').innerText = `${i} ${this.Months[m]} ${y}`
            document.querySelector('.order-header__input').value = `${i} ${this.Months[m]} ${y}`

            document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.title-date').innerText = `${i} ${this.Months[m]} ${y}`
            document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.order-header__input').value = `${i} ${this.Months[m]} ${y}`
        } else {
            html += '<span class="normal">' + (i) + '</span>';
        }


        if (dow == 0) {
            html += '</div>';
        }

        else if (i == lastDateOfMonth) {
            var k = 1;
            for (dow; dow < 7; dow++) {
                html += '<span class="not-current">' + k + '</span>';
                k++;
            }
        }

        i++;


    } while (i <= lastDateOfMonth);

    html += '</div>';

    document.getElementById(this.divId).innerHTML = html;
};

window.onload = function () {

    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let date = new Date();
    let day = date.getDate();
    let currMonth = months[date.getMonth()];
    if (document.querySelector('.order-btn__date')) {
        document.querySelector('.order-btn__date').innerText = `${day} ${currMonth}`
    }

    function dayNext(idCalendar, getNextBtn, getMonths, getDate, gateDay, getCurrentMonth) {
        getNextBtn.addEventListener('click', () => {
            getDate.setDate(gateDay + 1);
            var c = new Cal("divCal");
            var c2 = new Cal("divCal2");
            c.showcurr();
            c2.showcurr();
            selected('#calendar-one');
            selected('#calendar-two');
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header .order-header__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`;
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header__input').value = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.calendar-row__month').innerText = months[getDate.getMonth()];
            if (document.querySelector('.order-btn__date')) {
                document.querySelector('.order-btn__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]}`
            }
            if (getCurrentMonth != getMonths[getDate.getMonth()]) {
                var c = new Cal("divCal");
                var c2 = new Cal("divCal2");
                c.nextMonth();
                c2.nextMonth();
                selected('#calendar-one');
                selected('#calendar-two');
            };

            document.querySelectorAll(`${idCalendar} .normal`).forEach(item => {
                if (getDate.getDate() == item.innerText) {
                    item.classList.add('selected-day')
                } else {
                    item.classList.remove('selected-day')
                }
            });
        })

    }
    dayNext('#calendar-one', document.querySelector('#calendar-one .calendar-inner__next'), months, date, day, currMonth)
    dayNext('#calendar-two', document.querySelector('#calendar-two .calendar-inner__next'), months, date, day, currMonth)

    function dayNextDouble(idCalendar, getNextBtn, getMonths, getDate, gateDay, getCurrentMonth) {
        getNextBtn.addEventListener('click', () => {
            getDate.setDate(gateDay + 2);

            var c = new Cal("divCal");
            var c2 = new Cal("divCal2");
            c.showcurr();
            c2.showcurr();
            selected('#calendar-one');
            selected('#calendar-two');
            console.log(document.querySelector(idCalendar));
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`;
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.order-header__input').value = `${getDate.getDate()} ${months[getDate.getMonth()]} ${getDate.getFullYear()}`
            document.querySelector(idCalendar).closest('.order-inner__row').querySelector('.calendar-row__month').innerText = months[getDate.getMonth()];
            if (document.querySelector('.order-btn__date')) {
                document.querySelector('.order-btn__date').innerText = `${getDate.getDate()} ${months[getDate.getMonth()]}`
            }
            if (getCurrentMonth != getMonths[getDate.getMonth()]) {
                var c = new Cal("divCal");
                var c2 = new Cal("divCal2");
                c.nextMonth();
                c2.nextMonth();
                selected('#calendar-one');
                selected('#calendar-two');
            };

            document.querySelectorAll(`${idCalendar} .normal`).forEach(item => {
                if (getDate.getDate() == item.innerText) {
                    item.classList.add('selected-day')
                } else {
                    item.classList.remove('selected-day')
                }
            });
        })

    }
    dayNextDouble('#calendar-one', document.querySelector('#calendar-one .calendar-inner__aftertomorrow'), months, date, day, currMonth)
    dayNextDouble('#calendar-two', document.querySelector('#calendar-two .calendar-inner__aftertomorrow'), months, date, day, currMonth)



    var c = new Cal("divCal");
    var c2 = new Cal("divCal2");
    c.showcurr();
    c2.showcurr();

    getId('btnNext').onclick = function () {
        c.nextMonth();
        selected('#calendar-one');
    };
    getId('btnPrev').onclick = function () {
        c.previousMonth();
        selected('#calendar-one');
    };

    getId('btnNext2').onclick = function () {
        c2.nextMonth();
        selected('#calendar-two');
    };
    getId('btnPrev2').onclick = function () {
        c2.previousMonth();
        selected('#calendar-two');
    };


    function selected(idCalendar) {
        let allDays = document.querySelectorAll(`${idCalendar} .normal`);

        allDays.forEach(element => {
            element.addEventListener('click', selectDay)
        });
        function selectDay() {
            allDays.forEach(element => {
                element.classList.remove('selected-day')
            });
            this.classList.add('selected-day')
            let day = this.innerText;
            let today = new Date();
            let yyyy = today.getFullYear();
            if (document.querySelector('#calendar-one')) {
                let month = document.querySelector('.calendar-row__month').innerText;
                document.querySelector('.title-date').innerText = `${day} ${month} ${yyyy}`
                document.querySelector('.order-header__input').value = `${day} ${month} ${yyyy}`
                if (document.querySelector('.order-btn__date')) {
                    document.querySelector('.order-btn__date').innerText = `${day} ${month}`
                }
            }
            if (document.querySelector('#calendar-two')) {
                let month = document.querySelector('#calendar-two .calendar-row__month').innerText;
                document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.title-date').innerText = `${day} ${month} ${yyyy}`
                document.querySelector('#calendar-two').closest('.order-inner__row').querySelector('.order-header__input').value = `${day} ${month} ${yyyy}`
            }

        }
    }
    selected('#calendar-one');
    selected('#calendar-two');


    document.querySelector('#calendar-one .calendar-controls__clear').addEventListener('click', () => {

        var c = new Cal("divCal");
        c.showcurr();

        getId('btnNext').onclick = function () {
            c.nextMonth();
            selected('#calendar-one');
        };
        getId('btnPrev').onclick = function () {
            c.previousMonth();
            selected('#calendar-one');
        };
        selected('#calendar-one');

        if (document.querySelector('.order-btn__date')) {
            document.querySelector('.order-btn__date').innerText = `${day} ${currMonth}`
        }
    })
    document.querySelector('#calendar-two .calendar-controls__clear').addEventListener('click', () => {

        var c2 = new Cal("divCal2");
        c2.showcurr();

        getId('btnNext2').onclick = function () {
            c2.nextMonth();
            selected('#calendar-two');
        };
        getId('btnPrev2').onclick = function () {
            c2.previousMonth();
            selected('#calendar-two');
        };
        selected('#calendar-two');
    })

}

function getId(id) {
    return document.getElementById(id);
}







































