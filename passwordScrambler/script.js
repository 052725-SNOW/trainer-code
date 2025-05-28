function scramblePassword(seed) {
    console.log('Running scramblePasseword');
    if(seed.length < 10){
        max = Math.pow(10, (10-seed.length));
        num = Math.floor(Math.random() * max + 1);
        seed = seed + num;
    }
    seed = seed.split('').reverse().join('').replace(/a/g, '@').replace(/o/g, '0').replace(/i/g, '*').replace(/e/g, '3').replace(/s/g, '$').replace(/l/g, '1').replace(/t/g, '7').replace(/h/g, '4');
    return seed;
}

function scramble() {
    console.log('clicked scrambleA')
    const seed = document.getElementById('passwordSeed').value;
    const scrambled = scramblePassword(seed);
    document.getElementById('scrambledPasswordA').textContent = scrambled;
}
