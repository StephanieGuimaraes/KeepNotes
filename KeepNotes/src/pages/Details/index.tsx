
import { Container, Links, Content } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';


export function Details() {
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title="excluir nota"/>
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quae alias dolorem delectus eligendi, dolores iure amet 
            iste asperiores maiores explicabo quidem numquam quod 
            quos fuga, obcaecati veniam sint unde ab!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quae alias dolorem delectus eligendi, dolores iure amet 
            iste asperiores maiores explicabo quidem numquam quod 
            quos fuga, obcaecati veniam sint unde ab!
          </p>
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
      </Content>
      </main>
    </Container>
  );
}

