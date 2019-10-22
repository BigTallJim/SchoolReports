describe('Testing School Reports', function(){

  beforeEach(function() {
    schoolReport = new SchoolReport();
  });

  it("Report on a single Green Score", function(){
    testReport = "Green"
    expect(schoolReport.checkReport(testReport)).toEqual("Green: 1");
  });

  it("Report on a single Amber Score", function(){
    testReport = "Amber"
    expect(schoolReport.checkReport(testReport)).toEqual("Amber: 1");
  });

});