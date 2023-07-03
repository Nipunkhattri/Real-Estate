import {
  Box,
  Image,
  SimpleGrid,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';


function MasterPlan(props) {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <Box
      m={['1']} p={['1']}
    >
      <SimpleGrid columns={[2, 3, 5]} spacing='10px'>
        {data?.map((s, i) => {
          return (
            <Box key={i}>
              <Image
                width={'320px'}
                height={'180px'} src={s} alt=''
                onClick={onOpen}
                cursor={'pointer'}
              />
            </Box>
          );
        })}
        <Modal isOpen={isOpen} onClose={onClose} size={['100%','100%','5xl']}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Master Plan</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                position={'relative'}
                height={'600px'}
                width={'full'}
                overflow={'hidden'}
              >
                {/* CSS files for react-slick */}
                <link
                  rel="stylesheet"
                  type="text/css"
                  charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                {/* Left Icon */}
                <IconButton
                  aria-label="left-arrow"
                  colorScheme="messenger"
                  borderRadius="full"
                  position="absolute"
                  left={side}
                  top={top}
                  transform={'translate(0%, -50%)'}
                  zIndex={2}
                  onClick={() => slider?.slickPrev()}
                >
                  <BiLeftArrowAlt />
                </IconButton>
                {/* Right Icon */}
                <IconButton
                  aria-label="right-arrow"
                  colorScheme="messenger"
                  borderRadius="full"
                  position="absolute"
                  right={side}
                  top={top}
                  transform={'translate(0%, -50%)'}
                  zIndex={2}
                  onClick={() => slider?.slickNext()}
                >
                  <BiRightArrowAlt />
                </IconButton>
                {/* Slider */}
                <Slider
                  {...settings}
                  ref={(slider) => setSlider(slider)}
                >
                  {data.map((item, index) => (
                    <Image src={item} key={index} w='100%' h='100%' objectFit='cover' />
                  ))}
                </Slider>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </SimpleGrid>
    </Box>
  );
}

export default MasterPlan;