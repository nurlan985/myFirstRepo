/*jshint esversion: 6 */
(function () {
    "use strict";
    //Exercise 1
    String.prototype.filter = function(...bannedWords){
        let words = this.split(" ");
        return words.filter(w=>!bannedWords.includes(w)).reduce((c, w)=>c+=w+" ", "").trim();
    };

    //Exercise 2
    Array.prototype.bubbleSort = function () {
        let result = this;
        let swap = function(i, j){
            let tmp = result[i];
            result[i] = result[j];
            result[j] = tmp;
        };
        let needCheck = true;
        while(needCheck) {
            needCheck = false;
            for (let i = 0; i < result.length - 1; i++) {
                if (result[i] > result[i + 1]) {
                    needCheck = true;
                    swap(i, i + 1);
                }
            }
        }
        return result;
    };

    //Exercise 3
    const Person = function() {};
    Person.prototype.initialize = function(name, age) {
        this.name = name;
        this.age = age;
    };
    Person.prototype.describe = function() {
        return this.name + ", " + this.age + " years old.";
    };
    const Student = function() {};
    Student.prototype = new Person();
    Student.prototype.learn = function(subject) {
        let result = this.name + " just learned " + subject;
        console.log(result);
        return result;
    };

    const Teacher = function() {};
    Teacher.prototype = new Person();
    Teacher.prototype.teach = function(subject) {
        //[teacher's name] is now teaching [subject]
        let result = this.name + " is now teaching " + subject;
        console.log(result);
        return result;
    };

    describe("Assignment W2D6", function () {
        context("Exercise 1", function () {
            //console.log("This house is not nice!".filter('not'));
            it("\"This house is not nice!\".filter('not') is \"This house is nice!\"", function () {
                assert.equal("This house is not nice!".filter('not'), "This house is nice!");
            });
            it("\"I don't like WAP!\".filter(\"not\", \"don't\") is \"I like WAP!\"", function () {
                assert.equal("I don't like WAP!".filter("not", "don't"), "I like WAP!");
            });
        });
        context("Exercise 2", function () {
            it("[6,4,0, 3,-2,1].bubbleSort(); is [-2, 0, 1, 3, 4, 6]", function () {
                assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(),  [-2, 0, 1, 3, 4, 6]);
            });
        });
        context("Exercise 3", function () {
            it("me.learn(\"Inheritance\") is \"John just learned Inheritance\"", function () {
                const me = new Student();
                me.initialize("John", 25);
                assert.equal(me.learn("Inheritance"),  "John just learned Inheritance");
            });
            it("teacher.teach(\"WAP\") is [-2, 0, 1, 3, 4, 6]", function () {
                const teacher = new Teacher();
                teacher.initialize("Keith Levi", 40);
                assert.equal(teacher.teach("WAP"),  "Keith Levi is now teaching WAP");
            });
        });
    });




})();