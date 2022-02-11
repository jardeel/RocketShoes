import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #FFF;
  border-radius: 4px;

  footer {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-decoration: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }

  @media only screen and (max-width: 650px){
    footer {
      flex-direction: column-reverse;

      button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    @media(max-width: 650px){
      display: none;
    }
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;

    &:nth-child(3){
      text-align: center;
    }
  }

  tbody tr {
    border-bottom: 1px solid #eee;

    @media(max-width: 650px){
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }

  tbody td {
    padding: 12px;

    &:first-child {
      @media(max-width: 650px){
        padding-left: 0;
        padding-bottom: 0;
      }
    }

    &:nth-child(2){
      @media(max-width: 650px){
        flex: 1 1 60%;
      }
      span {
        @media(max-width: 650px){
          font-size: 14px;
          color: #666;
        }
      }
    }

    &:hover-child(3),
    &:hover-child(4),
    &:hover-child(5){
      @media(max-width: 650px){
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &:nth-child(3){
      @media(max-width: 650px){
        padding: 0;
      }
    }

    &:nth-child(4){
      @media(max-width: 650px){
        flex: 1;
        text-align: center;
        font-size: 16px;
      }
    }

    &:nth-child(5){
      @media(max-width: 650px){
        padding: 12px 0;
      }
    }
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
  }

  span {
    display: block;
    margin-top: 4px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      border: 1px solid #DDD;
      border-radius: 3px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
      
      @media(max-width: 650px){
        width: 36px;
      }
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px 8px;
    svg {
      @media(max-width: 650px){
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
