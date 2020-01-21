(function() {
    "use strict";
    let assign = {
        array: [],
        setValues(...vals){
            this.values = vals;
        },

        myMap(arr, mapFunc){
            let result = [];
            for(let itm of arr){
                result.push(mapFunc(itm));
            }
            return result;
        },
        myFilter(arr, filterFunc){
            let result = [];
            for(let itm of arr) {
                if(filterFunc(itm)){
                    result.push(itm);
                }
            }
            return result;
        },

        max(n1, n2){
            return n1>n2?n1:n2;
        },
        maxOfThree(n1, n2,n3) {
            return this.max(this.max(n1, n2), n3);
        },
        isVowel(letter){
            let vowels = /^[aeiou]$/i;
            return vowels.test(letter);
        },

        sum(){
            return this.array.reduce((n1,n2)=>n1+n2);
        },
        multiply(){
            return this.array.reduce((accum, curVal)=>accum*curVal, 1);
        },
        reverse(word) {
            return word.split('').reduce((l1,l2)=>l2+l1);
        },
        findLongestWord() {
            return this.myMap(this.array, w=>w.length).reduce((l1,l2)=>(l1>l2?l1:l2));
        },
        filterLongWords(i) {
            return this.myFilter(this.array, function (word) {
                return word.length>i;
            });
        },
        multiply10(){
            return this.myMap(this.array,e=>e*10);
        },
        arrEqual3() {
            return this.myFilter(this.array, e=>e===3);
        },
        multiplyReduce() {
            return this.array.reduce((e1,e2)=>e1*e2);
        }
    };
    describe("assign", function () {
        function checkArray(result, resultMust){
            assert.isArray(result, "result must be array");
            assert.equal(result.length, resultMust.length, "Result array must have length = "+resultMust.length);
            for(let indx in resultMust){
                assert.equal(result[indx], resultMust[indx], "result["+indx+"] is "+result[indx]+". It must be "+resultMust[indx]);
            }
        }
        context("When we need find maximum", function () {
            beforeEach(function () {

            });
            it("the max(20, 30) is 30", function () {
                assert.equal(assign.max(20,30), 30);
            });
            it("the maxOfTree(41, 20, 30) is 41", function () {
                assert.equal(assign.maxOfThree(41, 20,30), 41);
            });
            it("the maxOfTree(41, 20, 30) is 41 (special mistake)", function () {
                assert.equal(assign.maxOfThree(41, 20,30), 20);
            });
        });
        context("letter is vowel", function () {
            beforeEach(function () {
            });
            it("the isVowel(\"L\") is false", function () {
                assert.isFalse(assign.isVowel("L"), "L is not vowel");
            });
            it("the isVowel(\"a\") is false", function () {
                assert.isTrue(assign.isVowel("a"), "a is vowel");
            });
            it("the isVowel(\"E\") is false", function () {
                assert.isTrue(assign.isVowel("E"), "E is vowel");
            });
        });
        context("when given an array [1,2,3,4,5]", function () {
            beforeEach(function () {
                assign.array = [1,2,3,4,5];
            });
            it("ths sum() is 15", function () {
                assert.equal(assign.sum(), 15);
            });
            it("ths multiply() is 120", function () {
                assert.equal(assign.multiply(), 120);
            });
        });
        context("when given some words", function () {
            beforeEach(function () { });
            it("ths reverse(\"nurlan\") is nalrun", function () {
                assert.equal(assign.reverse("nurlan"), "nalrun");
            });
            it("ths reverse(\"professor\") is rosseforp", function () {
                assert.equal(assign.reverse("professor"), "rosseforp");
            });
        });
        context("when given array [\"nurlan\", \"professor\", \"MUM\"]", function () {
            beforeEach(function () {
                assign.array = ["nurlan", "professor", "MUM"];
            });
            it("ths findLongestWord() is 9", function () {
                assert.equal(assign.findLongestWord(), 9);
            });
            it("ths filterLongWords(5) is [\"nurlan\", \"professor\"]", function () {
                checkArray( assign.filterLongWords(5), ["nurlan", "professor"]);
            });
        });
        context("when given array [1,3,5,3,3]", function () {
            beforeEach(function () {
                assign.array = [1,3,5,3,3];
            });
            it("ths multiply10() is [10,30,50,30,30]", function () {
                checkArray(assign.multiply10(), [10,30,50,30,30]);
            });
            it("ths arrEqual3() is [3,3,3]", function () {
                checkArray(assign.arrEqual3(), [3,3,3]);
            });
            it("ths arrEqual3() is [3,3] (special mistake)", function () {
                checkArray(assign.arrEqual3(), [3,3]);
            });
            it("ths multiplyReduce() is 135", function () {
                assert.equal(assign.multiplyReduce(), 135);
            });
        });

    });
}());