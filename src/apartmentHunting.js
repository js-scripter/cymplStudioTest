class Search{
	apartmentHunting(blocks, reqs) {
       //make object (act as inverted index) with properties name equal to facility name in reqs
        let invertedIndex = CreateInvertedIndex(reqs, blocks);
    }
}
module.exports = Search

function CreateInvertedIndex(reqs, blocks) {
    let invertedIndex = {};
    for (let a = 0; a < reqs.length; a++) {
        let facility = reqs[a];
        invertedIndex[facility] = [];
        blocks.forEach((element, index) => {
            if (element[facility] == true) {
                invertedIndex[facility].push(index);
            }
        });
    }
    //sort each array in ascending order
    for (const property in invertedIndex) {
        invertedIndex[property].sort();
    }
    return invertedIndex;
}