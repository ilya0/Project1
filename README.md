## Lords of War (and other cool things)

### Welcome to Lords of War (and other cool things)


## Getting Started

![](https://github.com/ilya0/Project1/blob/master/readme%20files/Main%20setup%20front%20page.png)

Link to [game](http://ilya0.github.io/Project1)

Link to [Trello](https://trello.com/b/0pPnXkD1/project1-pvp)



### Prerequisities
------


Open in Heroku and your good to go




### Installing
------
No installation procedures


## Intro - How do I play this simple, but programmaticaly difficult game?

1. Click on the "disburse cards" button to distribute cards to player hands
2. Player turn indicator is next to the attack button stack
3. Player currently attacking inflicts dammage on the defending player character
4. Player Health is represented with the "H:"
5. Player Hit power which player inflicts on other character
6. Player health is adjust after the attack mode
7. Player characters whose health is 0 will be removed and player will be notified
8. Once all the characters of the player are killed player looses

## Explaination of how Lords of War and (and other cool things) works

1. Initialize repo for characters
2. Initialize global variables

    2.1 Turncounter variable init
    2.2 Turncounter function init
    2.3 Attack char arrays inti
    2.4 p1 and p2 hand arrays init
    2.5 Remove card id init

3. Hide intial card blocks and attack button

4. On Disbursement button click function

    4.1 run disbursment function
        4.1.1 run randomize central repo function
    4.2 Initialize card graphics
    4.3 Append Names of cards from the coresponding array position name
    4.4 Append stats section of the card from corresponding array position health and hit power
    4.5 Append card ID to the corresponding array object
    4.6 Actions 4.1-4.5 repeated for every card object

5. On click card actions are intialized

    5.1 On click functionality initated
        5.1.1 Player attack array cleared (pop'd)
        5.1.2 All exisiting cards in the attackboard appended back to hand, if they exist 
        5.1.3 Push corresponding character from hand array to attack position array
    5.2 Actions are intialized for all cards and all players

6. Attack turn function initialized

    6.1 if the player 1 or 2 attack array states - "p1 attack char undefined" or "reset after attack"alert the player that character needs to be selected for attack
    6.2 Console.logs for debugging
    6.3 Counter  evaluation for player turn
        6.3.1 If p1 turn, player1 attack hit points are subtracted from health of p2 attack character
        6.3.2 Otherwise it is the p2 player turn and p1 attack character health is decresed by the p2attack character hp
        6.3.3 else cover statement

    6.4 Attack turn counter incremented

    6.5 Counter text updated

    6.6 p1 and p2 attack deck appended to hands
    6.6.1 characters stats on card updated
    6.7 Remove char function initated to clear any "dead" characters
    6.8 p1 and p2 attack character arrays are reset to "reset after attack"
    6.9 winEval function itiated to see if any of the arrays = 0

7. Disbursur function initialized

    7.1 Input array is divided up into two output arrays

8. chardisbursmentTurn function is initializd

    8.1 randomizer function is evoked to mix the main repo of characters up
    8.2 disburser function is evoked to put the characters in the p1 and p2 hand arrays

9. Randomizer function init

10. winEval function init

11. removeChar function init

## Built With

* Html
* CSS
* jQuery

## Issues that need to be resolved 
1. Centralize the action cards
2. make a splash screen
3. reformat code

## Authors

* **Ilya Osovets** -- [ilya0](https://github.com/ilya0)

## Acknowledgments

* WDI 
* WDI Class
