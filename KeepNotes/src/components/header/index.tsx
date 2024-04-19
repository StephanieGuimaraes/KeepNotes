import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

export function Header(){
    return (
        <Container>
            <Profile>
                <img 
                    src="https://github.com/StephanieGuimaraes.png"
                    alt="Foto de usuário"
                />
                <div>
                    <span>Bem vindo</span>
                    <strong>Stephanie Guimaraes</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}