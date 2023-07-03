import {
  Box,
  Button,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td, Th, Thead, Tr,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import ModalEnquiryForm from './ModalEnquiryForm';
import ModalEnquiryForm2 from './ModalEnquiryForm2';

function PropertyPrice(props) {
  const { data, logo, pType } = props;
  const [fp_img, setFpImg] = useState('');
  const [fp_dim, set_fp_dim] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalImg, setModalImg] = useState('');
  useEffect(() => {
    setFpImg(data[0]?.floor_plan_img);
    set_fp_dim(data[0]?.sbua);
    setModalImg(data[0]?.floor_plan_img);
  }, [data])
  const handleModalOpening = (i) => {
    setModalImg(i)
    onOpen();
  }
  return (
    <Box
      p='1'
      borderRadius='md'>
      <Modal isOpen={isOpen} onClose={onClose} size={['md', 'xl', 'full']}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Floor Plan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack align='center'>
              <Image h='100%' w={['100%', '100%', '500px']} objectFit='contain' src={modalImg} alt='' />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box display={'flex'} flexDir={['column', 'column', 'row']}>
        <TableContainer w={['100%', '100%', '60%']}>
          <Table size={['xs', 'md']} variant='striped'  >
            <Thead fontSize={['xs', 'sm', 'md']} >
              <Tr>
                <Th>Size in Sq.Ft</Th>
                <Th>Price</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody
              fontSize={['sm', 'md', 'xl']} fontWeight={'semibold'}>
              {data?.map((item, index) => (
                item?.type === pType && (
                  <Tr
                    key={index}
                    onClick={() => {
                      setFpImg(item?.floor_plan_img);
                      set_fp_dim(item?.sbua);
                    }}
                    cursor='pointer'
                    _hover={{ bgColor: '#EDF2F7' }}
                  >
                    <Td>
                      {item.sbua}
                    </Td>
                    <Td>
                      {item.price}
                    </Td>
                    <Td textTransform='uppercase'>
                      <ModalEnquiryForm2 text={'Price'} logo={logo} />
                    </Td>
                  </Tr>
                )
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Box display={'flex'} flexGrow='1' flexDir='column' justifyContent='center' alignItems={'center'}>
          <Image src={fp_img} w='100%' h='300px' objectFit={'contain'}
            alt='' onClick={() => handleModalOpening(fp_img)} cursor='pointer' />
          <Button bgColor='black' color='white'>{fp_dim}</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyPrice;