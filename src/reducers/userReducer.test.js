import {userReducer} from './userReducer';

describe('User Reducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = userReducer(undefined, {})
    expect(result).toEqual(expected) 
  })

  it('should set login info when user logs in', () => {
    const expected = {userName: 'Tronkat', password: 'nunya'}
    const result = userReducer(undefined, {
      type: "LOGIN",
      loginInfo: expected
    })
    expect(result).toEqual(expected)
  })

  it('should set login info when user logs in', () => {
  const expected = {}
  const result = userReducer(undefined, {
    type: "LOGOUT",
    email: 'turing@school.com'
  })
  expect(result).toEqual(expected)
})
})