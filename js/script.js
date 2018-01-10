function toggleMainNav(element, main) {
    if (element != null && main != null) {
        if (element.classList.contains('none')) {
            element.classList.remove('none');
            main.classList.add('menu-is-open');
        } else {
            element.classList.add('none');
            main.classList.remove('menu-is-open');
        }
    }
}

function resizeHeaderOnScroll() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 75,
        header = document.querySelector('body>header:first-child'),
        headerNav = document.querySelector('body>header:first-child>nav'),
        headerEl = document.querySelector('body>header:first-child>span'),
        h1El = document.querySelector('body>header:first-child>h1'),
        mainSectionEl = document.querySelector('body>main:first-of-type'),
        mainNavEl = document.querySelector('body>nav:first-of-type');

    if (headerEl != null) {
        if (distanceY > shrinkOn) {
            headerEl.classList.add("small-document-title");
            headerEl.classList.remove("default-document-title");
            if (mainSectionEl != null) {
                mainSectionEl.classList.add("smaller-main-section");
            }
            if (mainNavEl != null) {
                mainNavEl.classList.add("header-is-shrink");
            }
            if (headerNav == null) {
                header.classList.add("i-am-shrinked");
            }
        } else {
            headerEl.classList.add("default-document-title");
            headerEl.classList.remove("small-document-title");
            if (mainSectionEl != null) {
                mainSectionEl.classList.remove("smaller-main-section");
            }
            if (mainNavEl != null) {
                mainNavEl.classList.remove("header-is-shrink");
            }
            if (headerNav == null) {
                header.classList.remove("i-am-shrinked");
            }
        }
    } else if (h1El != null) {
        if (distanceY > shrinkOn) {
            h1El.classList.add("small-document-title");
            h1El.classList.remove("default-document-title");
            if (mainSectionEl != null) {
                mainSectionEl.classList.add("smaller-main-section");
            }
            if (mainNavEl != null) {
                mainNavEl.classList.add("header-is-shrink");
            }
            if (headerNav == null) {
                header.classList.add("i-am-shrinked");
            }
        } else {
            h1El.classList.add("default-document-title");
            h1El.classList.remove("small-document-title");
            if (mainSectionEl != null) {
                mainSectionEl.classList.remove("smaller-main-section");
            }
            if (mainNavEl != null) {
                mainNavEl.classList.remove("header-is-shrink");
            }
            if (headerNav == null) {
                header.classList.remove("i-am-shrinked");
            }
        }
    }

}

window.addEventListener('scroll', resizeHeaderOnScroll);

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        var main_nav = document.querySelector('body>nav:first-of-type');
        var headerEl = document.querySelector('body>header:first-child');
        var mainSectionEl = document.querySelector('body>main:first-of-type');
        var aside = document.querySelector('body>aside:first-of-type');
        if (main_nav != null) {
            main_nav.classList.add('none');
        }
        if (headerEl == null) {
            mainSectionEl.classList.add("no-header-at-all");
        }

        if (aside != null) {
            var parent = document.createElement("div");
            parent.classList.add('main-and-aside');
            document.body.insertBefore(parent, mainSectionEl);
            parent.appendChild(mainSectionEl);
            parent.appendChild(aside);
        }
    }
}

function addDocumentTitle() {
    var header = document.querySelector('body>header:first-child');
    if (header.querySelector('h1') == null) {
        var span = document.createElement("span");
        span.innerText = document.title;
        span.classList.add('default-document-title');

        header.appendChild(span);
    }
}

window.onload = function() {
    addDocumentTitle();
    var main_nav = document.querySelector('body>nav:first-of-type');
    var main_tag = document.querySelector('body>main:first-of-type');
    var div_tag = document.querySelector('body>div.main-and-aside');

    var showMainNavAnchor = document.querySelector('body>header>nav>a:first-of-type');
    if (showMainNavAnchor != null) {
        showMainNavAnchor.addEventListener("click", function() {
            if (main_tag != null) {
                toggleMainNav(main_nav, main_tag);
            } else if (div_tag != null) {
                toggleMainNav(main_nav, div_tag);
            }
        });
    }

    var a_elem = document.querySelectorAll('a');
    a_elem.forEach(function(element) {
        if (element.querySelector('img') != null && element.querySelector('p') != null || element.querySelector('h6') != null) {
            element.classList.add('card');
        }
    }, this);

    var buttons = document.querySelectorAll('body main:first-of-type>button');
    buttons.forEach(function(button) {
        if (button.children.length == 1 && button.querySelector('i') != null) {
            button.classList.add('action');
        }
    }, this);

    var contentWithFabs = document.querySelectorAll('body main>div');
    contentWithFabs.forEach(function(content) {
        var buttonsInContent = content.querySelectorAll('button');
        var btnLen = buttonsInContent.length;
        if (btnLen == content.children.length) {
            for (var i = 0; i < btnLen - 1; i++) {
                buttonsInContent[i].classList.add('mini-action');
            }
            buttonsInContent[btnLen - 1].classList.add('action');
            content.classList.add('fabs-container');
        }
    }, this);

    var articles = document.querySelectorAll('article');
    articles.forEach(function(article) {
        if (article.querySelector('table') != null && article.querySelector('h6') != null) {
            article.classList.add('table-in-card');
        }
    }, this);

    var buttonsInForms = document.querySelectorAll('form button');
    buttonsInForms.forEach(function(button) {
        button.classList.add('raised');
    }, this);

    var detailsTags = document.querySelectorAll('details');
    detailsTags.forEach(function(details) {
        details.classList.add('card');
    }, this);
}