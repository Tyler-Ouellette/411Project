# First Test All Failing


> jest --watchAll
 FAIL  Tests/API Tests/Users Tests/LoginUser.test.js
  ● Test suite failed to run

    ReferenceError: fetch is not defined

    > 1 | fetch(post, 'http://localhost:5000/api/auth', config);
        | ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Object.<anonymous> (Tests/API Tests/Users Tests/LoginUser.test.js:1

 PASS  Tests/Sample Tests/Mocks.test.js
 PASS  Tests/Sample Tests/Sample.test.js
 FAIL  Tests/API Tests/Users Tests/RegisterUser.test.js
  ● Test suite failed to run

    ReferenceError: POST is not defined

    > 1 | POST --> "http://localhost:5000/api/users"
        | ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Object.<anonymous> (Tests/API Tests/Users Tests/RegisterUser.test.j

 FAIL  Tests/API Tests/Users Tests/GetAuthUser.test.js
  ● Test suite failed to run

    ReferenceError: fetch is not defined

    > 1 | fetch(get,'http://localhost:5000/api/auth', config);
        | ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Object.<anonymous> (Tests/API Tests/Users Tests/GetAuthUser.test.js

 FAIL  Tests/API Tests/Users Tests/DeleteUser.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\
token, expected ";" (1:15)

    > 1 | DELETE --> http://localhost:5000/api/profile
        |                ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Profile Tests/GetUserById.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\ed token, expected ";" (1:4)

    > 1 | GET http://localhost:5000/api/profile/user/5e693c4a9198b054301d435
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Profile Tests/DeleteExperience.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\xpected token, expected ";" (1:7)

    > 1 | Delete http://localhost:5000/api/profile/experience/5e6cbef5ee541d
        |        ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Profile Tests/GetLoggedInUser.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\pected token, expected ";" (1:4)

    > 1 | GET http://localhost:5000/api/profile/me
        |     ^
      2 | 
      3 | const config = {
      4 | 

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Profile Tests/CreateAndUpdateProfile.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\s: Unexpected token, expected ";" (1:5)

    > 1 | POST http://localhost:5000/api/profile
        |      ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Profile Tests/DeleteEducation.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\pected token, expected ";" (1:7)

    > 1 | DELETE http://localhost:5000/api/profile/education/5e6cc0efee541d6
        |        ^
      2 | 
      3 | 
      4 | const config = {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Profile Tests/AddExperience.test.js
  ● Test suite failed to run

    ReferenceError: PUT is not defined

      1 | 
    > 2 | PUT//localhost:5000/api/profile/experience
        |    ^
      3 | 
      4 | 
      5 | const config = {

      at Object.<anonymous> (Tests/API Tests/Profile Tests/AddExperience.tes

 FAIL  Tests/API Tests/Post Tests/LikePost.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\en, expected ";" (1:4)

    > 1 | PUT http://localhost:5000/api/posts/like/5e6cc50bee541d6eb9a7c0ce
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Profile Tests/AddEducation.test.js
  ● Test suite failed to run

    ReferenceError: PUT is not defined

      1 | //localhost:5000/api/profile/education
    > 2 | PUT
        | ^
      3 | 
      4 | const config = {
      5 |     headers: {

      at Object.<anonymous> (Tests/API Tests/Profile Tests/AddEducation.test

 FAIL  Tests/API Tests/Post Tests/GetPostById.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\
token, expected ";" (1:4)

    > 1 | GET http://localhost:5000/api/posts/5e6cc50bee541d6eb9a7c0ce
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Post Tests/GetAllPosts.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\
token, expected ";" (1:4)

    > 1 | GET http://localhost:5000/api/posts
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Post Tests/DeletePost.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\oken, expected ";" (1:7)

    > 1 | Delete http://localhost:5000/api/posts/5e6cc4ffee541d6eb9a7c0cd
        |        ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Post Tests/DeleteComment.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\d token, expected ";" (1:7)

    > 1 | Delete http://localhost:5000/api/posts/comment/5e6cc50bee541d6eb9a
        |        ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:24
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/locatio
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:14
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/par
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statem
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statem

 FAIL  Tests/API Tests/Post Tests/CommentOnPost.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\411Project\Tests\API Tests\Post Tests\CommentOnPost.test.js: Unexpected token, expected ";" (1:5)
                                                 mment/5e6cc50bee541d6eb9a7c
    > 1 | POST http://localhost:5000/api/posts/comment/5e6cc50bee541d6eb9a7c0ce
        |      ^
      2 |
      3 |
      4 | const config = {                       r/src/parser/location.js:24
                                                 l/parser/src/parser/locatio
      at Parser._raise (node_modules/@babel/parse/src/parser/location.js:220r/src/parser/location.js:241:45)                 arser/src/parser/util.js:14
      at Parser.raiseWithData (node_modules/@baberser/src/parser/util.js:122l/parser/src/parser/location.js:236:17)          dules/@babel/parser/src/par
      at Parser.raise (node_modules/@babel/parseres/@babel/parser/src/parser/src/parser/location.js:220:17)                  el/parser/src/parser/statem
      at Parser.unexpected (node_modules/@babel/p_modules/@babel/parser/src/arser/src/parser/util.js:149:16)                 el/parser/src/parser/statem
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)                                               411Project\Tests\API Tests\
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Post Tests/AddPost.test.js
  ● Test suite failed to run

    SyntaxError: C:\Users\Ouell\Documents\GitHub\411Project\Tests\API Tests\Post Tests\AddPost.test.js: Unexpected token, expected ";" (1:5)

    > 1 | POST http://localhost:5000/api/posts
        |      ^
      2 |
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:241:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:236:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:220:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

Test Suites: 18 failed, 2 passed, 20 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        4.461s, estimated 5s
Ran all test suites.

Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.