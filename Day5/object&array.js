/* =======================
   1. getUserInitials
======================= */
function getUserInitials(user) {
  return (user.firstName[0] + user.lastName[0]).toUpperCase();
}


/* =======================
   2. countProperties
======================= */
function countProperties(obj) {
  return Object.keys(obj).length;
}


/* =======================
   3. invertObject
======================= */
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}


/* =======================
   4. removeFalsyValues
======================= */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}


/* =======================
   5. groupByAge
======================= */
function groupByAge(people) {
  return people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
  }, {});
}


/* =======================
   6. findMostFrequentElement
======================= */
function findMostFrequentElement(arr) {
  const map = {};
  let maxCount = 0;
  let maxElement = null;

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] > maxCount) {
      maxCount = map[num];
      maxElement = num;
    }
  }

  return maxElement;
}


/* =======================
   7. flatten (any depth)
======================= */
function flatten(arr) {
  return arr.flat(Infinity);
}


/* =======================
   8. mergeObjects (deep)
======================= */
function mergeObjects(...objects) {
  const result = {};

  for (let obj of objects) {
    for (let key in obj) {
      if (
        obj[key] &&
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key])
      ) {
        result[key] = mergeObjects(result[key] || {}, obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}


/* =======================
   9. rotateArray
======================= */
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(-k), ...arr.slice(0, n - k)];
}


/* =======================
   10. intersection
======================= */
function intersection(nums1, nums2) {
  const set2 = new Set(nums2);
  return [...new Set(nums1.filter(n => set2.has(n)))];
}


/* =======================
   11. groupAnagrams
======================= */
function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    const key = word.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(word);
  }

  return Object.values(map);
}


/* =======================
   12. moveZerosToEnd (in-place)
======================= */
function moveZerosToEnd(arr) {
  let insertPos = 0;

  for (let num of arr) {
    if (num !== 0) {
      arr[insertPos++] = num;
    }
  }

  while (insertPos < arr.length) {
    arr[insertPos++] = 0;
  }

  return arr;
}


/* =======================
   13. longestConsecutiveSequence
======================= */
function longestConsecutiveSequence(nums) {
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1;n

      while (set.has(current + 1)) {
        current++;
        streak++;
      }

      max = Math.max(max, streak);
    }
  }

  return max;
}


/* =======================
   14. productExceptSelf
======================= */
function productExceptSelf(nums) {
  const result = Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}


/* =======================
   15. deepEqual
======================= */
function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" || 
    typeof b !== "object" || 
    a === null || 
    b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}


/* =======================
   16. Custom Serializer
======================= */

function serializeObject(obj) {
  return JSON.stringify(obj, function (key, value) {

    if (value === undefined) {
      return { __type: "undefined" };
    }

    if (value instanceof Date) {
      return { __type: "Date", value: value.toISOString() };
    }

    if (value instanceof Map) {
      return { __type: "Map", value: [...value.entries()] };
    }

    if (value instanceof Set) {
      return { __type: "Set", value: [...value.values()] };
    }

    return value;
  });
}


function deserializeObject(str) {
  return JSON.parse(str, function (key, value) {

    if (value && value.__type === "undefined") {
      return undefined;
    }

    if (value && value.__type === "Date") {
      return new Date(value.value);
    }

    if (value && value.__type === "Map") {
      return new Map(value.value);
    }

    if (value && value.__type === "Set") {
      return new Set(value.value);
    }

    return value;
  });
}
