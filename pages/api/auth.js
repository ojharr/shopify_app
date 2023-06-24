import url from 'url';
import querystring from 'querystring';

export default function auth(req, res) {
  const { shop } = req.query;
  const redirectUrl = `https://${shop}/admin/oauth/authorize?${querystring.stringify({
    client_id: process.env.SHOPIFY_API_KEY,
    scope: 'read_products',
    redirect_uri: 'http://localhost:3000/api/auth/callback',
    state: 'your_custom_state_value', // Generate and store a unique state value for security
})}`;

  res.redirect(redirectUrl);
}
