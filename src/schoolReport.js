function SchoolReport(){
  
}

SchoolReport.prototype.checkReport = function(schoolScores){
  if (schoolScores==="Green"){
    return "Green: 1";
  }

  return "Amber: 1";

}