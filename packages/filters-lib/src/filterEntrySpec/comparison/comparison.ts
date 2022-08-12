export type ComparisonOperators =
    |""
    |"="
    |"!"
    |"<"
    |"<="
    |">"
    |">="
    |"==";

export type ComparedValue<T> = { 
    operator: ComparisonOperators, 
    values: Array<T> 
};

export type ComparedValues<T> = Array<ComparedValue<T>>;

export function isOperator(op: string): op is ComparisonOperators {
    if(
        op == "" ||
        op == "=" ||
        op == "!" ||
        op == "<" ||
        op == "<=" ||
        op == ">" ||
        op == ">=" ||
        op == "=="){
        return true;
    }
    return false;
}

export function isComparison<T>(comparison: any): comparison is ComparedValue<T> {
    if(
        comparison?.operator && 
        isOperator(comparison?.operator) && 
        comparison?.values) {
        return true;
    }
    return false;
}

export function isComparisons<T>(comparisons: any[]): comparisons is ComparedValues<T> {
    return comparisons.reduce((isComparisons,comparison)=>{
        return isComparisons && isComparison(comparison);  
    },true);
}
