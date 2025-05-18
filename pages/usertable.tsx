import { Button,Link } from '@chakra-ui/react'

import {  Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// import {  Table, Thead, Tbody, Tr, Th, Td,} from '@chakra-ui/react';



import {
    Text,
  VStack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'

type User = {
    id: number;
    storeName: string;
    decisionMaker: string;
    notes: string;
    productCode: string;
    location: string;
    MonitordAt: string;
  };



export default function UserTable () {
  const [users, setUsers] = useState<User[]>([]);
  const cardBg = useColorModeValue('gray.100', 'gray.700')



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>('/api/users');
        setUsers(res.data);
      } catch (error) {
        console.error('データ取得エラー:', error);
      }
    };

    fetchUsers();
  }, []);



  return (
    <>
       <Button colorScheme='teal' >
         <Link href="/form">form</Link>
       </Button>
       <Button colorScheme='teal' >
         <Link href="/">home</Link>
       </Button>
       <Button colorScheme='teal' >
         <Link href="/usertable">usertable</Link>
       </Button>


           <Container maxW="container.lg" py={6}>
                      <Button colorScheme='teal' >
                        <Link href="/form">form</Link>
                      </Button>
                      <Button colorScheme='teal' >
                          <Link href="/">Home</Link>
                      </Button>
             <Heading as="h1" size="lg" mb={6}>
               回収済みリスト
             </Heading>

             <VStack spacing={4} align="stretch">
               {users.map((user) => (
                 <Box
                   key={user.id}
                   p={4}
                   borderRadius="xl"
                   bg={cardBg}
                   boxShadow="md"
                 >
                   <Heading as="h2" size="md">
                     {user.storeName}
                   </Heading>
                   <Text fontSize="sm" color="gray.600">
                     回収日: {new Date(user.MonitordAt).toLocaleDateString()}
                   </Text>

                   <Text fontSize="sm" mt={2}>
                     担当者: {user.decisionMaker}
                   </Text>
                   <Text fontSize="sm" mt={2}>
                     メモ: {user.notes}
                   </Text>

                   <Text fontSize="sm" mt={2}>
                     商品: {user.productCode}
                   </Text>
                   <Text fontSize="sm" mt={2}>
                     場所: {user.location}
                   </Text>

                 </Box>

               ))}
             </VStack>
           </Container>




           </>
/*
       <Box maxW="90%" mx="auto" mt={10}>
      <Heading mb={6}>顧客一覧</Heading>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>投入日</Th>
            <Th>店名</Th>
            <Th>決済者</Th>
            <Th>メモ</Th>
            <Th>商品記号</Th>
            <Th>場所</Th>
            <Th>回収</Th>
            <Th>契約</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{new Date(user.MonitordAt).toLocaleDateString()}</Td>
              <Td>{user.storeName}</Td>
              <Td>{user.decisionMaker}</Td>
              <Td>{user.notes}</Td>
              <Td>{user.productCode}</Td>
              <Td>{user.location}</Td>
              <Td> <Button>回収</Button></Td>
              <Td> <Button>契約</Button></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box> */
  );
}


















