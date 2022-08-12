import './App.css'
import { AppShell, Navbar, Header, Center, Title, Container  } from '@mantine/core';
import { FilterChooser } from './components/FilterChooser/FilterChooser';

const Brand = (title: string)=>(
  <Center>
    <Title order={2}>
      {title}
    </Title>
  </Center>);

function App() {
  const title = "PoEtent Filters";

  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{Brand(title)}</Header>}>
      <Container>
        <FilterChooser/>
      </Container>
    </AppShell>
  )
}

export default App
