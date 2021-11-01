function nbYear(p0, percent, aug, p) {
    i = 0;
    while (p0 <= p) {
        i++
        console.log(p0);
        p0 = p0 + p0 * percent * 0.01 + aug;
    }
    console.log(i);
}

nbYear(1500, 5, 100, 5000);
nbYear(1500000, 2.5, 10000, 2000000);
nbYear(1500000, 0.25, 1000, 2000000);
