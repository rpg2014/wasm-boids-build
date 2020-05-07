## Requirements
* 2d boids with basic rules
  * use pixijs? and in react
  * https://github.com/kittykatattack/learningPixi
  * http://www.vergenet.net/~conrad/boids/pseudocode.html
* add random scatter rule
* add a boid you can control and steer left and right.  extra goal
* use smoothie to interpolate frames and optimize
* Do game tick in webassembly / rust.  Can probably do all 


Will have to send the list of boids to javascript as a list of positions.  see: https://github.com/carlmw/birbs/blob/master/src/lib.rs#L31-L40
push x -> y -> theta
not sure if velocity is needed.  but angle is.  
Then the tick function just modifes the array in place to update the positions. 


# structs
## BoidOrchestrator
* will need list of boids,
* transfer to js array
* probably a count of the boids? 
* world size.  
### transfer to js array
array of length (num boids) * 3.  each set of 3 values is the boids [xpos, ypos, theta]
## Boid
* needs postion and velocity

## position and velocity.  
x, y



# Functions needed

## new universe functions.  
### inputs
* num boids
* optional starting position of boids as array of x,y,theta.  
* world size width and height.  
### functionality
will set up arrays to starting postiion. and initalize the boid orchastrator class with the arrays.  

## tick function. 
