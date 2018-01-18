const FileReader = require('./FileReader.js');

function electionParser(array){
    this.state=array[0];
    this.county=array[1];
    this.fips=array[3];
    this.obama=array[4];
    this.pobama=array[5];
    this.romney=array[6];
    this.promney=array[7];
    for(let i=0;i<list.length;i++){
        newlist[i]=list[i].split(",")
    }
}




module.exports = FileReader;
