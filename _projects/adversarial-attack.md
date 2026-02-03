---
layout: project
title: Adversarial Attack
subtitle: An assignment for an Advanced Artificial Intelligence Module, to desgin and implement an adversarial attack to use against the other students' adversarial defences
tags: [Python, Pytorch, Tensorflow, Adversarial Attack]
year: 2025
overview: >
  An adversarial attack.
  As an academic project for part of my Advanced Artificial Intelligence module, we had to design an adversarial attack that would be used on the Fashion-MNIST dataset and tested against the other student's defences. The limitations listed were the p-distance (L-Infinity / Chebyshev distance) had to be under 0.11 with the idea that humans wouldn't notice any difference between the clean and attacked data but the defence models would incorrectly identify the data.
  The scoring for the attack algorithms was the robust 1 / (accuracy of the defenders models + 1e-10), meaning a theoretical maximum score of 10 billion, although I don't believe it to be possibly within the Chebyshev distance constraint without an alternative approach, such as modifying the weights of the defenders model when applying the attack, as demonstrated in my 6th attack model on my github page.
  My algorithm managed to attain a score of over 15.5 (scoring 100% on the assignment), meaning the average defence accuracy after my attack had been applied was around 6%. The reasoning behind my algorithms success was partly due to combining every algorithm under the sun I could find but also by 'cheating' the system! Since the scores were calculated as the mean average of the defence of the other students, I focused on making my attack incredibly strong against very weak defences, getting one of the test defences to approximately 0.19% accuracy which increased my score more significantly than focusing on making a stronger attack for good defences. This met my primary objective of achieving the highest score instead as the grading was scaled on a normalisation curve for the student's raw scores.
  Since we weren't tasked with making the strongest algorithm, I didn't, I focused on the scoring to ensure that I would win. :)
  
  If you're interested in the adversarial attack algorithm that I used, it is available on my GitHub, but only for academic use or research purposes. This is not to be used against systems without explicit permission to run the test.


  ** These rankings are based on the people I have spoken to and those who were willing to share as the professor didn't and couldn't find out the best scores or the average.
tools:
  - Python
github: Adversarial-Attack
#youtube: 
#screenshot: /assets/images/__________.png
---
