class Search{
    constructor(){
        this.testCounter=0
    }
    
	apartmentHunting(blocks, reqs) {
        this.testCounter++
       //make object (act as inverted index) with properties name equal to facility name in reqs
        let invertedIndex = CreateInvertedIndex(reqs, blocks);

        // travelEfficientBlock will hold info of most travel efficient block during iteration on blocks
        let travelEfficientBlock= {traveldistance:0,index:-1}

        //loop on blocks array
        for(let b=0, len = blocks.length; b<len; b++){
            // check one block at a time to find distance of each facility
            let block = blocks[b]
            // to keep track of distance between current block in iteration and closest facility block
            let currentBlockToCurrentFacilityDistance=0
            // to keep track of most long distance the current block in iteration has 
            let farthestDistanceToTravelOfCurrentBlock=0

            // refer facilities to find out if current block has it or need to travel to other block to avail it
            reqs.forEach((facility,index)=>{
                // search nearest block with given facility in inverted index 
                let nearestBlockIndex = invertedIndex[facility].reduce(function(prev, curr) {
                    return (Math.abs(curr - b) < Math.abs(prev - b) ? curr : prev);
                });
                // now find the distance to nearest block from the current block
                if(nearestBlockIndex < b){
                    currentBlockToCurrentFacilityDistance = b - nearestBlockIndex 
                }else{
                    currentBlockToCurrentFacilityDistance = nearestBlockIndex - b
                }

                //keep farthestDistanceToTravelOfCurrentBlock updated with new long distances found
                if(farthestDistanceToTravelOfCurrentBlock < currentBlockToCurrentFacilityDistance){
                    farthestDistanceToTravelOfCurrentBlock = currentBlockToCurrentFacilityDistance
                }
            })
            // if it is first iteration on blocks array then assign farthestDistanceToTravelOfCurrentBlock 
            // a value of first block to travelEfficientBlock.travelDistance later on b will never be zero 
            // if maximum/farthest distance of current iterating block is less than most travel
            // efficient block then the current iterating block becomes most travel efficient block
            if(b==0 || farthestDistanceToTravelOfCurrentBlock < travelEfficientBlock.traveldistance){
                travelEfficientBlock.traveldistance = farthestDistanceToTravelOfCurrentBlock
                travelEfficientBlock.index = b
            }
        }
        // finally return the most travel efficient block index
        return travelEfficientBlock.index;
    }
}
module.exports = Search

function CreateInvertedIndex(reqs, blocks) {
    let invertedIndex = {};
    reqs.forEach((facility,index)=>{
        invertedIndex[facility]=[]
        blocks.forEach((block,index)=>{
            if (block[facility] == true) {
                invertedIndex[facility].push(index);
                delete block[facility]
            }
        })
    })
    // console.log(JSON.stringify(invertedIndex))
    return invertedIndex;
}