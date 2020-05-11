/* tslint:disable */
/* eslint-disable */
/**
*/
export class BoidOrchestrator {
  free(): void;
/**
* @param {number} world_width 
* @param {number} world_height 
* @param {number} num_boids 
* @param {number} pcModifier 
* @param {number} avoidanceModifier 
* @param {number} avoidanceRange 
* @param {number} velocityMatchingModifier 
* @returns {BoidOrchestrator} 
*/
  static new(world_width: number, world_height: number, num_boids: number, pcModifier: number, avoidanceModifier: number, avoidanceRange: number, velocityMatchingModifier: number): BoidOrchestrator;
/**
* @param {number} dt 
*/
  tick(dt: number): void;
/**
* @returns {number} 
*/
  items(): number;
/**
* @returns {number} 
*/
  length(): number;
/**
*/
  add_boid(): void;
/**
*/
  remove_last_boid(): void;
}
