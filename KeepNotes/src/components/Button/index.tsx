import { Container } from './styles';

export function Button({ title, loading }: { title: string; loading: boolean }){
    return(
        <Container type="button"
            disabled={loading}
            >
                {loading ? 'Carregando..' : title}
        </Container>
    );
}