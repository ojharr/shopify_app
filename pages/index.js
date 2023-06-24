import { Page, Card } from '@shopify/polaris';

export default function HomePage() {
  return (
    <Page title="Home">
      <Card title="Welcome" sectioned>
        <p>Welcome to your Shopify app!</p>
      </Card>
    </Page>
  );
}