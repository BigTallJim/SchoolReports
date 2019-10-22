function SchoolReport(){
  
}

SchoolReport.prototype.checkReport = function(schoolScores){
  let scoresArray = schoolScores.split(",");
  let redCount = 0;
  let amberCount = 0;
  let greenCount = 0;
  let otherCount = 0;

  scoresArray.forEach(function(score){
    switch(score){
      case "Green": greenCount += 1;break;
      case "Amber": amberCount += 1;break;
      case "Red" : redCount += 1;break;
      default: otherCount +=1;
    }
  });

  returnString = "";
  if(greenCount>0){returnString += "Green: "+greenCount}
  if(amberCount>0){
    if(greenCount>0){returnString += "\n"}
    returnString += "Amber: "+amberCount
  }
  if(redCount>0){
    if(greenCount>0||amberCount>0){returnString += "\n"}
    returnString += "Red: "+redCount
  }
  if(otherCount>0){
    if(greenCount>0||amberCount>0||redCount>0){returnString += "\n"}
    returnString += "Other: "+otherCount
  }

  return returnString;
  
}