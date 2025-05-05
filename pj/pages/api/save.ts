// ここに、formから受け取ったデータをどうしていくかを記述する。
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })

  }

  const { storeName, decisionMaker, notes, productCode, location, date } = req.body
  try {

    const result = await prisma.user.create({
      data: {
        storeName,
        decisionMaker,
        notes,
        productCode,
        location,
        MonitordAt: new Date(date), // ← 文字列 or Date型 どちらでも受けられるように
      }
    })

    return res.status(200).json({ message: '保存成功', data: result })
  } catch (error) {
    console.error('保存エラー:', error)
    return res.status(500).json({ message: 'サーバーエラー', error })
  }
}