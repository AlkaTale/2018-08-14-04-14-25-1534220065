module.exports = function main(num) {
    var row1 = ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'];
    var row2 = ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'];
    var row3 = ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|'];

    var result = '';
    var result1 = '';
    var result2 = '';
    var result3 = '';

    var strnum = num.toString();

    var n = 0;
    var separator = ' ';

    for (var i = 0; i < strnum.length; i++) {
    	n = parseInt(strnum[i]);
    	separator = (i == strnum.length - 1) ? '\n' : ' ';

    	result1 = result1 + row1[n] + separator;
    	result2 = result2 + row2[n] + separator;
    	result3 = result3 + row3[n] + separator;
    } 
    result = result1 + result2 + result3;
    result = result.substr(0,result.length);
    //console.log(result);
    return result;
};