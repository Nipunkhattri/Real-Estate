import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/SingleProperty/Gallery';
import HeroSection from '../components/SingleProperty/HeroSection';
import Location from '../components/SingleProperty/Location';
import Overview from '../components/SingleProperty/Overview';
import PropertyFAQ from '../components/SingleProperty/PropertyFAQ';
import Amenities from '../components/SingleProperty/Amenities';
import FloorPlan from '../components/SingleProperty/FloorPlan';
import PropertyHeader from '../components/SingleProperty/PropertyHeader';
import MasterPlan from '../components/SingleProperty/MasterPlan';
import PropertyDetails from '../components/SingleProperty/PropertyDetails';
import VideoSection from '../components/SingleProperty/VideoSection';
import AboutBuilder from '../components/SingleProperty/AboutBuilder';
import SideEnquiryForm from '../components/SingleProperty/SideEnquiryForm';
import { Box, Link, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { PhoneCall, Mail } from 'react-feather';
import ModalEnquiryForm from '../components/SingleProperty/ModalEnquiryForm';
import LocationMap from '../components/SingleProperty/LocationMap';
import LocationPoints from '../components/SingleProperty/LocationPoints';
import NewPricingSection from '../components/SingleProperty/NewPricingSection';
import EMICalculator from '../components/SingleProperty/EMICalculator';
import PropertyComments from '../components/SingleProperty/PropertyComments';

function SinglePropertypage() {
  const pid = useParams();
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://realstate-web-app-backend.vercel.app/api/v1/properties/${pid.pid}`
        );
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setFlag(false);
        setLoading(false);
      }
    };
    getData();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Box
          h="90vh"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
          />{" "}
          Loading
        </Box>
      ) : (
        <>
          {flag ? (
            <Box bgColor={"primaryBg"} h="100%">
              <Box display={["none", "none", "block"]}>
                <SideEnquiryForm data={data?.propertyDetails} />
              </Box>
              <Box
                bgColor={"black"}
                color="white"
                alignItems={"center"}
                justifyContent={"space-between"}
                zIndex="150"
                pos={"fixed"}
                bottom="0"
                display={["flex", "none", "none"]}
                w="100%"
                h="38px"
              >
                <Link flex='0.6'
                 href="tel:+91-7522828359" w='100%'  display={"flex"}
                  justifyContent="center">
                  <Box
                    display={"flex"}
                    gap="1"
                    justifyContent="center"
                    alignItems="center"
                    flex="1"
                  >
                    <PhoneCall />
                    <Box textAlign='center' fontWeight={"bold"}>Call</Box>
                  </Box>
                </Link>
                <Box
                  display={"flex"}
                  gap="1"
                  height={"100%"}
                  justifyContent="center"
                  alignItems="center"
                  border={"1px solid white"}
                  pl="2"
                  pr="1"
                >
                  <Mail />
                  <ModalEnquiryForm
                    text={"Enquire"}
                    isHeader="true"
                    logo={data?.propertyDetails?.logo_url}
                  />
                </Box>
                <Link
                  href="https://wa.me/7090667009"
                  target="_blank"
                  rel="noopener noreferrer"
                  display={"flex"}
                  justifyContent="center"
                >
                  <Box display={"flex"} gap="1" alignItems="center">
                    <img
                      width="30"
                      src="https://img.icons8.com/color/48/FA5252/whatsapp--v1.png"
                      alt=""
                    />
                    <Box fontWeight={"bold"} pr="4">
                      Whatsapp
                    </Box>
                  </Box>
                </Link>
              </Box>
              <PropertyHeader data={data?.propertyDetails} color_codes={data?.propertyDetails?.header_btn_color_codes} />
              <HeroSection data={data?.propertyDetails} heroImg={data?.propertyDetails?.hero_img_url} hero_data={data?.propertyDetails?.hero_card} />

              <NewPricingSection data={data} />
              <Amenities data={data?.propertyDetails?.amenities} />
              <Box
                m={['1', '2', '4']}
                p={['1', '2', '4']}
                borderRadius='md'
                boxShadow='xl'
                bgColor='white'
                display={'flex'}
                flexDir={['column', 'column', 'row']}
                justifyContent='space-between'
              >
                <PropertyDetails data={data?.propertyDetails?.projectDetails} title={data?.propertyDetails?.title} />
                <EMICalculator logo={data?.propertyDetails?.logo_url} />
              </Box>
              <Box
                m={['1', '2', '4']} p={['0', '2', '2']}
                borderRadius='md' boxShadow='xl' bgColor='white'
                h={['100%', '100%', '500px']}>
                <Tabs isManual variant='enclosed'>
                  <TabList>
                    <Tab _selected={{ color: 'white', bg: 'black' }}
                      _hover={{ color: 'white', bg: 'black' }}
                      _active={{ color: 'white', bg: 'black' }}
                      fontSize={['xs', 'sm', 'md']}>Gallery</Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}
                      _hover={{ color: 'white', bg: 'black' }}
                      _active={{ color: 'white', bg: 'black' }}
                      fontSize={['xs', 'sm', 'md']}>Floor Plan</Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}
                      _hover={{ color: 'white', bg: 'black' }}
                      _active={{ color: 'white', bg: 'black' }}
                      fontSize={['xs', 'sm', 'md']}>Master Plan</Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}
                      _hover={{ color: 'white', bg: 'black' }}
                      _active={{ color: 'white', bg: 'black' }}
                      fontSize={['xs', 'sm', 'md']}>Nearby</Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}
                      _hover={{ color: 'white', bg: 'black' }}
                      _active={{ color: 'white', bg: 'black' }}
                      fontSize={['xs', 'sm', 'md']}>Videos</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Gallery data={data?.propertyDetails?.gallerySliderImages} />
                    </TabPanel>
                    <TabPanel>
                      <FloorPlan data={data?.propertyDetails?.floor_plans} />
                    </TabPanel>
                    <TabPanel>
                      <MasterPlan data={data?.propertyDetails?.master_plan_gallery} />
                    </TabPanel>
                    <TabPanel>
                      <LocationMap data={data?.propertyDetails?.location_map_gallery} />
                    </TabPanel>
                    <TabPanel>
                      <VideoSection data={data?.propertyDetails?.yt_videos} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box
                m={['1', '2', '4']} p={['1', '2', '2']}
                borderRadius='md' boxShadow='xl' bgColor='white'
              >
                <Tabs isManual variant='enclosed'>
                  <TabList >
                    <Tab _selected={{ color: 'white', bg: 'black' }}
                      _hover={{ color: 'white', bg: 'black' }}
                      _active={{ color: 'white', bg: 'black' }}>About Tru Wind Chimes</Tab>
                    <Tab _selected={{ color: 'white', bg: 'black' }}
                      _hover={{ color: 'white', bg: 'black' }}
                      _active={{ color: 'white', bg: 'black' }}>About the Builder</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Overview data={data?.propertyDetails?.overview} logo={data?.propertyDetails?.logo_url} />
                    </TabPanel>
                    <TabPanel>
                      <AboutBuilder data={data?.propertyDetails?.about_section} review_data={data?.propertyDetails?.reviews} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box
                m={['1', '2', '4']} p={['1', '2', '2']}
                borderRadius='md' boxShadow='xl' bgColor='white'
              >
                <PropertyFAQ data={data?.propertyDetails?.faqs} />
                <PropertyComments data1={data?.propertyDetails?._id}  />
              </Box>
              <Box
                m={['1', '2', '4']} p={['1', '2', '2']}
                borderRadius='md' boxShadow='xl' bgColor='white'
                display='flex' flexDir={['column', 'column', 'row']}>
                <Box w={['100%', '100%', '50%']}>
                  <Location data={data?.propertyDetails?.location_section} />
                </Box>
                <Box w={['100%', '100%', '50%']} mt={8}>
                  <LocationPoints data={data?.propertyDetails?.location_points} />
                </Box>
              </Box>
            </Box>
          )
            : <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>No Result Found</Box>
          }
        </>
      )}
    </>
  );
}

export default SinglePropertypage;
