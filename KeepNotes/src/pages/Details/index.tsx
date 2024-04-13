
import { Container } from './styles';
import { Button } from '../../components/Button';

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Stephanie Guimarães</span>
      <Button title="Entrar" loading = {false}/>
     
    </Container>
  );
}

