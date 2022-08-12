/**
 * Utility type for creating string subtypes with specific 
 * constraints.
 */
export type Opaque<K, T> = T & { __TYPE__: K };