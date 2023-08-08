
import React, { useState } from 'react';
import { Box, Button, Card, Flex, IconButton, Image, Img, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {PiHandHeartThin} from "react-icons/pi"
import {BiHomeHeart,BiStoreAlt} from "react-icons/bi"
import {AiFillGolden} from "react-icons/ai" 
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdLocationOn, MdPerson, MdFlag, MdFavorite, MdShoppingBag } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const { isOpen, onToggle } = useDisclosure();


  const [activeBut, setActiveBut] = useState(null);


  const handleBoxMouse = () => {
    setActiveBut(null);
  };

  const handleButton = (index) => {
    setActiveBut(index === activeBut ? null : index);
  };


  const handleBoxMouseLeave = () => {
    setActiveButton(null);
  };

  const handleButtonClick = (index) => {
    setActiveButton(index === activeButton ? null : index);
  };

  return (
    <Box as="nav">
      
      <Text bg="#4F3267" align={"center"} color="white" >Introducing CaratLane PoP! Plan your purchase  </Text>

{/* top navbar  */}
<Box>
  <Flex bg="#F6F4FF" justifyContent={"space-around"}>
  <Box display={{ base: 'flex', md: 'flex',lg:"none" }}>
          <IconButton
          bg="transparent"
         
          _hover={{bg:"transparent"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={onToggle}
            aria-label="Toggle Menu"
            margin="5px"
            mr="-15px"
          />
        </Box>
    <Image h={{base:"40px",lg:"70px"}} ml={{base:"10px",lg:"0px"}} mr={{base:"10px",lg:"0px"}} mt={{base:"5px",lg:"0px"}} src='https://github.com/shwetra/assa/assets/104376252/44b6ed17-e8e7-401f-b15e-8f931c283993' alt=''/>

{/* try at home and all  */}
<Flex pt="20px" gap="20px" display={{base:"none",md:"none",lg:"flex"}}> 
<Link to={'/'}>
   <Flex>
    <Text fontSize={"28px"}><BiHomeHeart/></Text>
    <Text fontSize={"11px"} pt="7px">FREE TRY AT HOME</Text>
   </Flex>
  </Link>
   <Link to={'/instagram'}>
   <Flex>
    <Text fontSize={"28px"}><BiStoreAlt/></Text>
    <Text fontSize={"11px"} pt="7px">FIND STORE</Text>
   </Flex>
   </Link>

  <Link to={'/purchase'}>
   <Flex>
    <Text fontSize={"28px"}><PiHandHeartThin/></Text>
    <Text fontSize={"11px"} pt="7px">PLAN OF PURCHASE</Text>
   </Flex>
   </Link>

   <Link to={'/digitalgold'}>
   <Flex>
    <Text fontSize={"28px"}><AiFillGolden/></Text>
    <Box>
    <Text fontSize={"10px"}color={"#4F3267"} >New</Text>
    <Text fontSize={"11px"} >BUY DIGITAL GOLD</Text>
    </Box>   
   </Flex>
   </Link>

   </Flex>
   {/* try at home and all  */}


{/* serchbox  */}

<Box > 
   <InputGroup  border={"1px solid #CD59E9"} borderRadius="9px" mt={{base:"9px",lg:"14px"}} ml={{base:"0px",lg:"40px"}} >
      <Input h="35px" type="text" placeholder="Search..." />
      <InputRightElement pointerEvents="none">
        <SearchIcon color="gray.300" bg={"#CD59E9"} h="35px" w="100%" p="10px" borderRadius="9px"mt="-5px" />
      </InputRightElement>
    </InputGroup>
    </Box>

{/* serchbox  end*/}


{/* all icons  */}
    <Flex align="center" justifyContent={"end"} ml={{base:"7px",lg:"50px"}}>
      
      <Flex mr={4} display={{base:"none",md:"none",lg:"flex"}}>
        <MdLocationOn size={24} />
        <Text>110059</Text>
      </Flex>
      
      <Box mr={4} display={{base:"none",md:"none",lg:"flex"}}>
        <MdFlag size={24} />
      </Box>
      <Box mr={4} display={{base:"none",md:"none",lg:"flex"}}>
        <MdPerson size={24} />
      </Box>
      <Box mr={4}>
        <MdFavorite size={24} />
      </Box>
      <Box>
        <MdShoppingBag size={24} />
      </Box>
    </Flex>

    {/* all icons  end*/}
  </Flex>
</Box>
{/* top navbar  */}






{/* main navbar with all button for large screen  */}

      <Flex   direction={{ base: 'column', md: 'row' }} >
       
        <Box display={{ base: 'none', md: 'none',lg:"flex" }} justifyContent={"space-between"} w="100%">
       <Link to="bestseller">
        <Button
          width="90px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Best Seller
        </Button>
        </Link>


        <Link to="newarrival">
        <Button
          width="90px"
          height="40px"
          margin="5px"
          color={"#CD59E9"}
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          New Arrival
        </Button>
        </Link>





        <Button
          onClick={() => handleButtonClick(2)}
          variant={activeButton === 2 ? 'solid' : 'ghost'}
          width="70px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Earrings
        </Button>
        <Button
          onClick={() => handleButtonClick(3)}
          variant={activeButton === 3 ? 'solid' : 'ghost'}
          width="70px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Bracelets
        </Button>
        <Button
          onClick={() => handleButtonClick(4)}
          variant={activeButton === 4 ? 'solid' : 'ghost'}
          width="60px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Chains
        </Button>
        <Button
          onClick={() => handleButtonClick(5)}
          variant={activeButton === 5 ? 'solid' : 'ghost'}
          width="80px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Necklaces
        </Button>

        <Link to={"/oxidised"}>
        <Button
          width="140px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Oxidised Jewellery
        </Button>
        </Link>


        
        <Button
          onClick={() => handleButtonClick(7)}
          variant={activeButton === 7 ? 'solid' : 'ghost'}
          width="70px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Hair Ace
        </Button>

        <Link to={"/soliparies"}>
        <Button
          width="80px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Soliparies
        </Button>
        </Link>
        

        <Link to={"/Gifts"}>
        <Button
          width="50px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Gifts
        </Button>
        </Link>

        <Link to={"/junkjewellery"}>
        <Button
          width="110px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
          Junk Jewellery
        </Button>
        </Link>

        <Link to={"/exclusive"}>
        <Button
          width="80px"
          height="40px"
          margin="5px"
          bg="transparent"
          _hover={{bg:"transparant", borderBottom:"3px solid #CD59E9", color:"#CD59E9"}}
        >
         Exclusive
        </Button>
        </Link>


          {/* Add more buttons manually for additional boxes */}
        </Box>
      </Flex>
      {activeButton !== null && (
        <Box  onMouseLeave={handleBoxMouseLeave} width="100%" height="350px" border="1px solid black" marginTop="10px">
          {/* Content of the box */}



          {/*________________________ earing box  _______________________*/}
          {activeButton === 2 && <Box>
            <Flex>
            <Box w="70%"  h="350px" pl="100px" pt="50px" bg="#B5CBC4">
              <Box w="70%" m="auto">
              <Flex justifyContent={"space-between"}>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image borderRadius={"15px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKs0_e-N219tJanwmfjqLQn3oQ8GAmd28EAP1dG3IMynRY9lcwIbRK75g_nSlaxSBBYs&usqp=CAU'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Doublet Earrings</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image borderRadius={"15px"} src='https://m.media-amazon.com/images/I/61INH3RSEwL.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Pearl Earrings</Text>
              </Flex>
              </Flex>
             
              <Flex justifyContent={"space-between"} mt="20px" mb="20px">

              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image borderRadius={"15px"} src='https://asset.swarovski.com/images/$size_1000/t_swa103/b_rgb:ffffff,c_scale,dpr_auto,f_auto,w_auto/5636530_png/dextera-hoop-earrings--small--white--gold-tone-plated-swarovski-5636530.png'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Kundan.</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image borderRadius={"15px"} src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21127452/2022/12/8/e5ff5d29-0648-48ee-bd05-f9c172607e361670500638430Earrings1.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Branded</Text>
              </Flex>
              </Flex>

              <Flex justifyContent={"space-between"}>

              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image borderRadius={"15px"} src='https://cdn.shopify.com/s/files/1/0081/8275/9475/products/heart-shaped-handmade-earrings-jewellery-nivedita-517117_1500x.jpg?v=1601118322'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Handmade</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image borderRadius={"15px"} src='https://ae01.alicdn.com/kf/H08dcc14c1827483bb19e8698fcc55000B/GODKI-57mm-Trendy-Big-Bold-African-Drop-Earrings-For-Women-Wedding-Party-Indian-Dubai-Bridal-Jewelry.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>AD Earrings</Text>
              </Flex>
              </Flex>
              </Box>
        
             
             
             
            </Box>
            <Box w="30%"  h="350px" > <Image objectFit={"cover"} src='https://github.com/shwetra/assa/assets/104376252/766316cd-2c71-45bd-8469-7a1a9e7df22f'/></Box>

            </Flex>
            
            
            </Box>}

             {/*----------------------- earing box end -----------------------  */}



             {/* _______________--------___bracelets______________________________ */}
             {activeButton === 3 && <Box>
            <Flex>
            <Box w="70%"  h="350px" pl="100px" pt="50px" bg="#B5CBC4">
              <Box w="70%" m="auto">
              <Flex justifyContent={"space-between"}>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-_gRMXlHbpID7QjLxTD8cO9a_a9-cmsryA&usqp=CAU'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>stainless Bracelets</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://images-static.nykaa.com/media/catalog/product/7/f/7f11b34nykpriy000172.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>AD Bracelet</Text>
              </Flex>
              </Flex>
             
              <Flex justifyContent={"space-between"} mt="20px" mb="20px">

              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://cdn.shopify.com/s/files/1/0084/6295/8669/collections/eee_1400x.jpg?v=1618832416'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Tennis Bracelets.</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16386278/2022/7/11/d778f666-6711-4124-ad53-720b99f638311657521848211RubansSetof2RoseGoldPlatedZirconiaStoneStuddedBangles2.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>AD Bangles</Text>
              </Flex>
              </Flex>

              <Flex justifyContent={"space-between"}>

              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://swaabhi.com/wp-content/uploads/2022/11/Circle-Kundan-Bangles-1.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Kundan Bangles</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="40%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://m.media-amazon.com/images/I/81pJvm3y9+L._AC_UY1100_.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Exclusive colection </Text>
              </Flex>
              </Flex>
              </Box>
        
             
             
            </Box>
            <Box w="30%"  h="350px" > <Image objectFit={"cover"} src='https://banner.caratlane.com/live-images/a381a8ba021b4d58a551d4e56143c4bb.jpg'/></Box>

            </Flex>
            
            
            </Box>}
             {/* _______________--------___bracelets_______ ending_______________________ */}



{/* -------------------------chains box---------------------------- */}
             {activeButton === 4 && <Box >
            <Flex>
            <Box w="55%"  h="350px" pl="100px" pt="50px" bg="#B5CBC4">
              <Box w="70%" m="auto">
             
              <Flex cursor={"pointer"} h="70px" w="90%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://cdn.shopify.com/s/files/1/0177/2063/9560/products/Golden-rose-gold-sriyantra-hematite-stainless-steel-pendannt-necklace-new_600x.jpg?v=1667036856'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Stainless pendants.</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="90%" mt="20px" mb="20px"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://www.kalyanjewellers.net/images/Jewellery/Pendant/images/trista-ruby-pendant.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Branded</Text>

              
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="90%"   borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://www.jiomart.com/images/product/original/rvtm7yiety/giva-sterling-silver-rose-gold-studded-evil-eye-pendant-for-women-product-images-rvtm7yiety-6-202211090417.jpg?im=Resize=(500,630)'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Evil Eye Pendant</Text>
              </Flex>
             
           
              </Box>
        
             
             
            </Box>
            <Box w="45%"  h="350px" > <Image objectFit={"cover"} src='https://www.wpdiamonds.com/wp-content/uploads/2018/06/WPD-Top-Blog-Image-2022-09-30T180038.978.png'/></Box>

            </Flex>
            </Box>}
{/* -------------------------chains box--------esnding-------------------- */}




{/* ----------------Necklaces-------------------------- */}
{activeButton === 5 && <Box>
            <Flex>
            <Box w="55%"  h="350px" pl="100px" pt="50px" bg="#B5CBC4">
              <Box w="90%" m="auto">
              <Flex justifyContent={"space-between"}>
              <Flex cursor={"pointer"} h="70px" w="45%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://i.etsystatic.com/25687405/r/il/988966/4575101182/il_1080xN.4575101182_p15i.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Doublet Stones</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="45%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://cdn.shopify.com/s/files/1/1072/7908/products/beautiful-ad-stone-necklace-set-jewelry-fashionvibes-27976243937329_grande.jpg?v=1618016868'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>AD Necklace</Text>
              </Flex>
              </Flex>
             
              <Flex justifyContent={"space-between"} mt="20px" mb="20px">

              <Flex cursor={"pointer"} h="70px" w="45%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://cpimg.tistatic.com/06071190/b/6/Gold-Plated-Kundan-Necklace-Set.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Kundan</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="45%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://5.imimg.com/data5/SELLER/Default/2022/9/NO/CH/PM/2020419/2-tone-plated-indo-western-necklace-set-100134.JPG'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>western</Text>
              </Flex>
              </Flex>
               </Box> 
            </Box>
            <Box w="45%"  h="350px" > <Image objectFit={"cover"} src='https://i.ytimg.com/vi/Isg_NyWAo8E/maxresdefault.jpg'/></Box>

            </Flex>
            
            
            </Box>}
{/* ----------------Necklaces-----ending--------------------- */}


{/* ---------------------------------hearace----------------------------- */}
          {activeButton === 7&& <Box >
            <Flex>
            <Box w="55%"  h="350px" pl="100px" pt="50px" bg="#B5CBC4">
              <Box w="70%" m="auto">
             
              <Flex cursor={"pointer"} h="70px" w="90%"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://m.media-amazon.com/images/I/81gOn7brzxS._AC_UF1000,1000_QL80_.jpg'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Scrunchies</Text>
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="90%" mt="20px" mb="20px"  borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://agsjewellery.com/cdn/shop/products/1_f658d908-b36e-4fc3-ae85-fbc5ebbedc6e_533x.jpg?v=1656075351'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Hairband</Text>

              
              </Flex>
              <Flex cursor={"pointer"} h="70px" w="90%"   borderRadius={"15px"} bg="#F6F4FF">
              <Image w="70px" borderRadius={"15px"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiT-Ep1G7tKvt8h2pByJiK1FKczRztHALgfEzBBOEscRMRnVnNxCE7y-kLKfgQAGPTe_A&usqp=CAU'/>
              <Text pl="20px" fontStyle={"italic"} fontWeight={600} pt="20px" fontSize={"18px"}>Indian Hair Ace</Text>
              </Flex>
             
           
              </Box>
        
             
             
            </Box>
            <Box w="45%"  h="350px" > <Image objectFit={"cover"} src='https://i.pinimg.com/originals/ed/28/a2/ed28a2b95a6a2fbbb253554cf23a470a.jpg'/></Box>

            </Flex>
            </Box>}


            
{/* ---------------------------------hearace--------eanding--------------------- */}
         
          {/* Add more conditional rendering for additional boxes */}
        </Box>
      )}

 {/* main navbar with all button for large screen end  */}





{/*________________ small and md scroll button with images _____________________*/}


 <Box h={{base:"100px"}} display={{base:"flex",md:"flex",lg:"none"}}>
      <Box  w="100%" h="500px" css={{
      /* Hide the scrollbar */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
      'scrollbar-width': 'none', /* Firefox */
    }}
    overflow="scroll"  mb="100px" >
        <Flex  m="auto" w={{base:"1050px"}}  >

        <Box  w={{base:"80px"}}  >
          <Img
          w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/49be16ba-c3db-4899-b179-122166dc2c7a"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Best Seller</Text>
          </Box>


          <Box  w={{base:"80px"}}  >
          <Img
            objectFit={"cover"}
            w="70px"
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/426256b3-7fdf-4426-a651-75f1ecf16f47"
            alt=""
          />
          <Text  fontSize={"12px"}>New Arrivals</Text>
          </Box>


          <Box overflow={"hidden"} w={{base:"80px"}} >
            <Img
             w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
              cursor={"pointer"}
              src="https://github.com/shwetra/assa/assets/104376252/6d68b77c-91d4-4f27-b29d-323a72dc305a"
              alt=""
            />
            <Text pl="5px" fontSize={"12px"}>Silver</Text>
          </Box>
          
         
          <Box overflow={"hidden"} w={{base:"80px"}}>
          <Img
           w="70px"
          objectFit={"cover"}
          borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/50370dae-17fc-4041-8294-02b0c27033fb"
            alt=""
          />
             <Text pl="5px" fontSize={"12px"}>Anniversary Gifts</Text>
          </Box>



          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/f2494f48-f6b0-46fc-b84c-d49edb589d37"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Solitaires</Text>
          </Box>



          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/3c874e8a-0f81-410d-a29c-baf8f9287f2f"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Rings</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/9d4bd76c-2a7e-484b-9aee-d2087bd13982"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Earrings</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/debb2a73-3e2f-4747-888f-cc7916671700"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Bracelets & Bangles</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/7a02f1c1-3181-46bc-9adb-ec642f33699a"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Special Deals</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/10e2c915-f1a7-4ad9-bfb0-2fd323d3aafc"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Video Call</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/e531bd65-e111-4fcd-94ea-09a10c761e68"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Other Jewellery</Text>
          </Box>


          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/210c466a-756f-44d0-b934-29e509a0a6b5"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>DigiGid</Text>
          </Box>

          <Box  w={{base:"80px"}}  >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/97d02834-6259-4d7e-8ce8-80c7a9d0d37d"
            alt=""
          />
          <Text pl="5px" fontSize={"12px"}>Chains</Text>
          </Box>
         
        </Flex> 
        
      </Box>
      </Box>


{/*________________ small and md scroll button with images _____________________*/}











 {/* navbar for small screen  hamburgor */}
      {isOpen && (
        <Card
        gap="15px"
        mt="-100px"
        bg="#F2F2F2"
          p="3"
          display={{ base: 'flex', md: 'flex' }}
          flexDirection="column"
         
        >

       <Flex >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/49be16ba-c3db-4899-b179-122166dc2c7a"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px" fontSize={"19px"} fontWeight={700}>Best Seller</Text>
          <Text pl="5px" fontSize={"12px"}>All Time Favourites</Text>
          </Box>
          </Flex>



          <Flex   >
          <Img
            objectFit={"cover"}
            w="70px"
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/426256b3-7fdf-4426-a651-75f1ecf16f47"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text  fontSize={"19px"} fontWeight={700}>New Arrivals</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>


          <Flex>
            <Img
             w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
              cursor={"pointer"}
              src="https://github.com/shwetra/assa/assets/104376252/6d68b77c-91d4-4f27-b29d-323a72dc305a"
              alt=""
            />
            <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
            <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Silver</Text>
            <Text  fontSize={"12px"}>Fresh new designs</Text>
            </Box>
          </Flex>
          
         
          <Flex>
          <Img
           w="70px"
          objectFit={"cover"}
          borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/50370dae-17fc-4041-8294-02b0c27033fb"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
             <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Anniversary Gifts</Text>
             <Text  fontSize={"12px"}>Fresh new designs</Text>
             </Box>
          </Flex>



          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/f2494f48-f6b0-46fc-b84c-d49edb589d37"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Solitaires</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>



          <Flex  onClick={() => handleButton(0)}
          variant={activeBut === 0 ? 'solid' : 'ghost'}>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/3c874e8a-0f81-410d-a29c-baf8f9287f2f"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Rings</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>
          {activeBut !== null && (
        <Box  onMouseLeave={handleBoxMouse} width="100%" height="200px" border="1px solid black" marginTop="10px">
          {/* Content of the box */}
          {activeBut === 0 && <p>Box 1 Content</p>}
         
          {/* Add more conditional rendering for additional boxes */}
        </Box>
      )}









          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/9d4bd76c-2a7e-484b-9aee-d2087bd13982"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Earrings</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/debb2a73-3e2f-4747-888f-cc7916671700"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Bracelets & Bangles</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/7a02f1c1-3181-46bc-9adb-ec642f33699a"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Special Deals</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/10e2c915-f1a7-4ad9-bfb0-2fd323d3aafc"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Video Call</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex>
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/e531bd65-e111-4fcd-94ea-09a10c761e68"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Other Jewellery</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>


          <Flex >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/210c466a-756f-44d0-b934-29e509a0a6b5"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>DigiGid</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>

          <Flex   >
          <Img
           w="70px"
            objectFit={"cover"}
            borderRadius={"20px"}
            cursor={"pointer"}
            src="https://github.com/shwetra/assa/assets/104376252/97d02834-6259-4d7e-8ce8-80c7a9d0d37d"
            alt=""
          />
          <Box w="100%" bg="white" ml="10px" borderRadius={"15px"} pl="10px">
          <Text pl="5px"  fontSize={"19px"} fontWeight={700}>Chains</Text>
          <Text  fontSize={"12px"}>Fresh new designs</Text>
          </Box>
          </Flex>
        </Card>
      )}
    </Box>
  );
};

export default Navbar;
