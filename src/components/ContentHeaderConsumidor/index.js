import casaImg from "../../assets/casa.png";

import { Simular } from '../Simular'
import { Box, Container, Mensage } from './styles'

export function ContentHeaderConsumidor() {
    return (
        <Container>
            <Box>
                <Simular />
            </Box>
            <Mensage>
                <img src={casaImg} alt="BigCo Inc. logo" />
            </Mensage>
        </Container>
    )
}