import { Email, Item, A, renderEmail } from 'react-html-email';

const BasicEmail = () => (

  <Email title='link'>
    <Test> Hi </Test>
    <Item>
      <A href="#" style={{ paddingLeft: 10 }}>Hello Buddy!</A>
    </Item>
  </Email>

);
  renderEmail(<InlineLink />);
export default BasicEmail