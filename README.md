# NHS-Vaccine-Eligibility-Checker
Small program to automatically check if you are eligible to book a vaccine appointment using the book.nhs.co.uk website. 

## Pre requisites
1) Node V14.17.0

## Instructions
1. Install node V14.17.0
2. Clone this project onto your computer
3. Run `npm install`
4. Whilst step 3 is still running or once it has finished, Open the data.json file and replace the mock data with your infomration. For your date of birth, enter the data in the following format (example provided):
    * Day: DD
    * Month: MM
    * Year: YYYY
5. Launch the program using the following command: `npm start`

## Disclaimer
I cannot guarantee this to 100% accurate due to the fact that the most vulnerable booked through their GP's instead of the website. Also, due to not having access to all of the scenarios, this program will say you are eligible even if you have already recieved both vaccines. This program also cannot tell you if you've booked your appointment or if you've already had both doses.

I also cannot take any responsibity for any damage this program may cause to your computer or any inaccuracies in the program.

