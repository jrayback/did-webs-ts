import { composeDid } from './composeDid.js';
import { isValidDidWebs } from '../utils/validators/isValidDidWebs.js';

describe('composeDid', () => {
  const host = 'example.com';
  const aid = 'EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2';
  const path = '/path/to/resource';
  const port = 8080;
  it('should be a function', () => {
    expect(composeDid).toBeInstanceOf(Function);
  });

  it('should take four arguments', () => {
    expect(composeDid.length).toBe(2);
  });

  it('should construct a proper did:webs string', () => {
    expect(composeDid(host, aid)).toBe(
      'did:webs:example.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
    );
    expect(
      composeDid('test.com', 'ERtiuJbg73lpE0WFD7bUBIJviAkdU5pSabMbx8RhlHE3')
    ).toBe('did:webs:test.com:ERtiuJbg73lpE0WFD7bUBIJviAkdU5pSabMbx8RhlHE3');
  });

  it('should percent encode colons indicating ports', () => {
    expect(composeDid(host, aid, '', port)).toBe(
      'did:webs:example.com%3A8080:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
    );
  });

  it('should replace slashes in paths with colons', () => {
    expect(composeDid(host, aid, path)).toBe(
      'did:webs:example.com:path:to:resource:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
    );
  });
  it('should generate valid did:webs strings', () => {
    expect(isValidDidWebs(composeDid(host, aid))).toBe(true);
  });
  it('should reject input missing host or aid', () => {
    expect(() => composeDid('', aid)).toThrow();
    expect(() => composeDid(host, '')).toThrow();
  });
});
