const mainDirectionsFn = require('./mainDirectionsFn');

test('case 1', () => {
    expect(mainDirectionsFn(['graphN4l1', "n4", "l1", "N4-01c-10"],["graphN4l1", "n4", "l1", "N4-01c-09b"])).toBe("case 1");});

test('case 2', () => {
    expect(mainDirectionsFn(['graphN4l1', "n4", "l1", "N4-01c-10"],["graphN4l2", "n4", "l2", "N4-02a-01"])).toBe("case 2");});

test('case 3', () => {
    expect(mainDirectionsFn(['graphMSl1', "ms", "l1", "NS3-01-10"],["graphN4l1", "n4", "l1", "N4-01c-09b"])).toBe("case 3");});

test('case 4', () => {
    expect(mainDirectionsFn(['graphMSl2', "ms", "l2", "NS3-02-20"],["graphN4l1", "n4", "l1", "N4-01c-09b"])).toBe("case 4");});

test('case 5', () => {
    expect(mainDirectionsFn(['graphMSl2', "ms", "l2", "NS3-02-20"],["graphN3b4", "n3", "b4", "N3-B4a-01"])).toBe("case 5");});

test('case 6', () => {
    expect(mainDirectionsFn(['graphMSl3', "ms", "l3", "NS3-03-03"],["graphN3b4", "n3", "b4", "N3-B4a-01"])).toBe("case 6");});

test('case 7', () => {
    expect(mainDirectionsFn(['graphN4l1', "n4", "l1", "N4-01c-10"],['graphMSl1', "ms", "l1", "NS3-01-10"])).toBe("case 7");});

test('case 8', () => {
    expect(mainDirectionsFn(['graphN4l2', "n4", "l2", "N4-02a-10"],['graphMSl3', "ms", "l3", "NS3-03-03"])).toBe("case 8");});

test('case 9', () => {
    expect(mainDirectionsFn(['graphN4b4', "n4", "b4", "N4-B4a-06"],['graphMSl1', "ms", "l1", "NS3-01-10"])).toBe("case 9");});

test('case 10', () => {
    expect(mainDirectionsFn(['graphN4b4', "n4", "b4", "N4-B4a-06"],['graphMSl3', "ms", "l3", "NS3-03-03"])).toBe("case 10");});

test('case 11', () => {
    expect(mainDirectionsFn(['graphN4l1', "n4", "l1", "N4-01c-10"],["graphN2l1", "n2", "l1", "N2-01a-01"])).toBe("case 11");});

test('case 12', () => {
    expect(mainDirectionsFn(['graphN4l2', "n4", "l2", "N4-02c-118"],["graphN2l1", "n2", "l1", "N2-01a-01"])).toBe("case 12");});

test('case 13', () => {
    expect(mainDirectionsFn(['graphN4l1', "n4", "l1", "N4-01c-10"],["graphN2b3", "n2", "b3", "N2-B3a-01"])).toBe("case 13");});

test('case 14', () => {
    expect(mainDirectionsFn(["graphN2b3", "n2", "b3", "N2-B3a-01"],["graphN4l1", "n4", "l1", "N4-01c-09b"])).toBe("case 14");});

test('case 15', () => {
    expect(mainDirectionsFn(["graphN2b3", "n2", "b3", "N2-B3a-01"],["graphN3b4", "n3", "b4", "N3-B4a-01"])).toBe("case 15");});