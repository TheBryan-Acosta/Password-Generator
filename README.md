# Password generator - Bryan Acosta De La Cruz
GitHub Link : https://github.com/TheBryan-Acosta/Password-Generator
GitPages Link : https://thebryan-acosta.github.io/Password-Generator/
## Description
Challenge 03  This weeks challenge tasked us to create a password generator purely with javascript.
### What was done
js - I simplified this task by first creating a string "bank", an array containing the possible characters for the password. I created seperate functions to divide the task into more managable pieces, first was to create a function to get the size of the password. Using prompts to get user input, with a while loop to lock the user into choosing a integer greater than 8 but also less than 128, and returning the password size.

next was the generatePassword() function which grabs a boolean user input with 
.confirm for the user to select what they want to include or not include in the final password, but if the user selects none of the prompts, they will be taken back to select atleast one prompt using a if condition that if all prompts are false then they get trapped in a while loop :)

next was the GenChar(a,b,c,d) function, where I created the stringbank array, and simply, if one of the prompts was false, then the function would disintigrate all the index positions that housed that specific character type. With last index being first to delete because of the nature of the splice() taking the index and next however many indexes to delete.

then at the very end, the generated stringbank was used by a for loop, looping by the password size, and adding a new character randomized by putting a randomizing fuction from 0 to the passwordsize in the index of the newly created stringbank to generate a character in the restraints requested by the user.

then I just but the return value of that function as password and stuck it as the passwordText.value and done!

## Images
![PasswordGenerator](Develop\passgen.png?raw=true "passgen")
## Installation
Developed with HTML, CSS, js through Visual Studio Code.

## Usage
create a password with scopes given by the user.

## Credits
University of Texas Coding Bootcamp module 3

## License

MIT License

Copyright (c) [2021] [Bryan Acosta De La Cruz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.