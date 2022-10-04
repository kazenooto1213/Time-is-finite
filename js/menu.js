// 要素の取得
const toggleBtn = document.querySelector('#toggle_btn');
const menuArea = document.querySelector('#menu_area');
const remove = document.querySelector('.remove');
const remove1 = document.querySelector('.remove1');
const span = document.querySelector('span');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');

// ハンバーガーメニューボタンをクリックでクラス切り替え
toggleBtn.addEventListener('click', () => {
  menuArea.classList.toggle('menu_active');
  span.classList.toggle('menu_active');
  span1.classList.toggle('menu_active');
  span2.classList.toggle('menu_active');
  span3.classList.toggle('menu_active');
});

// ハンバーガーメニュー、aタグ側をクリックした時にクラス削除
remove.addEventListener('click', () => {
  menuArea.classList.remove('menu_active');
  span.classList.remove('menu_active');
  span1.classList.remove('menu_active');
  span2.classList.remove('menu_active');
  span3.classList.remove('menu_active');
});

// spanをまとめて出来なかったので、クラスを変えたら、やりたかった内容が出来た。
remove1.addEventListener('click', () => {
  menuArea.classList.remove('menu_active');
  span.classList.remove('menu_active');
  span1.classList.remove('menu_active');
  span2.classList.remove('menu_active');
  span3.classList.remove('menu_active');
});