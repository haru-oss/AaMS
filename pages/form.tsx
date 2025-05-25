import { Button, Textarea, FormControl, Link,Input, FormLabel, Box, VStack } from '@chakra-ui/react'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios';

import {  Flex, IconButton } from "@chakra-ui/react";


import {
  AtSignIcon,
  CalendarIcon,
  AddIcon,
  CheckCircleIcon,
  InfoIcon,
} from "@chakra-ui/icons";


export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  const [formData,setFormData] = useState({
    storeName: "",
    decisionMaker: "",
    notes: "",
    productCode: "",
    location: ""
  })

  // ----------------------------------------------------------------------------------------

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault(); // リロード防止

    const dataToSend ={
      ...formData,
      date: startDate
    };

    try {
      const res = await axios.post('/api/save', dataToSend);

      if (res.status === 200) {
        alert('送信成功！');
        setFormData({
          storeName: "",
          decisionMaker: "",
          notes: "",
          productCode: "",
          location: ""
        });
        setStartDate(new Date());
      }else{
        alert('送信失敗')
      }
    } catch(error){
      console.error('送信エラー：',error);
      alert('通信エラーが発生しました')
    };

  };
// ------------------------------------------------------------------------------------------
  return (

    <Box maxW="600px" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
       <Button colorScheme='teal' >
    <Link href="/usertable">usertable</Link>
    </Button>


        <Button colorScheme='teal' >
            <Link href="/">Home</Link>
       </Button>
{/* ------------------------------------------------------------------------------------------------------------------- */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={3} align="stretch">
{/* ------------------------------------------------------------------------------------------------------------------- */}
{/* date型のため、別保管で問題なし。*/}

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
            </FormControl>
{/* ------------------------------------------------------------------------------------------------------------------- */}
              <FormControl isRequired>
                <FormLabel>店名</FormLabel>
                <Input
                       value={formData.storeName}
                       onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  />
              </FormControl>

{/* ------------------------------------------------------------------------------------------------------------------- */}


            <FormControl isRequired>
              <FormLabel>決済者</FormLabel>
              <Input
                       value={formData.decisionMaker}
                       onChange={(e) => setFormData({ ...formData, decisionMaker: e.target.value })}
                  />
            </FormControl>
{/* ------------------------------------------------------------------------------------------------------------------- */}
            <FormControl>
              <FormLabel>他社情報、会えた人、決済者の出勤日等</FormLabel>
              <Textarea
                       value={formData.notes}
                       onChange={(e) => setFormData({ ...formData, notes: e.target.value })}

              />
            </FormControl>
{/* ------------------------------------------------------------------------------------------------------------------- */}
            <FormControl>
              <FormLabel>商品記号など</FormLabel>
              <Input
                       value={formData.productCode}
                       onChange={(e) => setFormData({ ...formData, productCode: e.target.value })}
                  />


            </FormControl>

{/* ------------------------------------------------------------------------------------------------------------------- */}
            <FormControl>
              <FormLabel>場所</FormLabel>
              <Input
                       value={formData.location}
                       onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />

            </FormControl>
{/* ------------------------------------------------------------------------------------------------------------------- */}
            <Button colorScheme="blue" size="lg" mt={4} type="submit">
              送信
            </Button>

        </VStack>
      </form>
{/* ------------------------------------------------------------------------------------------------------------------- */}

<Box
      position="fixed"
      bottom="0"
      width="100%"
      bg="white"
      borderTop="1px solid #e2e8f0"
      zIndex="100"
    >
      <Flex justify="space-around" p={2}>
        <IconButton
          icon={<CalendarIcon />}
          aria-label="ダッシュボード"
          variant="ghost"
        />
        <IconButton
          icon={<AtSignIcon />}
          aria-label="未回収リスト"
          variant="ghost"
        />
        <IconButton
          icon={<AddIcon />}
          aria-label="登録フォーム"
          variant="ghost"
        />
        <IconButton
          icon={<CheckCircleIcon />}
          aria-label="契約・未契約リスト"
          variant="ghost"
        />
        <IconButton
          icon={<InfoIcon />}
          aria-label="その他"
          variant="ghost"
        />
      </Flex>
    </Box>

    </Box>


  );
}





















