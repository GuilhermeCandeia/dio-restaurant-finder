import React, { useState } from "react";
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import '@material/react-material-icon/dist/material-icon.css';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';
import restaurante from '../../assets/restaurante-fake.png'
import { Card } from '../../components'

import { Container, Carousel, Search, Wrapper, Map, CarouselTitle } from './styles'

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper><Container>
      <Search><img src={logo} alt="Logo do restaurante" />
        <TextField
          label="Pesquisar Restaurantes"
          outlined
          trailingIcon={<MaterialIcon role="button" icon="search" />}>

          <Input value={inputValue} onChage={(e) => setInputValue(e.target.value)} />
        </TextField>
        <CarouselTitle>Na sua área</CarouselTitle>
        <Carousel {...settings}>
        <Card photo={restaurante} title="nome teste" />
        <Card photo={restaurante} title="nome teste" />
        <Card photo={restaurante} title="nome teste" />
        <Card photo={restaurante} title="nome teste" />
        <Card photo={restaurante} title="nome teste" />       
        </Carousel> 
      
      </Search>
     </Container>
    <Map />
    </Wrapper>
  );

};

export default Home;