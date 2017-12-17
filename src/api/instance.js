import VacuumCleaner from './model';

// vacuum cleaner generator(as a singleton)
const Singleton = (function () {
  let instance;

  function createInstance() {
    return new VacuumCleaner();
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const cleaner = Singleton.getInstance();

export default cleaner;