function SchoolReport(){
  
}

SchoolReport.prototype.checkReport = function(schoolScores){
  if (schoolScores==="Green"){
    return "Green: 1";
  }else if (schoolScores==="Amber") {
    return "Amber: 1";
  }
  return "Red: 1";
  
}