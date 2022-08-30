import { postDoor } from '@/libs/api'
import { Button, Container, Stack, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
    name: string
}

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const door = await postDoor(data)
  }

  return (
    <>
      <Head>
        <title>Home | OpenSesame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <TextField required label="Name" {...register('name')} />
          <Button color="primary" variant="contained" size="large" onClick={handleSubmit(onSubmit)}>
            Register
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default Home
