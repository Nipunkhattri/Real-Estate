import {
  Box,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react';
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

function Gallery(props) {
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
      id='Gallery'
      borderRadius='md' boxShadow='xl' bgColor='white'
    >
      <SimpleGrid columns={[2, 3, 5]} spacing='10px'>
        {data?.map((s, i) => (
          <Box key={i}>
            <Image
              src={s}
              alt=''
              height={["150px","","200px"]}
              width={["","","300px"]}
              onClick={onOpen}
              cursor={'pointer'}
              objectFit='cover'
            />
          </Box>
        ))}
        <Modal isOpen={isOpen} onClose={onClose} size={['md','xl','full']}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Gallery</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                position={'relative'}
                height={['60%','80%','600px']}
                width={['90%','95%','100%']}
                overflow={'hidden'}
                mx='auto'>
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
                  onClick={() => slider?.slickPrev()}>
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
                  onClick={() => slider?.slickNext()}>
                  <BiRightArrowAlt />
                </IconButton>
                {/* Slider */}
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                  {data.map((s, index) => (
                    <Image src={s} key={index} w='100%' h='100%' objectFit='cover' />
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

export default Gallery;