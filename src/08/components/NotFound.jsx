import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Spacing from '../../doit-ui/Spacing';
import Text from '../../doit-ui/Text';

class NotFound extends PureComponent {
  render() {
    const { url } = this.props.match || {};
    return (
      <>
        <Spacing bottom={2}>
          <Text xlarge>{url} 페이지를 찾을 수 없습니다.</Text>
        </Spacing>
        <Link to="/">메인 페이지로 이동</Link>
      </>
    );
  }
}

export default NotFound;
