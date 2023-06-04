export const validateSchema = (values) => {
  let errors = {};

  if (!values.fullName) {
    errors.fullName = 'Full Name is required';
  }
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (!/^\d+$/.test(values.age)) {
    errors.age = 'Age is invalid';
  }

  if (!values.numberOfPeople) {
    errors.numberOfPeople = 'Number Of People is required';
  } else if (!/^\d+$/.test(values.numberOfPeople)) {
    errors.numberOfPeople = 'Number Of People is invalid';
  }

  if (!values.visitingTimeFrom) {
    errors.visitingTimeFrom = 'Visiting Time From is required';
  }
  if (!values.visitingTimeTo) {
    errors.visitingTimeTo = 'Visiting Time To is required';
  } else if (
    new Date(values.visitingTimeTo).getTime() < new Date(values.visitingTimeFrom).getTime()
  ) {
    errors.visitingTimeTo = 'Visiting time to must be greater than time from';
  }

  if (!values.desiredAmount) {
    errors.desiredAmount = 'Desired Amount is required';
  } else if (!/^\d+$/.test(values.desiredAmount)) {
    errors.desiredAmount = 'Desired Amount is invalid';
  }

  if (!values.interest) {
    errors.interest = 'Interest is required';
  }

  return errors;
};
