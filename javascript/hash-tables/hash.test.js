const HashMap = require('./index').HashMap;
const repeatedWord = require('./index').repeatedWord;



describe('HashMap Tests', () => {
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
});

// code challenge 31
describe('Repeated Words Test', () => {
  
  const paragraph1 = '';
  const paragraph2 = 'Once upon a time, there was a brave princess who...';
  const paragraph3 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
  const paragraph4 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
  const paragraph5 = 'Hello from Haneen';

  it('Empty paragraph', () => {
    expect(repeatedWord(paragraph1)).toBe('Empty paragraph!');
  })
  it('happy path', () => {
    expect(repeatedWord(paragraph2)).toBe('a');
    expect(repeatedWord(paragraph3)).toBe('it');
    expect(repeatedWord(paragraph4)).toBe('summer');

  })
  it('No duplicates', () => {
    expect(repeatedWord(paragraph5)).toBe('The paragraph has no repeated words!');
  })
});