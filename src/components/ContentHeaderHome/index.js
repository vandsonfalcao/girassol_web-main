import { Simular } from '../Simular'
import { Box, Container, Mensage } from './styles'

export function ContentHeaderHome() {
    return (
        <Container>
            <Mensage>
                <h1>Benefício para você e para o mundo.</h1>
            </Mensage>
            <Box>
                <Simular />
            </Box>
        </Container>
    )
}