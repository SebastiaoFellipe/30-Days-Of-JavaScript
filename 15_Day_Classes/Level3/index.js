class Statistic {
    constructor(){
        this.ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
    }
    print(){
        console.log(this.ages)
    }
    count(){
        return this.ages.length;
    }
    sum(){
        const sum = this.ages.reduce((acc, number) => acc + number, 0);
        return sum;
    }
    min(){
        let minAge = 999;
        for (let i = 0; i < this.ages.length; i++) {
            if(this.ages[i]<minAge){
                minAge = this.ages[i];
            }
        }
        return minAge;
    }
    max(){
        let maxAge = 0;
        for (let i = 0; i < this.ages.length; i++) {
            if(this.ages[i]>maxAge){
                maxAge = this.ages[i];
            }
        }
        return maxAge;
    }
    range(){
        const max = this.max();
        const min = this.min()
        return max-min;
    }
    mean(){
        const sum = this.sum();
        return Math.round(sum/this.ages.length);
    }
    median(){
        const sortedAges = [...this.ages].sort((a, b) => a-b);
        const size = sortedAges.length;
        const middle = Math.floor(size / 2);
        if (size%2==0) {
            return (sortedAges[middle-1] + sortedAges[middle])/2;
        } else {
            return sortedAges[middle];
        }
    }
    mode(){
        const modeMap = new Map();
        for (let i = 0; i < this.ages.length; i++) {
            if(!modeMap.has(this.ages[i])){
                modeMap.set(this.ages[i],1);
            } else {
                modeMap.set(this.ages[i], modeMap.get(this.ages[i])+1);
            }
        }
        const sortedModeMap = new Map([...modeMap.entries()].sort((a, b) => b[1] - a[1]))
        const mode = [...sortedModeMap.entries()][0];
        return mode;
    }
    variance(){
        const mean = this.mean();
        const squaredDiffs = this.ages.map(age => Math.pow(age - mean, 2));
        const sumSquaredDiffs = squaredDiffs.reduce((acc, squaredDiff) => acc + squaredDiff, 0);
        return sumSquaredDiffs/this.ages.length;
    }
    standardDeviation(){
        return Math.sqrt(this.variance()).toFixed(1);
    }
    frequency(){
        const agesMap = new Map();
        for (let i = 0; i < this.ages.length; i++) {
            if(!agesMap.has(this.ages[i])){
                agesMap.set(this.ages[i],1);
            } else {
                agesMap.set(this.ages[i], agesMap.get(this.ages[i])+1);
            }
        }
        const sortedagesMap = new Map([...agesMap.entries()].sort((a, b) => b[1] - a[1]));
        return [...sortedagesMap];
    }
}

const statistics = new Statistic();
statistics.print();
console.log(`Count: ${statistics.count()}`); // 25
console.log(`Sum: ${statistics.sum()}`); // 744
console.log(`Min: ${statistics.min()}`); // 24
console.log(`Max: ${statistics.max()}`); // 38
console.log(`Range: ${statistics.range()}`); // 14
console.log(`Mean: ${statistics.mean()}`); // 30
console.log(`Median: ${statistics.median()}`); // 29
console.log(`Mode: ${statistics.mode()[0]}, Count: ${statistics.mode()[1]}`); // Mode: 26, Count: 5
console.log(`Standard Deviation: ${statistics.standardDeviation()}`); // 4.2
console.log(`Variance: ${statistics.variance()}`); // 17.6
const frequency = statistics.frequency();
console.log('Frequency Distribution:');
frequency.forEach(entry => console.log(`Number: ${entry[0]}, Count: ${entry[1]}`));
/*Number: 26, Count: 5
Number: 27, Count: 4
Number: 32, Count: 3
Number: 31, Count: 2
Number: 34, Count: 2
Number: 37, Count: 2
Number: 24, Count: 2
Number: 33, Count: 2
Number: 25, Count: 1
Number: 38, Count: 1
Number: 29, Count: 1*/