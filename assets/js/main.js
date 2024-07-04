$(document).ready(function() {

    let lastScrollTop = 0;

    $(window).scroll(() => {
        const header = $('.main-header');
        const nav = $('.navigation-parent');
        const scrollTop = $(window).scrollTop();
    
        if (scrollTop > lastScrollTop) {
          if (scrollTop >= 550) {
            header.addClass('top-fixed');
            nav.removeClass('top-bottom-border top-bottom-pad');
          }
        } else {
          header.removeClass('top-fixed');
          nav.addClass('top-bottom-border top-bottom-pad');
        }
    
        lastScrollTop = scrollTop;
      });


      const toggleClass = (element, addClass, removeClass) => {
        element.addClass(addClass).removeClass(removeClass);
    };
    
    const toggleMobileElements = (isMobile) => {
        const desktopMenu = $('.navigation-parent');
        const desktopLogo = $('.desktop-logo');
        const header = $('.main-header');
        const mobileNav = $('.mobile-navigation');
        const btnContact = $('.btn-contact');
        
        if (isMobile) {
            toggleClass(desktopMenu, 'd-none', 'd-block');
            toggleClass(mobileNav, 'd-block', 'd-none');
            toggleClass(desktopLogo, 'd-none', '');
            toggleClass(header, 'mobile-header', '')
            toggleClass(btnContact, 'd-block', '');
        } else {
            toggleClass(desktopMenu, 'd-block', 'd-none');
            toggleClass(mobileNav, 'd-none', 'd-block');
            toggleClass(desktopLogo, 'd-block', 'd-none');
            toggleClass(header, '', 'mobile-header');
            toggleClass(btnContact, '', 'd-block');
        }
    };

    const toggleTabletElements = (isTablet) => {
        const tabletNav = $('.tablet-navigation');
        if(isTablet){
            toggleClass(tabletNav, 'd-block', 'd-none');
        } else {
            toggleClass(tabletNav, 'd-none', 'd-block');
        }
    }
    
    const checkWindowSize = () => {
        const width = $(window).width();
        const isMobile = width < 600;
        const isTablet = width >= 600 && width < 991;
        const isDesktop = width >= 991;

        toggleMobileElements(isMobile);
        toggleTabletElements(isTablet);

        if (isDesktop) {
            toggleClass($('.navigation-parent'), 'd-block', 'd-none');
            toggleClass($('.tablet-navigation'), 'd-none', 'd-block');
            toggleClass($('.mobile-navigation'), 'd-none', 'd-block');
        }
    };
     
    $(document).ready(checkWindowSize);
    $(window).resize(checkWindowSize)


    const toggleMenu = (showMenu) => {
        const mobileNav = $('.mobile-nav');
        const openBtn = $('.btn_open');
        const closeBtn = $('.btn_close');
    
        if (showMenu) {
            toggleClass(mobileNav, 'd-block', 'd-none');
            toggleClass(openBtn, 'd-none', 'd-block');
            toggleClass(closeBtn, 'd-block', 'd-none');
        } else {
            toggleClass(mobileNav, 'd-none', 'd-block');
            toggleClass(openBtn, 'd-block', 'd-none');
            toggleClass(closeBtn, 'd-none', 'd-block');
        }
    };
    
    $('.btn_open').on('click', () => toggleMenu(true));
    $('.btn_close').on('click', () => toggleMenu(false));



});