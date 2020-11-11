import Context from 'context/context';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apartmentParis from 'assets/OfferImg/apartment1.jpg';
import apartmentFresno from 'assets/OfferImg/apartment2.jpg';
import apartmentClevland from 'assets/OfferImg/apartment3.jpg';
import apartmentNew from 'assets/OfferImg/apartment4.jpg';
import apartmentMilan from 'assets/OfferImg/apartment5.jpg';
import bayHouse from 'assets/OfferImg/bayHouse.jpg';
import bayVilla from 'assets/OfferImg/bayVilla.jpg';
import greenHouse from 'assets/OfferImg/greenHouse.jpg';
import mountainVilla from 'assets/OfferImg/mountainVilla.jpg';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const type = {
  villa: 'Villa',
  apartment: 'Apartment',
  studio: 'Studio',
  house: 'House',
};

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      apartments: [
        {
          id: 1,
          name: 'Mountain Villa',
          price: '40 000',
          bedrooms: 3,
          bathrooms: 3,
          size: 2500,
          location: 'Canada, Lions Bay',
          image: mountainVilla,
          type: type.villa,
          description,
        },
        {
          id: 2,
          name: 'Bay Villa',
          price: '60 000',
          bedrooms: 4,
          bathrooms: 3,
          size: 1500,
          location: 'United States, Bodega Bay',
          image: bayVilla,
          type: type.villa,
          description,
        },
        {
          id: 3,
          name: 'Modern Apartment',
          price: '10 000',
          bedrooms: 2,
          bathrooms: 1,
          size: 700,
          location: 'United States, Fresno',
          image: apartmentFresno,
          type: type.apartment,
          description,
        },
        {
          id: 4,
          name: 'Cleaver Apatment',
          price: '15 000',
          bedrooms: 1,
          bathrooms: 1,
          size: 500,
          location: 'United States, Cleveland',
          image: apartmentClevland,
          type: type.apartment,
          description,
        },
        {
          id: 5,
          name: 'Lake House',
          price: '20 000',
          bedrooms: 2,
          bathrooms: 2,
          size: 1000,
          location: 'United States, Puget Sound',
          image: bayHouse,
          type: type.house,
          description,
        },
        {
          id: 6,
          name: 'Greeny House',
          price: '50 000',
          bedrooms: 0,
          bathrooms: 0,
          size: 500,
          location: 'Skógar, Iceland',
          image: greenHouse,
          type: type.house,
          description,
        },
        {
          id: 7,
          name: 'New Condo',
          price: '150 000',
          bedrooms: 4,
          bathrooms: 2,
          size: 1500,
          location: 'United States, New York',
          image: apartmentNew,
          type: type.apartment,
          description,
        },
        {
          id: 8,
          name: 'Italy Studio',
          price: '400 000',
          bedrooms: 2,
          bathrooms: 3,
          size: 2000,
          location: 'Milan, Italy',
          image: apartmentMilan,
          type: type.studio,
          description,
        },
        {
          id: 9,
          name: 'Old Town Apartment',
          price: '500 000',
          bedrooms: 5,
          bathrooms: 4,
          size: 3500,
          location: 'France, Paris',
          image: apartmentParis,
          type: type.apartment,
          description,
        },
      ],
      filteredApartments: [
        {
          id: 1,
          name: 'Mountain Villa',
          price: '40 000',
          bedrooms: 3,
          bathrooms: 3,
          size: 2500,
          location: 'Canada, Lions Bay',
          image: mountainVilla,
          type: type.villa,
          description,
        },
        {
          id: 2,
          name: 'Bay Villa',
          price: '60 000',
          bedrooms: 4,
          bathrooms: 3,
          size: 1500,
          location: 'United States, Bodega Bay',
          image: bayVilla,
          type: type.villa,
          description,
        },
        {
          id: 3,
          name: 'Modern Apartment',
          price: '10 000',
          bedrooms: 2,
          bathrooms: 1,
          size: 700,
          location: 'United States, Fresno',
          image: apartmentFresno,
          type: type.apartment,
          description,
        },
        {
          id: 4,
          name: 'Cleaver Apatment',
          price: '15 000',
          bedrooms: 1,
          bathrooms: 1,
          size: 500,
          location: 'United States, Cleveland',
          image: apartmentClevland,
          type: type.apartment,
          description,
        },
      ],
      selectedApartment: [],
      isModalOpen: false,
      isFilterActive: false,
      buttonState: {
        Villa: false,
        Apartment: false,
        Studio: false,
        House: false,
      },
    };
  }

  handleModal = (e) => {
    const el = document.querySelector('.offer-section');
    const { id } = e.target;
    const { apartments, isModalOpen } = this.state;

    if (isModalOpen) {
      this.setState({
        isModalOpen: false,
      });
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    } else {
      document.body.style.overflow = 'hidden';
      // document.body.style.position = 'fixed';
      window.scrollTo(0, el.offsetTop);
      this.setState({
        isModalOpen: true,
        selectedApartment: apartments.filter((item) => item.id === Number(id)),
      });
    }
  };

  handleActiveBtn = (e) => {
    const { buttonState, apartments } = this.state;
    const btn = e.target.value;
    const keys = Object.keys(buttonState);

    this.setState({
      buttonState: {
        [keys[0]]: false,
        [keys[1]]: false,
        [keys[2]]: false,
        [keys[3]]: false,
      },
    });

    this.setState((prevState) => ({
      buttonState: {
        ...prevState.buttonState,
        [btn]: true,
      },
      isFilterActive: true,
    }));

    if (buttonState[btn] === true) {
      this.setState({
        buttonState: {
          [keys[0]]: false,
          [keys[1]]: false,
          [keys[2]]: false,
          [keys[3]]: false,
        },
        filteredApartments: apartments.slice(0, 4),
      });
    }
  };

  handleFilter = (e) => {
    const filterValue = e.target.value;
    const { apartments } = this.state;
    this.setState({
      filteredApartments: apartments.filter((item) => item.type === filterValue),
    });
  };

  render() {
    const {
      buttonState,
      isFilterActive,
      isModalOpen,
      apartments,
      filteredApartments,
      selectedApartment,
    } = this.state;
    const { children } = this.props;

    return (
      <Context.Provider
        value={{
          isTypeActive: Object.values(buttonState),
          filterBtnNames: Object.values(type),
          isFilterActive,
          isModalOpen,
          apartments,
          filteredApartments,
          selectedApartment: selectedApartment[0],
          handleModal: this.handleModal,
          handleActiveBtn: this.handleActiveBtn,
          handleFilter: this.handleFilter,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Provider.defaultProps = {
  children: null,
};

export default Provider;
