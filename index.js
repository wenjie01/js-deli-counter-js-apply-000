var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number "+ katzDeli.length +" in line.";
}

function nowServing(line){
  if (line.length > 0){
    return 'Currently serving ' + line[1] +'.'
    line.shift();
  }else{
    return "There is nobody waiting to be served!"
  }
}
