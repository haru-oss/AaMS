import { Button,Link } from '@chakra-ui/react'




export default function Home() {


  return (
    <>
    <Button colorScheme='teal' >
    <Link href="/form">form</Link>

    </Button>


    </>
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
