import '@/utils/removeDash'
import { removeDash } from '@/utils/removeDash'

test('remove dash', () => {
  const wordWithNoDash = removeDash('Hello-World!')
  expect(wordWithNoDash).toBe('Hello World!')
})