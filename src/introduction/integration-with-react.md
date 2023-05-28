# Integration with React

In this article, we will look at the combination of gramjs and React

After creating the project and installing all the necessary dependencies, you can use gramjs in your projects

## Table of Contents

## Client launch
In the example below you will see an example of an application that sends a confirmation code and starts the client

::::tabs
:::tab{title="JavaScript"}

```js
import React, { useState } from 'react'

import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'

const SESSION = new StringSession('')
const API_ID = 00000000 // put your API id here
const API_HASH = '7a000a86bfec00dd0ab11d0000d00000' // put your API hash here

const client = new TelegramClient(SESSION, API_ID, API_HASH, { connectionRetries: 5 }) // Immediately create a client using your application data

const initialState = { phoneNumber: '', password: '', phoneCode: '' } // Initialize component initial state

export function App () {
  const [{ phoneNumber, password, phoneCode }, setAuthInfo] = useState(initialState)

  async function sendCodeHandler () {
    await client.connect() // Connecting to the server
    await client.sendCode(
      {
        apiId: API_ID,
        apiHash: API_HASH
      },
      phoneNumber
    )
  }

  async function clientStartHandler () {
    await client.start({ phoneNumber, password: userAuthParamCallback(password), phoneCode: userAuthParamCallback(phoneCode), onError: () => {} })
    await client.sendMessage('me', { message: "You're successfully logged in!" })
  }

  function inputChangeHandler ({ target: { name, value } }) {
    setAuthInfo((authInfo) => ({ ...authInfo, [name]: value }))
  }

  function userAuthParamCallback (param) {
    return async function () {
      return await new (resolve => {
        resolve(param)
      })()
    }
  }

  return (
    <>
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={inputChangeHandler}
      />

      <input
        type="text"
        name="password"
        value={password}
        onChange={inputChangeHandler}
      />

      <input type="button" value="start client" onClick={sendCodeHandler} />

      <input
        type="text"
        name="phoneCode"
        value={phoneCode}
        onChange={inputChangeHandler}
      />

      <input type="button" value="insert code" onClick={clientStartHandler} />
    </>
  )
}
```

:::

:::tab{title="TypeScript"}

```ts
import React, { type BaseSyntheticEvent, useState } from 'react'

import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'

interface IInitialState {
  phoneNumber: string
  password: string
  phoneCode: string
}

const SESSION = new StringSession('')
const API_ID = 29653895 // put your API id here
const API_HASH = '7a697a86bfec99dd0ab11d8285d68060' // put your API hash here

const client = new TelegramClient(SESSION, API_ID, API_HASH, { connectionRetries: 5 }) // Immediately create a client using your application data

const initialState: IInitialState = { phoneNumber: '', password: '', phoneCode: '' } // Initialize component initial state

export function App (): JSX.Element {
  const [{ phoneNumber, password, phoneCode }, setAuthInfo] = useState<IInitialState>(initialState)

  async function sendCodeHandler (): Promise<void> {
    await client.connect() // Connecting to the server
    await client.sendCode(
      {
        apiId: API_ID,
        apiHash: API_HASH
      },
      phoneNumber
    )
  }

  async function clientStartHandler (): Promise<void> {
    await client.start({ phoneNumber, password: userAuthParamCallback(password), phoneCode: userAuthParamCallback(phoneCode), onError: () => {} })
    await client.sendMessage('me', { message: "You're successfully logged in!" })
  }

  function inputChangeHandler ({ target: { name, value } }: BaseSyntheticEvent): void {
    setAuthInfo((authInfo) => ({ ...authInfo, [name]: value }))
  }

  function userAuthParamCallback <T> (param: T): () => Promise<T> {
    return async function () {
      return await new Promise<T>(resolve => {
        resolve(param)
      })
    }
  }

  return (
    <>
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={inputChangeHandler}
      />

      <input
        type="text"
        name="password"
        value={password}
        onChange={inputChangeHandler}
      />

      <input type="button" value="start client" onClick={sendCodeHandler} />

      <input
        type="text"
        name="phoneCode"
        value={phoneCode}
        onChange={inputChangeHandler}
      />

      <input type="button" value="insert code" onClick={clientStartHandler} />
    </>
  )
}
```

:::
::::

## Save session 
By making a few changes you can save the session

::::tabs
:::tab{title="JavaScript"}

```js
/*
After successfully launching the client, you can call a function client.session.save() that returns the current session, and then save it to  local storage, for example.
Note that we must save only session, having a valid session, you can specify random API_ID and API_HASH
*/

async function clientStartHandler () {
    await client.start({ phoneNumber, password: userAuthParamCallback(password), phoneCode: userAuthParamCallback(phoneCode), onError: () => {} })
    localStorage.setItem('session', JSON.stringify(client.session.save())) // Save session to local storage
    await client.sendMessage('me', { message: "You're successfully logged in!" })
  }

/*
Now we can get the saved session and run the client without re-authorization
*/

const SESSION = new StringSession(JSON.parse(localStorage.getItem('session'))) // Get session from local storage

const client = new TelegramClient(SESSION, API_ID, API_HASH, { connectionRetries: 5 }) // Immediately create a client using your application data
```

:::

:::tab{title="TypeScript"}

```ts
/*
After successfully launching the client, you can call a function client.session.save() that returns the current session, and then save it to  local storage, for example.
Note that we must save only session, having a valid session, you can specify random API_ID and API_HASH
*/

async function clientStartHandler (): Promise<void> {
    await client.start({ phoneNumber, password: userAuthParamCallback(password), phoneCode: userAuthParamCallback(phoneCode), onError: () => {} })
    localStorage.setItem('session', JSON.stringify(client.session.save())) // Save session to local storage
    await client.sendMessage('me', { message: "You're successfully logged in!" })
  }

/*
Now we can get the saved session and run the client without re-authorization
*/

const SESSION = new StringSession(JSON.parse(localStorage.getItem('session') as string)) // Get session from local storage

const client = new TelegramClient(SESSION, API_ID, API_HASH, { connectionRetries: 5 }) // Immediately create a client using your application data
```

:::
::::
