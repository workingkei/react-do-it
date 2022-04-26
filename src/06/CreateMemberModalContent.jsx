import React, { PureComponent } from 'react';
import { Consumer } from './ModalContext';
import Button from '../04/Button';
import Text from '../04/Text';
import Input from '../03/Input';

class CreateMemberModalContent extends PureComponent {
  render() {
    return (
      <Consumer>
        {({ closeModal }) => (
          <div>
            <div>
              <Text>회원가입</Text>
              <Input name="email" label="이메일" />
              <Input name="name" label="이름" />
              <Input name="password" label="비밀번호" />
            </div>
            <Button primary>가입하기</Button>
            <Button onPress={closeModal}>닫기</Button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default CreateMemberModalContent;
