function delayASec() {
    let t1 = new Date().getTime();
    while (new Date().getTime() - t1 < 1000) { 

    }
}

function delayNSeconds(n) {
    for ( let i = 0; i < n; i++) {
        delayASec();
    }
    console.log("Delay of " + n + " seconds completed.");
}