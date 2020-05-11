import * as wasm from './wasm_boids_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

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

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}

function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }
/**
*/
export class BoidOrchestrator {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

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
    * @returns {BoidOrchestrator}
    */
    static new(world_width, world_height, num_boids) {
        _assertNum(world_width);
        _assertNum(world_height);
        _assertNum(num_boids);
        var ret = wasm.boidorchestrator_new(world_width, world_height, num_boids);
        return BoidOrchestrator.__wrap(ret);
    }
    /**
    * @param {number} dt
    */
    tick(dt) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        wasm.boidorchestrator_tick(this.ptr, dt);
    }
    /**
    * @returns {number}
    */
    items() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = wasm.boidorchestrator_items(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    length() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = wasm.boidorchestrator_length(this.ptr);
        return ret >>> 0;
    }
    /**
    */
    add_boid() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        var ptr = this.ptr;
        this.ptr = 0;
        _assertNum(ptr);
        wasm.boidorchestrator_add_boid(ptr);
    }
    /**
    */
    remove_last_boid() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        var ptr = this.ptr;
        this.ptr = 0;
        _assertNum(ptr);
        wasm.boidorchestrator_remove_last_boid(ptr);
    }
}

export const __wbg_atan_cfb227c4a2914629 = typeof Math.atan == 'function' ? Math.atan : notDefined('Math.atan');

export const __wbg_random_39c02e3d0f8a020f = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

