function Validator() {
  'use_strict';
};

Validator.prototype.checkName = function(name) {
  return (/[^a-z]/i.test(name) === false );
};
