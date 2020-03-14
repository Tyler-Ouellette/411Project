//Fake Test
test('Fake Test Name', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
});

//Function Called Add
const add = (num1, num2) => {
    return num1 + num2;
};

//Unit Test of Function Add
test('add', () => {
    const value = add(10000, 20000);
    expect(value).toBe(30000);
    expect(add(123, 123)).toBe(246);
});

//Create Total Function That Uses the previously defined add function
const total = (Subtotal, Tax) => {
    return '$' + add(Subtotal, Tax);
};

//Integration Test
// This is Intentionally wrong, this is to display how errors can easily arise. We expect that the total displays the .30 with 2 decimals as passed in, however it only displays 1 which is an error.
test('brokenTotal', () => {
    expect(total(10, 1.3)).toBe('$11.3');
});

//Create Total Function That Uses the previously defined add function
const workingTotal = (Subtotal, TaxAmount) => {
    return '$' + add(Subtotal, TaxAmount).toFixed(2);
};

test('workingTotal', () => {
    expect(workingTotal(10, 1.3)).toBe('$11.30');
});

//This Concept Applies to Strings, Bool, Components, Routes, API, ETC
const PrintName = () => {
    return 'Tyler Ouellette';
};
test('printName', () => {
    expect(PrintName()).toBe('Tyler Ouellette');
});
