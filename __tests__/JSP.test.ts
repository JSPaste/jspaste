/* eslint-env jest */
import { describe, expect, test } from 'bun:test'
import JSP from '../src/JSP.ts'
import Request from '../src/core/Request.ts'

describe('JSP#', () => {
  const jsp = new JSP()
  let resource: string
  let secret: string

  test('.publish()', async () => {
    const x = await jsp.publish('Lorem ipsum dolor sit amet')

    expect(x).toBeInstanceOf(Object)
    expect(x.res.resource).toBeDefined()
    expect(x.res.secret).toBeDefined()
    expect(x.req.valid).toBeTruthy()
    console.debug(x)

    resource = x.res.resource as string
    secret = x.res.secret as string
  })

  test('.access() #Invalid', async () => {
    const x = await jsp.access('.invalid.')

    expect(x).toBeInstanceOf(Object)
    expect(x.res.payload).toBeNull()
    expect(x.req.valid).toBeFalsy()
    console.debug(x)
  })

  test('.access() #Valid', async () => {
    const x = await jsp.access(resource)

    expect(x).toBeInstanceOf(Object)
    expect(x.res.payload).toBeDefined()
    expect(x.req.valid).toBeTruthy()
    console.debug(x)
  })

  test('.remove() #Invalid', async () => {
    const x = await jsp.remove(resource, '.invalid.')

    expect(x).toBeInstanceOf(Object)
    expect(x.req.valid).toBeFalsy()
    console.debug(x)
  })

  test('.remove() #Valid', async () => {
    const x = await jsp.remove(resource, secret)

    expect(x).toBeInstanceOf(Object)
    expect(x.req.valid).toBeTruthy()
    console.debug(x)
  })
})

describe('@internal Request#', () => {
  test('._test_run() #MalformedURL', () => {
    expect(async () => {
      await new Request('GET')._test_fetch('nyaa.æ~')
    }).toThrow()
  })
})
