function gemstones(arr){
let gemstonesSet = new Set(arr[0].split(''));
for (let i = 1; i < arr.length; i++) {
    const rock = arr[i];
    const rockSet = new Set(rock.split(''));
    gemstonesSet = new Set([...gemstonesSet].filter(y => rockSet.has(y)));
}
return gemstonesSet.size;
}
console.log(gemstones(['abcdde','baccd', 'eeabg']));