window.onload = function () {
    function getClass(a) {
        return document.querySelector(a);
    }
    var i = 0;
    getClass(".box").onmouseover = function () {
        i++;
        if (i == 1) {
            this.style.backgroundColor = "red";
        }
        if (i == 2) {
            this.style.backgroundColor = "yellow";
        }
        if (i == 3) {
            this.style.backgroundColor = "green";
        }
        if (i == 4) {
            i = 1;
            this.style.backgroundColor = "red";
        }
    }


    getClass(".box").onmouseout = function () {
        this.style.backgroundColor = "blueviolet";
    }
}


