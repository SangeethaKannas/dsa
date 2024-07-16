### Merge Sort

Using divide and conquer technique

Divide a problem into subproblmes, when the solution to each subproblem is ready, combine results from them to solve the main problem

Similar to quick sort

Divides input array into two halves, calls itself for two halves and merges two sorted halves


### Quick sort
 - comparison sort

 - can sorts items of any type for which a 'less-than' relation ( formally a total order) is defined


 `
 const sort = (array) => {
    if(array.length <= 1>) {
        return array
    }

    let pivot = array[1]
    let left = []
    let right = []

    for(let i=1;i < array.length;i++) {
        array[i] < pivot ?
          left.push(array[1]): right.push(array[1])
    }

    return sort(left).concat(pivot, sort(right))
 }
 `


### Selection Sort

Sorts by repeatedly finding the minimum element ( eg., asc. order ) from unsorted part and putting it at the beginning


### Buggle sort
- simplest 
- repeatedly swaps adjacent elements if they are in wrong order

for(let i =0;i < arr.length;i++>) {
    for(let j=1;arr.length - 1;j++) {
        let(arr[j] < arr[i]>) {
            let temp = arr[j];
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}



### Insertion sort
- simple
- builds final sorting array one at a time

`
for(let i =0;i < arr.length;i++>) {
     for(let j=i- 1;j > -1;j--) {
        if(arr[j+1] < arr[j]>) {
            [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
        }
     }
}
`