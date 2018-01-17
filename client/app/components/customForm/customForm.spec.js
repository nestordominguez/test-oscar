import CustomFormModule from './customForm';
import CustomFormController from './customForm.controller';
import CustomFormComponent from './customForm.component';
import CustomFormTemplate from './customForm.html';

describe('CustomForm', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(CustomFormModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new CustomFormController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();

      expect(controller.name).toBeDefined();
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CustomFormTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = CustomFormComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(CustomFormTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CustomFormController);
    });
  });
});
