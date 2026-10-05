const test = require('node:test');
const assert = require('node:assert');
const server = require('../index');

test('GET /health renvoie un code 200 et un JSON avec status UP', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  try {
    const res = await fetch(`http://localhost:${port}/health`);
    const data = await res.json();

    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'UP');
    assert.strictEqual(typeof data.uptime, 'number');
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
