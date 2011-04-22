describe("backbone", function() {
    
  it("model should have name", function() {
      model = new Model({
          name: 'Model A'}
          );
      expect(model.get('name')).toEqual('Model A');
    });
});