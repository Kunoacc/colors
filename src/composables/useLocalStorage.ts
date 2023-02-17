import { ref, watchEffect, computed } from "vue";

const useLocalStorage = (
  key: string,
  initialValue?: object,
  sessionOnly: boolean = false
) => {
  const storage = sessionOnly ? sessionStorage : localStorage;
  const getStorageValue = computed(() => () => {
    try {
      const storageItem = storage.getItem(key);
      return JSON.parse(storageItem!) ?? initialValue;
    } catch (error) {
      storage.removeItem(key);
      return initialValue;
    }
  });

  const storageValue = ref(getStorageValue.value());

  const setStorageValue = (newValue: any) => {
    if (typeof newValue === "function") newValue = newValue(storageValue);
    storage.setItem(key, JSON.stringify(newValue));
    storageValue.value = newValue;
  };

  watchEffect((cleanup) => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) storageValue.value = getStorageValue.value();
    };

    window.addEventListener("storage", handleStorage);

    cleanup(() => {
      window.removeEventListener("storage", handleStorage);
    });
  });

  return [storageValue, setStorageValue];
};

export default useLocalStorage;
