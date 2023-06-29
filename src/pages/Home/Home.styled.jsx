import { FileAddTwoTone, PhoneTwoTone, IdcardTwoTone } from "@ant-design/icons";
import styled from "styled-components";

export const Wraper = styled.div`
  padding: 30px 0;
  display: flex;
  gap: 50px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 70px;
  }
`;

export const AddIcon = styled(FileAddTwoTone)`
  svg {
    width: 70px;
    display: block;
    height: 150px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 100px;
      height: 200px;
    }
  }
`;
export const PhoneIcon = styled(PhoneTwoTone)`
  svg {
    width: 70px;
    display: block;
    height: 150px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 100px;
      height: 200px;
    }
  }
`;

export const CardIcon = styled(IdcardTwoTone)`
  svg {
    width: 70px;
    display: block;
    height: 150px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
      width: 100px;
      height: 200px;
    }
  }
`;
