$(function(){
  // load処理
  $(window).on('load', () => {
    console.log('loadイベントが発生しました');
  });
  // scroll処理
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});