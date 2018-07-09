// About Me modal

describe('openModal', function () {
    it('opens the About Me modal', function () {
      expect(openModal()).toThrow('modalOpen');
    });
  });

  describe('closeModal', function () {
    it('closes the About Me modal', function () {
      expect('modalOpen').toBeUndefined();
    });
  });



// Collapsible project descriptions

describe('projectOneButton', function () {
    it('opens collapsible description of ProjectOne', function(){
        expect('open').toBe(true);
    });
});



// Project carousel

