function chooseNews(n) {
    var value = -n * 100 + "%"; //计算它最终的margin-left
    var divNews = document.querySelector(".news-banner .news-blocks");
    divNews.style.marginLeft = value;
    var before = document.querySelector(".title-container .active");
    before.className = "";
    var active = document.querySelector(".title-container");
    active.children[n].className = "active";
}







var titleBanner = document.querySelector(".news-container .title-container ");

titleBanner.onmouseover = function(e) {
    if (e.target.tagName != "LI") {
        return;
    }
    var index = Array.from(titleBanner.children).indexOf(e.target);
    // console.log(e.target);

    if (index >= 5) {
        return;
    }
    chooseNews(index);
};