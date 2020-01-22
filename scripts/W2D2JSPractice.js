
/*jshint esversion: 6 */
(function() {
    "use strict";
    let assign = {
        //For this function I just create new array and add elements from array(took from the end)
        reverseArray(array){
            let result = [];
            for (let i = array.length - 1; i >= 0; i--) {
                result.push(array[i]);
            }
            return result;
        },
        //For this function I create subfunction expresion. swap(i) which do swap from element from i, if i is 0 it's mean swap first and last element. And Id just do for loop until middle array.
        reverseArrayInPlace(array) {
            let swap = (i) => {
                let j = array.length - 1 - i;
                let n = array[i];
                array[i] = array[j];
                array[j] = n;
            };
            for (let i = 0; i < Math.floor(array.length / 2); i++) {
                swap(i);
            }
        },
        //For this function I did with for loop. I took from the end array and create new element and add for rest previous element
        arrayToList(array) {
            let result = null;
            for (let i = array.length - 1; i >= 0; i--) {
                let listItem = {
                    value: array[i],
                    rest: null
                };
                if (result === null) {
                    result = listItem;
                } else {
                    listItem.rest = result;
                    result = listItem;
                }
            }
            return result;
        },
        //For this function I used while and in while I add values to array until item is null.
        listToArray(list) {
            let result = [];
            let item = list;
            while (item !== null) {
                result.push(item.value);
                item = item.rest;
            }
            return result;
        },
        //this function is easy, I just create new element and add list to newElement's rest.
        prepend(val, list) {
            let result = {
                value: val,
                rest: null
            };
            result.rest = list;
            return result;
        },
        //for this function I used while and local parameter pos. until pos less then index(from argument) and curentItem is not null. after that I just return currentItem(if currentItem is null I return undefined)
        nth(list, inx) {
            if(inx<0) {
                return undefined;
            }
            let curItm = list;
            let pos = 0;
            while (pos < inx && curItm !== null) {
                curItm = curItm.rest;
                pos++;
            }
            if (curItm === null) {
                return undefined;
            }
            return curItm.value;
        },
        //also I did this function by recursive. Before I check list and index, if list is null or index is less then zero I return undefined. After I check index if it is zero I return value, else I call this function again with list.rest, and index-1
        nthRecursive(list, inx) {
            if (list === null || inx < 0) {
                return undefined;
            }
            if (inx === 0) {
                return list.value;
            }
            return this.nthRecursive(list.rest, inx - 1);
        },
        //this function very cool. I like this function. I did this function also by recursive. If it is object I check every property from object by this function (deepEqual). I used this function for unit test. and also checked this function by unittest assert.isTrue()
        deepEqual(obj1, obj2) {
            if (obj1 === null || obj2 === null || obj1 === undefined || obj2 === undefined) {
                return obj1 === obj2;
            }
            if (typeof (obj1) === typeof (obj1) && typeof (obj1) === "object") {
                let keys1 = Object.keys(obj1);
                let keys2 = Object.keys(obj2);
                if (keys1.length !== keys2.length) {
                    return false;
                }
                for (let k of keys1) {
                    if (!keys2.includes(k) || !this.deepEqual(obj1[k], obj2[k])) {
                        return false;
                    }
                }
                return true;
            }
            return obj1 === obj2;
        }
    };
    describe("assign", function () {
        context("Reverse an Array", function () {
            beforeEach(function () { });
            it("the given array reverseArray([\"A\", \"B\", \"C\"]) is [\"C\", \"B\", \"A\"]", function () {
                assert.isTrue(assign.deepEqual(assign.reverseArray(["A", "B", "C"]),  ["C", "B", "A"]));
            });
            it("the given array arrayValue = [1, 2, 3, 4, 5]. reverseArrayInPlace(arrayValue). arrayValue is [5, 4, 3, 2, 1]", function () {
                let arrayValue = [1, 2, 3, 4, 5];
                assign.reverseArrayInPlace(arrayValue);
                assert.isTrue(assign.deepEqual(arrayValue,  [5, 4, 3, 2, 1]));
            });
            it("the given array arrayValue = [1, 2, 3, 4, 5]. reverseArrayInPlace(arrayValue). arrayValue is [5, 4, 3, 2, 1] (specially made mistake)", function () {
                let arrayValue = [1, 2, 3, 4, 5];
                assign.reverseArrayInPlace(arrayValue);
                assert.isTrue(assign.deepEqual(arrayValue,  [1, 2, 3, 4, 5]), "(specially made mistake)");
            });
        });
        context("A List", function () {
            beforeEach(function () { });
            it("the given arrayToList([10, 20]) is {value: 10, rest: {value: 20, rest: null}}", function () {
                assert.isTrue(assign.deepEqual(assign.arrayToList([10, 20]),  {value: 10, rest: {value: 20, rest: null}}));
            });
            it("the given list listToArray(arrayToList([10, 20, 30])) is [10, 20, 30]", function () {
                assert.isTrue(assign.deepEqual(assign.listToArray(assign.arrayToList([10, 20, 30])),  [10, 20, 30]));
            });
            it("the given prepend(10, prepend(20, null)) is {value: 10, rest: {value: 20, rest: null}}", function () {
                assert.isTrue(assign.deepEqual(assign.prepend(10, assign.prepend(20, null)),  {value: 10, rest: {value: 20, rest: null}}));
            });
            it("the given nth(arrayToList([10, 20, 30]), 1) is 20", function () {
                assert.equal(assign.nth(assign.arrayToList([10, 20, 30]), 1),  20);
            });
            it("the given nthRecursive(arrayToList([10, 20, 30]), 1) is 20", function () {
                assert.equal(assign.nthRecursive(assign.arrayToList([10, 20, 30]), 1),  20);
            });
        });
        context("Deep comparison", function () {
            beforeEach(function () { });
            it("the given obj = {here: {is: \"an\"}, object: 2} deepEqual(obj,obj) is true", function () {
                let obj = {here: {is: "an"}, object: 2};
                assert.isTrue(assign.deepEqual(obj,obj));
            });
            it("the given obj = {here: {is: \"an\"}, object: 2} deepEqual(obj,{here: 1, object: 2}) is false", function () {
                let obj = {here: {is: "an"}, object: 2};
                assert.isFalse(assign.deepEqual(obj,{here: 1, object: 2}));
            });
            it("the given obj = {here: {is: \"an\"}, object: 2} deepEqual(obj,{here: {is: \"an\"}, object: 2}) is true", function () {
                let obj = {here: {is: "an"}, object: 2};
                assert.isTrue(assign.deepEqual(obj,{here: {is: "an"}, object: 2}));
            });
            it("the given obj = {here: {is: \"an\"}, object: 2} deepEqual(obj,{here: {is: \"an\"}, object: 2}) is true", function () {
                let obj = {here: {is: "an"}, object: 2};
                assert.isTrue(assign.deepEqual({here: {is: "an"}, object: 2, a: undefined},{here: {is: "an"}, object: 2, b:undefined}));
            });
        });
    });
})();