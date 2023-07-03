import { Box, Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import PieChart from "./PieChart";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ModalEnquiryForm from "./ModalEnquiryForm";

function EMICalculator({ logo }) {
  const [principle, setPrinciple] = useState(1000000);
  const [tenure, setTenure] = useState(18);
  const [interestRate, setInterestRate] = useState(11);
  const [interest, setInterest] = useState(188060);
  const [totalAmount, setTotalAmount] = useState(1188060);
  const [monthlyEMI, setMonthlyEMI] = useState(19801);

  useEffect(() => {
    let calInterest = (principle * interestRate * tenure) / 100;
    let amt = principle + calInterest;
    setInterest(calInterest);
    setTotalAmount(amt);
    setMonthlyEMI(amt / (tenure * 12));
  }, [principle, tenure, interestRate]);
  const [userData, setUserData] = useState({
    labels: ["Interest", "Principle"],
    datasets: [
      {
        label: "Users Gained",
        data: [interest, principle],
        backgroundColor: ["#fad57c", "#385176"],
      },
    ],
  });
  const convert = (number) => {
    // this function convert number to indian currency format
    return new Intl.NumberFormat("en-IN").format(number);
  };

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "10px",
  };

  useEffect(() => {
    setUserData({
      labels: ["Interest", "Principle"],
      datasets: [
        {
          label: "Users Gained",
          data: [interest, principle],
          backgroundColor: ["#fad57c", "#385176"],
        },
      ],
    });
  }, [principle, interest]);

  return (
    <Box id='EMI' display={['none', 'none', 'grid']} placeItems="center">
      <Heading
        textAlign="center"
        my="2"
        fontSize={["2xl", "2xl", "4xl"]}
        textTransform={"capitalize"}
      >
        Home Loan & EMI Calculator
      </Heading>
      <Box
        m={["1", "2", "4"]}
        p={["1", "2", "4"]}
        display="grid"
        placeItems="center"
      >
        <Box
          height="max-content"
          display="flex"
          flexDirection="column"
          w={['100%']}
        >
          <Box
            flex="0.7"
            display="flex"
            flexDir={["column", "column", "column", "row"]}
          >
            {/* left */}
            <Box
              flex={["1", "1", "0.5"]}
              display="flex"
              flexDirection="column"
            >
              {/* loan amount */}
              <Box
                flex="0.25"
                display="flex"
                flexDirection="column"
                p={["1", "2", "4"]}
              >
                <Box flex="0.5" display="flex" alignItems='center' width="90%">
                  <Text
                    fontSize={['sm', 'md', 'lg']}
                    flex='0.5'
                  >Loan Amount (₹)
                  </Text>
                  <Input
                    readOnly
                    flex='0.5'
                    value={convert(principle)}
                    focusBorderColor="tomato"
                  />
                </Box>
                <Box w='90%'>
                  <Slider
                    defaultValue={1000000}
                    min={5000000}
                    max={50000000}
                    step={100000}
                    onChange={(v) => {
                      setPrinciple(v);
                    }}
                    w={['80%', '80%', '90%', '100%']}
                  >
                    <SliderMark value={5000000} {...labelStyles}>
                      50L
                    </SliderMark>

                    <SliderMark value={10000000} {...labelStyles}>
                      100L
                    </SliderMark>

                    <SliderMark value={15000000} {...labelStyles}>
                      150L
                    </SliderMark>

                    <SliderMark value={20000000} {...labelStyles}>
                      200L
                    </SliderMark>

                    <SliderMark value={25000000} {...labelStyles}>
                      250L
                    </SliderMark>
                    <SliderMark value={30000000} {...labelStyles}>
                      300L
                    </SliderMark>

                    <SliderMark value={35000000} {...labelStyles}>
                      350L
                    </SliderMark>

                    <SliderMark value={40000000} {...labelStyles}>
                      400L
                    </SliderMark>

                    <SliderMark value={45000000} {...labelStyles}>
                      450L
                    </SliderMark>

                    <SliderMark value={50000000} {...labelStyles}>
                      500L
                    </SliderMark>
                    <SliderTrack bg="red.100">
                      <Box position="relative" right={10} />
                      <SliderFilledTrack bg="tomato" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                  </Slider>
                </Box>
              </Box>

              {/* loan tenure */}
              <Box
                flex="0.25"
                display="flex"
                flexDirection="column"
                p={["1", "2", "4"]}
              >
                <Box flex="0.5" display="flex" alignItems='center' width="90%">
                  <Text fontSize={['sm', 'md', 'lg']}>
                    Loan Tenure (in Yrs)
                  </Text>
                  <Input
                    flex='0.5'
                    readonly
                    value={tenure}
                    focusBorderColor="tomato"
                  />
                </Box>
                <Box w='90%'>
                  <Slider
                    defaultValue={5}
                    min={5}
                    max={30}
                    step={1}
                    onChange={(v) => setTenure(v)}
                    w={['80%', '80%', '90%', '100%']}
                  >
                    <SliderMark value={5} {...labelStyles}>
                      5Yr
                    </SliderMark>
                    <SliderMark value={10} {...labelStyles}>
                      10Yr
                    </SliderMark>
                    <SliderMark value={15} {...labelStyles}>
                      15Yr
                    </SliderMark>
                    <SliderMark value={20} {...labelStyles}>
                      20Yr
                    </SliderMark>
                    <SliderMark value={25} {...labelStyles}>
                      25Yr
                    </SliderMark>
                    <SliderMark value={30} {...labelStyles}>
                      30Yr
                    </SliderMark>
                    <SliderTrack bg="red.100">
                      <Box position="relative" right={10} />
                      <SliderFilledTrack bg="tomato" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                  </Slider>
                </Box>
              </Box>

              {/* interest rate */}
              <Box
                flex="0.25"
                display="flex"
                flexDirection="column"
                p={["1", "2", "4"]}
              >
                <Box flex="0.5" display="flex" alignItems='center' width="90%">
                  <Text fontSize={['sm', 'md', 'lg']}>
                    Interest rate (p.a.)
                  </Text>
                  <Input
                    flex="0.5"
                    readonly
                    value={interestRate}
                    focusBorderColor="tomato"
                  />
                </Box>
                <Box w='90%'>
                  <Slider
                    defaultValue={7}
                    min={7}
                    max={15}
                    step={0.1}
                    onChange={(v) => setInterestRate(v)}
                    w={['80%', '80%', '90%', '100%']}
                  >
                    <SliderMark value={7} {...labelStyles}>
                      7%
                    </SliderMark>
                    <SliderMark value={8} {...labelStyles}>
                      8%
                    </SliderMark>
                    <SliderMark value={9} {...labelStyles}>
                      9%
                    </SliderMark>
                    <SliderMark value={10} {...labelStyles}>
                      10%
                    </SliderMark>
                    <SliderMark value={11} {...labelStyles}>
                      11%
                    </SliderMark>
                    <SliderMark value={12} {...labelStyles}>
                      12%
                    </SliderMark>
                    <SliderMark value={13} {...labelStyles}>
                      13%
                    </SliderMark>
                    <SliderMark value={14} {...labelStyles}>
                      14%
                    </SliderMark>
                    <SliderMark value={15} {...labelStyles}>
                      15%
                    </SliderMark>
                    <SliderTrack bg="red.100">
                      <Box position="relative" right={10} />
                      <SliderFilledTrack bg="tomato" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                  </Slider>
                </Box>
              </Box>
            </Box>
            <Box
              mt='5'
              flex="0.45"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {/* PieChart */}
              <Box w={['80%', '90%', '100%']}>
                {/* chart */}
                <PieChart chartData={userData} />
              </Box>
              <Box
                height="100%"
                width="90%"
                display="flex"
                flexDirection="column"
              >
                {/* Chart Details*/}
                <Box display="flex" p='1'>
                  <Box flex="0.65">
                    <Text fontSize={['xs', 'md', 'md']}>Principle: </Text>
                  </Box>
                  <Box flex="0.35">
                    <Text fontSize="xs" fontWeight="bold">
                      {`₹ ${convert(principle)}`}
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" p='1'>
                  <Box flex="0.65">
                    <Text fontSize={['xs', 'md', 'md']}>Interest Payable: </Text>
                  </Box>
                  <Box flex="0.35">
                    <Text fontSize="xs" fontWeight="bold">
                      {`₹ ${convert(interest)}`}
                    </Text>
                  </Box>
                </Box>
                <Box display="flex" p='1'>
                  <Box flex="0.65">
                    <Text fontSize={['xs', 'md', 'md']}>Total Amount Payable: </Text>
                  </Box>
                  <Box flex="0.35">
                    <Text fontSize="xs" fontWeight="bold">
                      {`₹ ${convert(totalAmount)}`}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            flex="0.15"
            p={["0", "2", "4"]}
            display="flex"
            flexDir={["column", "column", "row"]}
          >
            <Box flex="0.65" display="grid" placeItems="center" width="90%">
              <Box display="flex" alignItems="center" width="100%">
                <Box flex="0.6" display="flex" justifyContent="flex-end">
                  <Text fontSize={["xl", "xl", "2xl"]}>Monthly EMI: </Text>
                </Box>
                <Box flex="0.4" display="flex" justifyContent="flex-start">
                  <Text fontSize={["md", "xl", "2xl"]} fontWeight="bold">
                    {`₹ ${convert(Math.round(monthlyEMI))}`}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flex="0.35" display="grid" placeItems="center">
              <ModalEnquiryForm text={"Apply Homeloan"} logo={logo} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EMICalculator;
