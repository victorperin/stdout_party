var colors = require('colors');
var util = require('util');
var exec = require('child_process').exec;

function random (low, high) {
    return Math.random() * (high - low) + low;
}

function writeText(text, timing){
    exec("figlet -f bigmono12 -w 200 "+text, function(error, stdout, stderr){
      process.stdout.write('\033c');

      process.stdout.write(stdout.toString().random + '\r');
    });
}

var x = true;
var y = 0;

setInterval(function(){
  if(x){
    writeText(process.argv[2]+" o/",y);
    x = false;
  }
  else{
    writeText(process.argv[2]+" o_", y);
    x = true;

  }
},50);
