class Search{
	apartmentHunting(blocks, reqs) {
        //make object (act as inverted index) with properties name equal to facility name in reqs
        let invertedIndex={}
        for(let a=0; a<reqs.length; a++){
            let facility = reqs[a]
            invertedIndex[facility]=[]
            blocks.forEach((element,index)=>{
                if(element[facility]==true){
                    invertedIndex[facility].push(index)
                }
            })
        }
    }
}
module.exports = Search