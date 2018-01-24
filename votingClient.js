const FileReader = require('./FileReader.js');
const electionParser = require('./electionParser.js');


let FR = new FileReader();
let Parser = new electionParser();

let list = Parser.all(FR.LoadFileIntoArrayByLine('electionSimplified.csv'));
console.log(list.pobama);




function sortbyfips(list){
    list.sort(function(a,b){return a.fips-b.fips});
    return list;
}
function percentdifference(p){
    temp=[]
    for(i=0;i<list.length;i++){
        if(list[i].pobama-list[i].promney>p){
            temp.push(list[i])
        }
    }
    return temp;
}
function sortbytotal(list){
    list.sort(function(a,b){return a.obama+a.romney-b.obama-b.romney})
    return list;
}
function nameandpercent(array){
    if(array.pobama>array.promney){
        console.log("obama"+"and"+array.pobama);
    }
    else{
        console.log("romney"+"and"+array.promney);

    }
}
function sortbypercentdifference(list){

    list.sort(function(a,b){return (a.pobama-a.promney)-(b.pobama-b.promney)})
    return list[0];
}

function sortbyliteraldifference(list){
    list.sort(function(a,b){return (a.obama-a.romney)-(b.obama-b.romney)})
    return list[0]
}

function findStatesWithAtLeast(number){
    let countycount = new Array(50);
    let x=0
    let namesofstates = ["AK", "AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA","MA","MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE","NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV"]
    countycount.fill(0);
    for(var i=0;i<list.length;i++){
        if(!list[i].state==list[i-1].state){
            x++;
        }
        countycount[x]++;
    }
    for(var i=0;i<50;i++){
        if(countycount[i]>number){
            return namesofstates[i]
        }
}
}

function findStatesWithAtMost(number){
    let countycount = new Array(50);
    let x=0
    let namesofstates = ["AK", "AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA","MA","MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE","NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV"]
    countycount.fill(0);
    for(var i=0;i<list.length;i++){
        if(!list[i].state==list[i-1].state){
            x++;
        }
        countycount[x]++;
    }
    for(var i=0;i<50;i++){
        if(countycount[i]<number){
            return namesofstates[i]
        }
}
}

function findStatesWithExact(number){
    let countycount = new Array(50);
    let x=0
    let namesofstates = ["AK", "AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA","MA","MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE","NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV"]
    countycount.fill(0);
    for(var i=0;i<list.length;i++){
        if(!list[i].state==list[i-1].state){
            x++;
        }
        countycount[x]++;
    }
    for(var i=0;i<50;i++){
        if(countycount[i]==number){
            return namesofstates[i]
        }
}
}




// find states with at least/at most/exactly "number" counties
// find all state totals aka fips ==0
// find all states where percent difference was less than p%
// sort counties within a given state from least to greatest total votes
// name counties a candidate won in a state and show percent.
// which state had the county with the largest % difference
// which state had the county with the largest literal vote difference
