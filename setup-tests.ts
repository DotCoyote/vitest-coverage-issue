import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';

expect.extend(matchers);

process.env.NEXT_PUBLIC_API_URL = 'https://example.com/';
process.env.UNLEASH_SERVER_API_TOKEN = 'unleash-server-api-token';
process.env.UNLEASH_SERVER_API_URL = 'https://unleash-server-api-url.test/';

vi.mock('server-only', () => ({}));

const fetchMocker = createFetchMock(vi);

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMocker.enableMocks();
