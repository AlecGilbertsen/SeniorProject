# SeniorProject-VBL-S-MTS
This project is the code required to allow admins for the verbal behavior lab to run their tests based on successive matching of stimuli
to achieve this we have two paths an admin path that contains editing stimuli, and getting test data, and then the participant path that will
allow them to take said tests, these test have toggleable instructions ability to be left and continue at the end of blocks

# Getting Started
For this project to edit the code you need any simple code editor, any of the dependancies are held within the project itself because they were
made in house to support the project so you shouldn't need anything other than an editor that can edit html, javascript, and php

next you will need some hosting platform that can hold public_html this holds the entirety of the website, we used bluehost as it had support for
our mysql database built in but any hosting platform should suffice, you could also use something like XAMPP if you want to host it locally
this will come with myPHP admin which we used a lot to help with our database so your edxperience will be similar to ours.

next you will need a mysql database with 4 tables, those tables are SMSP_User, SMSP_Phase, SMSP_Block, soundAndImage_t
there structure is in pictures below, lastly you will need to update all the php to have the correct database information
for your mysql database. After this your version of VBL-S-MTS.com and be able to edit it and add files to public_html as 
you see fit

# SMSP_User
<img width="568" alt="SMSP_User" src="https://github.com/AlecGilbertsen/SeniorProject/assets/124405268/2b4ca0a0-cf58-480e-875c-9395760757c7">

# SMSP_Phase
<img width="589" alt="SMSP_Phase" src="https://github.com/AlecGilbertsen/SeniorProject/assets/124405268/e076ab00-f37f-4c00-bfbb-850493cae3da">

# SMSP_Block
<img width="669" alt="SMSP_Block" src="https://github.com/AlecGilbertsen/SeniorProject/assets/124405268/cae4dfa1-ba50-458c-abde-c92072223b02">

# soundAndImage_t
<img width="606" alt="soundAndImage_t" src="https://github.com/AlecGilbertsen/SeniorProject/assets/124405268/f2e18cc8-2e01-4cc9-ae97-48df9f8a2fa3">



