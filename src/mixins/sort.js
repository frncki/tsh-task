const swap = (movies, matchControl, leftIndex, rightIndex) => {
    const tempControl = matchControl[leftIndex];
    matchControl[leftIndex] = matchControl[rightIndex];
    matchControl[rightIndex] = tempControl;

    const tempMovie = movies[leftIndex];
    movies[leftIndex] = movies[rightIndex];
    movies[rightIndex] = tempMovie;
};

const partition = (movies, matchControl, left, right) => {
    const pivot = matchControl[Math.floor((right + left) / 2)].numOfMatches; // middle element
    let i = left; // left pointer
    let j = right; // right pointer
    while (i <= j) {
        while (matchControl[i].numOfMatches > pivot) {
            i += 1;
        }
        while (matchControl[j].numOfMatches < pivot) {
            j--;
        }
        if (i <= j) {
            swap(movies, matchControl, i, j); // swapping two elements of movies and of matchControl
            i++;
            j--;
        }
    }
    return i;
};

export const quickSort = ({ movies, matchControl }, left, right) => {
    let index;
    if (matchControl.length > 1) {
        index = partition(movies, matchControl, left, right); // index returned from partition
        if (left < index - 1) { // more elements on the left side of the pivot
            quickSort({ movies, matchControl }, left, index - 1);
        }
        if (index < right) { // more elements on the right side of the pivot
            quickSort({ movies, matchControl }, index, right);
        }
    }
    return {
        movies,
        matchControl,
    };
};
