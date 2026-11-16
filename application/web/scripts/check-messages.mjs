import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createTranslator} from 'next-intl';

const locales = ['en', 'fr', 'de'];
function flatten(messages, prefix = '') {
  return Object.entries(messages).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === 'object' && value !== null
      ? flatten(value, path) : [[path, value]];
  });
}

let expectedKeys;
for (const locale of locales) {
  const messages = JSON.parse(await readFile(new URL(`../messages/${locale}.json`, import.meta.url), 'utf8'));
  const entries = flatten(messages);
  const keys = entries.map(([key]) => key).sort();
  expectedKeys ??= keys;
  assert.deepEqual(keys, expectedKeys, `${locale}: translation keys differ from English`);
  const translate = createTranslator({locale, messages, onError(error) {throw error;}});
  for (const [key, value] of entries) {
    assert.equal(typeof value, 'string', `${locale}.${key}: expected a string`);
    assert(value.trim(), `${locale}.${key}: empty translation`);
    translate(key, {page: 'Example', year: 2026, businessName: 'Example Bakery'});
  }
  console.log(`${locale}: ${keys.length} matching, nonempty, valid messages`);
}
