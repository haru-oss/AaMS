import { Button,Link } from '@chakra-ui/react'

import { Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>




    </>
  );
}


















