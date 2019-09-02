import { Selector } from 'testcafe'; // first import testcafe selectors
 
fixture `Use the task list`// declare the fixture
    .page `http://localhost:3000`;  // specify the start page
 
 
//then create a test and place your code there
test('User adds a task', async t => {
    await t
        .expect(Selector('#task-header').innerText).eql('Tasks');
});