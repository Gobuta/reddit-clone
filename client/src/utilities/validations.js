import validator from 'validator';

const validString = data => typeof data === 'string' && data.trim().length > 0;
// Form validations
export const register = data => {};

export const login = data => {};

// Input validations
export const validRegisterName = name => {
  name = validString(name) ? name : '';
  const error = { name: '' };
  if (!validator.isLength(name, { min: 2, max: 20 })) {
    error.name = 'Name must be between 2 and 20 characters';
  }
  if (validator.isEmpty(name)) {
    error.name = 'Name is required';
  }
  return {
    valid: error.name.length === 0,
    error
  };
};

export const validRegisterEmail = email => {
  email = validString(email) ? email : '';
  const error = { email: '' };
  if (!validator.isEmail(email)) {
    error.email = 'Invalid E-mail';
  }
  if (validator.isEmpty(email)) {
    error.email = 'E-mail is required';
  }
  return {
    valid: error.email.length === 0,
    error
  };
};

export const validRegisterPassword = password => {
  password = validString(password) ? password : '';
  const error = { password: '' };
  if (!validator.isLength(password, { min: 6, max: 32 })) {
    error.password = 'Password must be between 6 and 32 characters';
  }
  if (validator.isEmpty(password)) {
    error.password = 'Password is required';
  }
  return {
    valid: error.password.length === 0,
    error
  };
};
