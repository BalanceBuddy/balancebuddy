import * as React from 'react';
import DefaultContainer from '../Components/DefaultContainer';
import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';

function Settings() {
  return (
    <DefaultContainer>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>

      <h1>Settings</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.seriouseats.com/thmb/l7uBaEGyCxLbb0e-9KgquZWkIkE=/1500x1125/filters:fill(auto,1)/20211201-crispy-roasted-potatoes-vicky-wasik-45-d75608ce325e4ffbab665084eba642c8.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.treesforcities.org/imager/images/12589/po-ta-to_101d7b8599c0cc599ee16e9637ccc19e.gif'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </DefaultContainer>
  );
}

export default Settings;
