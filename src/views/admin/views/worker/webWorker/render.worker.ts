onmessage = function (e) {
    console.log(new Date().valueOf(),'worker')
    let sum = 0
    for (let index = 1; index <= e.data.val; index++) {
        sum += index
        // console.log(sum,'aaaaaaaa')
    }
    console.log(new Date().valueOf(),'worker')
    postMessage({sum:sum,index:e.data.index});
}