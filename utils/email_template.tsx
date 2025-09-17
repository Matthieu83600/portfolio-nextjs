import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from '@react-email/components';

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Body
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f9f9f9',
          padding: '20px',
        }}
      >
        <Container
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          <Heading style={{ color: '#111' }}>Nouveau message</Heading>
          <Section>
            <Text>
              <strong>Nom :</strong> {name}
            </Text>
            <Text>
              <strong>Email :</strong> {email}
            </Text>
            <Text>
              <strong>Message :</strong>
            </Text>
            <Text style={{ whiteSpace: 'pre-wrap' }}>{message}</Text>
          </Section>
          <Text style={{ fontSize: '12px', color: '#888', marginTop: '20px' }}>
            Envoyé depuis ton portfolio
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
