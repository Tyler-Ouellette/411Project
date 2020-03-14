//This is a file that will store the fake functions we are mocking, to be imported into sample test to display the mock function power

//This is creating a fake function
const fake = jest.fn();

//This is used to represent when you don't have access to the actual function. This can be replicated as the response of an API. This works with a consistent response where you KNOW the return value of the API is guaranteed the same. You can then implement as if you do hit that API without actually hitting it. Can also be applied to Databases for ID's and etc.

//We don't know what the function does, but we know it gives us 3 as a response every time
const sub = jest.fn(() => 3);

test('add', () => {
    expect(sub(5, 2)).toBe(3);
    expect(sub).toHaveBeenCalledTimes(1);

    expect(sub(5, 2)).toBe(3);
    //This will Cause error as it has now been called twice not once and will fail
    // expect(sub).toHaveBeenCalledTimes(1);

    //You can Also Expect a Function to be called with certain parameters (can be components as well)
    expect(sub).toHaveBeenCalledWith(5, 2);

    //This will cause the test to fail as we call with wrong Params
    // expect(sub).toHaveBeenCalledWith(4, 2);
});

//MOCKING MODULES
jest.mock('./fake');
import { mockingModules } from '../../fake';

test('Mocking Modules', () => {
    expect(mockingModules('Tyler')).toBe('I am Tyler and I am learning JEST');
});
