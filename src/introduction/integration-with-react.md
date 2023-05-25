# Integration with React

In this article, we will look at the combination of gramjs and React

After creating the project and installing all the necessary dependencies, you can use gramjs in your projects

## Client launch
In the example below you will see an example of an application that sends a confirmation code and starts the client

::::tabs
:::tab{title="JavaScript"}

```js
import React, { useState } from 'react'

import { TelegramClient } from 'telegram'
import { StringSession } from 'telegram/sessions'

const SESSION = new StringSession('')
const API_ID = 00000000
const API_HASH = '111eb4dc492d4ae475d575c00bf0aa11'

function createClient (session, apiId, apiHash) {
  return new TelegramClient(
    session,
    apiId,
    apiHash,
    { connectionRetries: 5 }
  )
}

const client = createClient(SESSION, API_ID, API_HASH) // Immediately create a client using your application data

async function startClient (phoneNumber, password, phoneCode) {
  await client.start({
    phoneNumber,
    password,
    phoneCode: async () => await new Promise(resolve => { resolve(phoneCode) }),
    onError: () => {}
  })
}

async function sendCode (phone) {
  await client.connect() // Connecting to the server
  await client.sendCode({
    apiId: API_ID,
    apiHash: API_HASH
  }, phone)
}
export function App () {
  const initialState = { phoneNumber: '', password: '', code: '' }

  const [{ phoneNumber, password, code }, setAuthInfo] = useState(initialState)

  function onInputChangeHandler ({ target: { name, value } }) {
    setAuthInfo(authInfo => ({ ...authInfo, [name]: value }))
  }

  function onSendCodeHandler () {
    sendCode(phoneNumber)
  }

  function onStartClientHandler () {
    startClient(phoneNumber, password, code)
  }

  return (
    <>
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onInputChangeHandler}
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={onInputChangeHandler}
      />
      <input
        type="button"
        value="start client"
        onClick={onSendCodeHandler} 
      />
      <input
        type="text"
        name="code"
        value={code}
        onChange={onInputChangeHandler}
      />
      <input
        type="button"
        value="insert code"
        onClick={onStartClientHandler}
      />
    </>
  )
}
```

:::

:::tab{title="TypeScript"}

```ts
import React, { type BaseSyntheticEvent, useState } from 'react'

import { TelegramClient } from 'telegram'
import { type UserAuthParams } from 'telegram/client/auth'
import { StringSession } from 'telegram/sessions'

const SESSION = new StringSession('')
const API_ID = 00000000
const API_HASH = '111eb4dc492d4ae475d575c00bf0aa11'

interface IInitialState {
  phoneNumber: string
  password: string
  code: string
}

interface IApplicationData {
  session: StringSession
  apiId: number
  apiHash: string
}

function createClient ({ session, apiId, apiHash }: IApplicationData): TelegramClient {
  return new TelegramClient(session, apiId, apiHash, { connectionRetries: 5 })
}

const client = createClient({ session: SESSION, apiId: API_ID, apiHash: API_HASH }) // Immediately create a client using your application data

async function startClient ({ phoneNumber, password, phoneCode }: Omit<UserAuthParams, 'onError'>): Promise<void> {
  await client.start({phoneNumber, password, phoneCode, onError: () => {} })
}

async function sendCode (phone: string): Promise<void> {
  await client.connect() // Connecting to the server
  await client.sendCode(
    {
      apiId: API_ID,
      apiHash: API_HASH
    },
    phone
  )
}

export function App (): JSX.Element {
  const initialState: IInitialState = { phoneNumber: '', password: '', code: '' }

  const [{ phoneNumber, password, code }, setAuthInfo] = useState<IInitialState>(initialState)

  function onInputChangeHandler ({ target: { name, value } }: BaseSyntheticEvent): void {
    setAuthInfo(authInfo => ({ ...authInfo, [name]: value }))
  }

  async function onSendCodeHandler (): Promise<void> {
    await sendCode(phoneNumber)
  }

  async function onStartClientHandler (): Promise<void> {
    await startClient({ phoneNumber, password: passwordCallback, phoneCode: codeCallback })
  }

  async function passwordCallback (): Promise<string> {
    return await new Promise<string>(resolve => {
      resolve(password)
    })
  }

  async function codeCallback (): Promise<string> {
    return await new Promise<string>(resolve => {
      resolve(code)
    })
  }

  return (
    <>
      <input
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={onInputChangeHandler}
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={onInputChangeHandler}
      />
      <input
        type="button"
        value="start client"
        onClick={onSendCodeHandler}
      />
      <input
        type="text"
        name="code"
        value={code}
        onChange={onInputChangeHandler}
      />
      <input
        type="button"
        value="insert code"
        onClick={onStartClientHandler}
      />
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

async function startClient (phoneNumber, password, phoneCode) {
  await client.start({ phoneNumber, password, phoneCode, onError: () => {} })
  localStorage.setItem('session', JSON.stringify(client.session.save())) // Save session to local storage
}

/*
Now we can get the saved session and run the client without re-authorization
*/

const SESSION = new StringSession(JSON.parse(localStorage.getItem('session'))) // Get session from local storage

function createClient (session, apiId, apiHash) {
  return new TelegramClient(session, apiId, apiHash, { connectionRetries: 5 } )
}

const client = createClient(SESSION, API_ID, API_HASH) // Immediately create a client using your application data
```

:::

:::tab{title="TypeScript"}

```ts
/*
After successfully launching the client, you can call a function client.session.save() that returns the current session, and then save it to  local storage, for example.
Note that we must save only session, having a valid session, you can specify random API_ID and API_HASH
*/

async function startClient ({ phoneNumber, password, phoneCode }: Omit<UserAuthParams, 'onError'>): Promise<void> {
  await client.start({ phoneNumber, password, phoneCode, onError: () => {} })
  localStorage.setItem('session', JSON.stringify(client.session.save())) // Save session to local storage
}

/*
Now we can get the saved session and run the client without re-authorization
*/

const SESSION = new StringSession(JSON.parse(localStorage.getItem('session') as string)) // Get session from local storage

function createClient ({ session, apiId, apiHash }: IApplicationData): TelegramClient {
  return new TelegramClient(session, apiId, apiHash, { connectionRetries: 5 } )
}

const client = createClient(SESSION, API_ID, API_HASH) // Immediately create a client using your application data
```

:::
::::