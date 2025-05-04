import { Button, Textarea, FormControl, Link,Input, FormLabel, Box, VStack } from '@chakra-ui/react'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  const [formData,setFormData] = useState({
    storeName: "",
    decisionMaker: "",
    notes: "",
    productCode: "",
    location: ""
  })

  // -----------------------------------------------------------------------------------------

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault(); // リロード防止

    const dataToSend ={
      ...formData,
      date: startDate
    };

    try {
      const res = await fetch('/api/save',{
        method : 'POST',
        headers:{
          'Content-Type': 'applocation/json'
        },
        body: JSON.stringify(dataToSend)
      });
      if(res.ok){
        alert('送信成功！')
        setFormData({
             storeName: "",
             decisionMaker: "",
             notes: "",
             productCode: "",
             location: ""
        })
        setStartDate(new Date());
      }else{
        alert('送信失敗')
      }
    } catch(error){
      console.error('送信エラー：',error);
      alert('通信エラーが発生しました')
    };
    ;





    // ここにfech処理を書く
  };
// ------------------------------------------------------------------------------------------
  return (

    <Box maxW="600px" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
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
    </Box>
  );
}





















