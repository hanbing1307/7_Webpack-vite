(() => {
    "use strict";
    ({
        setH1() {
            document.body.insertAdjacentHTML("beforeend", "<h1>你好 webpack</h1>")
        }
    }).setH1()
})();