import { Request, Response } from 'express'
import { ask } from './ask'
import loggy from './loggy'

export const handler = async (req: Request, res: Response, context: string) => {
  const conversationId = req.body?.conversationId?.toString().trim() ?? null
  let input = req.body?.question?.trim() ?? null
  const model = req.body?.model ?? req.query?.model ?? 'openai'
  const user = req.body?.user ?? req.query?.user ?? 'anonymous'
  const ctx = context ?? 'handler'

  loggy(`[${ctx}] ${input?.toString().substring(0, 50) ?? 'hit handler'}`, false)

  try {
    const answer = await ask()

    return res.json({
      answer: answer ?? 42,
    })
  } catch (e) {
    console.error(e)
    return res.status(500).send(e)
  }
}

export default handler
