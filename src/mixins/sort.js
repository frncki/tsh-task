// based on www.guru99.com/quicksort-in-javascript.html by James Hartman, adapted for tasks needs (there is no need to reinvent the wheel)

const swap = (movies, matchControl, leftIndex, rightIndex) => {
    let tempControl = matchControl[leftIndex];
    matchControl[leftIndex] = matchControl[rightIndex];
    matchControl[rightIndex] = tempControl;

    let tempMovie = movies[leftIndex];
    movies[leftIndex] = movies[rightIndex];
    movies[rightIndex] = tempMovie;
}

const partition = (movies, matchControl, left, right) => {
    let pivot = matchControl[Math.floor((right + left) / 2)].numOfMatches; //middle element
    let i = left; //left pointer
    let j = right; //right pointer
    while (i <= j) {
        while (matchControl[i].numOfMatches > pivot) {
            i++;
        }
        while (matchControl[j].numOfMatches < pivot) {
            j--;
        }
        if (i <= j) {
            swap(movies, matchControl, i, j); //swapping two elements of movies and of matchControl
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = ({ movies, matchControl }, left, right) => {
    let index;
    if (matchControl.length > 1) {
        index = partition(movies, matchControl, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort({ movies, matchControl }, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort({ movies, matchControl }, index, right);
        }
    }
    return {
        movies,
        matchControl
    };
}

export { quickSort };