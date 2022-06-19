/* ローディングアニメーション */
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem("access")) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass("is-active");
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem("access", "true"); // sessionStorageにデータを保存
      $(".loading-animation").addClass("is-active"); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass("is-active");
        $(".loading-animation").removeClass("is-active");
      }, 5000); // ローディングを表示する時間
    }
  };
  webStorage();
});

/* smooth scroll */
$(function () {
  var headerHight = 0;
  $('a[href^="#"]').click(function () {
    var speed = 1200;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, speed, "easeOutCirc");
    return false;
  });
});

/* drawer */
$(function () {
  $(".bl_drawerBtn").on("click", function () {
    $(this).toggleClass("action");
    $(".bl_drawer").toggleClass("action");
    $("body").toggleClass("noscroll");
  });
});

$(function () {
  //.bl_drawer_itemを押すとついてたactionが外れてドロワーメニューがひっこむ
  $(".bl_drawer_item a").on("click", function () {
    $(".bl_drawerBtn").toggleClass("action");
    $(".bl_drawer").toggleClass("action");
    $("body").toggleClass("noscroll");
  });
});

/* ニュースのアコーディオン */
$(function () {
  $(".news_list dt").on("click", function () {
    $(this).next().slideToggle(300);
  });
});

/* よくある質問のアコーディオン */
$(function () {
  $(".bl_faq_list dd:first").show();
  $(".bl_faq_list dt").on("click", function () {
    $(this).next().slideToggle(300);
  });
});

//.ly_fvまでスクロールするとheaderの色が変化
("use strict");

jQuery(window).on("scroll", function () {
  if (jQuery("#news").height() < jQuery(this).scrollTop()) {
    jQuery(".el_pageTop").addClass("show");
  } else {
    jQuery(".el_pageTop").removeClass("show");
  }
});

//AOS統一の設定
$(document).ready(function () {
  /* animation */
  AOS.init({
    duration: 1500, //速さ
    once: true, //動作を一回のみにする
  });
  // htmlに書くなら
  //data-aos-duration="100"
});

/* slick */
$(function () {
  $(".slider").slick({
    autoplay: true, // 自動再生ON
    dots: true, // ドットインジケーターON
    centerMode: true, // 両サイドに前後のスライド表示
    centerPadding: '20px', // 左右のスライドのpadding
    slidesToShow: 3, // 一度に表示するスライド数
    arrows: false,
  });
});
