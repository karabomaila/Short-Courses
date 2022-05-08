import GetInfo from '../GetInfo';

describe('Test Get Info', ()=>{

    const data = [
        {courseID: '2022ml', description: 'ML Course', 
        content: [{outcomes: ['Out1', 'Out2', 'Out3'], slides:[{duration: 2}, {duration: 5}]}, 
        {outcomes: ['Out4', 'Out5', 'Out6'], slides:[{duration: 10}, {duration: 22}]}]},

        {courseID: '2022cv', description: 'CGV Course', 
        content: [{outcomes: ['Out8', 'Out11'], slides:[{duration: 60}, {duration: 19}]}]},

        {courseID: '2022fa', description: 'FLA Course', 
        content: [{outcomes: ['Out110', 'Out200', 'Out200'], slides:[{duration: 12}, {duration: 59}]}, 
        {outcomes: ['Out100', 'Out110', 'Out0'], slides:[{duration: 10}]},
        {outcomes: ['Out77', 'Out51', 'Out61'], slides:[{duration: 110}]}]}, 

        {courseID: '2022sd', description: 'SD Course', 
        content: [{outcomes: [], slides:[{duration: 10}, {duration: 25}]}]}

    ]

    test('GetInfo Test1 - In Dataset', ()=>{
        const courseID = '2022ml';
        const est = {
            description: 'ML Course',
            outcomes: ['Out1', 'Out2', 'Out3', 'Out4', 'Out5', 'Out6'],
            duration: 39
        }
        const getInfo = new GetInfo(data, courseID);
        expect(getInfo.PullData()).toEqual(est);
    })

    test('GetInfo Test2 - In Dataset', ()=>{
        const courseID = '2022cv';
        const est = {
            description: 'CGV Course',
            outcomes: ['Out8', 'Out11'],
            duration: 79
        }
        const getInfo = new GetInfo(data, courseID);
        expect(getInfo.PullData()).toEqual(est);
    })

    test('GetInfo Test3 - In Dataset', ()=>{
        const courseID = '2022fa';
        const est = {
            description: 'FLA Course',
            outcomes: ['Out110', 'Out200', 'Out200', 'Out100', 'Out110', 'Out0', 'Out77', 'Out51', 'Out61'],
            duration: 191
        }
        const getInfo = new GetInfo(data, courseID);
        expect(getInfo.PullData()).toEqual(est);
    })

    test('GetInfo Test4 - In Dataset', ()=>{
        const courseID = '2022sd';
        const est = {
            description: 'SD Course',
            outcomes: [],
            duration: 35
        }
        const getInfo = new GetInfo(data, courseID);
        expect(getInfo.PullData()).toEqual(est);
    })

    test('GetInfo Test5 - Not present in dataset', ()=>{
        const courseID = '2020ml';
        const est = {
            description: '',
            outcomes: [],
            duration: 0
        }
        const getInfo = new GetInfo(data, courseID);
        expect(getInfo.PullData()).toEqual(est);
    })




})