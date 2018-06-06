# Smart Rocket
Smart Rocket is a Javascript demonstration portraying a simple version of computer machine learning. The computer determines the trajectory of reaching a target given a position. This project is handled in canvas.

View the [live demo](http://lifazul.com/smart_rocket/)!

## Goal
Smart rocket is designed to determine the shortest distance from the starting position to the target.


## Setup
The demonstration has three major components: target, barriers, and rockets:

![Setup](https://github.com/tonmoyl/smart_rocket/blob/master/images/readme/barriers_target.png)

### Target
Located at the top of the model, the target explodes once a rocket has reached it.

### Barriers
Position between the starting point of the rockets and the target, the barriers prevent the rockets from reaching the target.

### Rockets
Rockets are shot from the opposite side of the target and has the goal of eventually reaching the target. They bounce from the barriers until a rocket has reached the target. Once the rocket reaches a target, a copy of that rocket trajectory is saved for the next test.

## Implementation

### Rocket Velocity
Each Rocket has a constant velocity. The subrocket velocities are given random directional vectors, which results to a unique path every single cycle.

### Collision Detection
The main focus for this project is the use of collision detection. The rockets need to be aware of its position and have an opposite vector depending on where the rocket collides with either the barrier or boundary.

### Smart Rocket Path
The smart rocket is delineated as the red rocket with the white border. This shows the most efficient trajectory that the computer found so far to reach the target. This efficiency is calculated by the shorted time required in order to reach the target.
