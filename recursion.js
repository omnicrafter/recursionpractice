/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums.pop() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  } else {
    let firstWordLength = words[0].length;
    let restWordsLongest = longest(words.slice(1));
    return Math.max(firstWordLength, restWordsLongest);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) {
    return "";
  }
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 1));
    } else {
      return false;
    }
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  } else if (arr[0] === val) {
    return 0;
  } else {
    let index = findIndex(arr.slice(1), val);
    if (index === -1) {
      return -1;
    } else {
      return index + 1;
    }
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) {
    return "";
  } else {
    return revString(str.slice(1)) + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end);
  } else {
    return binarySearch(arr, val, start, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
