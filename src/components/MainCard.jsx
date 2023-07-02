import { styled } from "styled-components";
import {
  COLORS,
  calcAgeByBirth,
  testCombination,
  testDay,
  testMonth,
  testYear,
} from "../utils/util";
import AgeBoard from "./AgeBoard";
import { useState } from "react";
import btnIcon from "../assets/images/icon-arrow.svg";

export default function MainCard() {
  const [valid, setValid] = useState({
    day: { valid: true, message: "" },
    month: { valid: true, message: "" },
    year: { valid: true, message: "" },
  });
  const [birth, setBirth] = useState({ day: "", month: "", year: "" });
  const [age, setAge] = useState({ day: null, month: null, year: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if date is valid
    if (!testDay(birth.day)) {
      setValid((cur) => ({
        ...cur,
        day: { valid: false, message: "Must be a valid day" },
      }));
    }

    if (!testMonth(birth.month)) {
      setValid((cur) => ({
        ...cur,
        month: { valid: false, message: "Must be a valid month" },
      }));
    }

    if (!testYear(birth.year)) {
      setValid((cur) => ({
        ...cur,
        year: { valid: false, message: "Must be a valid year" },
      }));
    }

    // check if date is empty
    if (!birth.day) {
      setValid((cur) => ({
        ...cur,
        day: { valid: false, message: "This field is required" },
      }));
    }

    if (!birth.month) {
      setValid((cur) => ({
        ...cur,
        month: { valid: false, message: "This field is required" },
      }));
    }

    if (!birth.year) {
      setValid((cur) => ({
        ...cur,
        year: { valid: false, message: "This field is required" },
      }));
    }

    if (!testCombination(birth)) {
      setValid((cur) => ({
        ...cur,
        day: { valid: false, message: "Must be a valid date" },
      }));
    }

    if (
      !testMonth(birth.month) ||
      !testDay(birth.day) ||
      !testYear(birth.year) ||
      !birth.day ||
      !birth.month ||
      !birth.year ||
      !testCombination(birth)
    ) {
      return;
    }
    //   set all to valid if pass all test
    setValid((cur) => ({
      ...cur,
      day: { valid: true, message: "" },
      month: { valid: true, message: "" },
      year: { valid: true, message: "" },
    }));
    // set Age based on valid input:
    const userAge = calcAgeByBirth(birth);
    setAge(userAge);
  };

  return (
    <Wrapper>
      <UserForm onSubmit={handleSubmit}>
        <BirthWrapper>
          <Input valid={valid.day.valid}>
            <label htmlFor="day">day</label>
            <input
              type="text"
              id="day"
              name="day"
              placeholder="DD"
              value={birth.day}
              onChange={(e) => {
                const isValid = /^\d{0,2}$/.test(e.target.value);
                if (!isValid) {
                  return;
                }
                setBirth((cur) => ({ ...cur, day: e.target.value }));
              }}
            />
            {!valid.day.valid && <p>{valid.day.message}</p>}
          </Input>
          <Input valid={valid.month.valid}>
            <label htmlFor="month">month</label>
            <input
              type="text"
              id="month"
              name="month"
              placeholder="MM"
              value={birth.month}
              onChange={(e) => {
                const isValid = /^\d{0,2}$/.test(e.target.value.trim());
                if (!isValid) {
                  return;
                }
                setBirth((cur) => ({ ...cur, month: e.target.value }));
              }}
            />
            {!valid.month.valid && <p>{valid.month.message}</p>}
          </Input>
          <Input valid={valid.year.valid}>
            <label htmlFor="year">year</label>
            <input
              type="text"
              id="year"
              name="year"
              placeholder="YYYY"
              value={birth.year}
              onChange={(e) => {
                const isValid = /^\d{0,4}$/.test(e.target.value.trim());
                if (!isValid) {
                  return;
                }
                setBirth((cur) => ({ ...cur, year: e.target.value }));
              }}
            />
            {!valid.year.valid && <p>{valid.year.message}</p>}
          </Input>
        </BirthWrapper>
        <Button>
          <img src={btnIcon} alt="an arrow pointing down" />
        </Button>
      </UserForm>
      <AgeBoard age={age} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 840px;
  height: 651px;
  background: ${COLORS.white};
  border-radius: 24px 24px 200px 24px;
  overflow: hidden;
  padding: 56px;

  @media (max-width: 850px) {
    width: 100%;
    height: 486px;
    padding: 48px 24px;
    border-radius: 24px 24px 100px 24px;
  }
`;

const UserForm = styled.form`
  position: relative;
  border-bottom: 1px solid ${COLORS.lightGrey};
  padding-bottom: 48px;
`;
const BirthWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 32px;
`;
const Input = styled.div`
  min-width: 0;
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(p) => (p.valid ? COLORS.smokeyGrey : COLORS.lightRed)};
    text-transform: uppercase;
  }

  input {
    font-size: 2rem;
    letter-spacing: 1%;
    font-weight: 700;
    padding: 12px 24px;
    border: 1px solid ${(p) => (p.valid ? COLORS.lightGrey : COLORS.lightRed)};
    border-radius: 8px;
  }

  p {
    color: ${COLORS.lightRed};
    font-size: 0.875rem;
    font-weight: 400;
    font-style: italic;
  }

  @media (max-width: 850px) {
    width: 88px;
    input {
      font-size: 1.25rem;
      padding: 12px 16px;
    }
  }
`;
const Button = styled.button`
  background: ${COLORS.purple};
  height: 96px;
  width: 96px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(50%);

  &:hover {
    background: ${COLORS.offBlack};
  }

  @media (max-width: 850px) {
    height: 64px;
    width: 64px;
    left: 0;
    margin: auto;
  }
`;
