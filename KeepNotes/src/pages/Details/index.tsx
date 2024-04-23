
import { Container, Links } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';


export function Details() {
  return (
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li>
            <a href='https://github.com/StephanieGuimaraes'>Link 1</a>
          </li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Links>
      </Section>
     
      <Button title="Entrar" loading = {false}/>
    </Container>
  );
}

