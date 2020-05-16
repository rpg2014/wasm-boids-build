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
* @param {number} borderConstraintModifier 
* @returns {BoidOrchestrator} 
*/
  static new(world_width: number, world_height: number, num_boids: number, pcModifier: number, avoidanceModifier: number, avoidanceRange: number, velocityMatchingModifier: number, borderConstraintModifier: number): BoidOrchestrator;
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
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_velocity_to_percived_center_x(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_velocity_to_percived_center_y(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_avoidance_velocity_x(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_avoidance_velocity_y(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_match_percived_velocity_x(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_match_percived_velocity_y(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_velocity_mag(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_velocity_direction(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_velocity_x(boid_id: number): number;
/**
* @param {number} boid_id 
* @returns {number} 
*/
  get_velocity_y(boid_id: number): number;
}
