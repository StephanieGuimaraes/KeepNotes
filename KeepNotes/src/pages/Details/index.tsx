
import { Container, Links } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';


export function Details() {
  return (
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li>
            <a href='https://github.com/StephanieGuimaraes'>Link 1</a>
          </li>
          <li>
            <a href='https://github.com/StephanieGuimaraes'>Link 2</a>
          </li>
          <li>
            <a href='#'>Item 3</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
          <Tag title="Express"/>
      </Section>
     
      <Button title="Entrar" loading = {false}/>
    </Container>
  );
}

