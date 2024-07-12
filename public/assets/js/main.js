$(document).ready(function () {
  let lastScrollTop = 0;

  $(window).scroll(() => {
    const header = $(".main-header");
    const nav = $(".navigation-parent");
    const scrollTop = $(window).scrollTop();

    if (scrollTop > lastScrollTop) {
      if (scrollTop >= 550) {
        header.addClass("top-fixed");
        nav.removeClass("top-bottom-border top-bottom-pad");
      }
    } else {
      header.removeClass("top-fixed");
      nav.addClass("top-bottom-border top-bottom-pad");
    }

    if (header.hasClass("top-fixed")) {
      $(".content").addClass("content-push");
    } else {
      $(".content").removeClass("content-push");
    }

    lastScrollTop = scrollTop;
  });

  const toggleClass = (element, addClass, removeClass) => {
    element.addClass(addClass).removeClass(removeClass);
  };

  const toggleMobileElements = (isMobile) => {
    const mobileNav = $(".mobile-navigation");
    const desktopLogo = $(".desktop-logo");
    const header = $(".main-header");
    const btnContact = $(".btn-contact");
    const mainHeading = $(".main-heading");
    const serviceHeader = $(".servicii-intro .second-heading");
    const copyright = $(".copy-right");

    if (isMobile) {
      toggleClass(mobileNav, "d-block", "d-none");
      toggleClass(desktopLogo, "d-none", "");
      toggleClass(header, "mobile-header", "");
      toggleClass(btnContact, "d-block", "");
      toggleClass(mainHeading, "mb-2", "mb-4");
      toggleClass(serviceHeader, "mb-3", "mb-5rem");
      toggleClass(copyright, "text-center", "text-end");
    } else {
      toggleClass(mobileNav, "d-none", "d-block");
      toggleClass(desktopLogo, "d-block", "d-none");
      toggleClass(header, "", "mobile-header");
      toggleClass(btnContact, "", "d-block");
      toggleClass(mainHeading, "mb-4", "mb-2");
      toggleClass(serviceHeader, "mb-5rem", "mb-1");
      toggleClass(copyright, "text-end", "text-center");
    }
  };

  const toggleTabletElements = (isTablet) => {
    const tabletNav = $(".tablet-navigation");

    if (isTablet) {
      toggleClass(tabletNav, "d-block", "d-none");
    } else {
      toggleClass(tabletNav, "d-none", "d-block");
    }
  };

  const toggleDesktopElements = (isDesktop) => {
    const desktopMenu = $(".navigation-parent");
    const tabletNav = $(".tablet-navigation");
    const mobileNav = $(".mobile-navigation");

    if (isDesktop) {
      toggleClass(desktopMenu, "d-block", "d-none");
      toggleClass(tabletNav, "d-none", "d-block");
      toggleClass(mobileNav, "d-none", "d-block");
    } else {
      toggleClass(desktopMenu, "d-none", "d-block");
    }
  };

  const checkWindowSize = () => {
    const width = $(window).width();
    const isMobile = width < 600;
    const isTablet = width >= 600 && width < 991;
    const isDesktop = width >= 991;

    toggleMobileElements(isMobile);
    toggleTabletElements(isTablet);
    toggleDesktopElements(isDesktop);
  };

  $(document).ready(checkWindowSize);
  $(window).resize(checkWindowSize);

  const toggleMenu = (showMenu) => {
    const mobileNav = $(".mobile-nav");
    const tabletBav = $(".tablet-nav");
    const openBtn = $(".btn_open");
    const closeBtn = $(".btn_close");

    if (showMenu) {
      toggleClass(mobileNav, "d-block", "d-none");
      toggleClass(tabletBav, "d-block", "d-none");
      toggleClass(openBtn, "d-none", "d-block");
      toggleClass(closeBtn, "d-block", "d-none");
    } else {
      toggleClass(mobileNav, "d-none", "d-block");
      toggleClass(tabletBav, "d-none", "d-block");
      toggleClass(openBtn, "d-block", "d-none");
      toggleClass(closeBtn, "d-none", "d-block");
    }
  };

  $(".btn_open").on("click", () => toggleMenu(true));
  $(".btn_close").on("click", () => toggleMenu(false));
  
  function animateSections() {
    if ($(window).width() >= 768) { 
      $(".animate__animated").each(function () {
        var sectionTop = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scrollTop + windowHeight > sectionTop + 50) {
          $(this).addClass("animate__fadeInLeft");
        }
      });
    }
  }

  $(window).on("scroll", animateSections);
  animateSections();


  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // Check if the consent cookie exists
  if (!getCookie('cookieConsent')) {
    // Show the modal if the cookie does not exist
    $('#cookies').modal('show');
  }

  // Set the cookie and hide the modal when the user clicks the save button
  $('#save-changes').on('click', function () {
    // Set the cookie to expire in 365 days
    document.cookie = "cookieConsent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
    // Hide the modal
    $('#cookies').modal('hide');
  });

  // Hide the modal when the user clicks the close button
  $('#close-modal').on('click', function () {
    $('#cookies').modal('hide');
  });
  
});
