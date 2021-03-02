const Search = require('../src/apartmentHunting')
const apartmentSearch = new Search()

describe("Search Best Apartment",()=>{
	test("Example - it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "gym": false,
                "school": true,
                "store": false,
            },
            {
                "gym": true,
                "school": false,
                "store": false,
            },
            {
                "gym": true,
                "school": true,
                "store": false,
            },
            {
                "gym": false,
                "school": true,
                "store": false,
            },
            {
                "gym": false,
                "school": true,
                "store": true,
            },
        ]
        reqs = ["gym", "school", "store"]
        const output = 3
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)
    })

	
    
})