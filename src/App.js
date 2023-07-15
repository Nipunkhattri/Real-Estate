import { Box } from "@chakra-ui/react"
import { RiWhatsappFill } from "react-icons/ri"
import Footer from "./components/Footer"
import Public from "./components/Routes/Public"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Box
        display={["none", "none", "block"]}
        m='2'
        color='whatsapp.400' pos='fixed' bottom='50' zIndex='50'>
        <a
          href="https://wa.me/7090667009"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box p='1' backgroundColor={'white'} borderRadius='full'>
            <RiWhatsappFill size='60' />
          </Box>
        </a>
      </Box>
      <Public />
      <Footer />
    </>
  );
}

export default App;
