// data
// let data = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];   // returns true
// let data = ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']; // returns false (too many blocks)
// let data = ['w']; // returns false (too short)
// let data = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];  // returns false (applicant has walked 2 blocks too many north)
// let data = ['n','n','n','n','n','n','s','s','s','s','s','s']        // return false (applicant has walked too many blocks)

let data = ['e', 'e', 'n', 'w', 'w', 'w', 's', 's', 'e', 'n']; // returns true

// 2nd attempt
export const isValidWalk = (walk: any) => {
    let ns = 0;
    let ew = 0;
    if (walk.length != 10) {
        // walk needs to be exactly 10 minutes
        return false;
    } else {
        // we are looking for ns && ew to return 0 so we know the user has returned to the start
        walk.map((dir: string) => {
            dir === 'n' && ns++;
            dir === 's' && ns--;
            dir === 'e' && ew++;
            dir === 'w' && ew--;
        });
        if (ns === 0 && ew === 0) {
            return true;
        } else return false;
    }
};

test('A 10 minute walk around town', () => {
    expect(isValidWalk(data)).toBe(true);
});

// 1st attempt -------------------------------------------------
// export const isValidWalk = (walk: any) => {
// if (walk.length > 10) {
//     console.log('FALSE - This walk will take longer than 10 minutes');
//     return false;
// } else if (walk.length <= 1) {
//     console.log('FALSE - Applicant will not return');
//     return false;
//     else {
//         let n = 0,
//             s = 0,
//             e = 0,
//             w = 0;
//         walk.map((dir: any) => {
//             dir === 'n' && n++;
//             dir === 's' && s++;
//             dir === 'e' && e++;
//             dir === 'w' && w++;
//         });
//         // console.log('n -->', n);
//         // console.log('e -->', e);
//         // console.log('s -->', s);
//         // console.log('w -->', w);
//         return n === s && e === w;
//     }
// };
