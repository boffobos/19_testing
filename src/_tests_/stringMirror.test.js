import mirror from '../stringMirror.js';

test('function returns array with string and mirrored string', () => {
    expect(mirror('test me now')).toStrictEqual(['test me now', 'won em tset']);
});