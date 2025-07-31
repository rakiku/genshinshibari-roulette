document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const menuButtons = document.querySelectorAll('.menu-btn');
    const homeButton = document.getElementById('home-button');

    // ページ切り替え機能
    function showPage(pageId) {
        // 現在アクティブなページを非表示にする
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // 指定されたIDのページを表示する
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // トップページ以外では「最初に戻る」ボタンを表示
        if (pageId === 'top-page') {
            homeButton.classList.add('hidden');
        } else {
            homeButton.classList.remove('hidden');
        }
    }

    // 各メニューボタンにクリックイベントを設定
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPageId = button.getAttribute('data-target');
            showPage(targetPageId);
        });
    });

    // 「最初に戻る」ボタンにクリックイベントを設定
    homeButton.addEventListener('click', () => {
        showPage('top-page');
    });

    // 初期ページとしてトップページを表示
    showPage('top-page');
});
