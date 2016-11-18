function* random(seed) {
    let nextSeed = seed;
    while(true) {
        nextSeed = (nextSeed * nextSeed) % ( 4871 * 7919 );
        yield nextSeed % 100;
    }
}


let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}
