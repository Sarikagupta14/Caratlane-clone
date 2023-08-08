import { Box, Button, Flex, FormLabel, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Purchase = () => {
    const [data, setData] = useState(1000);
    const [chart,setChart] = useState();
    const handleChange = (event) => {
      setData(event.target.value);
    };
  
    const handleSubmit = () => {
      // Do something with the inputValue, like submitting it to a server or processing it.
   const calculated=data*6
   setChart(calculated)
   console.log(calculated)
    };
  


    const handleButtonClick = (id) => {
        setData(id);
        console.log(id)
        const calculated=data*6
        setChart(calculated)
      };


  return (
    <Box>
      {/* Navbar section */}
      <Flex   display={{base:'none',md:'none',lg:'flex'}}
justifyContent={"space-between"}
        bgColor={"#f9f9fa"}
        w={{ base: "70%", lg: "100%" }}
        
      >
        <Box ml="100px"   display={{base:'hidden',md:'hidden',lg:'flex'}}>
          <Image
          
            mt={"10px"}
            w={{ base: "100%", lg: "75px" }}
            h={"35px"}
            src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/59feb509-78f9-44c9-9c2e-4b92b4ea2c68"
          />
        </Box>
        <Flex mr={{ lg: "100px" }} gap={"10px"} pt="10px" pb={"10px"}>
          <Button
            _hover={{ bgColor: "transparent" }}
            bgColor={{ base: "#F2F3F4 ", lg: "transparent" }}
            color={"#AF96FA"}
            fontSize={{ base: "12px", lg: "12px" }}
          >
            Overview
          </Button>
          <Button
            _hover={{ bgColor: "transparent" }}
            bgColor={{ base: "#F2F3F4 ", lg: "transparent" }}
            color={"#33363e"}
            fontSize={{ base: "12px", lg: "12px" }}
          >
            How It Works
          </Button>
          <Button
            _hover={{ bgColor: "transparent" }}
            bgColor={{ base: "#F2F3F4 ", lg: "transparent" }}
            display={{ base: "none", lg: "flex" }}
            color={"#33363e"}
            fontSize={"12px"}
          >
            Calculate Your PoP!
          </Button>
          <Button
            _hover={{ bgColor: "transparent" }}
            bgColor={{ base: "#F2F3F4 ", lg: "transparent" }}
            display={{ base: "none", lg: "flex" }}
            color={"#33363e"}
            fontSize={"12px"}
          >
            Why CaratLane PoP!
          </Button>
          <Button
            fontSize={"15px"}
            h={"40px"}
            w={"130px"}
            pt={"8px"}
            pb={"8px"}
            color={"white"}
            background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
          >
            Plan Now
          </Button>
     
        </Flex>
      </Flex>
    <Flex pt={{base:'5px'}} w={{base:'100%'}} direction={{base:'column',md:'column',lg:'row'}} h={{base:'90px',lg:'50px'}} gap={'4px'} bgColor={'#F8EEF8'} justifyContent={'center'} alignItems={'center'}>
    <Text align={{base:'start'}}   fontSize={{base:'11px',lg:'15px'}} color={'black'}>Introducing CaratLane PoP! A hassle-free Plan Of Purchase to buy jewellery quickly, without burning a hole in your pocket.</Text>
    <Text align={{base:'start'}} fontSize={{base:'12px'}} color={'#DE57E5'} fontWeight={'500'}>Learn more</Text>
    </Flex>

      {/* Banner section */}
      <Flex
        h={"550px"}
        ml={"50px"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        w={"95%"}
        bgImage={
          "https://github.com/Sarikagupta14/Mini-Project/assets/121433831/fe6e134a-1f98-4add-a68b-f215a5bdcdd9"
        }
        display={{ base: "none", md: "none", lg: "flex" }}
        direction={{ base: "none", md: "none", lg: "column" }}
      >
        <Text
          ml={"125px"}
          mt={"150px"}
          fontWeight={"600"}
          fontSize={{ base: "20px", md: "25px", lg: "34px" }}
          w={{ base: "90%", md: "90%", lg: "500px" }}
          h={"54px"}
          color={"white"}
        >
          Plan Of Purchase!
        </Text>
        <Text
          ml={"125px"}
          fontWeight={"600"}
          fontSize={{ base: "20px", md: "25px", lg: "34px" }}
          w={{ base: "90%", md: "90%", lg: "700px" }}
          h={"54px"}
          color={"white"}
        >
          Own Your Favourite Design In 6 Easy Instalments.
        </Text>
        <Flex mt={"150px"}>
          <Button
            fontSize={"18px"}
            h={"50px"}
            w={"180px"}
            pt={"8px"}
            pb={"8px"}
            ml={"130px"}
            color={"white"}
            background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
          >
            Plan Now
          </Button>
          <Text
            mt={"5px"}
            color={"white"}
            fontWeight={"500"}
            fontSize={"19px"}
            ml={"30px"}
          >
            Learn more{" "}
          </Text>
          <Text mt={"5px"} color={"white"} fontSize={"35px"} as={"span"}>
            <RiArrowDropDownLine />
          </Text>
        </Flex>
      </Flex>
     
     {/* For small and medium screens */}
    {/* Banner section */}
    <Flex overflowX={{base:'hidden'}} h={{base:'650px',md:'1350px'}} display={{base:'flex',md:'flex',lg:'none'}} w={'100%'}   direction={{base:'column'}}  bgRepeat={'no-repeat'} bgSize={'cover'} bgImage={('https://github.com/Sarikagupta14/Mini-Project/assets/121433831/180e5930-4afb-4b14-a36a-3a2e594db739')}  >
      <Box align={'center'}>

      <Text
         m={'auto'}
          mt={"50px"}
          fontWeight={"600"}
          fontSize={{ base: "17px", md: "25px", lg: "34px" }}
          w={{ base: "70%", md: "90%", lg: "500px" }}
          h={"54px"}
          color={"white"}
        >
          Plan Of Purchase!  Own Your Favourite Design In 6 Easy Instalments.
        </Text>
     
        <Flex mt={"50px"} w={'100%'}>
          <Button
            fontSize={{base:'15px',md:"18px"}}
            h={"36px"}
            m={'auto'}
            pt={"3px"}
            pb={"3px"}
           w={{base:'37%'}}
            color={"white"}
            background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
          >
            Plan Now
          </Button>
       
        </Flex>
        <Text mt={{base:'10px'}} fontSize={'15px'} color={'white'}>Learn more</Text>
    </Box>
    </Flex>

      {/* section-2 */}
      <Box w={{ base: "100%" }}>
        <Flex
          mt={{ base: "360px", lg: "0px" }}
          direction={{ base: "column", md: "column", lg: "row" }}
          h={{ base: "100px", lg: "500px" }}
          justifyContent={"center"}
          gap={{ base: "0px", lg: "30px" }}
        >
          {/* Left-side*/}
          <Box
          m={{base:'auto'}}
            mt={{ base: "10px", lg: "55px" }}
            
            w={{ base: "80%", lg: "40%" }}
            h={{ base: "400px", lg: "420px" }}
          >
            <Text
              align={{ base: "center", md: "center", lg: "start" }}
              fontSize={{ base: "14px", lg: "15px" }}
              color={"#8863fb"}
              mt={{ base: "70px", lg: "0px" }}
            >
              How It Works
            </Text>
            <Text
              align={{ base: "center", md: "center", lg: "start" }}
              mt={"10px"}
              fontSize={{ base: "13px", lg: "32px" }}
              w={{ base: "90%", lg: "600px" }}
              color={"black"}
              h={{ base: "40px", lg: "150px" }}
              fontWeight={"600"}
              marginBottom={"78px"}
            >
              It's such a hassle-free process that the only thing you need to
              worry about is choosing the outfit you'll be wearing with your
              favourite jewellery.
            </Text>

            {/* Button */}
            <Flex
              direction={{ base: "column", md: "column", lg: "row" }}
              gap={{ lg: "30px" }}
            >
              <Button
                fontSize={{ base: "13px", md: "18px", lg: "18px" }}
                w={{ base: "45%", lg: "170px" }}
                h={{base:'36px',md:"",lg:"50px"}}
                pt={"8px"}
                pb={"8px"}
                m={{base:'auto'}}
                mt={{ base: "-5px", lg: "25px" }}
                color={"white"}
                background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
              >
                Plan Now
              </Button>
            </Flex>

            <Text
              align={{ base: "center", md: "center", lg: "start" }}
              fontSize={{ base: "10px", lg: "15px" }}
              color={"#848CA4"}
              w={{base:'100%'}}
              mt={{ base: "10px", lg: "50px" }}
            >
              You don’t have to wait till the 6th month to redeem. Refer to the
              calculator below to feel the joy sooner!
            </Text>
          </Box>

          {/* Right side */}
          <Box w={{ base: "100%", md: "95%", lg: "40%" }}>
            <Flex direction={{ base: "column", md: "column", lg: "column" }}>
              <Flex
                mt={{ base: "30px", md: "140px", lg: "170px" }}
                gap={{ base: "5px", md: "10px", lg: "40px" }}
                direction={{ base: "column", md: "column", lg: "row" }}
              >
                <Image
                  mt={{ base: "0px", md: "-24" }}
                  m={"auto"}
                  h={{ base: "70px", md: "80px", lg: "80px" }}
                  w={{ base: "80px", md: "80px", lg: "90px" }}
                  src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/a47b6381-90e0-4fc6-92ac-d749d2c9d78a"
                />
                <Flex
                  w={{ base: "100%" }}
                  direction={{ base: "column", md: "column", lg: "flex" }}
                  alignItems={{ base: "center", md: "center", lg: "start" }}
                >
                  <Text
                    align={{ base: "center", md: "center", lg: "right" }} mt={{ base: "10px", md: "0px", lg: "-24" }}
                    fontSize={{ base: "17px", md: "19px", lg: "21px" }}
                    color={"black"}
                    fontWeight={"500"}
                  >
                    Pay Monthly
                  </Text>
                  <Text
                    align={{ base: "center", md: "center", lg: "justify" }}
                    fontSize={{ base: "14px", md: "14px", lg: "15px" }}
                    mt={"10px"}
                    color={"#231535"}
                    h={"60px"}
                    w={{ base: "90%", md: "88%", lg: "280px" }}
                  >
                    Take easy steps by choosing a fixed plan amount to keep
                    aside with CaratLane every month.
                  </Text>
                </Flex>
              </Flex>

              <Flex
                mt={{base:"10px",lg:"50px"}}
                gap={"40px"}
                direction={{ base: "column", md: "column", lg: "row" }}
              >
                <Image
                  m={"auto"}
                  h={{base:'70px',md:'80px',lg:"90px"}}
                  w={{base:'80px',md:'90px',lg:"110px"}}
                  src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/f3e520af-5fbe-4c21-b96d-23588cde19f3"
                />
                <Flex
                  w={{ base: "100%" }}
                  direction={{ base: "column", md: "column", lg: "flex" }}
                  alignItems={{
                    base: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                >
                  <Text
                    align={"center"}
                    color={"black"}
                    fontSize={{ base: "17px", md: "18px", lg: "21px" }}
                    fontWeight={"500"}
                    mt={{base:'-15px',md:'0px',lg:''}}
                  >
                    Our gift* to you
                  </Text>
                  <Text
                    align={{ base: "center", md: "center", lg: "justify" }}
                    fontSize={{ base: "14px", md: "14px", lg: "15px" }}
                    mt={{base:'10px',lg:"10px"}}
                    color={"#231535"}
                    h={"60px"}
                    w={{ base: "90%", md: "88%", lg: "280px" }}
                  >
                    At the end of 6 months, CaratLane will issue a gift* value
                    equivalent to 30% of your first month’s plan amount.
                  </Text>
                </Flex>
              </Flex>
              <Flex
                mt={{base:'50px',md:"",lg:"50px"}}
                gap={"40px"}
                direction={{ base: "column", md: "column", lg: "row" }}
              >
                <Image
                  h={{base:"80px",lg:"90px"}}
                  w={{base:'90px',lg:"100px"}}
                  m={"auto"}
                  src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/5a8f37d0-af69-4a7a-b3fb-37501a2d1547"
                />
                <Flex
                  w={{ base: "100%" }}
                  direction={{ base: "column", md: "column", lg: "flex" }}
                  alignItems={{
                    base: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                >
                  <Text
                  mt={{base:'-10px'}}
                    align={"center"}
                    fontSize={{ base: "17px", lg: "21px" }}
                    color={"black"}
                    fontWeight={"500"}
                  >
                    Purchase
                  </Text>
                  <Text
                    align={{ base: "center", md: "center", lg: "justify" }}
                    fontSize={{ base: "14px", lg: "15px" }}
                    mt={"10px"}
                    color={"#231535"}
                    h={{ base: "10px", lg: "60px" }}
                    w={{ base: "75%", lg: "280px" }}
                  >
                    Purchase You can redeem by purchasing jewellery of your
                    choice, either at our stores or online.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>

       {/* section-3 */}
       <Box w='100%'  mt={{base:'300px',md:'30px',lg:'80px'}}>
      <Flex  justifyContent={'center'} alignItems={'center'} direction={{base:'column',md:'column',lg:'row'}}   gap={{base:'0px',lg:'60px'}}>
        {/* Left-side*/}
      <Box  mt={{base:'160px',lg:'0px'}} w={{base:'90%',lg:'40%'}} >
       <Text w={{base:'100%',md:'100%',lg:'40%'}} align={{base:'center',md:'center',lg:"start"}} fontSize={{base:'15px',lg:'15px'}} color={'#8863fb'} mt={{base:'40px',lg:'0px'}} >Calculate Your PoP!</Text>
       <Text  w={'100%'} color="#231535" align={{base:'center',md:'center',lg:'start'}} mt={'10px'} fontSize={{base:'17px',lg:'34px'}}   h={{base:'40px',lg:'170px'}} fontWeight={'600'} marginBottom={'78px'} >A plan for you to keep adding to your jewellery collection every 6 months! Here’s how you can calculate your purchase better. Enter the amount you want to set aside with us for 6 months to see the value of our gift*..</Text>
       <Flex mt={{base:"130px",lg:'180px'}}  w={{base:"100%"}}>
          <Button
            fontSize={{base:'15px',md:"18px"}}
             w={{base:'40%'}}
            align={{base:'center',lg:'start'}}
            pt={"3px"}
            pb={"3px"}
            m={'auto'}
            color={"white"}
            background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
          >
            Plan Now
          </Button>
     
        </Flex>
      
     
      </Box>

     


        {/* Right side */}
        <Flex justifyContent={'center'} alignItems={'center'}  w={{base:'100%',md:'95%',lg:'40%'}} direction={'column'}>
         <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
         <Flex gap={'150px'}  mt={'100px'}>
          <Text align={{base:'center'}} fontSize={'12px'} color={'gray'}>Enter Any Amount</Text>
          <Text fontSize={'12px'} color={'gray'}>Min ₹1,000</Text>
         </Flex>
         <InputGroup w={{base:'90%',lg:"60%"}}>
      <Input
        border="1px solid #AD5DF1"
        type="text"
        w="100%"
        color="black"
        placeholder="1000"
        name="box"
        value={data}
        onChange={handleChange}
      />
      <InputRightElement  width="auto">
        <Button type="submit" colorScheme="purple" onClick={handleSubmit}>
          Check
        </Button>
      </InputRightElement>
    </InputGroup>
          <Text mt={'15px'} align={'start'} fontSize={'12px'} color={'gray'}>Customers Usually Prefer</Text>
          <Flex gap={'20px'} mt={'10px'} mb={'30px'} ml={{lg:'35px'}}>
          <Button w={'100px'} color={'gray'} border={'1px solid gray'} fontSize={'17px'} onClick={() => handleButtonClick("10000")}>₹10,000</Button>
          <Button w={'100px'} color={'gray'} border={'1px solid gray'} fontSize={'17px'} onClick={() => handleButtonClick("20000")}>₹20,000</Button>
          <Button w={'100px'} color={'gray'} border={'1px solid gray'} fontSize={'17px'} onClick={() => handleButtonClick("30000")}>₹30,000</Button>
          </Flex>
          
         </Flex>
        <Box h="220px" w="207px" bgImage={"https://banner.caratlane.com/live-images/bc845fab40734da19844c26daa4b820e.png"}>
            <Text align={"center"} mt="20px" fontWeight={500} >You Pay</Text>
            <Text align={"center"}  fontWeight={500} >{chart}</Text>
        </Box>
         {/* <Image w={'200px'} src="/> */}
         <Text fontWeight={'400'} color={'black'}>YOU GET</Text>
         <Text color={'black'} fontWeight={'500'} fontSize={'20px'}>300</Text>
        </Flex>
   </Flex>

   
      
    </Box>

     {/* section-4 */}
     <Box w='100%' h={'300px'} mt={{base:'50px',md:'30px',lg:'80px'}}>
      <Flex  justifyContent={'center'} alignItems={'center'} direction={{base:'column',md:'column',lg:'row'}}   gap={{base:'0px',lg:'60px'}}>
        {/* Left-side*/}
      <Box  mt={{base:'20px',lg:'0px'}} w={{base:'80%',lg:'40%'}} justifySelf={'flex-start'}>
       <Text w={{base:'100%',md:'100%',lg:'40%'}} align={{base:'start',md:'center',lg:"start"}} fontSize={{base:'18px',lg:'25px'}} fontWeight={'700'} color={'black'} mt={{base:'30px',lg:'0px'}} >Our Gesture</Text>
       <Text  w={'100%'} color="#231535" align={{base:'start',md:'center',lg:'start'}} mt={'10px'} fontSize={{base:'15px',lg:'18px'}}   h={{base:'40px',lg:'0px'}} fontWeight={'500'} marginBottom={'78px'} >If you want to feel the joy sooner, redeem before the 6th month. Here’s how:</Text>
       <Button mt={{base:'-60px',lg:'0px'}} fontSize={'20px'} h={'50px'} w={{base:'50%',lg:'25%'}} color={'black'} background={'gray.200'}>4-5 Months</Button>
   </Box>

   <Flex overflowX={{base:'hidden'}} h={{base:'650px',md:'1350px'}} display={{base:'flex',md:'flex',lg:'none'}} w={'100%'}   direction={{base:'column'}}  bgRepeat={'no-repeat'} bgSize={'cover'} bgImage={('https://github.com/Sarikagupta14/Mini-Project/assets/121433831/f8595b58-5086-4952-8588-fbd510869e07')}  >
      <Box align={'center'}>

      <Text
         m={'auto'}
          mt={"50px"}
          fontWeight={"600"}
          fontSize={{ base: "15px", md: "25px", lg: "34px" }}
          w={{ base: "70%", md: "90%", lg: "500px" }}
          h={"54px"}
          color={"black"}
        >
           In the true spirit of making fine jewellery accessible and affordable to all, we've introduced CaratLane PoP! The easiest way to keep adding to your jewellery collection.
        </Text>
     
        <Flex mt={{base:'100px',lg:"50px"}}>
          <Button
            fontSize={{base:'15px',md:"18px"}}
            h={"36px"}
            m={'auto'}
            pt={"3px"}
            pb={"3px"}
           
            color={"white"}
            background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
          >
            Plan Now
          </Button>
     
        </Flex>
    </Box>
    </Flex>


        {/* Right side */}
        <Flex justifyContent={'center'} alignItems={'center'}  w={{base:'95%',md:'95%',lg:'40%'}} direction={'column'}>
         
        </Flex>
   </Flex>

   
      
    </Box>


       {/* section-5 */}
         {/* Banner section */}
      <Flex
        h={{base:'0px',lg:"600px"}}
        ml={"50px"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        w={"95%"}
        bgImage={
          "https://github.com/Sarikagupta14/Mini-Project/assets/121433831/bb8c926b-d06d-4840-981e-810040e22643"
        }
        display={{ base: "none", md: "none", lg: "flex" }}
        direction={{ base: "none", md: "none", lg: "column" }}
      >
        <Text
          ml={"125px"}
          mt={"150px"}
          fontWeight={"400"}
         
          w={{ base: "90%", md: "90%", lg: "500px" }}
          
          fontSize={{ base: "15px", lg: "15px" }}
          color={"#8863fb"}
         
        >
       Why CaratLane PoP!
        </Text>
        <Text
          ml={"125px"}
          fontWeight={"600"}
          fontSize={{ base: "20px", md: "25px", lg: "34px" }}
          w={{ base: "90%", md: "90%", lg: "600px" }}
          h={"54px"}
          color={"black"}
        >
          In the true spirit of making fine jewellery accessible and affordable to all, we've introduced CaratLane PoP! The easiest way to keep adding to your jewellery collection.
        </Text>
        <Flex mt={"250px"}>
          <Button
            fontSize={"18px"}
            h={"50px"}
            w={"180px"}
            pt={"8px"}
            pb={"8px"}
            ml={"130px"}
            color={"white"}
            background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))"
          >
            Plan Now
          </Button>
      
        </Flex>
      </Flex>
    
      <Box w='100%'>
      <Flex mt={{base:'500px',md:'30px',lg:'100px'}} justifyContent={'center'} alignItems={'center'} direction={{base:'column',md:'column',lg:'row'}}   gap={{base:'0px',lg:'60px'}}>
        {/* Left-side*/}
      <Box  mt={{base:'60px',lg:'55px'}} w={{base:'80%',lg:'40%'}} >
       <Text w={{base:'100%',md:'100%',lg:'50%'}} align={{base:'center',md:'center',lg:"start"}} fontSize={{base:'15px',lg:'15px'}} color={'#8863fb'} mt={{base:'40px',lg:'0px'}} >Frequently Asked Questions</Text>
       <Text  w={'100%'} color="#231535" align={{base:'center',md:'center',lg:'start'}} mt={'10px'} fontSize={{base:'15px',lg:'30px'}}   h={{base:'40px',lg:'120px'}} fontWeight={'600'} marginBottom={'78px'} >
       If it’s still too good to be true, read through these questions to get a clearer picture. You can also drop in your number and we will get in touch regarding your PoP!
         </Text>
      
      
    </Box>


        {/* Right side */}
        <Flex mt={{base:'40px',lg:'0px'}} justifyContent={'center'} alignItems={'center'}  w={{base:'95%',md:'95%',lg:'40%'}} direction={'column'}>
         <Image   h={'60px'} w={'80px'} src='https://github.com/Sarikagupta14/Mini-Project/assets/121433831/fe1fb159-6962-4a99-a4f2-ad2cc7e87543' alt=''/>
         
         <Box h={'50px'} >
         <Text fontWeight={'600'} fontSize={'18px'} color="#231535">At Your Service. Always.</Text>
         </Box>

         <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={'100%'}>
         
          <FormLabel fontSize={'12px'} color={'gray'}>Mobile number</FormLabel>
          <Input
          border={'1px solid #AD5DF1'}
          type='text'
          w={{base:'90%',lg:'50%'}}
          placeholder=''
          name="box"
          // value={box}
          // onChange={handleChange}
          />
         
          
          <Button  w={{base:'90%',lg:'50%'}} fontSize={'16px'} h={'40px'} pt={'4px'} pb={'4px'} mt={'25px'}   color={'white'}  background="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))">Request Call Back</Button>
          
         </Flex>

        </Flex>
      </Flex>

   
      
    </Box>


    



    <Box>
        





      </Box>


    </Box>
  );
};

export default Purchase;