const fs = require('fs');

const FileReader = function(){

    function loadFileIntoString(inputfile){
        let data = fs.readFileSync(inputfile,'utf8');
        //console.log(data);
        return data;
    }

    function LoadFileIntoArrayByLine(inputfile){
        let data = fs.readFileSync(inputfile,'utf8');

        if(data.indexOf("\r\n")>0){
            let array = data.split("\r\n");
            return array;
        }
        else if(data.indexOf("\n")>0){
            let array = data.split("\n");
            return array;
        }
        else if(data.indexOf("\r")>0){
            let array = data.split("\r");
            return array;
        }
        else{
            console.log("Something is strange about this input file");
            return undefined;
        }
}
    function listintoarray(list){
        let newlist=[]
        let beforeobama=list.indexOf(",\"")
        let afterobama=list.indexOf("\",")
        let beforeromney=list.lastIndexOf(",\"")
        let afterromney=list.lastindexOf("\",")
        let temp1=list.substring(0,beforeobama)
        let temp2=list.substring(beforeobama+2,afterobama)
        let temp3=list.substring(afterobama+2,beforeromney)
        let temp4=list.substring(beforeromney+2,afterromney)
        let temp5=list.substring(afterromney+2,list.length)
        let temp6=temp1.split(",")
        newlist[0]=temp6[0];
        newlist[1]=temp6[1];
        newlist[2]=temp6[2];
        newlist[3]=temp2
        newlist[4]=temp3
        newlist[5]=temp4
        newlist[6]=temp5
        return newlist;

    }

    }


    return{loadFileIntoString,LoadFileIntoArrayByLine,listintoarray}
};
module.exports = FileReader;
