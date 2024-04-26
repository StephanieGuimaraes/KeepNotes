import { Container } from './styles'

export function Tag({ title }: {title: string;}){
    return(
        <Container>
            {title}
        </Container>
    );
}