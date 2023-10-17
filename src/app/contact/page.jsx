'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { mq } from '../styles/mixins';
import ButtonBase from '../components/ButtonBase';
import { WhiteLinked, GitHubName, NewGitHub } from '../icons';
import { youTubeDark, youTubeSans } from '../styles/setFonts';
import { roboto } from '../layout';
import { sendEmail } from '../utils/actions';

const HeaderImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: white;
  position: relative;
  overflow: hidden;

  ${mq.largeMobile(`
    width: 120px;
    height: 120px;
  `)}

  ${mq.mobile(`
    width: 120px;
    height: 120px;
  `)}
`;

const ContactHeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  ${mq.largeMobile(`
    justify-content: center;
    margin-top: 1rem;
    width: 80%;
    `)}

  ${mq.mobile(`
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
    width: 100%;
    `)}
`;

const HeaderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;

  ${mq.largeMobile(`
    gap: 1rem;
    justify-content: center;
  `)}

  ${mq.mobile(`
    gap: 1rem;
    justify-content: center;
  `)}
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  //padding-top: 2rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0;

  ${mq.largeMobile(`
    padding-top: 1rem;
    gap: 0;

  `)}

  ${mq.mobile(`
    padding-top: 1rem;
    gap: 0;

  `)}
`;

const styles = css`
  display: inline-block;
  background-color: transparent;
  border: none;
  padding: 0 1rem 0 1rem;
  font-size: 16px;
  outline: none;
  height: 100%;
  color: white;
  width: 100%;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const InputBox = styled.div`
  display: flex;
  min-height: 2.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.15);
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  position: relative;
  width: 400px;

  ${mq.mobile(`
    max-width: 100%;
    width: 300px;
  `)}
`;

const ContactInput = styled.input`
  ${styles}
`;

const StyledTextArea = styled.textarea`
  ${styles}
  resize: none;
  padding-top: 1rem;
`;

const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  //justify-content: center;
  //align-items: center;
  margin-top: 3rem;

  ${mq.largeMobile(`
    align-items: center;
    margin-top: 0;
  `)}

  ${mq.mobile(`
    margin-top: 0;
  `)}
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  color: white;
  line-height: 1.2;

  ${mq.largeMobile(`
    font-size: 2rem;
  `)}

  ${mq.mobile(`
    font-size: 1.5rem;
  `)}
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  width: fit-content;
  cursor: pointer;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 14px;
  align-self: start;
`;

const FormHeader = styled.h2`
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.largeMobile(`
    max-width: 90%;
    padding-top: .5rem;
  `)}

  ${mq.mobile(`
    max-width: 100%;
  `)}
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  padding-left: 0.5rem;
`;

const FieldLabel = styled.label`
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 0.25rem;
  font-size: 14px;
  padding-left: 0.5rem;
`;

const ErrorBox = styled.div`
  display: flex;
  height: 14px;
`;

const fields = [
  {
    name: 'contactName',
    title: 'Contact Name',
    type: 'text',
    placeholder: 'Name',
    required: true,
    validate: (value) => {
      if (!value || !value.length) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters long';
      return true;
    },
  },
  {
    name: 'subject',
    title: 'Subject',
    type: 'text',
    placeholder: 'Subject',
  },
  {
    name: 'email',
    title: 'Email',
    type: 'email',
    placeholder: 'Email',
    required: true,
    validate: (value) => {
      if (!value || !value.length) return 'Email is required';
      const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9.-]+$/gm);
      const isValidEmail = emailRegex.test(value);
      if (isValidEmail) {
        return true;
      } else if (!isValidEmail) {
        return 'Email must be valid regex';
      }
    },
  },
  {
    name: 'message',
    title: 'Message',
    type: 'text',
    placeholder: 'Message',
    required: true,
    rows: 6,
    autoCorrect: 'on',
    isMultiLine: true,
    validate: (value) => {
      if (!value || !value.length) return 'Message is required';
      if (value.length < 2) return 'Message must be at least 2 characters long';
      return true;
    },
  },
];

const ContactPage = () => {
  const [values, setValues] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {}),
  );

  const [errors, setErrors] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {}),
  );
  const [touched, setTouched] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = false;
      return acc;
    }, {}),
  );

  const [isSending, setIsSending] = useState(false);

  const resetForm = () => {
    setValues(
      fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {}),
    );
    setErrors(
      fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {}),
    );
    setTouched(
      fields.reduce((acc, field) => {
        acc[field.name] = false;
        return acc;
      }, {}),
    );
    // any other resets
  };

  const handleInputFocus = (name) => {
    if (touched[name]) {
      return;
    } else setTouched((prevTouched) => ({ ...prevTouched, [name]: false }));
  };

  const handleInputBlur = (name) => {
    if (!values[name] || errors[name]) {
      setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    }
    //  check if name field is empty and display error
    if (name === 'contactName' && !values[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Name is required',
      }));
    }
    if (name === 'email' && !values[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Email is required',
      }));
    }
    if (name === 'message' && !values[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Message is required',
      }));
    }
  };

  const onChange = (e, validate) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    const valid = validate ? validate(e.target.value) : true;

    if (typeof valid === 'string') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: valid,
      }));
    } else if (typeof valid === 'boolean') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  // this works to connect to emailsening need to get info from form
  const onSend = async () => {
    try {
      setIsSending(true);
      // eslint-disable-next-line no-undef
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const emailContent = { ...values };
      await sendEmail(emailContent);
      console.log('email sent successfully', emailContent);
      resetForm();
      // additional actions after success sending email
    } catch (error) {
      console.log('error sending email', error);
      // handle error
    } finally {
      setIsSending(false);
    }
  };

  // gets values, form validation/ disable button if !valid, disable if sending,
  //  needs recapcha to avoid bots,

  return (
    <>
      <ContactPageWrapper>
        <ContactHeaderSection>
          <HeaderImageWrapper>
            <Image
              src="/MeContact.jpg"
              alt="picture of dev"
              fill={true}
              sizes="(max-width: 768px) 100vw, 768px"
              priority={true}
              style={{
                objectFit: 'cover',
              }}
            />
          </HeaderImageWrapper>
          <HeaderInfoWrapper>
            <HeaderTitle className={youTubeDark.className}>Jerome Nixon</HeaderTitle>
            <ButtonWrapper>
              <ButtonBase variant="plain" as={Link} href="https://linkedin.com/in/jeromenixon" passHref={true}>
                <WhiteLinked />
              </ButtonBase>
              <ButtonBase variant="plain" as={Link} href="https://github.com/Jeromemn" passHref={true}>
                <GitHubName />
                <NewGitHub color="white" size={25} />
              </ButtonBase>
            </ButtonWrapper>
            <StyledLink href="/about">More about Jerome</StyledLink>
          </HeaderInfoWrapper>
        </ContactHeaderSection>
        <FormWrapper>
          <FormHeader className={youTubeSans.className}>Get in touch</FormHeader>
          {fields.map(
            ({ name, title, type, required, placeholder, isMultiLine, autoCorrect, rows, validate, ...rest }) => {
              const Input = isMultiLine ? StyledTextArea : ContactInput;
              return (
                <InputContainer key={name}>
                  <FieldLabel>{title}</FieldLabel>
                  <InputBox>
                    <Input
                      className={roboto.className}
                      value={values[name]}
                      onChange={(e) => {
                        onChange(e, validate);
                      }}
                      name={name}
                      title={title}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      autoCorrect={autoCorrect}
                      rows={rows}
                      onFocus={() => handleInputFocus(name)}
                      onBlur={() => handleInputBlur(name)}
                      onKeyDown={(e) => {
                        if (e.key === 'Tab') {
                          handleInputBlur(name);
                        }
                      }}
                      {...rest}
                    />
                  </InputBox>
                  <ErrorBox>
                    {touched[name] && errors[name] && (
                      <ErrorMessage style={{ color: 'red' }}>{errors[name]}</ErrorMessage>
                    )}
                  </ErrorBox>
                </InputContainer>
              );
            },
          )}
          <ButtonBase
            disabled={
              isSending ||
              Object.values(errors).some((error) => !!error) ||
              Object.values(values).some((value) => !value)
            }
            onClick={onSend}
          >
            {isSending ? 'Sending...' : 'Send'}
          </ButtonBase>
        </FormWrapper>
      </ContactPageWrapper>
    </>
  );
};

export default ContactPage;
