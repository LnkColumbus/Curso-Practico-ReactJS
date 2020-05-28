/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-quotes */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ user, myList, trends, originals, search }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {search.length > 0 && (
        <Categories title="Resultados">
          <Carousel>
            {search.map((item) => (
              <CarouselItem key={item._id} {...item} {...user} />
            ))}
          </Carousel>
        </Categories>
      )}
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item._id} {...item} {...user} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item._id} {...item} {...user} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item._id} {...item} {...user} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

Home.propTypes = {
  user: PropTypes.object,
  search: PropTypes.array,
  myList: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    search: state.search,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
