function sum(a,b) {
    return a+b;
}

test("testing sample a sum", ()=>{
    expect(sum(2,2)).toBe(4);
}); 