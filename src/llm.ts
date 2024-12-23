import { openai } from './ai'

export const runLLM = async (message: string) => {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            {
                role: 'user',
                content: message
            }
        ]
    })

    return response.choices[0].message.content
}