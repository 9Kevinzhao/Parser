const electionParser = function(){

    function electionItem(array){
        this.state=array[0];
        this.county=array[1];
        this.fips=array[2];
        this.obama=array[3];
        this.pobama=array[4];
        this.romney=array[5];
        this.promney=array[6];

    }

    function Parser(line){
        let array = line.split(",");
        return array;
    }
    function all(list){
        for(var x=0;x<list.length;x++){
            list[x] = new electionItem(Parser(list[x]));
        }
        return list;
    }
    return {all};
};

module.exports = electionParser;
