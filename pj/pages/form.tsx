import { Button, Textarea, FormControl, Link,Input, FormLabel, Box, VStack } from '@chakra-ui/react'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = ()=>{};

  return (

    <Box maxW="600px" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
        <Button colorScheme='teal' >
            <Link href="/">Home</Link>
       </Button>

      <form onSubmit={handleSubmit}>
        <VStack spacing={3} align="stretch">
            <FormControl isRequired>
              <FormLabel>投入日</FormLabel>
              <Box
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                p={2}
                mb={2}
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
              <FormLabel>商品記号など</FormLabel>
              <Input  />
            </FormControl>


            <FormControl>
              <FormLabel>場所</FormLabel>
              <Input placeholder='場所を入力してください' />
            </FormControl>

            <Button colorScheme="blue" size="lg" mt={4} type="submit">
              送信
            </Button>

        </VStack>
      </form>
    </Box>
  );
}





















