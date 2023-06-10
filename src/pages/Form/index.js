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
import CheckBox from '../../components/CheckBox';

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
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [interestInputValue, setInterestInputValue] = useState('');

  const { errors, values, handleChange, handleSubmit, setFormValues } = useValidateForm({
    initialValue: {
      name: '',
      age: 0,
      email: '',
      numberofpp: 0,
      ngay_den: '',
      ngay_di: '',
      amount: '',
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
    setSelectedLocations([]);
  };

  const handleSelectLocation = (location) => {
    const index = selectedLocations.indexOf(location);
    if (index > -1) {
      setSelectedLocations((prevLocations) =>
        prevLocations.filter((prevLocation) => prevLocation !== location)
      );
    } else {
      setSelectedLocations((prevLocations) => [...prevLocations, location]);
    }
  };

  const handleClearInterest = () => {
    setFormValues('interest', '');
    setInterestInputValue('');
    setSelectedLocations([]);
  };

  const handleCheckBoxChange = (location) => {
    const index = selectedLocations.indexOf(location);
    if (index > -1) {
      setSelectedLocations((prevLocations) =>
        prevLocations.filter((prevLocation) => prevLocation !== location)
      );
    } else {
      setSelectedLocations((prevLocations) => [...prevLocations, location]);
    }
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
                    name="name"
                    error={errors.name}
                    value={values.name}
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
                    error={errors.numberofpp}
                    label="Number of people"
                    name="numberofpp"
                    value={values.numberofpp}
                    onChange={handleChange}
                    containerClassName={styles.input}
                  />
                  <Input
                    label="Desired amount"
                    name="amount"
                    error={errors.amount}
                    value={values.amount}
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
                 
                <div>
                    <h5 className={styles.locationTitle}>Locations</h5>
                    {Object.entries(interestLocations).map(([interest, locations]) => (
                      interest === values.interest && (
                        <div className={styles.locationCheckbox} key={interest}>
                          {locations.map((location) => (
                            <div className={styles.checkboxItem} key={location}>
                              <CheckBox
                                label={location}
                                value={location}
                                onChange={() => handleCheckBoxChange(location)}
                              />
                            </div>
                          ))}
                        </div>
                      )
                    ))}
                  </div>
                  <div>
                    <h5>Visiting time</h5>
                    <div>
                      <h6>From</h6>
                      <Input
                        type="date"
                        error={errors.ngay_den}
                        name="ngay_den"
                        value={values.ngay_den}
                        onChange={handleChange}
                        containerClassName={styles.input}
                      />
                    </div>
                    <div>
                      <h6>To</h6>
                      <Input
                        type="date"
                        error={errors.ngay_di}
                        name="ngay_di"
                        value={values.ngay_di}
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
