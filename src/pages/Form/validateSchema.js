export const validateSchema = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Full Name is required';
  }
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (!/^\d+$/.test(values.age)) {
    errors.age = 'Age is invalid';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.numberofpp) {
    errors.numberofpp = 'Number Of People is required';
  } else if (!/^\d+$/.test(values.numberofpp)) {
    errors.numberofpp = 'Number Of People is invalid';
  }

  if (!values.ngay_den) {
    errors.ngay_den = 'Visiting Time From is required';
  }
  if (!values.ngay_di) {
    errors.ngay_di = 'Visiting Time To is required';
  } else if (
    new Date(values.ngay_di).getTime() < new Date(values.ngay_den).getTime()
  ) {
    errors.ngay_di = 'Visiting time to must be greater than time from';
  }

  // if (!values.amount) {
  //   errors.amount = 'Desired Amount is required';
  // } else if (!/^\d+$/.test(values.amount)) {
  //   errors.amount = 'Desired Amount is invalid';
  // }

  if (!values.interest) {
    errors.interest = 'Interest is required';
  }

  return errors;
};
