import AsyncStorage from '@react-native-async-storage/async-storage';

interface argsSet {
  key: string;
  value: string;
}

class asyncStorageInstance {
  getOne(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(result => resolve(result))
        .catch(err => null);
    });
  }

  /**
   *
   * @param {*string} args
   * @return {promise - Array}
   */

  async getMultiple(args: string[]): Promise<Array<string | null>> {
    return await Promise.all([...args.map(v => this.getOne(v))]);
  }

  /**
   *
   * @param {*string}
   * @return {promise - void}
   */

  async setOne(key, val): Promise<void> {
    await AsyncStorage.setItem(key, val);
  }

  /**
   *
   * @param {*object}
   * @object {key - value}
   * @return {promise - void}
   */

  async setMultiple(args: argsSet[]): Promise<void> {
    args.map(v => {
      AsyncStorage.setItem(v.key, v.value);
    });
  }

  async removeOne(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  async removeMultiple(args: string[]): Promise<void> {
    await AsyncStorage.multiRemove(args);
  }

  async clearAll(): Promise<void> {
    await AsyncStorage.clear();
  }
}

export const AsyncStoreHelpers = new asyncStorageInstance();
