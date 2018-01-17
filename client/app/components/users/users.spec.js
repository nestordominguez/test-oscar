import UsersModule from './users';
import UsersController from './users.controller';
import UsersComponent from './users.component';
import UsersTemplate from './users.html';

describe('Users', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(UsersModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new UsersController();
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
      expect(UsersTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = UsersComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(UsersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(UsersController);
    });
  });
});
