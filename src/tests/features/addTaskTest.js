import { Selector } from 'testcafe'; // first import testcafe selectors
 
fixture `Use the task list`// declare the fixture
    .page `http://localhost:3000`;  // specify the start page
 
 
//then create a test and place your code there
test('User can add and remove a task', async t => {
    await t
        .expect(Selector('#task-header').innerText).eql('Tasks')
        
        .expect(Selector('#task-add').count).eql(1)
        .click('#task-add')
        .expect(Selector('#task-0').count).eql(1)

        .click('#task-remove')
        .expect(Selector('#task-0').count).eql(0)
});