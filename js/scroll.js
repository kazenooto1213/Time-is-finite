// ボタン
const scrollToTopBtn = document.querySelector('#scroll_top_button');

// クリックイベント追加
scrollToTopBtn.addEventListener('click', scroll_to_top);

function scroll_to_top() {
  window.scroll({top: 0, behavior: 'smooth'});
};

// スクロール時のイベント追加
window.addEventListener('scroll', scroll_event);

function scroll_event(){
  if(window.pageYOffset > 200) {
    scrollToTopBtn.style.opacity = '1';
  } else if(window.pageYOffset < 200) {
    scrollToTopBtn.style.opacity = '0';
  }
};