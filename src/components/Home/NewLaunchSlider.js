import { Box, Heading } from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
import "react-multi-carousel/lib/styles.css";
import PropertyCard from "../Cards/PropertyCard";

function NewLaunchSlider(props) {
  const { data } = props;
  let all = [];
  let properties = data.data.properties;
  all = properties?.filter((p, i) => {
    return p.subcategory === 'new launch';
  });


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];

  return (
    <Box p='2' m='2'>
      <Heading textAlign={'center'}>New Launch Projects</Heading>
      {all?.length > 0 &&
        <Carousel autoPlaySpeed={6} enableAutoPlay={true} breakPoints={breakPoints} >
          {all?.map((p, i) => (
            <PropertyCard data={p} key={i} />)
          )}
        </Carousel>
      }
    </Box>
  );
}

export default NewLaunchSlider;
