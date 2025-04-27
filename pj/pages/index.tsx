import { Button, Textarea, FormControl, Input, FormLabel, Box, VStack } from '@chakra-ui/react'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <form>
        <VStack spacing={6} align="stretch">
          <FormControl isRequired>
            <FormLabel>投入日</FormLabel>
            <Box
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
              p={2}
            >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              dateFormat="yyyy/MM/dd"
              className="chakra-input css-1c6u84y"
            />

            </Box>
            <FormLabel>店名</FormLabel>
            <Input />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>決済者</FormLabel>
            <Input  />
          </FormControl>

          <FormControl>
            <FormLabel>他社情報、会えた人、決済者の出勤日等</FormLabel>
            <Textarea  />
          </FormControl>

          <FormControl>
            <FormLabel>道具</FormLabel>
            <Input  />
          </FormControl>

          <FormControl>
          </FormControl>

          <FormControl>
            <FormLabel>場所</FormLabel>
            <Input placeholder='場所を入力してください' />
          </FormControl>

          <Button colorScheme="blue" size="lg" type="submit" mt={4}>
            送信
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

























// import { Button,
//    Textarea,
//    FormControl,
//   Input,
//   FormLabel,
//   Box
// }  from '@chakra-ui/react'


// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"

// export default function Home() {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <>

//         <FormControl isRequired>
//       {/* <FormLabel>First name</FormLabel> */}
//       <Input placeholder='店名'm={3} />
//       <Input placeholder='決済者' m={3} />
//         <Textarea placeholder='他者情報、会えた人、決済者の出勤日等' mb={100} />


//         <h3>道具</h3>
//         <h3>投入日</h3>
//         <h3>場所</h3>




//         <FormControl>
//               <FormLabel>投入日</FormLabel>
//               <Box
//                 border="1px"
//                 borderColor="gray.200"
//                 borderRadius="md"
//                 pl={100}
//                 mt={100}
//               >
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date as Date)}
//                   dateFormat="yyyy/MM/dd"
//                   className="chakra-input css-1c6u84y" // ChakraのInputっぽくする小技
//                 />
//               </Box>
//             </FormControl>
//         <Button colorScheme='blue' mt={200}>Button</Button>

//         </FormControl>

//       ;








//     </>
//   );
// }
