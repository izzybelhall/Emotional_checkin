# Emotional Check-in Web Application

This is a web application used for K-12 students to select their emotional state usnig buttons and allows them to document how they are feeling at a given moment. Students are able to select how they feel using buttons that will then direct them to a corresponding page to better serve their needs. 
- If a student selects a positive emotion they will be directed to a page that allows them to document their feelings in a form and view an image of kids also displaying positive emotions(fetched and generated from the Unsplash api).
    - The student is unable to leave any field blank and has a character limit of 70. There is a character count implemented for tracking character usage. 
    - Upon completion of the form and hitting submit, the students answer will be logged in a google sheet for the teacher's viewing. Teachers can view the responses using the link  here: https://docs.google.com/spreadsheets/d/1oh743OIbA1vTn5tdDVk0WPNP9GEuDKmJr1zZ9vQZOMo/edit?usp=sharing. The sheet provides the date, name, and message the student provided.
- If a student selects a negative emotion they will be directed to a page that will ask if they would like to talk about how they feel. 
    - If the student selects yes, an alert will display telling the student the teacher has been notified. (At this time there is no actual notification)
    - If a student selects no, they will be directed towards a page that will give them a random positive quote that has been stored in a json array. 
---
# Capstone Requirements
## Feature 1
Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.

- Using an array I stored motivational quotes that contained 2 objects (author and quote).[_quotes.json_ ] 
- I then displayed a randomly selected quote onto my html page using JS. [_/src/neg_no.js_ and _/html/neg_no.html_] 

## Feature 2
Analyze text and display useful information about it. (e.g. word/character count in an input field)

- There is a 70 character limit on the form textarea input. So users could track their characters I created a character counter to display the number of characters as they are typed out of 70. [_/src/word_count.js_ and _/html/positive_emotions.html_]

## Feature 3
Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

- To calculate and display the days, hours, and minutes in the countdown till summer break I need to: gets today's date, check if the current month is after June or if it's June 20th or later, and set the date for the start of summer break as June 20th of the determined summer year.
- I then set up some variables that can be used to calculate the time difference between today's date and the start of summer break in days, hours, and minutes and display the countdown that will repopulate at each refresh. [_/src/days.js_ and _index.html_]

## Feature 4
Retrieve data from a third-party API and use it to display something within your app.

- I fetched a random image from an API and added a query parameter so the images populated would be positive images of kids. I used this image to fill some blank space and also add to the positive feel of the page . The api can be found at https://unsplash.com/ [_/src/image.js_ and _html/positive_emotions.html_]

## Feature 5
Create a form and store the submitted values using an external API (e.g. a contact form, survey, etc).

- I created a form so users could input what made them feel good today. I needed the information to actually go somewhere so I used the google sheets Apps Scripts API to fetch the form response once it was submitted and then post it to the google sheets.The google sheet can be found linked about and in the repo under pos_response.html [_/src/pos_response.js_ and _/html/positive_emotions.html_]
---
# Installation
1. clone repository 
2. Open index.html using vscode live server or similar extension 
3. Insert api key as the value of the clientId variable (line 1 of /src/image.js) found in the google project turn in comments. 
- You will know api is working when you see an image of kids on the positive_emotions.html page.
(*Project will be updated after due date to include api key as an environmental variable*)
