var katzDeli = [];
function takeANumber(katzDeli, name){
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number "+ katzDeli.length +" in line.";
}

function nowServing(katzDeli){
  if (katzDeliLine.length > 0){
    return katzDeli[0];
    katzDeli.shifts()
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
