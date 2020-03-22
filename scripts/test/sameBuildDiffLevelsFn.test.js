const sameBuildDiffLevelsFn = require('./sameBuildDiffLevelsFn');

test('A: MSl3, B: MSl1 - 1,2,3,6,7,8,9,10,12', () => {
    expect(sameBuildDiffLevelsFn("l3","l1", "now")).toStrictEqual(["a","c","d","e"]);
});

test('A: MSl3, B: MSl41 - 1,2,4,6,7,8,9,10,12', () => {
    expect(sameBuildDiffLevelsFn("l3","l41","now")).toStrictEqual(["c","d","e"]);
});

test('A: MSl1, B: MSl3 - 1,2,4,5,6,7,9,10,11,12', () => {
    expect(sameBuildDiffLevelsFn("l1","l3")).toStrictEqual(["b","c","e","f"]);
});

test('A: MSl1, B: MSl2 - 1,2,4,6,7,9,10,12', () => {
    expect(sameBuildDiffLevelsFn("l1","l2")).toStrictEqual(["c","e"]);
});