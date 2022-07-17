// AVERAGE 

// TIME COMPLEXITY : O(Log(n))
// SPACE COMPLEXITY : O(Log(n))

// WORST CASE 

// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(n)


function findClosestValueInBst (tree, target) {
    let closestValue = Infinity;
    return findClosestValueInBstHelper(tree, target, closestValue);
    // return findClosestValueInBstHelperIteration( tree, target, closestValue )
}

function findClosestValueInBstHelper( tree, target, closestValue ) {
    if (!tree) return closestValue;
    if (( target - closestValue ) > ( target - tree.value ) ){
        closestValue = tree.value;
    }
    if ( target > tree.value ) {
        return findClosestValueInBstHelper( tree.left, target, closestValue );
    } 
    else if ( target < tree.value ){
        return findClosestValueInBstHelper( tree.right, target, closestValue );
    }
    else {
        return closestValue;
    }
}

// ITERATIVE IMPLEMENTAION

// AVERAGE 

// TIME COMPLEXITY : O(Log(n))
// SPACE COMPLEXITY : O(1))

// WORST CASE 

// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY : O(1)


function findClosestValueInBstHelperIteration ( tree, target, closestValue ) {
    let currentNode = tree;
    while (currentNode != null ) {
        if(( target - closestValue ) > (target - currentNode.value)) {
            closestValue = currentNode.value;
        } 
        if ( target > currentNode.value ) {
            currentNode = currentNode.left;
        } 
        else if ( target < currentNode.value ) {
            currentNode = currentNode.right;
        }
        else break;
    }

}


