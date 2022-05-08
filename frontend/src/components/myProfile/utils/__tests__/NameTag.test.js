import NameTag from "../NameTag";

describe('Name Tag Tests', ()=>{

    test('Test1 Name with space', ()=>{
        const courseName = 'Machine Learning'
        expect(NameTag(courseName)).toEqual('ML');
    })

    test('Test2 Name with space', ()=>{
        const courseName = 'Computer Network'
        expect(NameTag(courseName)).toEqual('CN');
    })

    test('Test3 Name without space', ()=>{
        const courseName = 'Algorithms'
        expect(NameTag(courseName)).toEqual('As');
    })

    test('Test4 Name without space', ()=>{
        const courseName = 'Java'
        expect(NameTag(courseName)).toEqual('Ja');
    })
})