# fcc-react-calculator
freeCodeCamp Front End Development Libraries Project 4 - Build a Javascript Calculator

## Criteria

Clicking on a number appends its value to the output value and formula value
e.g. Buttons Pressed 8, 6, 1 -> Ouput = 861, Formula = 861

Clicking on an operator sets the output value to the value of the operator clicked
and appends its value to the formula value
e.g. Buttons Pressed 5, + -> Output = +, Formula = 5+

When zero (0) is clicked, the output value and formula value append zero (0) to the end of them.

If any number is clicked when the output value is zero (0), that number replaces the outplut value zero (0).

When the decimal sign (.) is clicked, if there is no number in the output value, the decimal sign (.) is appended to the end of the output value and formula value with the number zero (0) preceding it (e.g. 0.).

When the decimal sign (.) is clicked, if there is already a decimal sign (.) in the output value, the click is ignored and the sign is not appended anywhere.

When two operators are entered consecutively (e.g. +, /) the output value gets replaced with the last operator entered and so does the last operator in the formula value.

Clicking an operator immediately following equals (=) should start a new calculation that operates on the result of the previous evaluation


