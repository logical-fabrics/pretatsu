$('.openbtn').click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass('active') //ボタン自身に activeクラスを付与し
  $('#g-nav').toggleClass('panelactive') //ナビゲーションにpanelactiveクラスを付与
  $('.container').toggleClass('mainblur') //ぼかしたいエリアにmainblurクラスを付与
})

$('#g-nav a').click(function () {
  //ナビゲーションのリンクがクリックされたら
  $('.openbtn').removeClass('active') //ボタンの activeクラスを除去し
  $('#g-nav').removeClass('panelactive') //ナビゲーションのpanelactiveクラスを除去し
  $('.container').removeClass('mainblur') //ぼかしているエリアのmainblurクラスを除去
})

$('.slider').slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
  speed: 1000, //スライドの動きのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
  arrows: true, //左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
})

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
  $('.slider').slick('slickPlay')
})

//スムーススクロール
$(function () {
  $('a[href^="#top"]').click(function () {
    var speed = 500
    var href = $(this).attr('href')
    var target = $(href == '#' || href == '' ? 'html' : href)
    var position = target.offset().top
    $('html, body').animate({ scrollTop: position }, speed, 'swing')
    return false
  })
})

jQuery('.inline').modaal({ content_source: '#inline' })
$(function () {
  $('#banner_Close').click(function () {
    $('#banner_Panel').fadeOut('fast')
  })
})

$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(
    '.scroll_up , .scroll_left , .scroll_right'
  )
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 30
      if (
        window.innerHeight >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add('on')
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc)
  window.addEventListener('scroll', scrollAnimationFunc)
})

// テキスト

document.querySelectorAll('.js-g01').forEach((item, i) => {
  gsap.from(item, {
    opacity: 0,
    scale: 2,
    yPercent: 150,
    ease: 'back',
    duration: 1.0,
    delay: i * 0.1,
  })
})
