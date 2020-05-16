import * as wasm from './wasm_boids_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();
export const memory = wasm.memory; 
let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }
/**
*/
export class BoidOrchestrator {

    static __wrap(ptr) {
        const obj = Object.create(BoidOrchestrator.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_boidorchestrator_free(ptr);
    }
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
    static new(world_width, world_height, num_boids, pcModifier, avoidanceModifier, avoidanceRange, velocityMatchingModifier, borderConstraintModifier) {
        var ret = wasm.boidorchestrator_new(world_width, world_height, num_boids, pcModifier, avoidanceModifier, avoidanceRange, velocityMatchingModifier, borderConstraintModifier);
        return BoidOrchestrator.__wrap(ret);
    }
    /**
    * @param {number} dt
    */
    tick(dt) {
        wasm.boidorchestrator_tick(this.ptr, dt);
    }
    /**
    * @returns {number}
    */
    items() {
        var ret = wasm.boidorchestrator_items(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    length() {
        var ret = wasm.boidorchestrator_length(this.ptr);
        return ret >>> 0;
    }
    /**
    */
    add_boid() {
        wasm.boidorchestrator_add_boid(this.ptr);
    }
    /**
    */
    remove_last_boid() {
        wasm.boidorchestrator_remove_last_boid(this.ptr);
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_velocity_to_percived_center_x(boid_id) {
        var ret = wasm.boidorchestrator_get_velocity_to_percived_center_x(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_velocity_to_percived_center_y(boid_id) {
        var ret = wasm.boidorchestrator_get_velocity_to_percived_center_y(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_avoidance_velocity_x(boid_id) {
        var ret = wasm.boidorchestrator_get_avoidance_velocity_x(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_avoidance_velocity_y(boid_id) {
        var ret = wasm.boidorchestrator_get_avoidance_velocity_y(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_match_percived_velocity_x(boid_id) {
        var ret = wasm.boidorchestrator_get_match_percived_velocity_x(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_match_percived_velocity_y(boid_id) {
        var ret = wasm.boidorchestrator_get_match_percived_velocity_y(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_velocity_mag(boid_id) {
        var ret = wasm.boidorchestrator_get_velocity_mag(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_velocity_direction(boid_id) {
        var ret = wasm.boidorchestrator_get_velocity_direction(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_velocity_x(boid_id) {
        var ret = wasm.boidorchestrator_get_velocity_x(this.ptr, boid_id);
        return ret;
    }
    /**
    * @param {number} boid_id
    * @returns {number}
    */
    get_velocity_y(boid_id) {
        var ret = wasm.boidorchestrator_get_velocity_y(this.ptr, boid_id);
        return ret;
    }
}

export const __wbg_atan2_774cb93627d441a3 = typeof Math.atan2 == 'function' ? Math.atan2 : notDefined('Math.atan2');

export const __wbg_random_39c02e3d0f8a020f = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

