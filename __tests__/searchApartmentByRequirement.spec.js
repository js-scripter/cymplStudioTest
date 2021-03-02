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

	test("Test case 1 it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "gym": false,
                "school": true,
                "store": false
            },
            {
                "gym": true,
                "school": false,
                "store": false
            },
            {
                "gym": true,
                "school": true,
                "store": false
            },
            {
                "gym": false,
                "school": true,
                "store": false
            },
            {
                "gym": false,"school": true,
                "store": true
            }
        ]
        reqs = ["gym", "school", "store"]
        const output = 3
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)

    })

    test("Test case 2 it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "gym": false,
                "office": true,
                "school": true,
                "store": false
                },
                {
                "gym": true,
                "office": false,
                "school": false,
                "store": false
                },
                {
                "gym": true,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "school": true,
                "store": true
                }
        ]
        reqs = ["gym", "office", "school", "store"]
        const output = 2
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)

    })

    test("Test case 3 it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "gym": false,
                "office": true,
                "school": true,
                "store": false
                },
                {
                "gym": true,
                "office": false,
                "school": false,
                "store": false
                },
                {
                "gym": true,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "school": true,
                "store": true
                }
        ]
        reqs = ["gym", "office", "school", "store"]
        const output = 2
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)

    })

    test("Test case 4 it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "foo": true,
                "gym": false,
                "kappa": false,
                "office": true,
                "school": true,
                "store": false
                },
                {
                "foo": true,
                "gym": true,
                "kappa": false,
                "office": false,
                "school": false,
                "store": false
                },
                {
                "foo": true,
                "gym": true,
                "kappa": false,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "foo": true,
                "gym": false,
                "kappa": false,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "foo": true,
                "gym": true,
                "kappa": false,
                "office": false,
                "school": true,
                "store": false
                },
                {
                "foo": true,"gym": false,
                "kappa": false,
                "office": false,
                "school": true,
                "store": true
                }
        ]
        reqs = ["gym", "school", "store"]
        const output = 4
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)

    })

    test("Test case 5 it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "gym": true,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "school": false,
                "store": true
                },
                {
                "gym": true,
                "school": false,
                "store": false
                },
                {"gym": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "school": true,
                "store": false
                }
        ]
        reqs = ["gym", "school", "store"]
        const output = 2
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)

    })
    
    test("Test case 6 it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "gym": true,
                "pool": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "pool": false,
                "school": true,
                "store": false
                },{
                "gym": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "pool": false,
                "school": false,
                "store": true
                },
                {
                "gym": true,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "pool": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,"pool": true,
                "school": false,
                "store": false
                }
        ]
        reqs = ["gym", "pool", "school", "store"]
        const output = 7
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)

    })

    test("Test case 7 it should search by blocks and requirements parameters",()=>{
        const blocks = [
            {
                "gym": true,
                "office": false,
                "pool": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "office": true,
                "pool": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": true,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "pool": false,
                "school": false,"store": true
                },
                {
                "gym": true,
                "office": true,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "pool": true,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "pool": false,
                "school": false,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "pool": false,
                "school": true,
                "store": false
                },
                {
                "gym": false,
                "office": false,
                "pool": true,
                "school": false,
                "store": false
                }
        ]
        reqs = ["gym", "pool", "school", "store"]
        const output = 4
        expect(apartmentSearch.apartmentHunting(blocks,reqs)).toEqual(output)

    })
    
})