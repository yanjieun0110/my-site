import React from 'react'
import styled from 'styled-components'

export default function Home() {

  const ImgWrap = styled.div `
    width: 600px;
    overflow: hidden;
    margin: 30px auto;

    img {
      width:100%
    }
  `


  return (
    <div>

      <ImgWrap>
        <img src={process.env.PUBLIC_URL + '/images/home_img.jpg'} alt="홈이미지" />
      </ImgWrap>
    </div>
  )
}
