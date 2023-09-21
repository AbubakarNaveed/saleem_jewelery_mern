import styled from 'styled-components'

export const Product_Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Product_wrapper = styled.div`
  padding-top: 280px;
  padding-bottom: 180px;
  display: flex;
  justify-content: space-between;
  height: 100% !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Product_heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 800;
  color: black;
  margin-bottom: 100px;
  margin-top: -100px;
  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
`

export const List_wrapper = styled.div`
  width: 100%;
  padding: 0 50px 0 50px;
`

export const Product_Card = styled.div`
  padding: 20px 0 20px 0;
  display: flex;
  border: 2px solid gray;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
`
