import React from 'react'
import styled, {keyframes} from 'styled-components';

export default function Trends() {


  const TrendsImg = styled.div`
    width: 600px;
    overflow: hidden;
    margin: 30px auto 40px;

    img {
      width:100%;
    }
  `

  const TrendsTitle = styled.p `
    font-size: ${props => props.size || '28px'};
    margin-bottom: 20px;
    font-weight:bold;
  `

  const TrendsTxt = styled.p `
    width: 600px;
    margin: 0 auto;
    text-align: left;
    margin-bottom: ${props => props.mb || '10px'};
  `




  return (
    <div>
      <TrendsImg>
        <img src={process.env.PUBLIC_URL + '/images/trends_img.jpg'} alt='트렌드 이미지' />
      </TrendsImg>

      <TrendsTitle>클라우드 댄서(Cloud Dancer)</TrendsTitle>
      <TrendsTitle size="20px">팬톤이 선정한 2026 올해의 컬러, 클라우드 댄서</TrendsTitle>

      <TrendsTxt>2025년이 우아한 모카무스로 물들었다면, 2026년은 보다 차분한 화이트 톤으로 뒤덮일 것으로 예상됩니다.</TrendsTxt>
      <TrendsTxt mb='30px'>색채 연구소 팬톤(Pantone)은 1999년부터 매년 ‘올해의 컬러(Color of The Year)’를 선정해왔습니다. 매년 사회·문화·인테리어·패션 등 다양한 분야의 메가 트렌드를 분석해 한 해의 문화를 대표할 색을 정하죠. 많은 일이 있었던 2025년을 지나, 팬톤이 선정한 2026 올해의 컬러는 구름을 닮은 화이트 계열의 색 ‘클라우드 댄서(Cloud Dancer)’입니다.</TrendsTxt>


      <img src={process.env.PUBLIC_URL + '/images/trends01'} alt='트랜드01' />
      <img src={process.env.PUBLIC_URL + '/images/trends02'} alt='트랜드02' />
      <img src={process.env.PUBLIC_URL + '/images/trends03'} alt='트랜드03' />
      <img src={process.env.PUBLIC_URL + '/images/trends04'} alt='트랜드04' />
      <img src={process.env.PUBLIC_URL + '/images/trends05'} alt='트랜드05' />
      <img src={process.env.PUBLIC_URL + '/images/trends06'} alt='트랜드06' />
      
    </div>

  )
}
