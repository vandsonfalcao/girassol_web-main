
import { ContentHeader } from '../../components/ContentHeader'
import { NavDesktop } from '../../components/NavDesktop'
import { NavMobile } from '../../components/NavMobile'
import { Container } from './styles'

export function Home2() {
    return (
        <Container>
            <header>
                <div>
                    <div>
                        <div className="navDesktop"><NavDesktop /></div>
                        <div className="navMobile"><NavMobile /></div>
                    </div>
                    <ContentHeader />
                </div>
            </header>
            <main></main>
            <footer></footer>
        </Container>
    )
}