import { Form } from "@unform/web";
import { useRef } from "react";

import Input from "../Input";
import { Container, ContainerButton } from "./styles";

export function Simular() {

    const inputRef = useRef(null);
    return (
        <Container>
            <div>
                <div>
                    <strong>
                        Vamos simular o quanto você poderá economizar?
                    </strong>
                    <Form ref={inputRef}>
                        <div>
                            <h3>
                                Seu endereço
                                <Input
                                    name="email"
                                    placeholder="Av. Ipiranga, 1000 CEP 00000-000"
                                />
                            </h3>
                        </div>
                        <div>
                            <h3>
                                Média mensal da conta de energia
                                <Input name="email" placeholder="R$ 100,00" />
                            </h3>
                        </div>
                        <ContainerButton>
                            <button>Pesquisar</button>
                        </ContainerButton>
                    </Form>
                </div>
            </div>
        </Container>
    )
}