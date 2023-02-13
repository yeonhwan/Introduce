import { Col, Row } from 'reactstrap';
// import { PropsWithChildren } from 'react';
// import { EmptyRowCol, HrefTargetBlank } from '../common';

// import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component() {
  return (
    <Row>
      <Col style={Style.footerCover} />
    </Row>
  );
}
