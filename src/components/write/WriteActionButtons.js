import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyleButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancle, onPublish }) => {
  return (
    <WriteActionButtonBlock>
      <StyleButton cyan onClick={onPublish}>
        포스트 등록
      </StyleButton>
      <StyleButton onClick={onCancle}>취소</StyleButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButtons;
