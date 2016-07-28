function findMinMax(){
    var val = document.getElementById('arr').value;
    if(val == ''){
        document.getElementById('sol').innerHTML = 'Enter Values';
    }else {
        var val_arr = JSON.parse("[" + val + "]");
        if(val_arr.length == 1){
            document.getElementById('sol').innerHTML = 'Both Min and Max are ' + val_arr[0];
        }else {
            var min = val_arr[0], max = val_arr[0];
            for (var i = 0; i < val_arr.length; i++) {
                if (val_arr[i] < min) {
                    min = val_arr[i];
                } else if (val_arr[i] > max) {
                    max = val_arr[i];
                }
            }
            document.getElementById('sol').innerHTML = 'Min Number is '+min+ ' Max number is ' +max;

        }
    }
}