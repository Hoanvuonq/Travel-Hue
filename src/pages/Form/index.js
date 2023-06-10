import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import video from '../../Assets/video.mp4';
import MainLayout from '../../layouts/MainLayout';
import { routes } from '../../utils/routes';
import Input from '../../components/Input';
import styles from './form.module.scss';
import useValidateForm from '../../hooks/useValidateForm';
import { validateSchema } from './validateSchema';
import { DestinationData } from '../../components/DestinationData';
import { createUser } from '../../api/fashAPI';

const completeInterests = {
  historicalSites: 'Di tích lịch sử',
  culturalRelics: 'Danh lam thắng cảnh',
  naturalPlace: 'Địa điểm thiên nhiên',
  entertainment: 'Vui chơi giải trí',
};

const interestLocations = {
  historicalSites: DestinationData.filter((data) => data.historicalSites).map(
    (data) => data.destTitle
  ),
  culturalRelics: DestinationData.filter((data) => data.culturalRelics).map(
    (data) => data.destTitle
  ),
  naturalPlace: DestinationData.filter((data) => data.naturalPlace).map((data) => data.destTitle),
  entertainment: DestinationData.filter((data) => data.entertainment).map((data) => data.destTitle),
};

const Form = () => {
  const [interestLocationsList, setInterestLocationsList] = useState([]);
  const [interestInputValue, setInterestInputValue] = useState('');

  const { errors, values, handleChange, handleSubmit, setFormValues } = useValidateForm({
    initialValue: {
      fullName: '',
      age: 0,
      email: '',
      numberOfPeople: 0,
      visitingTimeFrom: '',
      visitingTimeTo: '',
      desiredAmount: '',
      interest: '',
    },
    validate: validateSchema,
    onSubmit: async (values) => {
      try {
        const response = await createUser(values);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleSelectInterest = (value) => {
    setFormValues('interest', value);
    setInterestInputValue(completeInterests[value] || '');
    setInterestLocationsList(interestLocations[value] || []);
  };

  const handleSelectDestination = (destination) => {
    setFormValues('interest', destination);
    setInterestLocationsList([]);
  };

  const handleClearInterest = () => {
    setFormValues('interest', '');
    setInterestInputValue('');
    setInterestLocationsList([]);
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
                    label="Email"
                    name="email"
                    error={errors.email}
                    value={values.email}
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
                    name="interest"
                    value={interestInputValue}
                    onChange={(e) => setInterestInputValue(e.target.value)}
                    onSelect={handleSelectInterest}
                    onClickIconRight={interestInputValue ? handleClearInterest : null}
                    iconRight={<FaTimes />}
                    completes={completeInterests}
                  />
                  {interestLocationsList.length > 0 && (
                    <div className="py-8">
                      <h5 className={styles.diadanh}>Địa danh</h5>
                      {interestLocationsList.map((location, index) => (
                        <div
                          className="py-1"
                          key={index}
                          onClick={() => {
                            setInterestInputValue(location);
                            handleSelectDestination(location);
                          }}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  )}
                  <div>
                    <h5>Visiting time</h5>
                    <div>
                      <h6>From</h6>
                      <Input
                        type="date"
                        error={errors.visitingTimeFrom}
                        name="visitingTimeFrom"
                        value={values.visitingTimeFrom}
                        onChange={handleChange}
                        containerClassName={styles.input}
                      />
                    </div>
                    <div>
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
