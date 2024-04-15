# Tamil Christian Songs API

This project aims to create an API for Tamil Christian songs, allowing users to access song lyrics programmatically. Contributors can help expand the song database by adding songs in accordance with the song order from a specific song books.

## Schema Explaination

### Song Schema
- `id` - Doesn't matter
- `songNo` - The song number is on the right side of each song (e.g., பா-11 or கிகீ-221); for கான்வென்ஷன், it is on the left side; and for the album songs, it has the same value as the ID field.
- `title` - song title in tanglish.
- `tamilTitle` - song title in tamil.
- `artistId` - id of the [artist](/artists.json) or null.
- `type` - "KEETHAGAL" or "PAMALAI" or "CONVENTION" or "ALBUM".
- `releaseYear` - optional(nullable).
- `categoryId` - id of the [category](/categories.json).
- `pallavi` - first stanza of the song.
- `anuPallavi` - second stanza of the song (rarely present).
- `stanzas` - remaining stanzas of the song.

>**Note:** For each stanza, stringify each stanza before putting it in the JSON object.

## Artist Schema
- `id` - Doesn't matter
- `name` - Name of the artist
- `tamilName` - Artist name in tamil
- `avatarURL` - Artist photo if avaialable else null
- `email` - null for all

## Category Schema
- `id` - Unique Identifier
- `name` - Name of the category


## How to Contribute

Contributing to this project is straightforward:

1. **Song Book**: Take a song book (கீதங்களும் கீர்த்தனைகளும், கான்வென்ஷன் கீதங்கள்) and start adding songs to the API based on the song order in the book.
2. **Add Songs**: Use the provided tools and resources to add new songs to the API.
3. **Submit Changes**: Once you've added new songs or made improvements, submit a pull request.

## Helpful Tools

To assist with contributing, utilize the following tools:

- [JSON Stringifier](https://jsonformatter.org/json-stringify-online): Use this tool to format and stringify JSON data for the API.
- [Lyrics Source](https://tamilchristiansongs.in/): Access this website to find Tamil Christian song lyrics for adding to the API.
- [Tamil Keyboard](https://www.google.com/inputtools/try/): If you need to type in Tamil, use this virtual Tamil keyboard.
- [Quick Translator](https://www.google.com/search?q=translate): Translate content if needed to ensure accuracy and consistency.