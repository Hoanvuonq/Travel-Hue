import * as React from 'react';

import video from '../../Assets/video.mp4';
import MainLayout from '../../layouts/MainLayout';
import {routes} from '../../utils/routes';
import Input from '../../components/Input';

import styles from './form.module.scss';
import useValidateForm from '../../hooks/useValidateForm';

const validateSchema = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
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
  }
  if (!values.interest) {
    errors.interest = 'Interest is required';
  }

  return errors;
};

const interests = {
  historicalSites: 'Di tích lịch sử',
  culturalRelics: 'Di tích văn hoá',
  naturalPlace: 'Địa điểm thiên nhiên',
  entertainment: 'Vui chơi giải trí',
};

const Form = () => {
  const {errors, values, handleChange, handleSubmit, setFormValues} = useValidateForm({
    initialValue: {
      name: '',
      age: '',
      numberOfPeople: '',
      visitingTimeFrom: '',
      visitingTimeTo: '',
      desiredAmount: '',
      interest: '',
    },
    validate: validateSchema,
    onSubmit: (values) => {
      console.log(`file: index.js:59 ~ Form ~ values:`, values);
    },
  });

  return (
    <div>
      <section className={styles.wrap}>
        <div className={styles.overlay}></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div>
          <div data-aos="fade-up" className={styles.wrapForm}>
            <form onSubmit={handleSubmit}>
              <h1>Form Suggest</h1>
              <div className={styles.formData}>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Name"
                    name="name"
                    error={errors.name}
                    value={values.name}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                  <Input
                    placeholder="Age"
                    name="age"
                    error={errors.age}
                    value={values.age}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                  <Input
                    error={errors.numberOfPeople}
                    placeholder="Number of people"
                    name="numberOfPeople"
                    value={values.numberOfPeople}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />

                  <Input
                    placeholder="Desired amount"
                    name="desiredAmount"
                    error={errors.desiredAmount}
                    value={values.desiredAmount}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    clearable
                    placeholder="Interest"
                    containerClassName={styles.input}
                    error={errors.interest}
                    readOnly
                    name="interest"
                    value={interests[values.interest] || ''}
                    onChange={handleChange}
                    onSelect={(value) => {
                      setFormValues('interest', value);
                    }}
                    onClickClearText={() => {
                      setFormValues('interest');
                    }}
                    completes={interests}
                  />
                  <h5>Visiting time</h5>
                  <h6>From</h6>
                  <Input
                    type="date"
                    error={errors.visitingTimeFrom}
                    name="visitingTimeFrom"
                    value={values.visitingTimeFrom}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                  <h6>To</h6>
                  <Input
                    type="date"
                    error={errors.visitingTimeTo}
                    name="visitingTimeTo"
                    value={values.visitingTimeTo}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                </div>
              </div>

              <div className={styles.btnSubmit}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

Form.options = {
  layout: MainLayout,
  route: routes.FORM,
};

export default Form;
