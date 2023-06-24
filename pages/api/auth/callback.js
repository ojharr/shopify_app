// pages/api/auth/callback.js

import fetch from 'isomorphic-unfetch';

export default async function authCallback(req, res) {
  const { shop, code, state } = req.query;
  const accessTokenUrl = `https://${shop}/admin/oauth/access_token`;
  const accessTokenPayload = {
    client_id: process.env.SHOPIFY_API_KEY,
    client_secret: process.env.SHOPIFY_API_SECRET,
    code,
  };

  const response = await fetch(accessTokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accessTokenPayload),
  });

  // Check if the response is successful
  if (!response.ok) {
    console.error('Request failed:', response.status, response.statusText);
    res.status(response.status).send(response.statusText);
    return;
  }

  // Log the response text
  const text = await response.text();

  try {
    const data = JSON.parse(text);
    const { access_token: accessToken } = data;
    console.log(accessToken);
    
    // Redirect the user to the desired page (replace with your logic)
    res.writeHead(302, { Location: '/' });
    res.end();
  } catch (error) {
    console.error('Failed to parse JSON:', text);
    res.status(500).send('Error parsing response from Shopify');
  }
}
