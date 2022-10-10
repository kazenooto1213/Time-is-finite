// 要素を取得
const skill_img = document.getElementById('elm');

// 要素の20％が画面に交差したら
let options = {threshold:0.2};

// インスタンス生成
const observer = new IntersectionObserver(fade, options);

// 監視対象を指定
observer.observe(skill_img);

// コールバック関数
function fade(entries) {
  // 画面と交差してるなら
  if(entries[0].isIntersecting) {
    // 要素にクラスを追加
    skill_img.classList.add('fade');
  };
};
