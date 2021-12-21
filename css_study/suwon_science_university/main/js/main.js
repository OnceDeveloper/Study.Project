window.onload = function () {
  // 3초마다배경 이미지 전환
  let i = 1;
  setInterval(function () {
    i++;
    if (i === 4) i = 1;
    $('.div-spec').css('background-image', 'url(img/2020/main' + i + '.png)');
  }, 3000);
  // active가 없는 엘레먼트가 선택된 경우에만 active class를 추가해주고
  // 기존의 active class를 가지고 있던 엘레먼트에선 삭제해줌
  $('.program-category-ul > li > a.category').on('click', function (e) {
    const target = $(e.target);

    if (!target.hasClass('category-active')) {
      target.addClass('category-active');
      target
        .parent()
        .siblings()
        .children('.category-active')
        .removeClass('category-active');
    }
  });
};
