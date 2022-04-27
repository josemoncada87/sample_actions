function sum(a,b) {
    return a+b;
}

test("testing sample a sum", ()=>{
    expect(sum(2,2)).toBe(4);    
}); 


describe("add integers",()=>{
    test("2 positive integers",()=>{
        expect(sum(5,32)).toBe(37);
    });
    test("2 negative integers",()=>{
        expect(sum(-5,-8)).toBe(-13);
    });
    test("1 positive and 1 negative integer",()=>{
        expect(sum(10,-5)).toBe(5);
    });    
});