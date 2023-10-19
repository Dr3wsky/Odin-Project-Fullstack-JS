# JavaScript Knights Travails Challenge

A solution to the [Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails) problem as described in the Odin Project's Full Stack JS Develloper Computer Science module.

This repository contains an extra folder labeled, `graphExercise`. In it, I followed the [geeksforgeeks implementation of graphs for javascript](https://www.geeksforgeeks.org/implementation-graph-javascript/) and it helped immensely.

## Features
- `knightsTravails(starts, end)` finds the shortes possible path for the given coordinates.
- `ChessSquare(x,y)` creates an object of the given xy coordinates, with accompanying methods to create and return all possible moves for the given square, with pointers to predecessor squares for graph maniplation by `knightsTravails()`
- The logic contained within`knightsTravails()` creates a queue of all possible moves from the *target* back to theand sets the predecassor map for each moves.
- It then continues, mapping all possible move for each move in the queue, until it encouters a queued move that contasins the origin. 
- A **path** list is then created from the origin to target using the predecessor list of the final move that resulted in the competed path, to print all moves taken (connected nodes).
