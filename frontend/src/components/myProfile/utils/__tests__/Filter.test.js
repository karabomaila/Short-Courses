import FilterComments from "../FilterComments";
import FilterCourses from "../FilterCourses";

describe('Test Filter Comments', ()=>{
    const data = [
        {id: '2381410', comms: ['ML+2022ml+Comment1', 'AA+2022aa+Comment2', 'MC+2022mc+Comment3']},
        {id: '2100001', comms: ['MT+2022mt+Comment4']},
        {id: '2210000', comms: ['CGV+2022cv+Comment5', 'FLA+2022fa+Comment6']},
        {id: 'a0074560', comms: []}
    ]

    test('Comments Test1 - In Dataset', ()=>{
        const id = '2381410';
        const outcome = [{courseName:'ML' , courseID:'2022ml', content:'Comment1'}, 
        {courseName:'AA' , courseID:'2022aa', content:'Comment2'}, 
        {courseName:'MC' , courseID:'2022mc', content:'Comment3'}];

        const filter = new FilterComments(data, id);
        expect(filter.getMyComments()).toEqual(outcome);
    })

    test('Comments Test2 - In Dataset', ()=>{
        const id = '2100001';
        const outcome = [{courseName:'MT' , courseID:'2022mt', content:'Comment4'}];

        const filter = new FilterComments(data, id);
        expect(filter.getMyComments()).toEqual(outcome);
    })

    test('Comments Test3 - In Dataset', ()=>{
        const id = '2210000';
        const outcome = [{courseName:'CGV' , courseID:'2022cv', content:'Comment5'},
                        {courseName:'FLA' , courseID:'2022fa', content:'Comment6'}];

        const filter = new FilterComments(data, id);
        expect(filter.getMyComments()).toEqual(outcome);
    })

    test('Comments Test4 - Username not on the list', ()=>{
        const id = '123456';
        const outcome = [];
        const filter = new FilterComments(data, id);
        expect(filter.getMyComments()).toEqual(outcome);
    })

    test('Comments Test5 - Username not on the list', ()=>{
        const id = '1976467';
        const outcome = new Array();
        const filter = new FilterComments(data, id);
        expect(filter.getMyComments()).toEqual(outcome);
    })

    test('Comments Test6 - No comments but present in dataset', ()=>{
        const id = 'a0074560';
        const outcome = [];
        const filter = new FilterComments(data, id);
        expect(filter.getMyComments()).toEqual(outcome);
    })
})

describe('Test Filter Courses', ()=>{

    const data = [
        {id: '2381410', courses: ['ML+2022ml', 'CGV+2022cv', 'OOP+2022op', 'MC+2022mc']},
        {id: '2300002', courses: ['CGV+2022cv', 'DB+2022db', 'TM+2022tm']},
        {id: '2281410', courses: ['AA+2022aa']},
        {id: '2181410', courses: []},
        {id: '2081410', courses: ['ML+2022ml', 'CGV+2022cv']}
    ]

    const filter = new FilterCourses();

    test('Courses Test1 - In Dataset', ()=>{
        const id = '2381410';
        const outcome = [{courseName:'ML' , courseID:'2022ml'},
                        {courseName:'CGV' , courseID:'2022cv'},
                        {courseName:'OOP' , courseID:'2022op'},
                        {courseName:'MC' , courseID:'2022mc'}];

        filter.Filter(data, id);
        expect(filter.getMyCourses()).toEqual(outcome);
    })


    test('Courses Test2 - In Dataset', ()=>{
        const id = '2300002';
        const outcome = [{courseName:'CGV' , courseID:'2022cv'},
                        {courseName:'DB' , courseID:'2022db'},
                        {courseName:'TM' , courseID:'2022tm'}];

        filter.Filter(data, id);
        expect(filter.getMyCourses()).toEqual(outcome);
    })

    test('Courses Test3 - In Dataset', ()=>{
        const id = '2281410';
        const outcome = [{courseName:'AA' , courseID:'2022aa'}];

        filter.Filter(data, id);
        expect(filter.getMyCourses()).toEqual(outcome);
    })

     test('Courses Test4 - In Dataset', ()=>{
        const id = '2081410';
        const outcome = [{courseName:'ML' , courseID:'2022ml'},
                        {courseName:'CGV' , courseID:'2022cv'}];

        filter.Filter(data, id);
        expect(filter.getMyCourses()).toEqual(outcome);
    })

    test('Courses Test5 - Not Found', ()=>{
        const id = 'a0074560';
        const outcome = []

        filter.Filter(data, id);
        expect(filter.getMyCourses()).toEqual(outcome);
    })

    test('Courses Test6 - Empty Data', ()=>{
        const id = '2181410';
        const outcome = []

        filter.Filter(data, id);
        expect(filter.getMyCourses()).toEqual(outcome);
    })
})
