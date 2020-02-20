module.exports = function toReadable (number) {
    let res = "";
    let zero_to_nine = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ten_to_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let ten_to_hundred = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if(number >= 100){
        let hun = Math.trunc(number/100);
        res = zero_to_nine[hun] + " hundred";
        number = number % 100;
    }
    if(number >= 10) {        
        if(number >= 10 && number <= 19) {
            if(res.length != 0) res = res + " ";
            res = res + ten_to_nineteen[number%10];
        }
        else {
            let dec = Math.trunc(number/10);
            if(res.length != 0) res = res + " ";
            res = res + ten_to_hundred[dec-2];
            if(number%10 != 0) {
                if(res.length != 0) res = res + " ";
                res = res + zero_to_nine[number%10];
            }
        }
    }
    else {
        if(number == 0 && res.length != 0) {}
        else {
            if(res.length != 0) res = res + " ";
            res = res + zero_to_nine[number];
        }
    }
    return res;
}
