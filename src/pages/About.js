import React from 'react'
import styled from 'styled-components'

export default function About() {


  const AboutImg = styled.div `
    width: 600px;
    overflow: hidden;
    margin: 30px auto;

    img {
      width:100%;
    }
  `

  const Title = styled.p `
    font-size: 30px;
    font-weight:bold;
    margin-bottom: 20px;
  `

  const Txt = styled.p `
    width: 600px;
    margin: 0 auto;
    text-align : left;
    margin-bottom:${(props)=>(props.mb || '10px')};
  `

  return (
    <div>
      <AboutImg>
        <img src={process.env.PUBLIC_URL + '/images/about_img.jpg'} alt='어바웃 이미지' />
      </AboutImg>

      <Title>세계적인 권위의 패션 전문 미디어, 보그</Title>

      <Txt>‘유행’이란 뜻을 지닌 (보그)는 1892년 미국 뉴욕에서 당시 상류사회 여자들을 위한 발행물로 시작되었습니다. 130여 년의 전통을 지닌 보그는 ‘하이패션의 바이블’, ‘세계에서 가장 유명한 패션 잡지’ 등 패션 미디어의 권위와 대표성을 견고하게 쌓아왔습니다. 전 세계 28개 마켓에서 발행되는 (보그)는 세계적으로 권위 있는 패션 전문 미디어입니다.</Txt>

      <Txt mb='30px'>1996년에 창간된 (보그 코리아)는 글로벌 보그의 위상과 궤를 같이하며, 가장 영향력 있는 패션 매거진으로서 독보적인 리더십을 이어가고 있습니다. 프린트 매거진뿐 아니라 웹, 모바일, 소셜 미디어 등 디지털 플랫폼에서도 시대의 흐름에 맞는 콘텐츠 기획과 접근으로 새로운 세대를 지속적으로 사로잡으며 강력한 하나의 브랜드로 존재감을 발휘하고 있습니다.</Txt>

    </div>
  )
}
