var katzDeline = [];
function takeANumber(katzDeline, name){
  katzDeline.push(name)
  return "Welcome, " + name + ". You are number "+ katzDeline.length +" in line.";
}



function currentLine(katzDeliLine){
  var string = '';
  var line = '';
  if (katzDeliLine.length >0){
    for (var i=0; i< katzDeliLine.length; i++){
      string =`${i+1}. ${katzDeliLine[i]}`;
      line = line + string;
      }
    return "The line is currently: " + string
  }else{
    return "The line is currently empty."
  }
}; 



function nowServing(line){
  for (var i = 0; i < line.length; i++) {
    if (line.length > 0){
    return 'Currently serving ' + line[0] +'.'
    line.shift();
    }else{
      return "There is nobody waiting to be served!"
    }
  }
}
