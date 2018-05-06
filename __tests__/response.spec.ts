import { Response } from '../src/index'

describe('Response tests', () => {
  it('Only status code', () => {
    const res = Response(200)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBe('')
    expect(res.headers).toBe(undefined)
  })

  it('String body', () => {
    const res = Response(200, 'OK')

    expect(res.statusCode).toBe(200)
    expect(res.body).toBe('OK')
    expect(res.headers).toBe(undefined)
  })

  it('JSON body', () => {
    const body = { name: 'John Doe' }
    const res = Response(200, body)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBe(JSON.stringify(body))
    expect(res.headers).toBe(undefined)
  })

  it('Response with headers', () => {
    const res = Response(200, 'OK', {
      'content-type': 'applycation/json',
    })

    expect(res.statusCode).toBe(200)
    expect(res.body).toBe('OK')
    expect(typeof res.headers).toBe('object')
    expect(res.headers['content-type']).toBe('applycation/json')
  })
})
