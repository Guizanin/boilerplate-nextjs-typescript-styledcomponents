import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 6rem;
`;
const Container = styled.div`
  text-align: center;
`;
export default function About() {
  return (
    <>
      <Head>
        <title>title browser</title>
      </Head>
      <Container>
        <Title>Hello About page</Title>
      </Container>
    </>
  );
}