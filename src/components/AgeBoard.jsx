import { styled } from "styled-components";
import { COLORS } from "../utils/util";

export default function AgeBoard({
  // eslint-disable-next-line react/prop-types
  age = { years: null, months: null, days: null },
}) {
  return (
    <Wrapper>
      <DateWrapper>
        <span>{age.years ?? "--"}</span> years
      </DateWrapper>
      <DateWrapper>
        <span>{age.months ?? "--"}</span> months
      </DateWrapper>
      <DateWrapper>
        <span>{age.days ?? "--"}</span> days
      </DateWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${COLORS.offBlack};
  font-size: 6.5rem;
  font-weight: 800;
  font-style: italic;
  line-height: 110%;
  letter-spacing: -2%;
  margin-top: 36px;
  @media (max-width: 850px) {
    font-size: 3.5rem;
    margin-top: 48px;
    line-height: 130%;
  }
`;
const DateWrapper = styled.p`
  span {
    color: ${COLORS.purple};
  }
`;
