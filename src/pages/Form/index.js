import * as React from 'react';
import { FaTimes } from 'react-icons/fa';

import video from '../../Assets/video.mp4';
import MainLayout from '../../layouts/MainLayout';
import { routes } from '../../utils/routes';
import Input from '../../components/Input';

import styles from './form.module.scss';
import useValidateForm from '../../hooks/useValidateForm';
import { validateSchema } from './validateSchema';
import Popup from '../../components/Popup';

const completeInterests = {
  historicalSites: 'Di tích lịch sử',
  culturalRelics: 'Di tích văn hoá',
  naturalPlace: 'Địa điểm thiên nhiên',
  entertainment: 'Vui chơi giải trí',
};

const Form = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  const { errors, values, handleChange, handleSubmit, setFormValues } = useValidateForm({
    initialValue: {
      fullName: '',
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
      setShowPopup(true);
    },
  });

  const handleSelectInterest = (value) => {
    setFormValues('interest', value);
  };

  const handleClearInterest = () => {
    setFormValues('interest', '');
  };

  const handleClickClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <section className={styles.wrap}>
        <div className={styles.overlay}></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div>
          <div data-aos="fade-up" className={styles.wrapForm}>
            <form onSubmit={handleSubmit}>
              <h1>Đề Xuất Cho Chuyến Đi</h1>
              <div className={styles.formData}>
                <div className={styles.formGroup}>
                  <Input
                    label="Full Name"
                    name="fullName"
                    error={errors.fullName}
                    value={values.fullName}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                  <Input
                    label="Age"
                    name="age"
                    error={errors.age}
                    value={values.age}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                  <Input
                    error={errors.numberOfPeople}
                    label="Number of people"
                    name="numberOfPeople"
                    value={values.numberOfPeople}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />

                  <Input
                    label="Desired amount"
                    name="desiredAmount"
                    error={errors.desiredAmount}
                    value={values.desiredAmount}
                    onChange={handleChange}
                    iconRight={<span>VND</span>}
                    containerClassName={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    label="Interest"
                    containerClassName={styles.input}
                    error={errors.interest}
                    readOnly
                    name="interest"
                    value={completeInterests[values.interest] || ''}
                    onChange={handleChange}
                    onSelect={handleSelectInterest}
                    onClickIconRight={handleClearInterest}
                    iconRight={<FaTimes />}
                    completes={completeInterests}
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
      <Popup visible={showPopup} center onClose={handleClickClosePopup}>
        <div>Popup</div>
      </Popup>
    </div>
  );
};

Form.options = {
  layout: MainLayout,
  route: routes.FORM,
};

export default Form;
