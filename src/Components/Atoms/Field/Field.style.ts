import styled from 'styled-components'

export const FieldWrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
  gap: 4px;

  position: relative;

  width: 100%;

  > input {
    height: 32px;

    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--formFieldBorder);

    font-size: 16px;
    color: var(--formTextColor);

    transition: background-color 0.3s, border-color 0.3s;

    &:focus {
      background-color: var(--formFocusBackgroundColor);
    }

    &:-webkit-autofill,
    &:autofill {
      background: none;
    }
  }
`

export const Label = styled.label`
  display: flex;
  place-items: center;
  gap: 4px;

  font-size: 12px;
  line-height: 1.4;
  color: var(--formTextColor);

  transition: color 0.3s;
`
