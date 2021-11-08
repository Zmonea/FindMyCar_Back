# FindMyCar_Back
Unit 3 Project: Jimmy Nguyen &amp; Zach Monea

Technologies Used:
------------------
* HTML
* CSS
* Javascript
* Express
* MongoDB
* Mongoose
* React
* Heroku
* GitHub

Approach Taken:
---------------


Issues Along The Way:
---------------------
1. **GitHub** was giving us issues with pushing and pulling. Jimmy used https while Zach used SSH to clone the other person's repo. When we figured that out it was a simple fix of creating a new route that was SSH to match Zach's route and https to match Jimmy's route.
2. **Heroku** gave us a problem when trying to deploy our front end app. Jimmy noticed that after creating the front end app in the terminal and doing a `git remote -v`, there wasn't a Heroku path like there was after creating the back end app on Heroku. We tried to create a path using `git remote add` + heroku link and although we had the path now, it still was throwing errors when we would try to push to heroku. Jimmy also noticed that on the main Heroku page, there wasn't a language declared like there was for the backend app (Node.js). After troubleshooting with another classmate, Jessica Im, she was able to explain to  us that our `.git` file was not on the same level as our `package.json` and that was our issue. After moving our files around and trying to redeploy, it worked! React sometimes creates directories within our directories for the react app and that was what was messing us up. Instead of just creating the app in the `FindMyCar_Front` directory, it created a `FindMyCar` directory inside the `FindMyCar_Front` and created the files there.

Unsolved Problems:
------------------

Future Improvements:
-------------------

Link to my live site:
---------------------
https://findmycar-frontend.herokuapp.com/
