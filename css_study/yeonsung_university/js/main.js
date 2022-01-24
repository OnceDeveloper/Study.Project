$(document).ready(function () {
  // 3초마다배경 이미지 전환
  let i = 1;
  setInterval(function () {
    $('.main-bg').css('opacity', '0');
    $('.main-bgimg' + i).css('opacity', '1');
    i++;
    if (i === 4) i = 1;
  }, 5000);

  $(
    '.main-pg-menu-btn, .notice-contents-header-category, .jobs-header-category'
  ).on('click', function () {
    let target = $(this);
    if (target.hasClass('main-pg-menu-btn'))
      $('.main-pg-menu-btn').removeClass('active');
    else if (target.hasClass('notice-contents-header-category'))
      $('.notice-contents-header-category').removeClass('active');
    else if (target.hasClass('jobs-header-category'))
      $('.jobs-header-category').removeClass('active');
    target.addClass('active');
  });

  //   let slides = document.querySelector('.footer-banner-ul');
  //   let slideImg = document.querySelectorAll('.footer-banner-li');
  //   currentIdx = 0;
  //   slideCount = slideImg.length;
  //   slideWidth = 214; //슬라이드이미지 넓이
  //   slideMargin = 10; //슬라이드 끼리의 마진값
  //   //   makeClone(0); // 처음이미지와 마지막 이미지 복사 함수
  //   initfunction(); //슬라이드 넓이와 위치값 초기화 함수
  //   $(slideImg).each(function () {
  //     debugger;
  //     let thisNode = this.cloneNode(true);
  //     slides.append(thisNode);
  //     slides.insertBefore(this.parentNode.lastElementChild, thisNode);
  //   });
  //   function makeClone(idx) {
  //     let cloneSlide_first = slideImg[idx].cloneNode(true);
  //     let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  //     slides.append(cloneSlide_first);
  //     slides.insertBefore(cloneSlide_last, slides.firstElementChild);
  //   }
  //   function initfunction() {
  //     slides.style.width = (slideWidth + slideMargin) * (slideCount + 2) + 'px';
  //     slides.style.left = -(slideWidth + slideMargin) + 'px';
  //   }

  //   setInterval(function () {
  //     if (currentIdx >= 0) {
  //       slides.style.left = -currentIdx * (slideWidth + slideMargin) + 'px';
  //       slides.style.transition = `${0.5}s ease-out`;
  //     }
  //     if (currentIdx === 0) {
  //       setTimeout(function () {
  //         slides.style.left = -slideCount * (slideWidth + slideMargin) + 'px';
  //         slides.style.transition = `${0}s ease-out`;
  //       }, 500);
  //       currentIdx = slideCount;
  //     }
  //     // makeClone(idx);
  //     currentIdx -= 1;
  //   }, 2000);
});
