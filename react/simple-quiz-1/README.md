# Simple Quiz 1

## Basic implementation

Write a very simple quiz application, that given an array of question objects, displays one question at a time.

When the user submits the answer, the next question shows up, and the feedback for the last question, either “Correct!” or “Incorrect...” is shown.

When there are no more questions, the UI then displays a message like “Quiz complete! X out of Y answers correct.”

Assume the data is going to be passed to the “main” component. You don't need to make fetches to API or anything.

The questions involve two or more options. Display those as radio buttons and keep a running total of how many questions the user has got right.

Format of the questions:

```json
[
  {
    "question": "What is the capital of X?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": "C"
  },
  {
    "question": "What is the best video game?",
    "options": [
      "Tomb Raider",
      "Half Life",
      "Alien Isolation",
      "Super Mario World"
    ],
    "correct": "Supper Mario World"
  },
]
```

## Quiz history

Implement a way for the user to go back and forth in the questions already answered.

## Skip questions and return later

Implement a way to allow users to skip questions and allow them to go back and forth. Don't let them submit the whole quiz until all required questions have been answered.
