(() => { // ここに以下書く。即時関数。グローバル変数を汚染しないように


  // DOM要素の定義
  const $doc = document; // DOM要素を変数名に入れる場合は「$」を付けて明示
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]'); // 自作属性「data-nav」を呼ぶ
  const $content = $tab.querySelectorAll('[data-content]');


  // 初期化
  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  // クリックで起こるイベント
  const handleClick = (e) => {
    e.preventDefault();
    // クリックされたnavとdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav; // 「dataset.属性名(今回はnav)」はデータ属性の値を取得
    // 一旦、全部をリセット
    let index = 0;
    while (index < $nav.length) {
      $content[index].style.display = 'none';
      $nav[index].classList.remove('is-active')
      index++;
    }
    // 対象のコンテンツをアクティブ化
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add('is-active');



    console.log('targetVal', targetVal);
  };

  // 全nav要素に関数を適応
  let index = 0;
  while (index < $nav.length) {
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
  }


})(); // ここまで
