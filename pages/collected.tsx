'use client'

import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import { Button,Link } from '@chakra-ui/react'


export default function RecoveredPage() {
  const cardBg = useColorModeValue('gray.100', 'gray.700')

  // ダミーデータ
  const recoveredCustomers = [
    {
      id: '1',
      storeName: '〇〇カフェ 上野店',
      recoveredAt: '2025-05-10',
      contactNote: '毎月10日に回収希望。担当：田中',
    },
    {
      id: '2',
      storeName: '△△クリニック',
      recoveredAt: '2025-05-08',
      contactNote: '院長不在のため次回訪問時に再確認',
    },
    {
      id: '3',
      storeName: '□□整骨院',
      recoveredAt: '2025-05-01',
      contactNote: 'いつも丁寧な対応あり。月初が理想。',
    },
    {
      id: '4',
      storeName: '□□整骨院',
      recoveredAt: '2025-05-01',
      contactNote: 'いつも丁寧な対応あり。月初が理想。',
    },
    {
      id: '5',
      storeName: '□□整骨院',
      recoveredAt: '2025-05-01',
      contactNote: 'いつも丁寧な対応あり。月初が理想。',
    },
    {
      id: '6',
      storeName: '□□整骨院',
      recoveredAt: '2025-05-01',
      contactNote: 'いつも丁寧な対応あり。月初が理想。',
    },
    {
      id: '7',
      storeName: '□□整骨院',
      recoveredAt: '2025-05-01',
      contactNote: 'いつも丁寧な対応あり。月初が理想。',
    },
    {
      id: '8',
      storeName: '□□整骨院',
      recoveredAt: '2025-05-01',
      contactNote: 'いつも丁寧な対応あり。月初が理想。',
    },
  ]

  return (

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
        {recoveredCustomers.map((customer) => (
          <Box
            key={customer.id}
            p={4}
            borderRadius="xl"
            bg={cardBg}
            boxShadow="md"
          >
            <Heading as="h2" size="md">
              {customer.storeName}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              回収日: {customer.recoveredAt}
            </Text>
            <Text fontSize="sm" mt={2}>
              メモ: {customer.contactNote}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  )
}