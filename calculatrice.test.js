
const calculer = require("./calculatrice")

//test addition
test('should gives 3 for 1 + 2 ', () => {
    expect(calculer(1,"+",2)).toBe(3)
})
test('should gives null + , +,  3 ', () => {
    expect(calculer("+","+",3)).toBe(null)
})
test('should gives null A , +,  3 ', () => {
    expect(calculer("A","+",3)).toBe(null)
})
test('should gives null 1 , A,  3 ', () => {
    expect(calculer("1","A",3)).toBe(null)
})
test('should gives null A , +,  3 ', () => {
    expect(calculer("1","+","3")).toBe(null)
})
test('should gives -6 for -4 +  -2 ', () => {
    expect(calculer(-4,"+",-2)).toBe(-6)
})

test('should gives null for ', () => {
    expect(calculer()).toBe(null)
})
test('should gives 5,5 for 2.25 + 3.25 ', () => {
    expect(calculer(2.25,"+",3.25)).toBe(5.5)
})




//test soustraction

test('should gives 2 for  4  -  2 ', () => {
    expect(calculer(4,"-",2,)).toBe(2)
})
test('should gives null for A  -  2 ', () => {
    expect(calculer("A","-",2,)).toBe(null)
})
test('should gives null for  4  A  2 ', () => {
    expect(calculer(4,"A",2,)).toBe(null)
})
test('should gives null for 4  -  A ', () => {
    expect(calculer(4,"-","A",)).toBe(null)
})

//test multiplication
test('should give 4 for  2  *  2', () => {
    expect(calculer(2,"*",2)).toBe(4)
})
test('should give null for  A  *  2', () => {
    expect(calculer("A","*",2)).toBe(null)
})
test('should give null for  2  A  2', () => {
    expect(calculer(2,"A",2)).toBe(null)
})
test('should give null for  2  *  A', () => {
    expect(calculer(2,"*","A")).toBe(null)
})

//test division
test('should gives 3 for  10  /  3 ', () => {
    expect(calculer(10,"/",3)).toBe(3)
})
test('should gives null for 10  /  0 ', () => {
    expect(calculer(10,"/",0)).toBe(null)
})

test('should gives null for A  /  0 ', () => {
    expect(calculer("A","/",0)).toBe(null)
})

test('should gives null for 10  A  0 ', () => {
    expect(calculer(10,"A",0)).toBe(null)
})

test('should gives null for 10  /  A ', () => {
    expect(calculer(10,"/","A")).toBe(null)
})