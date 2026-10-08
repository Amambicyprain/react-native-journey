# Day 001 — Types make wrong code impossible

**Date: 8/10/2026**
**Time spent: 2hrs**
**Energy (1–5):4**

## 1. What I learned (in my own words)
i learned how to properly model data that has optional values based on a certain variant of the data in typescript. I equally leaned that typescript is not javascript with label but typescript let's us describe what the data will be and the compiler makes it imposible to have other states of the data.


## 2. What confused me
The firlter and reduce functions confused me the most. 

## 3. The error that taught me something
```
error TS2339: Property 'reference' does not exist on type 'Transaction'.

```
What it actually meant:

I wrote case SUCCESSFUL: without quotes, so TypeScript looked for a variable called SUCCESSFUL instead of comparing to the text "SUCCESSFUL". Narrowing never happened, so TypeScript still thought tx could be a pending transaction with no reference


## 4. What I'd tell a beginner
To take time to type out the code and not copy and paste. to first learn from reading before video tutorials.

## 5. Question for tomorrow
Does typescript validate data coming from the api as per the model? what if there's a missmatch the app crashes how is this handled in real life
