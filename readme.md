# Random Password Generator

## Description

The Random Password Generator generates a new random password everytime a user presses a Generate Password button. This program is very simple and unsophiticated where all the user inputs are collected through 'Confirm' and 'Prompt' boxes when the user clicks 'Generate Password' button. It uses **HTML**, **CSS** and **JavaScript** only. This program was created as a part of assignment while doing a coding bootcamp at Sydney University, NSW as to have my HTML, CSS, JavaScript skill assessed.

![image](./assets/image/screenshot-PW-generator.png)

All the code written in the program is mine, however, the 'normalize.css' is from the following source:  

 http://meyerweb.com/eric/tools/css/reset/

 v2.0 | 20110126

 License: none (public domain)
 
## How to use

Copy the repository in your local machine. Then simply open the 'index.html' page. It opens a very simple form with a button in itgit  to generate password and a textarea to display the generated password. The user input is disabled for the textarea.

Firstly, when the button is pressed, the program will ask for the desired number of characters for a new random password. The criteria for the length of password is 8 characters minimum and 128 characters maximum. It informs this criteria to the user through those prompt/confirm boxes when asking for the user input. The user input for the length of the password is validated against several criteria. 
* If the input is not a number
* a whole number or not
* less that 8 
* greater that 128
* empty value

 ![image](./assets/image/prompt-box.png) 


If the value entered does not match the criteria, it will ask for the value again through those prompt/confirm dialog boxes. However, if the user presses the "Cancel" button this time, the whole program will simply terminate without any notice. Whenever the user wants to generate a password again, the user has to just press 'Generate Password' button again. 

Whether to include or not the lowercase characters, uppercase characters, numbers and special characters, the user is asked for the input through the 'Confirm' dialog boxes. Pressing 'Ok' means to include the type, whereas pressing 'Cancel' means to not include the type.

![image](./assets/image/confirm-box.png)


When all the user correct inputs are collected, the program displays the randomly generated password in a textarea inside the form. 

If you wish to make this program more user friendly and sophisticated, the user inputs could be collected through other more appropriate html elements, such as range slider for password length, checkboxes for character types etc in the form.

For the sake of learning, the list of uppercase, lowercase alphabets, numbers and special characters are each populated/created through different methods such as Array spread, from etc. The Array spread method would have been suffice, otherwise.



## Screenshot

Screenshot showing a password including all charcters
* * *

![image](./assets/image/screenshot1.png)


Screenshot showing a password with lower and uppercase characters that is 50 characters long
* * *

![image](./assets/image/screenshot2.png)


## Link to deployed application    

[Link to Random Password Generator](https://simplesuyash.github.io/password-generator/)
