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
import { addPropose } from '../../redux/slice/propose';
import data from '../../data/destinations.json';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const completeInterests = {
  historicalSites: 'Di tích lịch sử',
  culturalRelics: 'Danh lam thắng cảnh',
  naturalPlace: 'Địa điểm thiên nhiên',
  entertainment: 'Vui chơi giải trí',
};
const completeAmount = {
  0: 'Từ 1 đến 3 triệu',
  1: '3,5 triệu',
  2: 'Từ 3 đến 5 Triệu',
  3: 'Từ 5 đến 7 triệu',
  4: 'Trên 10 triệu',
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
  const [interestInputValueAmount, setInterestInputValueAmount] = useState('');
  const dispatch = useDispatch();
  const naviga = useNavigate()
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
        console.log(values);
        const response = await createUser(values);
        naviga(routes.PROPOSE)
      } catch (error) {
        console.error(error);
      }
    },
  });
  console.log(`file: index.js:69 ~ Form ~ errors:`, errors)

  const handleSelectInterest = (value) => {
    setFormValues('interest', value);
    setInterestInputValue(completeInterests[value] || '');
    setSelectedLocations([]);
  };

  const handleSelectAmount = (value) => {
    setFormValues('interest', value);
    setInterestInputValueAmount(completeAmount[value] || '');
    setSelectedLocations([]);
  };

  const handleClearInterest = () => {
    setFormValues('interest', '');
    setInterestInputValue('');
    setSelectedLocations([]);
  };

  const handleCheckBoxChange = (checked, location) => {
    const index = selectedLocations.indexOf(location);
    if (index > -1) {
      setSelectedLocations((prevLocations) =>
        prevLocations.filter((prevLocation) => prevLocation !== location)
      );
    } else {
      setSelectedLocations((prevLocations) => [...prevLocations, location]);
    }
    // checked && dispatch(addPropose(234));
    checked && dispatch(addPropose(DestinationData.find((i) => i.destTitle === location)));
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
                    containerClassName={styles.input}
                    error={errors.handleSelectAmount}
                    name="amount"
                    value={interestInputValueAmount}
                    onChange={(e) => setInterestInputValueAmount(e.target.value)}
                    onSelect={handleSelectAmount}
                    onClickIconRight={interestInputValueAmount ? handleSelectAmount : null}
                    iconRight={<FaTimes />}
                    completes={completeAmount}
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
                    {Object.entries(interestLocations).map(
                      ([interest, locations]) =>
                        interest === values.interest && (
                          <div className={styles.locationCheckbox} key={interest}>
                            {locations.map((location) => (
                              <div className={styles.checkboxItem} key={location}>
                                <CheckBox
                                  label={location}
                                  value={location}
                                  onChange={(e) => handleCheckBoxChange(e.target.checked, location)}
                                />
                              </div>
                            ))}
                          </div>
                        )
                    )}
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
