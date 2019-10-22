describe('Testing School Reports', function(){

  beforeEach(function() {
    schoolReport = new SchoolReport();
  });

  it("Report on a single Green Score", function(){
    testReport = "Green"
    expect(schoolReport.checkReport(testReport)).toEqual("Green: 1");
  });

});