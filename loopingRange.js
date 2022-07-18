function range (start, end, step) {
    let some_array = [];
    if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step < 0)) {
        return [];
    } else {for (let i = start; i <= end; i = i += step) {
        some_array.push(i);
    }}
    return some_array
}
    console.log(range(10, 30, 5))




