var i = 0;
let checkDOMChange = function () {
    let iframes = document.getElementsByTagName("iframe")
    let iframe = iframes[i];
    if (iframe !== null && iframe !== undefined) {
        try {
            const URL_REGEX = /(https:\/\/)(.*?)\//i;
            let current_domain = location.href.match(URL_REGEX)[2];
            let result = iframe.src.match(URL_REGEX)[2];
            if (result !== "syndication.twitter.com" && result !== "www.facebook.com") {
                if (current_domain !== result) {
                    iframe.style.pointerEvents = "none";
                }
            }
        } catch (exception) {
            iframe.style.pointerEvents = "none";
        }
        i = (i + 1) % iframes.length;
    }
    setTimeout(checkDOMChange, 10);
}
checkDOMChange();