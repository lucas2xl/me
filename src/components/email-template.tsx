import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export default function Email({ name, email, message }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{name} contacted you</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={text}>User: {name}</Text>
            <Text style={text}>Email: {email}</Text>
            <Text style={text}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};
