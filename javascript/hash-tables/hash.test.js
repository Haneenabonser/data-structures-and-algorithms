const HashMap = require('./index').HashMap;



describe ('HashMap Tests', () => {
  const hashmap = new HashMap(2000);

  test('add', () => {

    hashmap.add('Real', 'Madrid');
    hashmap.add('Bayern', 'Munich');
    hashmap.add('Leo', 'Messi');

    expect(hashmap.contains('hello')).toEqual(false);
    expect(hashmap.contains('Leo')).toEqual(true);

  })
  it('retrieve based on a key returns the value stored', () => {
    expect(hashmap.get('Real')).toEqual(['Madrid'])
  })
  test('hash a key to an in-range value', () => {
    expect(hashmap.hash('haneen')).toBe(1837)
  })
  it('returns null for a key that does not exist in the HashMap', () => {
    expect(hashmap.get('hello')).toBe(null)
  })
  test('retrieve a value from a bucket within the HashMap that has a collision', () => {
    hashmap.add('leo', 'messi')
    expect(hashmap.get('leo')).toEqual(["messi"])
  })
})