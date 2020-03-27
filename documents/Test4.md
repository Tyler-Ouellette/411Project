PASS  Tests/API Tests/Users Tests/GetAuthUser.test.js
 PASS  Tests/API Tests/Users Tests/LoginUser.test.js
 PASS  Tests/Sample Tests/Mocks.test.js
 PASS  Tests/Sample Tests/Sample.test.js
 PASS  Tests/API Tests/Users Tests/RegisterUser.test.js
 PASS  Tests/API Tests/Users Tests/DeleteUser.test.js
 FAIL  Tests/API Tests/Post Tests/GetPostById.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Post Tests/GetPostById.test.js: Unexpected token, expected ";" (1:4)

    > 1 | GET http://localhost:5000/api/posts/5e6cc50bee541d6eb9a7c0ce
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)                                                                   at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)                                               at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)                                                  at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)                                                         at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Post Tests/DeletePost.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Post Tests/DeletePost.test.js: Unexpected token, expected 
";" (1:7)

    > 1 | Delete http://localhost:5000/api/posts/5e6cc4ffee541d6eb9a7c0cd
        |        ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Post Tests/CommentOnPost.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Post Tests/CommentOnPost.test.js: Unexpected token, expect
ed ";" (1:5)

    > 1 | POST http://localhost:5000/api/posts/comment/5e6cc50bee541d6eb9a7c0ce
        |      ^
      2 | 
      3 | 
      4 | const config = {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Post Tests/AddPost.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Post Tests/AddPost.test.js: Unexpected token, expected ";"
 (1:5)

    > 1 | POST http://localhost:5000/api/posts
        |      ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Post Tests/DeleteComment.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Post Tests/DeleteComment.test.js: Unexpected token, expect
ed ";" (1:7)

    > 1 | Delete http://localhost:5000/api/posts/comment/5e6cc50bee541d6eb9a7c0ce/5e6d1a392a15d1bc33192d72
        |        ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Post Tests/GetAllPosts.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Post Tests/GetAllPosts.test.js: Unexpected token, expected
 ";" (1:4)

    > 1 | GET http://localhost:5000/api/posts
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Post Tests/LikePost.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Post Tests/LikePost.test.js: Unexpected token, expected ";
" (1:4)

    > 1 | PUT http://localhost:5000/api/posts/like/5e6cc50bee541d6eb9a7c0ce
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Profile Tests/DeleteEducation.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Profile Tests/DeleteEducation.test.js: Unexpected token, e
xpected ";" (1:7)

    > 1 | DELETE http://localhost:5000/api/profile/education/5e6cc0efee541d6eb9a7c0c2
        |        ^
      2 | 
      3 | 
      4 | const config = {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Profile Tests/CreateAndUpdateProfile.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Profile Tests/CreateAndUpdateProfile.test.js: Unexpected t
oken, expected ";" (1:5)

    > 1 | POST http://localhost:5000/api/profile
        |      ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Profile Tests/GetLoggedInUser.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Profile Tests/GetLoggedInUser.test.js: Unexpected token, e
xpected ";" (1:4)

    > 1 | GET http://localhost:5000/api/profile/me
        |     ^
      2 | 
      3 | const config = {
      4 | 

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Profile Tests/DeleteExperience.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Profile Tests/DeleteExperience.test.js: Unexpected token, 
expected ";" (1:7)

    > 1 | Delete http://localhost:5000/api/profile/experience/5e6cbef5ee541d6eb9a7c0be
        |        ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Profile Tests/GetUserById.test.js
  ● Test suite failed to run

    SyntaxError: /Users/tylerouellette/Documents/GitHub/411Project/Tests/API Tests/Profile Tests/GetUserById.test.js: Unexpected token, expec
ted ";" (1:4)

    > 1 | GET http://localhost:5000/api/profile/user/5e693c4a9198b054301d435b
        |     ^
      2 | 
      3 | const config = {
      4 |     headers: {

      at Parser._raise (node_modules/@babel/parser/src/parser/location.js:233:45)
      at Parser.raiseWithData (node_modules/@babel/parser/src/parser/location.js:228:17)
      at Parser.raise (node_modules/@babel/parser/src/parser/location.js:212:17)
      at Parser.unexpected (node_modules/@babel/parser/src/parser/util.js:149:16)
      at Parser.semicolon (node_modules/@babel/parser/src/parser/util.js:122:40)
      at Parser.parseExpressionStatement (node_modules/@babel/parser/src/parser/statement.js:787:10)
      at Parser.parseStatementContent (node_modules/@babel/parser/src/parser/statement.js:293:19)
      at Parser.parseStatement (node_modules/@babel/parser/src/parser/statement.js:149:17)
      at Parser.parseBlockOrModuleBlockBody (node_modules/@babel/parser/src/parser/statement.js:862:25)
      at Parser.parseBlockBody (node_modules/@babel/parser/src/parser/statement.js:835:10)

 FAIL  Tests/API Tests/Profile Tests/AddEducation.test.js
  ● Test suite failed to run

    ReferenceError: PUT is not defined

      1 | //localhost:5000/api/profile/education
    > 2 | PUT
        | ^
      3 | 
      4 | const config = {
      5 |     headers: {

      at Object.<anonymous> (Tests/API Tests/Profile Tests/AddEducation.test.js:2:1)

 FAIL  Tests/API Tests/Profile Tests/AddExperience.test.js
  ● Test suite failed to run

    ReferenceError: PUT is not defined

      1 | 
    > 2 | PUT//localhost:5000/api/profile/experience
        |    ^
      3 | 
      4 | 
      5 | const config = {

      at Object.<anonymous> (Tests/API Tests/Profile Tests/AddExperience.test.js:2:4)

Test Suites: 14 failed, 6 passed, 20 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        5.356s
Ran all test suites.

Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
