// Description: Given two arrays [nums1, nums2] and two numbers [m,n], merge them together while keep length of first arrays at m+n

// Expl.: Iterating through array nums1 by length of m+n, if m = 0, then replace nums1 pos with nums2 pos one by one.
// else if nums1idx is higher than nums2

/**
 Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  let counter = 0;
  for (let i = 0; i < m + n; i++) {
    if (m === 0) {
      nums1[i] = nums2[i];
    } else if (
      nums2[0] !== undefined &&
      (nums2[0] < nums1[i] || i - counter >= m)
    ) {
      nums1.splice(i, 0, nums2[0]);
      nums1.pop();
      counter++;
      nums2.shift();
    }
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
