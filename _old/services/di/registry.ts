// interface definitions
// ---------------------
// deno-lint-ignore no-explicit-any
interface RegistryInterface<K = any, V = any> {
  items: Map<K, V>;

  get: (name: K) => V | undefined;
  setValue: (name: K, value: V) => void;
}

// implementation (public)
// -----------------------
// deno-lint-ignore no-explicit-any
class Registry<K = any, V = any> implements RegistryInterface<K, V> {
  items: Map<K, V>;

  constructor() {
    this.items = new Map<K, V>();
  }

  get(name: K) {
    return this.items.get(name);
  }

  setValue(name: K, value: V) {
    this.items.set(name, value);
  }
}

const registry = new Registry();

export { Registry, registry, registry as default, type RegistryInterface };
