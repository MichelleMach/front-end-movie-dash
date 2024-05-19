import React from 'react'
import * as Styled from '../../styles/components/header'

export default function Header() {

    return (
        <Styled.Header>
            <Styled.Logo>Filme&Series</Styled.Logo>
            <Styled.HeaderItens>
                {/* <Styled.HeaderItem>Filmes</Styled.HeaderItem>
                <Styled.HeaderItem>Series</Styled.HeaderItem> */}
            </Styled.HeaderItens>
        </Styled.Header>
    )
}