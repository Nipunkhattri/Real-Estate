import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Heading } from '@chakra-ui/react';

function AssociatedPartners() {


  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = [
    <div className="item" data-value="1" style={{ padding: "3rem", backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/logo__1__8vwNAVKU2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903425812'
        height="200" alt='' />
    </div>,
    <div className="item" data-value="2" style={{ padding: "3rem", backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/assetz-logo_Ui4X6KBom.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903454187'
        height="300" width='100' alt='' />
    </div>,
    <div className="item" data-value="3" style={{ padding: "3rem", backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/godrej-properties-logo_2519F03vL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903493456'
        height="200" alt='' />
    </div>,
    <div className="item" data-value="4" style={{ padding: "3rem", backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/1647932957_Adarsh-Group_0_aV_YnNFWK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903584327'
        height="200" alt='' />
    </div>,
    <div className="item" data-value="5" style={{ backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/bg-logo-hz_m0DOOJO5T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903584402'
        height="200" alt='' />
    </div>,
    <div className='item' data-value="6" style={{ backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/Casagrand-Logo1_8lLYb6W28p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903585202'
        height="200" alt='' />
    </div>,
    <div className='item' data-value="7" style={{ backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/builder_25_QAqCUyqYVz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903584841' alt='' />
    </div>,
    <div className='item' data-value="8" style={{ backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/Logo_white-1_uaJ7aOSbK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903586022'
        height="200" alt='' />
    </div>,
    <div className='item' data-value="9" style={{ backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/orchid_Company-logo-1_QIuGDL0iG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903586752'
        height="200" alt='' />
    </div>,
    <div className='item' data-value="10" style={{ padding: "3rem", backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/Puravankara-limited.svg_171HKR75C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903586909'
        height="200" alt='' />
    </div>,
    <div className='item' data-value="11" style={{ padding: "5rem", backgroundColor: "#F3F3F3", display: "flex", justifyContent: "center", alignItems: "center", height: "220px" }}>
      <img src='https://ik.imagekit.io/i66bfudbc/Builder_Logo/Sumadhura_Official_Logo-01_pqJOhDbthT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658903587013'
        height="200" alt='' />
    </div>,
  ];
  return (
    <div>
      <Heading textAlign='center'> Associated Partners </Heading>
      <AliceCarousel
        mouseTracking
        infinite={true}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
        autoPlay={true}
      />
    </div>
  );
}

export default AssociatedPartners;