const searchFn = require('./searchFn');

test('Name and ID', () => {
    expect(searchFn("Global Lounge @ NS3-01-06")).toStrictEqual([[[1355,3965],[1355,3904],[1018,3859],[718,3732],[1065,3183],[1421,3184],[1421,3296],[1595,3298],[1595,3511],[1695,3513],[1695,3965]]]);
});

test('Name only', () => {
    expect(searchFn("Global Lounge")).toStrictEqual([[[1355,3965],[1355,3904],[1018,3859],[718,3732],[1065,3183],[1421,3184],[1421,3296],[1595,3298],[1595,3511],[1695,3513],[1695,3965]]]);
});

test('Name only, non caps', () => {
    expect(searchFn("global lounge")).toStrictEqual([[[1355,3965],[1355,3904],[1018,3859],[718,3732],[1065,3183],[1421,3184],[1421,3296],[1595,3298],[1595,3511],[1695,3513],[1695,3965]]]);
});

test('ID only', () => {
    expect(searchFn("NS3-01-06")).toStrictEqual([[[1355,3965],[1355,3904],[1018,3859],[718,3732],[1065,3183],[1421,3184],[1421,3296],[1595,3298],[1595,3511],[1695,3513],[1695,3965]]]);
});

test('Incorrect Name', () => {
    expect(searchFn("Glob")).toBe("Warning");
});

test('Incorrect ID', () => {
    expect(searchFn("NS3-01-0")).toBe("Warning");
});