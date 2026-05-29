

export function findTopKElements(nums: number[], k: number) {
    const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    const freqMap: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        freqMap[nums[i]] = (freqMap[nums[i]] || 0) + 1;
    };


    Object.entries(freqMap).forEach(([num, freq]: [string, number]) => {
        bucket[freq].push(Number(num));
    });

    const result = [];

    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of bucket[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }
}


const nums = [1, 2, 2, 3, 3, 3];
const k = 2;

// console.log(findTopKElements(nums, k));



function createIndexVal(s: string) {
    const result = Array.from({ length: 26 }, (): null | number => null);
    console.log(result);

    for (let i = 0; i < s.length; i++) {
        const indx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        console.log(result[indx]);
        result[indx] = (result[indx] || 0) + 1;
    }
    return result.join('#');
}

console.log(createIndexVal('aabcdeab'));