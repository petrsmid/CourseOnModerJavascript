//ECMAScript 5
function doAfterOneSecond (onDoneCallback) {
    setTimeout(function () {
        onDoneCallback();
    }, 1000);
}


doAfterOneSecond(function (msg) {
    console.log("done after 1s");
    doAfterOneSecond(function (msg) {
        console.log("done after 2s");
        doAfterOneSecond(function () {
            console.log("done after 3s");
            doAfterOneSecond(function () {
                console.log("done after 4s");
                doAfterOneSecond(function () {
                    console.log("done after 5s");
                });
            });
        });
    });
});


/*
//ECMAScript 6  with Promise
function doAfterSecond6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve()}, 1000);
    });
}

doAfterSecond6().then(() => {
    console.log("done after 1s");
    return doAfterSecond6();
}).then(() => {
    console.log("done after 2s");
    return doAfterSecond6();
}).then(() => {
    console.log("done after 3s");
    return doAfterSecond6();
}).then(() => {
    console.log("done after 4s");
    return doAfterSecond6();
}).then(() => {
    console.log("done after 5s");
});


*/

//EXERCISE: using promise implement XHR request and read actual Bitcoin price from https://www.bitstamp.net/api/ticker_hour/