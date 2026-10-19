const express = require('express');
const path = require('path');

// Ensure environment variables are loaded
try {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
} catch (e) {
  // Ignore if dotenv is already handled
}

module.exports = function (app) {
  // Support JSON bodies for API calls
  app.use(express.json());

  // Local development route for /api/send-email
  app.post('/api/send-email', async (req, res) => {
    try {
      const sendEmailModule = require('../api/send-email');
      const handler = sendEmailModule.default || sendEmailModule;
      await handler(req, res);
    } catch (error) {
      console.error('Local dev /api/send-email error:', error);
      res.status(500).json({ error: 'Failed to send email locally', details: error.message });
    }
  });
};
