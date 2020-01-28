/*jshint esversion: 6 */
class SavingsAccount extends Account{
    constructor(number, interest ) {
        super(number);
        this.interest = interest;
    }
    get interest(){
        return this._interest;
    }
    set interest(interest){
        if (interest < 0) throw new Error("Negative interest");
        this._interest = interest;
    }
    addInterest(){
        let interest = super.getBalance()  * this.interest / 100;
        super.deposit(interest);
        return interest;
    }
    endOfMonth(){
        let interest = this.addInterest();
        return "Interest added SavingsAccount "+this.getNumber()+": balance: "+this.getBalance()+" interest: "+interest;
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance: " + this._balance + " interest(%): "+this._interest + "%";
    }

}