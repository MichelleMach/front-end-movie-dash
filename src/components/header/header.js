import React from 'react'
import Logo from '../../assets/logo.svg'
import * as Styled from '../../styles/components/header'

export default function Header() {

    return (
        <Styled.Header>
            <Styled.Logo src={Logo} />
            <Styled.HeaderItens>
                {/* <Styled.HeaderItem>Filmes</Styled.HeaderItem>
                <Styled.HeaderItem>Series</Styled.HeaderItem> */}
            </Styled.HeaderItens>
        </Styled.Header>
    )
}